/**
 * 2_match.ts — step 2 of the sales margin pipeline: link, then report.
 *
 * Links every catalogue sale (saleReport: gross hammer price, auction date) to
 * the ledger unit it was — a sold watch, with its net payout and the costs
 * attributed to it by _ledger.ts. There is no shared key: the ledger has no lot
 * ids and its dates are approximate. So each pair is scored on three signals:
 *
 *   price  does the payout fit the hammer under Catawiki's fee arithmetic, to
 *          the cent? (see catawikiFit in _shared.ts)  — weight 0.45
 *   text   do the ledger's words name this model? rare words count more, and a
 *          shared reference or calibre number ("516", "CK1111") counts most  — 0.40
 *   date   was it paid out 3–35 days after the auction? Only for rows whose date
 *          is a payout date, not a purchase date or a dragged placeholder  — 0.15
 *
 * plus a bonus when the ledger's own summary table ties the unit to this very
 * hammer price, and a penalty when the ledger names another brand.
 *
 * A pair is accepted automatically only when each side is the other's clear
 * best choice. Hungarian assignment is deliberately not used: it would settle a
 * tie silently, and ties are exactly what a person (or Claude) should look at.
 * Everything else goes to the review queue, `adjudicate.json`, with its top
 * candidates and their full ledger rows.
 *
 * Decisions in overrides.json (by the review panel or by Claude) are applied
 * first. They key on row fingerprints, not row numbers, so the workbook can be
 * edited freely; an override whose row has gone is reported, loudly, and its
 * sale falls back to automatic matching.
 *
 * This is the checkpoint: it writes matches.json, adjudicate.json and
 * match-report.md into .sales/ and touches nothing else.
 *
 * Usage:
 *   npx tsx scripts/sales/2_match.ts
 */

import type {
  LedgerUnitSummary,
  MatchCandidate,
  MatchesFile,
  MatchOverride,
  MatchStatus,
  ModelMatch,
} from "../../src/app/admin/sales-report/salesData.types";
import { loadCatalogue, type CatalogueSale } from "./_catalogue";
import {
  costLines,
  interpretLedger,
  itemTokens,
  linkHints,
  type Interpretation,
  type Unit,
} from "./_ledger";
import {
  ADJUDICATE_JSON,
  catawikiFit,
  daysBetween,
  directFit,
  findToken,
  hasToken,
  isReferenceToken,
  LEDGER_JSON,
  loadOverrides,
  MATCH_REPORT,
  MATCHES_JSON,
  parseIso,
  readJson,
  requireFile,
  round2,
  writeFileAtomic,
  writeJsonAtomic,
} from "./_shared";
import type { LedgerDump } from "./types";

// ─── Tuning ─────────────────────────────────────────────────────────────────

const W_PRICE = 0.45;
const W_TEXT = 0.4;
const W_DATE = 0.15;
/** The ledger's summary table ties this unit to this exact hammer price. */
const BONUS_LEDGER = 0.35;
/** A summary row without a hammer, whose name fits the model. */
const BONUS_NAME = 0.2;
const BRAND_PENALTY = 0.5;

const ACCEPT_SCORE = 0.7;
const ACCEPT_MARGIN = 0.12;
const REVIEW_FLOOR = 0.35;
const CANDIDATES_KEPT = 5;

// ─── Scoring ────────────────────────────────────────────────────────────────

interface Scored extends MatchCandidate {
  model: CatalogueSale;
  u: Unit;
  bonus: number;
  /** Score without the summary-table bonus, for the answer-key check. */
  plain: number;
}

type Idf = (tok: string) => number;

function buildIdf(sales: CatalogueSale[]): { idf: Idf; known: Set<string> } {
  const df = new Map<string, number>();
  for (const s of sales) for (const t of new Set(s.tokens)) df.set(t, (df.get(t) ?? 0) + 1);
  const n = sales.length;
  // Words the catalogue never uses (places, people, typos) still dilute a ledger
  // description, but only a little.
  const idf: Idf = (t) => (df.has(t) ? Math.log(1 + n / df.get(t)!) : 0.5);
  return { idf, known: new Set(df.keys()) };
}

function priceScore(model: CatalogueSale, u: Unit): { p: number; note: string } {
  if (u.hammerMentions.includes(model.price)) {
    return { p: 1, note: `hammer ${model.price} written in the ledger` };
  }
  const fee = catawikiFit(u.received, model.price);
  if (u.direct || !model.lotId) {
    const direct = directFit(u.received, model.price);
    if (direct.p > fee.p) return direct;
  }
  return fee;
}

function dateScore(model: CatalogueSale, u: Unit): { d: number; note: string } {
  if (u.dateKind !== "payout" || !model.date) {
    return {
      d: 0.5,
      note: u.dateKind === "none" ? "no date" : `ledger date is a ${u.dateKind} date`,
    };
  }
  const paid = parseIso(u.payoutDate)!;
  const lag = daysBetween(model.date, paid);
  let d: number;
  if (lag < -15 || lag > 150) d = 0;
  else if (lag < 0) d = 0.4;
  else if (lag < 3) d = 0.8;
  else if (lag <= 35) d = 1;
  else if (lag <= 60) d = 1 - (0.4 * (lag - 35)) / 25;
  else d = 0.6 - (0.5 * (lag - 60)) / 90;
  return { d, note: `paid ${lag} days after the auction` };
}

/** Matched rarity at which the words alone are enough evidence: about two rare words. */
const TEXT_ENOUGH = 5;

function textScore(model: CatalogueSale, u: Unit, idf: Idf): { t: number; note: string } {
  const unitTokens = [...new Set(u.tokens)];
  if (!unitTokens.length) return { t: 0, note: "ledger names nothing" };
  let total = 0;
  let hit = 0;
  const matched: string[] = [];
  let reference = false;
  for (const tok of unitTokens) {
    // A word matched through a typo weighs what the catalogue's spelling weighs:
    // the ledger's "Barrete" is as rare as the catalogue's "Barrett".
    const found = findToken(model.tokens, tok);
    const w = idf(found ?? tok);
    total += w;
    if (found) {
      hit += w;
      matched.push(tok);
      if (isReferenceToken(tok)) reference = true;
    }
  }
  // How much of the ledger's description this model explains, scaled down when
  // what matched is thin: "Vinted Chronograph" explains itself fully with one
  // common word, which says little about which chronograph.
  const coverage = total ? hit / total : 0;
  const strength = Math.min(1, hit / TEXT_ENOUGH);
  const t = Math.max(coverage * strength, reference ? 0.85 : 0);
  return { t, note: matched.length ? `words: ${matched.join(", ")}` : "no shared words" };
}

function score(model: CatalogueSale, u: Unit, idf: Idf, brandTokens: Set<string>): Scored {
  const price = priceScore(model, u);
  const date = dateScore(model, u);
  const text = textScore(model, u, idf);
  const evidence = [price.note, text.note, date.note];

  // The ledger names a brand, and not this one.
  const named = u.tokens.filter((t) => brandTokens.has(t));
  const penalty =
    named.length && !model.brandTokens.some((b) => named.includes(b)) ? BRAND_PENALTY : 0;
  if (penalty) evidence.push(`ledger names another brand (${named.join(", ")})`);

  // The ledger's summary row vouches for this pair only if its name fits the
  // model too: €550 and €650 are common hammers, and a row about an Omega must
  // not lift a Fortis that happens to share its price.
  let bonus = 0;
  for (const h of u.hints) {
    if (!hintFits(h.name, model)) continue;
    if (h.hammer !== null && Math.abs(h.hammer - model.price) < 0.5) {
      bonus = BONUS_LEDGER;
      evidence.push(`summary ${h.sheet}!O${h.row} "${h.name}": hammer ${h.hammer}`);
      break;
    }
    if (h.hammer === null) bonus = Math.max(bonus, BONUS_NAME);
  }

  const plain = W_PRICE * price.p + W_TEXT * text.t + W_DATE * date.d - penalty;
  return {
    unit: u.key,
    model,
    u,
    p: round2(price.p),
    d: round2(date.d),
    t: round2(text.t),
    bonus,
    plain: round2(plain),
    score: round2(plain + bonus),
    evidence,
  };
}

/** Set once the catalogue is loaded; hintFits weighs words by how rare they are. */
let IDF: Idf = () => 1;

/**
 * A summary row's name fits a model when most of its weight (by rarity) is in
 * the model, including at least one word beyond the brand — "Amer Campos
 * Black" must not fit a Tissot through "black", nor "Tissot Automatic Bumper" a
 * Tissot Visodate through "tissot automatic".
 */
function hintFits(name: string, model: CatalogueSale): boolean {
  const words = [...new Set(itemTokens(name))];
  if (!words.length) return false;
  const hit = words.filter((w) => hasToken(model.tokens, w));
  if (!hit.some((w) => !model.brandTokens.includes(w))) return false;
  const weight = (ws: string[]) => ws.reduce((s, w) => s + IDF(w), 0);
  return weight(hit) / weight(words) >= 0.6;
}

/** A summary row pointing into the unit, naming this model, with a hammer equal to its price. */
function isLedgerLink(s: Scored): boolean {
  return s.u.hints.some(
    (h) =>
      h.refs.length > 0 &&
      h.hammer !== null &&
      Math.abs(h.hammer - s.model.price) < 0.5 &&
      hintFits(h.name, s.model),
  );
}

// ─── Assignment ─────────────────────────────────────────────────────────────

interface Decision {
  status: MatchStatus;
  unit: Unit | null;
  score: number | null;
  evidence: string[];
  reason?: string;
  share?: number;
  /** Set when the decision came from overrides.json. */
  by?: "user" | "claude";
}

/**
 * Resolve an override's unit key. A key that no longer matches exactly is tried
 * again on the same tab and amount, since editing a row's text changes its key.
 */
function resolveUnit(key: string, interp: Interpretation): { unit: Unit | null; rekeyed: boolean } {
  const exact = interp.unitByKey.get(key);
  if (exact) return { unit: exact, rekeyed: false };
  const [sheet, , received, spent] = key.replace(/#\d+$/, "").split("|");
  const same = interp.units.filter(
    (u) =>
      u.block.sheet === sheet &&
      u.saleRow.received?.toFixed(2) === received &&
      (u.saleRow.spent === null ? "" : u.saleRow.spent.toFixed(2)) === spent,
  );
  return same.length === 1 ? { unit: same[0], rekeyed: true } : { unit: null, rekeyed: false };
}

function assign(
  sales: CatalogueSale[],
  interp: Interpretation,
  pairs: Map<string, Scored[]>,
  overrides: Record<string, MatchOverride>,
) {
  const decided = new Map<string, Decision>();
  const taken = new Map<Unit, string[]>();
  const stale: { modelFile: string; unit: string }[] = [];
  const claim = (modelFile: string, unit: Unit, d: Decision) => {
    decided.set(modelFile, d);
    taken.set(unit, [...(taken.get(unit) ?? []), modelFile]);
  };

  // 1. Overrides — the user's first, so a Claude decision can never take a unit
  //    the user has already given to another sale.
  const byWho = (who: "user" | "claude") =>
    Object.entries(overrides).filter(([, o]) => o.by === who);
  for (const [modelFile, o] of [...byWho("user"), ...byWho("claude")]) {
    if (!sales.some((s) => s.modelFile === modelFile)) continue;
    if (o.unit === null) {
      decided.set(modelFile, {
        status: "no-ledger",
        unit: null,
        score: null,
        evidence: [],
        reason: o.reason,
        by: o.by,
      });
      continue;
    }
    const { unit, rekeyed } = resolveUnit(o.unit, interp);
    if (!unit) {
      stale.push({ modelFile, unit: o.unit });
      continue;
    }
    const holders = taken.get(unit) ?? [];
    if (o.by === "claude" && holders.some((m) => decided.get(m)?.status === "user")) continue;
    const s = pairs.get(modelFile)?.find((x) => x.u === unit);
    claim(modelFile, unit, {
      status: o.by,
      unit,
      score: s?.score ?? null,
      evidence: [
        ...(s?.evidence ?? []),
        ...(rekeyed ? ["override re-keyed: the ledger row's text changed"] : []),
      ],
      reason: o.reason,
      share: o.share,
      by: o.by,
    });
  }

  const open = (m: CatalogueSale) => !decided.has(m.modelFile);
  const free = (u: Unit) => !taken.has(u);

  // Sales listed together in one catalogue lot (same lot, price and date) are
  // one sale: they must not compete with each other for the payout.
  const bundles = new Map<string, CatalogueSale[]>();
  for (const s of sales) {
    if (!s.lotId) continue;
    const k = `${s.lotId}|${s.price}|${s.dateText}`;
    bundles.set(k, [...(bundles.get(k) ?? []), s]);
  }
  const bundleOf = new Map<CatalogueSale, string>();
  for (const [k, group] of bundles) if (group.length > 1) group.forEach((s) => bundleOf.set(s, k));
  const rivalsOf = (m: CatalogueSale, list: Scored[]) =>
    list.filter(
      (s) => s.model === m || !bundleOf.has(m) || bundleOf.get(s.model) !== bundleOf.get(m),
    );

  // 2. The ledger's own links: a summary row pointing into the unit with this
  //    exact hammer, when no other open sale shares that link.
  for (const m of sales.filter(open)) {
    const links = (pairs.get(m.modelFile) ?? []).filter(
      (s) => free(s.u) && isLedgerLink(s) && s.t > 0,
    );
    if (links.length !== 1) continue;
    const s = links[0];
    const rivals = sales.filter(
      (o) =>
        o !== m &&
        open(o) &&
        (pairs.get(o.modelFile) ?? []).some((x) => x.u === s.u && isLedgerLink(x) && x.t >= s.t),
    );
    if (!rivals.length)
      claim(m.modelFile, s.u, {
        status: "ledger-link",
        unit: s.u,
        score: s.score,
        evidence: s.evidence,
      });
  }

  // 3. Mutual best by a clear margin, repeated until nothing changes: each
  //    acceptance takes a unit off the table and can clear the way for another.
  for (let changed = true; changed; ) {
    changed = false;
    const bestFor = new Map<Unit, Scored[]>();
    for (const m of sales.filter(open)) {
      for (const s of pairs.get(m.modelFile) ?? []) {
        if (!free(s.u)) continue;
        bestFor.set(s.u, [...(bestFor.get(s.u) ?? []), s]);
      }
    }
    for (const m of sales.filter(open)) {
      const mine = (pairs.get(m.modelFile) ?? []).filter((s) => free(s.u));
      const [best, second] = mine;
      if (!best || best.score < ACCEPT_SCORE) continue;
      if (best.p < 0.8 && best.t < 0.75) continue;
      if (second && best.score - second.score < ACCEPT_MARGIN) continue;
      const theirs = rivalsOf(m, bestFor.get(best.u) ?? []).sort((a, b) => b.score - a.score);
      if (theirs[0]?.model !== m) continue;
      if (theirs[1] && best.score - theirs[1].score < ACCEPT_MARGIN) continue;
      claim(m.modelFile, best.u, {
        status: "high",
        unit: best.u,
        score: best.score,
        evidence: best.evidence,
      });
      changed = true;
    }
  }

  // 4. The rest of a bundle shares whatever unit one of its sales got.
  for (const group of bundles.values()) {
    if (group.length < 2) continue;
    const got = group.map((s) => decided.get(s.modelFile)).find((d) => d?.unit);
    if (!got?.unit) continue;
    for (const s of group) {
      if (!decided.has(s.modelFile)) {
        claim(s.modelFile, got.unit, {
          ...got,
          evidence: [...got.evidence, "sold in the same catalogue lot"],
        });
      }
    }
  }

  return { decided, taken, stale };
}

// ─── Output ─────────────────────────────────────────────────────────────────

function summarize(u: Unit): LedgerUnitSummary {
  return {
    key: u.key,
    sheet: u.block.sheet,
    blockRef: `${u.block.sheet}!${u.block.firstRow}:${u.block.lastRow}`,
    saleRow: u.saleRow.row,
    label: u.label,
    blockKind: u.blockKind,
    lotSize: u.lotSize,
    received: u.received,
    refunds: u.refunds,
    cost: u.cost,
    profit: u.profit,
    payoutDate: u.payoutDate,
    dateKind: u.dateKind,
    purchaseDate: u.purchaseDate,
    costLines: costLines(u),
    flags: u.flags,
    hints: u.hints.map((h) => ({
      ref: `${h.sheet}!O${h.row}`,
      name: h.name,
      hammer: h.hammer,
      received: h.received,
      gain: h.gain,
    })),
  };
}

const blockRows = (u: Unit): string[] =>
  u.block.rows.map((r) =>
    [
      `r${r.row}`,
      r.text || "·",
      r.received !== null ? `E ${r.received}` : "",
      r.spent !== null ? `F ${r.spent}` : "",
      r.date ?? "",
      r.note ? `(${r.note})` : "",
    ]
      .filter(Boolean)
      .join(" | "),
  );

function main() {
  requireFile(LEDGER_JSON, "Run `python scripts/sales/1_parse_ledger.py` first.");
  const dump = readJson<LedgerDump>(LEDGER_JSON);
  const overrides = loadOverrides();
  const interp = interpretLedger(dump, overrides);
  linkHints(interp, dump.hints);
  const { sales, brandTokens } = loadCatalogue();
  const { idf } = buildIdf(sales);
  IDF = idf;

  // Every pair worth remembering, best first per sale.
  const pairs = new Map<string, Scored[]>();
  for (const m of sales) {
    const scored = interp.units
      .map((u) => score(m, u, idf, brandTokens))
      .filter((s) => s.score >= 0.2 || s.p >= 0.8)
      .sort((a, b) => b.score - a.score);
    pairs.set(m.modelFile, scored);
  }

  const { decided, taken, stale } = assign(sales, interp, pairs, overrides.matches);

  // Shares: an explicit override share wins; otherwise sales on one unit split it evenly.
  const shareOf = (modelFile: string, unit: Unit) => {
    const holders = taken.get(unit) ?? [modelFile];
    return decided.get(modelFile)?.share ?? round2(1 / holders.length);
  };

  const byModel: Record<string, ModelMatch> = {};
  const staleSet = new Set(stale.map((s) => s.modelFile));
  for (const m of sales) {
    const d = decided.get(m.modelFile);
    const all = pairs.get(m.modelFile) ?? [];
    const candidates = all
      .slice(0, CANDIDATES_KEPT)
      .map(({ unit, score, p, d: dd, t, evidence }) => ({
        unit,
        score,
        p,
        d: dd,
        t,
        evidence,
      }));
    const best = all.find((s) => !taken.has(s.u));
    const status: MatchStatus = d
      ? d.status
      : staleSet.has(m.modelFile)
        ? "stale-override"
        : best && best.score >= REVIEW_FLOOR
          ? "ambiguous"
          : "unmatched";
    byModel[m.modelFile] = {
      modelFile: m.modelFile,
      legend: m.legend,
      brand: m.brand,
      gross: m.price,
      date: m.dateText,
      url: m.url,
      status,
      unit: d?.unit?.key ?? null,
      share: d?.unit ? shareOf(m.modelFile, d.unit) : 0,
      score: d?.score ?? null,
      evidence: d?.evidence ?? [],
      reason: d?.reason,
      by: d?.by,
      candidates,
    };
  }

  const units: Record<string, LedgerUnitSummary> = {};
  for (const u of interp.units) units[u.key] = summarize(u);
  const unclaimed = interp.units.filter((u) => !taken.has(u)).map((u) => u.key);

  const out: MatchesFile = {
    version: 1,
    generatedAt: new Date().toISOString(),
    ledgerSha256: dump.source.sha256,
    units,
    byModel,
    unclaimed,
    staleOverrides: stale,
  };
  writeJsonAtomic(MATCHES_JSON, out);

  // The review queue, self-contained: everything needed to decide, per sale.
  const queue = sales
    .filter((m) =>
      ["ambiguous", "unmatched", "stale-override"].includes(byModel[m.modelFile].status),
    )
    .map((m) => ({
      modelFile: m.modelFile,
      legend: m.legend,
      title: m.title,
      reference: m.reference,
      movement: m.movement,
      brand: m.brand,
      gross: m.price,
      date: m.dateText,
      url: m.url,
      status: byModel[m.modelFile].status,
      candidates: (pairs.get(m.modelFile) ?? [])
        .filter((s) => !taken.has(s.u))
        .slice(0, CANDIDATES_KEPT)
        .map((s) => ({
          unit: s.u.key,
          label: s.u.label,
          received: s.u.received,
          profit: s.u.profit,
          payoutDate: s.u.payoutDate,
          dateKind: s.u.dateKind,
          score: s.score,
          p: s.p,
          d: s.d,
          t: s.t,
          evidence: s.evidence,
          hints: s.u.hints.map(
            (h) => `${h.name} (hammer ${h.hammer ?? "?"}, received ${h.received})`,
          ),
          rows: blockRows(s.u),
        })),
    }));
  writeJsonAtomic(ADJUDICATE_JSON, queue);

  writeReport(sales, byModel, interp, unclaimed, stale, dump, pairs);

  // ── Console summary.
  const count = (st: MatchStatus) => Object.values(byModel).filter((m) => m.status === st).length;
  const accepted = count("user") + count("claude") + count("ledger-link") + count("high");
  const key = answerKey(sales, pairs);
  const pad = (s: string) => s.padEnd(26);
  console.log("=".repeat(60));
  console.log(`${pad("Catalogue sales:")}${sales.length}`);
  console.log(
    `${pad("Ledger sold watches:")}${interp.units.length}  (${unclaimed.length} unclaimed)`,
  );
  console.log(
    `${pad("Accepted:")}${accepted}  (user ${count("user")} · claude ${count("claude")} · ledger-link ${count("ledger-link")} · auto ${count("high")})`,
  );
  console.log(
    `${pad("Needs review:")}${count("ambiguous") + count("unmatched") + count("stale-override")}  (ambiguous ${count("ambiguous")} · unmatched ${count("unmatched")} · stale ${count("stale-override")})`,
  );
  console.log(`${pad("Confirmed no ledger entry:")}${count("no-ledger")}`);
  console.log(
    `${pad("Answer key (bonus off):")}${key.correct}/${key.total} summary-table links ranked first`,
  );
  console.log(`${pad("Written:")}.sales/matches.json, adjudicate.json, match-report.md`);
  console.log("=".repeat(60));
  if (stale.length)
    console.warn(
      `\n${stale.length} override(s) point at ledger rows that no longer exist — see the report.`,
    );
  console.log("Next: npx tsx scripts/sales/3_build.ts");
}

/**
 * The summary tables' formula links are ground truth. With their bonus switched
 * off, how often does the plain score rank the linked unit first?
 */
function answerKey(sales: CatalogueSale[], pairs: Map<string, Scored[]>) {
  let total = 0;
  let correct = 0;
  const misses: string[] = [];
  for (const m of sales) {
    const all = pairs.get(m.modelFile) ?? [];
    const truth = all.filter(isLedgerLink);
    if (truth.length !== 1) continue;
    total++;
    const top = [...all].sort((a, b) => b.plain - a.plain)[0];
    if (top?.u === truth[0].u) correct++;
    else
      misses.push(
        `${m.legend}: linked ${truth[0].u.label}, ranked ${top?.u.label ?? "nothing"} first`,
      );
  }
  return { total, correct, misses };
}

function writeReport(
  sales: CatalogueSale[],
  byModel: Record<string, ModelMatch>,
  interp: Interpretation,
  unclaimed: string[],
  stale: { modelFile: string; unit: string }[],
  dump: LedgerDump,
  pairs: Map<string, Scored[]>,
) {
  const lines: string[] = [];
  const push = (...l: string[]) => lines.push(...l);
  const statuses: MatchStatus[] = [
    "user",
    "claude",
    "ledger-link",
    "high",
    "ambiguous",
    "unmatched",
    "stale-override",
    "no-ledger",
  ];

  push(
    "# Sales ledger match report",
    "",
    `Generated ${new Date().toISOString()} from ${dump.source.file} (modified ${dump.source.mtime}).`,
    "",
  );

  if (stale.length) {
    push(`## ⚠ Stale overrides (${stale.length}) — their ledger rows are gone`, "");
    push("These sales fell back to automatic matching. Re-decide them in the review panel.", "");
    for (const s of stale)
      push(`- **${byModel[s.modelFile]?.legend ?? s.modelFile}** → \`${s.unit}\``);
    push("");
  }

  push(
    "## Coverage by year",
    "",
    `| Year | ${statuses.join(" | ")} |`,
    `| --- |${statuses.map(() => " ---: |").join("")}`,
  );
  const years = [...new Set(sales.map((s) => s.date?.getUTCFullYear() ?? 0))].sort();
  for (const y of years) {
    const row = statuses.map(
      (st) =>
        sales.filter(
          (s) => (s.date?.getUTCFullYear() ?? 0) === y && byModel[s.modelFile].status === st,
        ).length,
    );
    push(`| ${y || "?"} | ${row.join(" | ")} |`);
  }
  push("");

  // Accepted on price and words while the ledger's payout date says otherwise:
  // usually a mistyped date in the workbook, occasionally a wrong match.
  const contradicted = sales.flatMap((m) => {
    const mm = byModel[m.modelFile];
    if (!mm.unit || !["high", "ledger-link"].includes(mm.status)) return [];
    const s = pairs.get(m.modelFile)?.find((x) => x.u.key === mm.unit);
    return s && s.d === 0 && s.u.dateKind === "payout" ? [{ m, s }] : [];
  });
  push(
    `## Accepted, but the ledger date disagrees (${contradicted.length}) — spot-check these`,
    "",
  );
  for (const { m, s } of contradicted) {
    push(
      `- **${m.legend}** (€${m.price}, ${m.dateText}) → ${s.u.label}, paid ${s.u.payoutDate} — ${s.evidence.join(" · ")}`,
    );
  }
  push("");

  const key = answerKey(sales, pairs);
  push(
    `## Answer key — ${key.correct}/${key.total} summary-table links ranked first with the bonus off`,
    "",
  );
  for (const miss of key.misses) push(`- ${miss}`);
  push("");

  const queue = sales.filter((m) =>
    ["ambiguous", "unmatched"].includes(byModel[m.modelFile].status),
  );
  push(`## Review queue (${queue.length})`, "");
  for (const m of queue) {
    const mm = byModel[m.modelFile];
    push(
      `### ${m.legend} — ${mm.status}`,
      "",
      `${m.brand} · hammer €${m.price} · ${m.dateText}${m.url ? ` · ${m.url}` : ""}`,
      "",
    );
    for (const c of mm.candidates) {
      const u = interp.unitByKey.get(c.unit)!;
      push(
        `- ${c.score.toFixed(2)} (p ${c.p} · t ${c.t} · d ${c.d}) **${u.label}** — €${u.received} on ${u.payoutDate ?? "?"} · \`${c.unit}\``,
      );
      push(`  - ${c.evidence.join(" · ")}`);
    }
    push("");
  }

  push(
    `## Unclaimed ledger sales (${unclaimed.length})`,
    "",
    "Sold watches no catalogue sale claimed: missing from the catalogue, private sales, or still in the queue above.",
    "",
  );
  for (const key of unclaimed) {
    const u = interp.unitByKey.get(key)!;
    push(
      `- ${u.block.sheet}!${u.saleRow.row} **${u.label}** — €${u.received} on ${u.payoutDate ?? "?"} (profit €${u.profit})`,
    );
  }
  push("");

  const flagged = interp.units.filter((u) => u.flags.length);
  push(`## Units with flags (${flagged.length})`, "");
  for (const u of flagged)
    push(`- ${u.block.sheet}!${u.saleRow.row} ${u.label}: ${u.flags.join(", ")}`);
  push("");

  push(`## Ledger issues (${dump.issues.length})`, "");
  for (const i of dump.issues) push(`- ${i.kind} at ${i.cell}: ${i.detail}`);
  push("");

  push("## Catalogue issues", "");
  const lots = new Map<string, CatalogueSale[]>();
  for (const s of sales) if (s.lotId) lots.set(s.lotId, [...(lots.get(s.lotId) ?? []), s]);
  for (const [lot, group] of lots) {
    if (group.length < 2) continue;
    const same = group.every((g) => g.price === group[0].price && g.dateText === group[0].dateText);
    push(
      `- Lot ${lot} is shared by ${group.map((g) => g.legend).join(" and ")}${same ? " (sold together)" : " — different price or date: probably a copied URL"}`,
    );
  }
  for (const s of sales)
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(s.dateText))
      push(`- ${s.legend}: malformed date "${s.dateText}"`);
  push("");

  writeFileAtomic(MATCH_REPORT, lines.join("\n"));
}

if (require.main === module) main();

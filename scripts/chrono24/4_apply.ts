/**
 * 4_apply.ts — link each Chrono24 watch to a ledger watch and write the market
 * store, `.ledger/market.json`.
 *
 * LINKS
 * Decisions come first, strongest first: `user`, then `claude` (always with a
 * reason). They live in market.json and are added with `--links <file>`:
 *
 *   { "by": "claude",
 *     "links": {
 *       "20151746": "w-…",                                  // a ledger watch id
 *       "18120200": "Seiko/Seiko_6306_7001_1976",           // or a watch's modelFile
 *       "22515578": { "to": "w-…", "by": "user", "reason": "why" },
 *       "12345678": null                                    // none of my watches
 *     },
 *     "reasons": { "20151746": "why" } }
 *
 * A decision may name a kept watch or a for-sale one (stock: its value is
 * stored, but the valuation report covers kept watches only). Everything left
 * is matched automatically against the kept watches on three things: words
 * (brand, model, reference, the same rarity-weighted score the sales matcher
 * uses), the purchase month (Chrono24 stores the 1st of the month) and the
 * purchase price (Chrono24's, against the ledger's purchase lines).
 *
 * A link is taken as `high` only when it is a clear, mutual best AND the
 * references do not disagree: Chrono24's "Seamaster Polaris 386.1231" read as
 * the Polaris on its words alone, while its reference said Calgary/Seoul
 * (386.1232). A reference conflict always goes to review. `high` links are
 * recomputed every run; the rest go to `.chrono24/match-report.md`.
 *
 * STORE
 * Items are upserted (first and last seen kept), an item missing from the
 * export is marked `gone`, the model and collection histories are merged by
 * date, and the export day's snapshot replaces any earlier one of that day.
 * `ledger.json` is only read.
 *
 * Usage:
 *   npm run chrono24:apply                     # writes market.json and the report
 *   npm run chrono24:apply -- --dry            # report only
 *   npm run chrono24:apply -- --links decisions.json
 */

import fs from "fs";

import type { LedgerStore, LedgerWatch } from "../../src/app/admin/ledger/ledger.types";
import type {
  HistoryPoint,
  MarketItem,
  MarketLink,
  MarketSnapshot,
  MarketStore,
} from "../../src/app/admin/ledger/market.types";
import { loadOwned } from "../sales/_catalogue";
import { hasToken, isReferenceToken, readJson, tokenize, tokenTextScore } from "../sales/_shared";
import { loadLedger, loadMarket, saveMarket } from "./_market";
import { localDay, MATCH_REPORT, SCRAPE_JSON } from "./_shared";
import type { ScrapedItem, ScrapeFile } from "./types";

const W_TEXT = 0.45;
const W_DATE = 0.35;
const W_PRICE = 0.2;
const ACCEPT = 0.55;
const MARGIN = 0.12;
/** A watch of another brand than Chrono24's manufacturer scores this much less. */
const BRAND_PENALTY = 0.5;
const CANDIDATES = 3;

type Decision = string | null | { to: string | null; by?: "user" | "claude"; reason?: string };

interface LinksFile {
  by?: "user" | "claude";
  links: Record<string, Decision>;
  reasons?: Record<string, string>;
}

/** A ledger watch a Chrono24 watch can be: kept (matched automatically) or for sale (by decision). */
interface Candidate {
  watch: LedgerWatch;
  tokens: string[];
  brandTokens: string[];
  purchase: number | null;
  name: string;
}

interface Scored {
  cand: Candidate;
  score: number;
  note: string;
}

const round2 = (n: number) => Math.round(n * 100) / 100;

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i > 0 ? process.argv[i + 1] : undefined;
}

function buildIdf(docs: string[][]): (tok: string) => number {
  const df = new Map<string, number>();
  for (const d of docs) for (const t of new Set(d)) df.set(t, (df.get(t) ?? 0) + 1);
  const n = docs.length;
  return (t) => (df.has(t) ? Math.log(1 + n / df.get(t)!) : 0.5);
}

/** What the ledger paid for a watch: its share of purchase lines. */
function purchaseOf(store: LedgerStore, id: string): number | null {
  let sum = 0;
  let any = false;
  for (const line of store.lines) {
    if (line.kind !== "purchase" || line.direction !== "out") continue;
    const h = line.holders.find((x) => x.id === id);
    if (!h) continue;
    sum += line.amount * h.share;
    any = true;
  }
  return any ? round2(sum) : null;
}

const monthIndex = (iso: string) => Number(iso.slice(0, 4)) * 12 + Number(iso.slice(5, 7)) - 1;

function monthsApart(a?: string | null, b?: string | null): number | null {
  if (!a || !b) return null;
  return Math.abs(monthIndex(a) - monthIndex(b));
}

const priceGap = (a?: number | null, b?: number | null): number | null =>
  a && b ? Math.abs(a - b) / Math.max(a, b) : null;

/** Chrono24 names a reference, the catalogue names one, and they share nothing. */
function refConflict(item: ScrapedItem, c: Candidate): boolean {
  const refs = tokenize(item.reference).filter(isReferenceToken);
  return (
    refs.length > 0 && c.tokens.some(isReferenceToken) && !refs.some((t) => hasToken(c.tokens, t))
  );
}

function score(item: ScrapedItem, c: Candidate, idf: (t: string) => number): Scored {
  const itemTokens = tokenize(`${item.manufacturer ?? ""} ${item.title} ${item.reference ?? ""}`);
  const text = tokenTextScore(c.tokens, itemTokens, idf);
  const parts: [number, number][] = [[W_TEXT, text.t]];
  const notes = [text.note];

  const months = monthsApart(item.purchaseDate, c.watch.acquired);
  if (months !== null) {
    parts.push([W_DATE, months === 0 ? 1 : months === 1 ? 0.5 : months === 2 ? 0.2 : 0]);
    notes.push(months === 0 ? "same month" : `${months} months apart`);
  }
  const gap = priceGap(item.purchasePrice, c.purchase);
  if (gap !== null) {
    parts.push([W_PRICE, gap <= 0.05 ? 1 : gap <= 0.15 ? 0.7 : gap <= 0.3 ? 0.4 : 0]);
    notes.push(`price ${Math.round(gap * 100)}% apart`);
  }
  let s = parts.reduce((a, [w, v]) => a + w * v, 0) / parts.reduce((a, [w]) => a + w, 0);

  const maker = tokenize(item.manufacturer ?? item.title.split(" ")[0]);
  if (maker.length && c.brandTokens.length && !maker.some((t) => hasToken(c.brandTokens, t))) {
    s *= BRAND_PENALTY;
    notes.push("other brand");
  }
  return { cand: c, score: Math.round(s * 1000) / 1000, note: notes.join(" · ") };
}

/** Problems worth a look on a linked pair, even a decided one. */
function flags(item: ScrapedItem, c: Candidate): string[] {
  const out: string[] = [];
  if (refConflict(item, c)) out.push(`Chrono24 reference ${item.reference} is not the catalogue's`);
  const months = monthsApart(item.purchaseDate, c.watch.acquired);
  if (months !== null && months >= 2)
    out.push(
      `purchase ${item.purchaseDate?.slice(0, 7)} on Chrono24, ${c.watch.acquired} in the ledger`,
    );
  const gap = priceGap(item.purchasePrice, c.purchase);
  if (gap !== null && gap > 0.05)
    out.push(`purchase price ${item.purchasePrice} € on Chrono24, ${c.purchase} € in the ledger`);
  return out;
}

function mergeHistory(old: HistoryPoint[], next: HistoryPoint[]): HistoryPoint[] {
  const byDate = new Map(old.map((p) => [p.date, p]));
  for (const p of next) byDate.set(p.date, p);
  return [...byDate.values()].sort((a, b) => a.date.localeCompare(b.date));
}

function main() {
  const dry = process.argv.includes("--dry");
  if (!fs.existsSync(SCRAPE_JSON)) {
    console.error("No .chrono24/scrape.json: run `npm run chrono24:import` first.");
    process.exit(1);
  }
  const scrape = readJson<ScrapeFile>(SCRAPE_JSON);
  const store = loadLedger();
  const { market, version } = loadMarket();
  const day = localDay(scrape.exportedAt);
  const now = new Date().toISOString();

  // ── The watches still owned, described the way the sales matcher describes models.
  const { owned, allTokens } = loadOwned();
  const ownedByFile = new Map(owned.map((m) => [m.modelFile, m]));
  const idf = buildIdf(allTokens);
  const cands: Candidate[] = store.watches
    .filter((w) => w.status === "kept" || w.status === "for-sale")
    .map((w) => {
      const m = w.modelFile ? ownedByFile.get(w.modelFile) : undefined;
      return {
        watch: w,
        tokens: m ? m.tokens : tokenize(w.label),
        brandTokens: m ? m.brandTokens : tokenize(w.label).slice(0, 1),
        purchase: purchaseOf(store, w.id),
        name: (m ? m.legend : w.label) + (w.status === "for-sale" ? " (for sale)" : ""),
      };
    });
  const byId = new Map(cands.map((c) => [c.watch.id, c]));
  const byFile = new Map(
    cands.filter((c) => c.watch.modelFile).map((c) => [c.watch.modelFile!, c]),
  );
  const kept = cands.filter((c) => c.watch.status === "kept");

  // ── Decisions: those already stored, then the file's, which win.
  const links: Record<string, MarketLink> = Object.fromEntries(
    Object.entries(market.links).filter(([, l]) => l.by !== "high"),
  );
  const file = arg("links");
  if (file) {
    const add = readJson<LinksFile>(file);
    for (const [itemId, d] of Object.entries(add.links)) {
      const to = d !== null && typeof d === "object" ? d.to : d;
      const by = (d !== null && typeof d === "object" ? d.by : undefined) ?? add.by ?? "user";
      const reason =
        (d !== null && typeof d === "object" ? d.reason : undefined) ?? add.reasons?.[itemId];
      const c = to === null ? null : (byId.get(to) ?? byFile.get(to));
      if (to !== null && !c)
        throw new Error(`${to} is not a kept or for-sale ledger watch (id or modelFile).`);
      if (by === "claude" && !reason)
        throw new Error(`Claude's decision for ${itemId} needs a reason.`);
      links[itemId] = {
        watchId: c ? c.watch.id : null,
        by,
        ...(reason ? { reason } : {}),
        at: now,
      };
    }
  }
  for (const [itemId, l] of Object.entries(links))
    if (l.watchId && !byId.has(l.watchId))
      console.warn(
        `Decision for item ${itemId} names ${l.watchId}, no longer owned; ignored this run.`,
      );

  // ── Automatic links for the rest, in rounds, so a clear pair frees the next.
  const items = scrape.items;
  const taken = new Set(
    Object.values(links)
      .map((l) => l.watchId)
      .filter((x): x is string => !!x && byId.has(x)),
  );
  const decided = new Set(Object.keys(links));
  const scores = new Map<string, Scored[]>(
    items.map((it) => [
      it.itemId,
      kept.map((k) => score(it, k, idf)).sort((a, b) => b.score - a.score),
    ]),
  );
  for (let changed = true; changed; ) {
    changed = false;
    for (const it of items) {
      if (decided.has(it.itemId)) continue;
      const open = scores.get(it.itemId)!.filter((s) => !taken.has(s.cand.watch.id));
      const [best, next] = open;
      if (!best || best.score < ACCEPT || best.score - (next?.score ?? 0) < MARGIN) continue;
      if (refConflict(it, best.cand)) continue;
      const rival = items.some(
        (o) =>
          o !== it &&
          !decided.has(o.itemId) &&
          (scores.get(o.itemId)!.find((s) => s.cand === best.cand)?.score ?? 0) >= best.score,
      );
      if (rival) continue;
      links[it.itemId] = { watchId: best.cand.watch.id, by: "high", reason: best.note, at: now };
      decided.add(it.itemId);
      taken.add(best.cand.watch.id);
      changed = true;
    }
  }

  // Two Chrono24 watches can never be one ledger watch.
  const byWatch = new Map<string, string[]>();
  for (const [itemId, l] of Object.entries(links))
    if (l.watchId) byWatch.set(l.watchId, [...(byWatch.get(l.watchId) ?? []), itemId]);
  const doubled = [...byWatch.entries()].filter(([, ids]) => ids.length > 1);
  if (doubled.length) {
    for (const [w, ids] of doubled)
      console.error(`${byId.get(w)?.name ?? w} is linked from items ${ids.join(", ")}.`);
    console.error("Refused, nothing written: fix the decisions.");
    process.exit(1);
  }

  // ── The store.
  const seen = new Set(items.map((i) => i.itemId));
  const nextItems: Record<string, MarketItem> = {};
  for (const it of items) {
    const old = market.items[it.itemId];
    nextItems[it.itemId] = {
      ...it,
      history: mergeHistory(old?.history ?? [], it.history),
      firstSeen: old?.firstSeen ?? day,
      lastSeen: day,
    };
  }
  for (const [id, old] of Object.entries(market.items))
    if (!seen.has(id)) nextItems[id] = { ...old, gone: true };

  const snapshot: MarketSnapshot = {
    at: day,
    total: scrape.total,
    ...(scrape.range ? { range: scrape.range } : {}),
    ...(scrape.c24Profit !== undefined ? { c24Profit: scrape.c24Profit } : {}),
    values: Object.fromEntries(items.map((i) => [i.itemId, i.value])),
  };
  const next: MarketStore = {
    version: 1,
    items: nextItems,
    links,
    snapshots: [...market.snapshots.filter((s) => s.at !== day), snapshot].sort((a, b) =>
      a.at.localeCompare(b.at),
    ),
    collectionHistory: mergeHistory(market.collectionHistory ?? [], scrape.collectionHistory),
  };

  // ── The report.
  const linkOf = (it: ScrapedItem) => links[it.itemId];
  const linkedRows = items.filter((it) => linkOf(it)?.watchId && byId.has(linkOf(it).watchId!));
  const nulls = items.filter((it) => linkOf(it) && linkOf(it).watchId === null);
  const open = items.filter((it) => !linkOf(it));
  const trackedKept = new Set(
    linkedRows
      .map((it) => linkOf(it).watchId!)
      .filter((id) => byId.get(id)!.watch.status === "kept"),
  );
  const stock = linkedRows.length - trackedKept.size;

  const md: string[] = [
    `# Chrono24 → ledger links, export of ${day}`,
    "",
    `${items.length} Chrono24 watches: ${linkedRows.length} linked (${stock} of them stock for sale), ${nulls.length} decided as none of mine, ${open.length} to decide.`,
    `${kept.length} kept watches: ${trackedKept.size} tracked by Chrono24, ${kept.length - trackedKept.size} not.`,
    "",
    "## Linked",
    "",
    "| Chrono24 | value | ledger watch | by | check |",
    "|---|---:|---|---|---|",
  ];
  for (const it of linkedRows) {
    const l = linkOf(it);
    const c = byId.get(l.watchId!)!;
    md.push(
      `| ${it.itemId} ${it.title}${it.reference ? ` (${it.reference})` : ""} | ${it.value} € | ${c.name} — \`${c.watch.id}\` | ${l.by}${l.reason ? `: ${l.reason}` : ""} | ${flags(it, c).join("; ") || "ok"} |`,
    );
  }
  if (open.length) {
    md.push("", "## To decide", "");
    for (const it of open) {
      md.push(
        `### ${it.itemId} ${it.title}${it.reference ? ` (${it.reference})` : ""}`,
        `Chrono24: bought ${it.purchaseDate ?? "?"} for ${it.purchasePrice ?? "?"} €, worth ${it.value} €.`,
        "",
      );
      for (const s of scores.get(it.itemId)!.slice(0, CANDIDATES))
        md.push(
          `- ${s.score.toFixed(2)} ${s.cand.name} — \`${s.cand.watch.id}\`, bought ${s.cand.watch.acquired ?? "?"} for ${s.cand.purchase ?? "?"} € (${s.note})${refConflict(it, s.cand) ? " · reference conflict" : ""}${taken.has(s.cand.watch.id) ? " — already linked" : ""}`,
        );
      // Not a kept watch at all? Say which catalogue model it looks like.
      const toks = tokenize(`${it.manufacturer ?? ""} ${it.title} ${it.reference ?? ""}`);
      const model = owned
        .map((m) => ({ m, t: tokenTextScore(m.tokens, toks, idf).t }))
        .sort((a, b) => b.t - a.t)[0];
      if (model && model.t >= 0.5 && !byFile.has(model.m.modelFile))
        md.push(
          `- looks like catalogue model \`${model.m.modelFile}\` (${model.t.toFixed(2)}), which no kept or for-sale ledger watch links to`,
        );
      md.push("");
    }
  }
  if (nulls.length) {
    md.push("## Decided as none of mine", "");
    for (const it of nulls)
      md.push(
        `- ${it.itemId} ${it.title} (${linkOf(it).by}${linkOf(it).reason ? `: ${linkOf(it).reason}` : ""})`,
      );
    md.push("");
  }
  md.push(
    "",
    "## Kept watches Chrono24 does not track",
    "",
    "Valued at cost in the report. Add one to the Chrono24 collection to value it.",
    "",
  );
  for (const k of kept.filter((c) => !trackedKept.has(c.watch.id)))
    md.push(`- ${k.name} — bought ${k.watch.acquired ?? "?"} for ${k.purchase ?? "?"} €`);
  const gone = Object.values(nextItems).filter((i) => i.gone);
  if (gone.length) {
    md.push("", "## Gone from Chrono24", "");
    for (const i of gone) md.push(`- ${i.itemId} ${i.title}, last seen ${i.lastSeen}`);
  }
  fs.writeFileSync(MATCH_REPORT, md.join("\n") + "\n");

  // ── Console summary.
  const before = Object.keys(market.items).length;
  console.log(
    `${items.length} Chrono24 watches (${before ? `${before} before` : "first run"}): ${linkedRows.length} linked, ${nulls.length} none, ${open.length} to decide.`,
  );
  const flagged = linkedRows.filter((it) => flags(it, byId.get(linkOf(it).watchId!)!).length);
  if (flagged.length) console.log(`${flagged.length} linked with something to check.`);
  console.log(`Snapshot ${day}: ${scrape.total} €. Report: ${MATCH_REPORT}`);

  if (dry) {
    console.log("--dry: nothing written.");
    return;
  }
  saveMarket(next, version);
  console.log("Written .ledger/market.json");
}

main();

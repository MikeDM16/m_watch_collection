/**
 * _kept.ts — what each kept watch (the Collection tab) is in the catalogue, and
 * where its money sits when the Collection tab does not hold it.
 *
 * MODEL
 * A kept watch is matched to a catalogue model with no sale report, on words
 * alone (there is no price or date to fit): the same rarity-weighted score the
 * sales matcher uses, with rarity counted over the whole catalogue. A clear,
 * mutual best is accepted automatically; anything closer goes to review.
 *
 * LINK
 * Some kept watches were bought in a year-tab lot and kept after ("Omega
 * Polaris 8 Watches"), or bought in a year-tab block and moved to the
 * collection: the Collection tab names them but holds no purchase. Those are
 * linked to the year-tab stock item that holds their money, so the money
 * counts as kept instead of for sale, and only once. A kept watch with its own
 * purchase that looks like a stock item is flagged as a possible double count.
 *
 * Decisions in overrides.json (`keptModels`, `keptLinks`) win, as for sales.
 */

import type {
  KeptMatch,
  MatchStatus,
  OverridesFile,
} from "../../src/app/admin/sales-report/salesData.types";
import type { OwnedModel } from "./_catalogue";
import type { CollectionInterpretation, KeptWatch } from "./_collection";
import { itemTokens, type Interpretation, type StockItem } from "./_ledger";
import { hasToken, tokenTextScore } from "./_shared";

const MODEL_ACCEPT = 0.55;
const LINK_ACCEPT = 0.5;
const MARGIN = 0.12;
const REVIEW_FLOOR = 0.3;
const DOUBLE_COUNT = 0.75;
const CANDIDATES = 5;
/** A model of another brand than the one the ledger names scores this much less. */
const BRAND_PENALTY = 0.5;

type Idf = (tok: string) => number;

function buildIdf(docs: string[][]): Idf {
  const df = new Map<string, number>();
  for (const d of docs) for (const t of new Set(d)) df.set(t, (df.get(t) ?? 0) + 1);
  const n = docs.length;
  return (t) => (df.has(t) ? Math.log(1 + n / df.get(t)!) : 0.5);
}

const needsLink = (w: KeptWatch) => w.flags.includes("no-cost") || w.flags.includes("no-purchase");

const stockTokens = (it: StockItem) => [...new Set([...it.tokens, ...itemTokens(it.label)])];

export function matchKept(
  coll: CollectionInterpretation,
  interp: Interpretation,
  owned: OwnedModel[],
  allTokens: string[][],
  ov: OverridesFile,
): KeptMatch[] {
  const idf = buildIdf(allTokens);
  const brands = new Set(owned.flatMap((m) => m.brandTokens));
  const items = interp.blocks.flatMap((b) => b.stockItems);
  const itemByKey = new Map(items.map((it) => [it.key, it]));
  const ownedByFile = new Map(owned.map((m) => [m.modelFile, m]));

  // ── Models: every kept watch against every owned model.
  const modelScores = new Map<KeptWatch, { modelFile: string; t: number; note: string }[]>();
  for (const w of coll.watches) {
    const named = w.tokens.filter((t) => brands.has(t));
    const scored = owned
      .map((m) => {
        const s = tokenTextScore(m.tokens, w.tokens, idf);
        const otherBrand = named.length > 0 && !named.some((t) => hasToken(m.brandTokens, t));
        return {
          modelFile: m.modelFile,
          t: Math.round(s.t * (otherBrand ? BRAND_PENALTY : 1) * 1000) / 1000,
          note: s.note + (otherBrand ? " · other brand" : ""),
        };
      })
      .filter((s) => s.t >= 0.15)
      .sort((a, b) => b.t - a.t);
    modelScores.set(w, scored);
  }
  // A model is accepted for the kept watch whose top pick it is with the best
  // score, only: two kept watches cannot both be the same model.
  const bestFor = new Map<string, number>();
  for (const [top] of modelScores.values()) {
    if (top) bestFor.set(top.modelFile, Math.max(bestFor.get(top.modelFile) ?? 0, top.t));
  }
  const autoPick = (w: KeptWatch): string | null => {
    const [best, second] = modelScores.get(w) ?? [];
    const clear =
      best &&
      best.t >= MODEL_ACCEPT &&
      (!second || best.t - second.t >= MARGIN) &&
      bestFor.get(best.modelFile) === best.t;
    return clear ? best.modelFile : null;
  };
  // Every kept watch's model, decided or picked automatically.
  const modelOf = new Map(
    coll.watches.map((w) => {
      const d = ov.keptModels?.[w.key];
      return [w, d ? d.modelFile : autoPick(w)];
    }),
  );
  // Models other kept watches already are, which cannot be this one's too.
  const takenByOthers = (w: KeptWatch) =>
    new Set([...modelOf].filter(([x, f]) => x !== w && f).map(([, f]) => f!));

  // ── Links: kept watches without their own purchase against stock items.
  const linkScores = new Map<KeptWatch, { stock: string; t: number; note: string }[]>();
  for (const w of coll.watches) {
    const scored = items
      .map((it) => {
        const s = tokenTextScore(stockTokens(it), w.tokens, idf);
        return { stock: it.key, t: Math.round(s.t * 1000) / 1000, note: s.note };
      })
      .filter((s) => s.t >= 0.2)
      .sort((a, b) => b.t - a.t);
    linkScores.set(w, scored);
  }
  // The kept watch each stock item reads most like: only that one can be its double.
  const closest = new Map<string, { w: KeptWatch; t: number }>();
  for (const [w, scored] of linkScores) {
    for (const s of scored) {
      const prev = closest.get(s.stock);
      if (!prev || s.t > prev.t) closest.set(s.stock, { w, t: s.t });
    }
  }

  return coll.watches.map((w): KeptMatch => {
    // Model.
    const scored = modelScores.get(w) ?? [];
    const decided = ov.keptModels?.[w.key];
    let model: KeptMatch["model"];
    if (decided) {
      const stale = decided.modelFile !== null && !ownedByFile.has(decided.modelFile);
      // "Not in the catalogue (yet)" holds until a model no other kept watch has
      // clearly matches it: then it comes back for review instead of hiding it.
      const [best, second] = scored.filter((s) => !takenByOthers(w).has(s.modelFile));
      const resurfaced =
        decided.modelFile === null &&
        best !== undefined &&
        best.t >= MODEL_ACCEPT &&
        (!second || best.t - second.t >= MARGIN);
      model = {
        status: stale
          ? "stale-override"
          : resurfaced
            ? "ambiguous"
            : decided.modelFile === null
              ? "no-ledger"
              : decided.by,
        modelFile: stale ? null : decided.modelFile,
        by: decided.by,
        reason: resurfaced
          ? `${decided.reason ? `${decided.reason} · ` : ""}a catalogue model now matches; check it`
          : decided.reason,
        candidates: scored.slice(0, CANDIDATES),
      };
    } else {
      const pick = autoPick(w);
      const status: MatchStatus = pick
        ? "high"
        : scored[0] && scored[0].t >= REVIEW_FLOOR
          ? "ambiguous"
          : "unmatched";
      model = { status, modelFile: pick, candidates: scored.slice(0, CANDIDATES) };
    }

    // Link.
    const candidates = (linkScores.get(w) ?? []).slice(0, CANDIDATES);
    const chosen = ov.keptLinks?.[w.key];
    let link: KeptMatch["link"] = null;
    const flags = [...w.flags];
    if (chosen) {
      const stale = chosen.stock !== null && !itemByKey.has(chosen.stock);
      link = {
        status: stale ? "stale-override" : chosen.stock === null ? "no-ledger" : chosen.by,
        stock: stale ? null : chosen.stock,
        by: chosen.by,
        reason: chosen.reason,
        candidates,
      };
    } else if (needsLink(w)) {
      const [best, second] = candidates;
      const clear = best && best.t >= LINK_ACCEPT && (!second || best.t - second.t >= MARGIN);
      link = {
        status: clear ? "high" : best && best.t >= REVIEW_FLOOR ? "ambiguous" : "unmatched",
        stock: clear ? best.stock : null,
        candidates,
      };
    } else if (
      candidates[0] &&
      candidates[0].t >= DOUBLE_COUNT &&
      closest.get(candidates[0].stock)?.w === w
    ) {
      // Its own purchase is in the Collection tab, yet a stock item reads the same.
      flags.push("possible-double-count");
      link = { status: "ambiguous", stock: null, candidates };
    }

    return {
      key: w.key,
      label: w.label,
      ref: `${w.block.sheet}!${w.anchor.row}`,
      purchaseDate: w.purchaseDate,
      net:
        Math.round(
          -w.allocations.reduce(
            (s, a) => s + (a.part.side === "E" ? 1 : -1) * a.part.amount * a.share,
            0,
          ) * 100,
        ) / 100,
      paid: w.paid,
      flags,
      model,
      link,
    };
  });
}

/** Which kept watches each stock item's money belongs to, from accepted links. */
export function acceptedLinks(kept: KeptMatch[]): Map<string, string[]> {
  const ACCEPTED: readonly MatchStatus[] = ["user", "claude", "high"];
  const out = new Map<string, string[]>();
  for (const k of kept) {
    if (!k.link?.stock || !ACCEPTED.includes(k.link.status)) continue;
    out.set(k.link.stock, [...(out.get(k.link.stock) ?? []), k.key]);
  }
  return out;
}

/**
 * _collection.ts — reads meaning into the workbook's Collection tab: the
 * watches kept, never bought to sell. Shared by steps 2 and 3.
 *
 * A Collection block is a year-tab block without a payout: the watch, then its
 * straps, service and box. Rows are split into parts exactly as the year tabs'
 * are (`makeParts`, overrides included), then:
 *   - a named row whose F is a purchase is a kept watch; so is a named row that
 *     was bought and cancelled (E = F, re-bought on a later row), and a named
 *     row with no money but a price noted beside it ("350": its money sits in a
 *     year-tab lot);
 *   - a named purchase under 15% of the block's first one is an extra on that
 *     watch ("Riders tabs"), not a watch of its own;
 *   - a trade-in row ("Titus 18k Chrono (Retoma)") is part of what the block's
 *     first watch cost, and says so;
 *   - an unnamed cost row in a block whose watch has no purchase left is that
 *     purchase (the re-buy after a cancelled order);
 *   - a block naming no watch by these rules has its first named row as the
 *     watch (a name, then a strap: the money for the watch is elsewhere);
 *   - every other line goes to the watch it names, else is split evenly.
 * Every euro of a block lands in one of its watches, and `delta` checks that
 * against the block's own total.
 */

import type { OverridesFile } from "../../src/app/admin/sales-report/salesData.types";
import {
  isGeneric,
  makeParts,
  mergeAllocations,
  namedTargets,
  nameTokens,
  signed,
  type Allocation,
  type Part,
  type Watch,
} from "./_ledger";
import { hasKeyword, round2, rowFingerprint } from "./_shared";
import type { LedgerBlock, LedgerRow } from "./types";

export const TRADE_WORDS: readonly string[] = ["retoma", "troca", "trade"];

/** Below this share of the block's first purchase, a named "purchase" is an extra. */
const EXTRA_SHARE = 0.15;

export interface KeptWatch {
  /** `Collection|text|received|spent`, `#n` when two rows read the same. */
  key: string;
  block: LedgerBlock;
  /** The row naming the watch. */
  anchor: LedgerRow;
  label: string;
  tokens: string[];
  allocations: Allocation[];
  purchaseDate: string | null;
  /** The amount noted beside it, when its money sits elsewhere. */
  paid: number | null;
  flags: string[];
}

export interface KeptBlock {
  block: LedgerBlock;
  watches: KeptWatch[];
  /** Every part, pass-throughs included. */
  parts: Part[];
  /** Block total minus what its watches hold. Zero unless this module has a bug. */
  delta: number;
}

export interface CollectionInterpretation {
  blocks: KeptBlock[];
  watches: KeptWatch[];
  byKey: Map<string, KeptWatch>;
}

const firstDate = (rows: LedgerRow[]): string | null => rows.find((r) => r.date)?.date ?? null;

function interpretKeptBlock(block: LedgerBlock, ov: OverridesFile): KeptBlock {
  const parts = makeParts(block, ov);
  const of = (r: LedgerRow) => parts.filter((p) => p.row === r);
  const isTrade = (r: LedgerRow) => hasKeyword(r.text, TRADE_WORDS);
  const named = (r: LedgerRow) => !isGeneric(r.text) && nameTokens(r).length > 0;
  const bought = (r: LedgerRow) => of(r).find((p) => p.side === "F" && p.kind === "purchase");
  const firstPurchase = parts.find((p) => p.side === "F" && p.kind === "purchase");

  const watches: KeptWatch[] = [];
  const purchaseOf = new Map<KeptWatch, Part>();
  const add = (row: LedgerRow) => {
    const w: KeptWatch = {
      key: "",
      block,
      anchor: row,
      label: row.text || "(no description)",
      tokens: nameTokens(row),
      allocations: [],
      purchaseDate: null,
      paid: row.noteNumber ?? null,
      flags: [],
    };
    const p = bought(row);
    if (p) purchaseOf.set(w, p);
    watches.push(w);
    return w;
  };

  const extras = new Set<Part>();
  for (const row of block.rows) {
    if (!named(row) || isTrade(row)) continue;
    const own = of(row);
    const p = bought(row);
    if (p) {
      const first = watches.length === 0 || p === firstPurchase;
      if (!first && firstPurchase && p.amount < EXTRA_SHARE * firstPurchase.amount) {
        extras.add(p);
        continue;
      }
      add(row);
    } else if (own.length && own.every((x) => x.kind === "passthrough")) add(row);
    else if (!own.length && row.noteNumber !== undefined) add(row);
  }
  if (!watches.length) add(block.rows.find((r) => named(r) && !isTrade(r)) ?? block.rows[0]);

  // An unnamed cost with one watch left without a purchase: that watch's re-buy.
  const unbought = watches.filter((w) => !purchaseOf.has(w) && w.paid === null);
  const main = watches[0];

  const give = (w: KeptWatch, part: Part, share: number) => {
    if (share > 1e-9) w.allocations.push({ part, share });
  };
  const spread = (part: Part, portion: number) => {
    for (const w of watches) give(w, part, portion / watches.length);
  };
  const asWatches: Watch[] = watches.map((w) => ({
    name: w.label,
    tokens: w.tokens,
    anchor: w.anchor,
    purchase: purchaseOf.get(w) ?? null,
    sales: [],
    fromSale: false,
  }));
  const keptOf = new Map(asWatches.map((x, i) => [x, watches[i]]));

  for (const part of parts) {
    if (part.kind === "passthrough") continue;
    const owner = watches.find((w) => w.anchor === part.row);
    if (owner) {
      give(owner, part, 1);
      continue;
    }
    if (isTrade(part.row)) {
      if (part.side === "F") part.kind = "purchase";
      give(main, part, 1);
      if (!main.flags.includes("trade-in")) main.flags.push("trade-in");
      continue;
    }
    if (extras.has(part)) part.kind = "other";
    if (
      isGeneric(part.row.text) &&
      part.side === "F" &&
      part.kind === "other" &&
      unbought.length === 1
    ) {
      part.kind = "purchase";
      purchaseOf.set(unbought[0], part);
      give(unbought[0], part, 1);
      continue;
    }
    const { groups, unnamed } = namedTargets(part.row, asWatches);
    const segments = groups.length + unnamed;
    for (const g of groups) for (const x of g) give(keptOf.get(x)!, part, 1 / segments / g.length);
    const shared = segments ? unnamed / segments : 1;
    if (shared > 1e-9) spread(part, shared);
  }

  for (const w of watches) {
    w.allocations = mergeAllocations(w.allocations);
    const p = purchaseOf.get(w);
    w.purchaseDate =
      p?.row.date ?? w.anchor.date ?? firstDate(w.allocations.map((a) => a.part.row)) ?? null;
    if (!w.purchaseDate) {
      w.purchaseDate = firstDate(block.rows);
      w.flags.push("undated");
    } else if (p && !p.row.date) w.flags.push("undated");
    const net = -w.allocations.reduce((s, a) => s + signed(a), 0);
    if (net < 1) w.flags.push("no-cost");
    // Extras but no purchase: the watch itself was paid for somewhere else.
    else if (!purchaseOf.has(w)) w.flags.push("no-purchase");
  }

  const held = watches.reduce((s, w) => s + w.allocations.reduce((t, a) => t + signed(a), 0), 0);
  return { block, watches, parts, delta: round2(block.computedTotal - held) };
}

export function interpretCollection(
  blocks: LedgerBlock[],
  ov: OverridesFile,
): CollectionInterpretation {
  const kept = blocks.map((b) => interpretKeptBlock(b, ov));
  const watches = kept.flatMap((b) => b.watches);
  const seen = new Map<string, number>();
  const byKey = new Map<string, KeptWatch>();
  for (const w of watches) {
    const base = rowFingerprint(w.block.sheet, w.anchor.text, w.anchor.received, w.anchor.spent);
    const n = (seen.get(base) ?? 0) + 1;
    seen.set(base, n);
    w.key = n === 1 ? base : `${base}#${n}`;
    byKey.set(w.key, w);
  }
  return { blocks: kept, watches, byKey };
}

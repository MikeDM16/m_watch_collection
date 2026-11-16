/**
 * JSON contracts of the local sales margin pipeline (scripts/sales), shared by
 * the scripts that write the files and the dev-only admin pages that read them.
 *
 * Types only, and always imported with `import type`. The files themselves live
 * in the gitignored `.sales/` folder and hold purchase prices and margins, so
 * nothing may pull their contents into a bundle: the pages read them with `fs`
 * at request time (see loadSalesData.ts), never through an import.
 */

/** How a catalogue sale got linked to its ledger section, strongest first. */
export type Confidence =
  /** Confirmed or chosen by hand in the review panel. */
  | "user"
  /** Adjudicated by Claude, with a written reason. */
  | "claude"
  /** The ledger's own summary table points at the section and its hammer equals the price. */
  | "ledger-link"
  /** Automatic: each is the other's best candidate, by a clear margin. */
  | "high";

export type MatchStatus =
  | Confidence
  /** Plausible candidates, none clear enough to accept automatically. */
  | "ambiguous"
  /** No plausible ledger section. */
  | "unmatched"
  /** Confirmed by hand: this sale has no ledger section. */
  | "no-ledger"
  /** An override points at a ledger section that no longer exists. */
  | "stale-override";

export type CostCategory = "purchase" | "service" | "strap" | "shipping" | "box" | "fees" | "other";

export type BlockKind = "single" | "lot" | "overhead";

/** One ledger line attributed to a watch; `share` < 1 when a lot cost is split. */
export interface CostLine {
  category: CostCategory;
  label: string;
  /** The attributed amount in €: the ledger line times `share`. */
  amount: number;
  share: number;
  /** The ledger cell, e.g. "R25!F194". */
  ref: string;
  /** ISO date, as approximate as the ledger's. */
  date: string | null;
}

// ─── .sales/matches.json — written by scripts/sales/2_match.ts ──────────────

/** A sold watch as the ledger sees it: its payout plus the costs attributed to it. */
export interface LedgerUnitSummary {
  /** Stable fingerprint used by overrides: `sheet|text|received|spent#n`. */
  key: string;
  sheet: string;
  /** The whole block, e.g. "R25!188:241". */
  blockRef: string;
  /** The row holding the payout. */
  saleRow: number;
  label: string;
  blockKind: BlockKind;
  /** Watches in the block (sold or not), for lots. 1 for a single-watch block. */
  lotSize: number;
  received: number;
  refunds: number;
  cost: number;
  profit: number;
  /** Date on the payout row, and how far to trust it as a payout date. */
  payoutDate: string | null;
  dateKind: "payout" | "purchase" | "placeholder" | "uniform" | "none";
  purchaseDate: string | null;
  costLines: CostLine[];
  flags: string[];
  /** The ledger's own summary rows that describe this watch. */
  hints: {
    ref: string;
    name: string;
    hammer: number | null;
    received: number;
    gain: number | null;
  }[];
}

export interface MatchCandidate {
  unit: string;
  score: number;
  /** Price, date and text sub-scores, each 0–1. */
  p: number;
  d: number;
  t: number;
  evidence: string[];
}

/** One catalogue sale and what the matcher made of it. */
export interface ModelMatch {
  modelFile: string;
  legend: string;
  brand: string;
  /** saleReport.price: the gross hammer price. */
  gross: number;
  /** saleReport.date, "DD/MM/YYYY" as in the catalogue. */
  date: string;
  url?: string;
  status: MatchStatus;
  /**
   * Who made the decision, when it came from overrides.json. A "no-ledger" is
   * confirmed only if the user set it; Claude's calls still await confirmation.
   */
  by?: "user" | "claude";
  unit: string | null;
  /** Fraction of the unit this sale owns: < 1 when several models were sold as one lot. */
  share: number;
  score: number | null;
  evidence: string[];
  reason?: string;
  candidates: MatchCandidate[];
}

export interface MatchesFile {
  version: 1;
  generatedAt: string;
  /** sha256 of the workbook the ledger dump came from. */
  ledgerSha256: string;
  units: Record<string, LedgerUnitSummary>;
  /** Keyed by CollectionIndexEntry.modelFile. */
  byModel: Record<string, ModelMatch>;
  /** Unit keys no catalogue sale claimed: sales missing from the catalogue, or private sales. */
  unclaimed: string[];
  staleOverrides: { modelFile: string; unit: string }[];
  /** Watches kept (the Collection tab), with their catalogue match and stock link. */
  kept?: KeptMatch[];
  /** What a kept watch can be linked to: every year-tab watch not sold yet. */
  stockItems?: {
    key: string;
    label: string;
    ref: string;
    purchaseDate: string | null;
    net: number;
  }[];
  /** What a kept watch can be: every catalogue model with no sale report. */
  ownedModels?: { modelFile: string; brand: string; legend: string }[];
}

// ─── .sales/overrides.json — written by Claude and by the review panel ───────

export interface MatchOverride {
  /** Unit key, or null for "this sale has no ledger section". */
  unit: string | null;
  by: "user" | "claude";
  reason?: string;
  /** ISO timestamp. */
  at: string;
  /** Explicit share, when several models point at one unit. Defaults to an even split. */
  share?: number;
}

export type RowTypeOverride = "sale" | "refund" | "ignore" | CostCategory;

export interface OverridesFile {
  version: 1;
  /** Keyed by modelFile. `user` decisions win over `claude` ones by construction: one entry each. */
  matches: Record<string, MatchOverride>;
  /** Reclassify one side of a ledger row. Keyed by row fingerprint plus side: `sheet|text|received|spent:E`. */
  rowTypes?: Record<string, RowTypeOverride>;
  /** Attribute one side of a ledger row to a unit. Same key as rowTypes; the value is a unit key. */
  attributions?: Record<string, string>;
  /** Which catalogue model a kept watch is, keyed by kept key. Null = not in the catalogue. */
  keptModels?: Record<string, KeptDecision<"modelFile">>;
  /**
   * Which year-tab stock item holds a kept watch's money (bought in a lot, kept
   * after), keyed by kept key. Null = its money is in the Collection tab only.
   */
  keptLinks?: Record<string, KeptDecision<"stock">>;
}

export type KeptDecision<K extends string> = Record<K, string | null> & {
  by: "user" | "claude";
  reason?: string;
  /** ISO timestamp. */
  at: string;
};

/** A kept watch and what the matcher made of it: its catalogue model, and its stock link. */
export interface KeptMatch {
  /** Kept key: `Collection|text|received|spent`. */
  key: string;
  label: string;
  ref: string;
  purchaseDate: string | null;
  /** Money of its own in the Collection tab, and the price noted beside it. */
  net: number;
  paid: number | null;
  flags: string[];
  model: {
    status: MatchStatus;
    modelFile: string | null;
    by?: "user" | "claude";
    reason?: string;
    candidates: { modelFile: string; t: number; note: string }[];
  };
  /** Null when its money is all in the Collection tab and nothing in stock looks like it. */
  link: {
    status: MatchStatus;
    stock: string | null;
    by?: "user" | "claude";
    reason?: string;
    candidates: { stock: string; t: number; note: string }[];
  } | null;
}

// ─── .sales/financials.json — written by scripts/sales/3_build.ts ───────────

export interface WatchFinancials {
  modelFile: string;
  confidence: Confidence;
  score: number | null;
  evidence: string[];
  unit: string;
  label: string;
  /** saleReport.price × saleShare at sync time. The page flags drift from the catalogue. */
  gross: number;
  saleShare: number;
  /** Net payout received, after platform fees. */
  received: number;
  refunds: number;
  cost: number;
  costByCategory: Partial<Record<CostCategory, number>>;
  /** received + refunds − cost. */
  profit: number;
  /** profit ÷ received; null when nothing was received. */
  margin: number | null;
  /** profit ÷ cost; null when the cost is under €1. */
  roi: number | null;
  purchaseDate: string | null;
  payoutDate: string | null;
  /** Purchase date → auction date. Null when unknown or impossible. */
  daysHeld: number | null;
  block: { ref: string; kind: BlockKind; units: number };
  costLines: CostLine[];
  flags: string[];
  /** The ledger summary table's own "Ganho Real" for this watch, when it has one. */
  userGain: number | null;
}

/** A watch bought and not sold yet (or a lot's unsold share), at cost. */
export interface StockItemFinancials {
  /** `sheet|text|received|spent:stock` (a named watch) or `…:rest` (a lot's unsold share). */
  key: string;
  label: string;
  kind: "watch" | "lot-share";
  /** Watches it covers: 1, or the lot's unsold slots. */
  count: number;
  /** The whole block, e.g. "R26!237:244", and the purchase row it stands for. */
  blockRef: string;
  ref: string;
  purchaseDate: string | null;
  /** Spent on it (F), refunds on it (E), and the two netted: the capital it holds. */
  cost: number;
  refunds: number;
  net: number;
  costByCategory: Partial<Record<CostCategory, number>>;
  costLines: CostLine[];
  /** The share of it that is really a kept watch's (linked from the Collection tab), 0–1. */
  keptShare: number;
}

/** A watch kept, from the workbook's Collection tab: never bought to sell. */
export interface KeptWatchFinancials {
  /** `Collection|text|received|spent`, with `#n` when two rows read the same. */
  key: string;
  /** The workbook's name for it. */
  label: string;
  /** The block, e.g. "Collection!25:29", and the row naming the watch. */
  blockRef: string;
  ref: string;
  /** The catalogue model it is, once matched (null until then). */
  modelFile: string | null;
  purchaseDate: string | null;
  /** Ledger money in it: spent (F), refunds (E), netted. What the series count. */
  cost: number;
  refunds: number;
  net: number;
  /** A price noted beside it ("350") when its money sits elsewhere, as written. */
  paid: number | null;
  /** What it costs now, once a lot's other sales are taken off. Equals `net` unless linked. */
  effective: number;
  costByCategory: Partial<Record<CostCategory, number>>;
  costLines: CostLine[];
  /** The year-tab stock item its money came from, when linked. */
  link: { stock: string; ref: string; label: string } | null;
  /** no-cost · no-purchase · undated · trade-in · possible-double-count */
  flags: string[];
}

/**
 * One day of ledger money. `received` is payouts; `spent` is purchases and
 * extras net of refunds in the year tabs (pass-throughs left out), and
 * `collectionSpent` the same for the Collection tab. `stockDelta` is the change
 * in capital held in watches bought to sell: + as money goes into a watch, − at
 * the cost it leaves with when it sells; `keptDelta` the same for watches kept.
 * Running sums give the series.
 */
export interface DailyMoney {
  /** ISO date. Future dates are clamped to the build day. */
  date: string;
  received: number;
  spent: number;
  collectionSpent: number;
  stockDelta: number;
  keptDelta: number;
}

export interface SalesFinancials {
  version: 1;
  generatedAt: string;
  source: { file: string; mtime: string; sha256: string };
  /** Keyed by CollectionIndexEntry.modelFile. */
  byModel: Record<string, WatchFinancials>;
  /** Watches bought and not sold yet. Absent in files built before it existed. */
  stockItems?: StockItemFinancials[];
  /** Watches kept (the Collection tab). Absent in files built before it existed. */
  kept?: KeptWatchFinancials[];
  /** The Collection tab's own reconciliation: every block against its total. */
  collection?: {
    /** Σ of its block totals: what the kept watches cost, negative. */
    net: number;
    blocks: number;
    ok: number;
    mismatches: { ref: string; expected: number; got: number }[];
  };
  /** The ledger day by day, oldest first. Absent in files built before it existed. */
  daily?: DailyMoney[];
  /** Catalogue sales with no accepted match, so no financials. */
  unmatched: string[];
  /**
   * Where the ledger's money went. Every figure is a signed contribution to
   * `ledgerNet` (costs negative), so ledgerNet = attributed + unlinked + overhead + stock.
   */
  totals: {
    ledgerNet: number;
    attributed: number;
    unlinked: number;
    overhead: number;
    stock: number;
    /** `stock` split: still for sale, and really watches kept (linked from the Collection tab). */
    stockForSale?: number;
    stockKept?: number;
    unlinkedSales: { label: string; ref: string; received: number; profit: number }[];
  };
  reconciliation: {
    blocks: number;
    ok: number;
    mismatches: { ref: string; expected: number; got: number }[];
  };
}

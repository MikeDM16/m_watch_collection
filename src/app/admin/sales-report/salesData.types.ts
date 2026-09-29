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

export interface SalesFinancials {
  version: 1;
  generatedAt: string;
  source: { file: string; mtime: string; sha256: string };
  /** Keyed by CollectionIndexEntry.modelFile. */
  byModel: Record<string, WatchFinancials>;
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
    unlinkedSales: { label: string; ref: string; received: number; profit: number }[];
  };
  reconciliation: {
    blocks: number;
    ok: number;
    mismatches: { ref: string; expected: number; got: number }[];
  };
}

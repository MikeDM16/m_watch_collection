/** What the ledger page hands its client editor. Types only. */

import type { WatchSummary } from "./buildFinancials";
import type { FigureDiff } from "./compareLedger";
import type {
  LedgerGroup,
  LedgerLine,
  LedgerSource,
  LedgerStore,
  LedgerWatch,
} from "./ledger.types";

/** One catalogue model's money, for the Ledger panel under its model editor. */
export interface ModelLedgerData {
  version: string;
  modelFile: string;
  legend: string;
  /** The ledger's watches that are this model (usually one). */
  watches: LedgerWatch[];
  /** Every line holding money for them. */
  lines: LedgerLine[];
  summaries: Record<string, WatchSummary>;
  /** For a line's holders and groups. */
  allWatches: LedgerWatch[];
  groups: LedgerGroup[];
  /** Where watches are bought, to name a watch's source. */
  sources: LedgerSource[];
  models: ModelOption[];
  /** The model file's public sale report, and whether its screenshot exists. */
  saleReport: { price: number; date: string; url?: string } | null;
  saleImage: boolean;
}

export type LedgerView = "lines" | "watches" | "compare" | "issues";

export interface ModelOption {
  modelFile: string;
  brand: string;
  legend: string;
  /** Has a sale report in the catalogue. */
  sold: boolean;
}

export interface CompareData {
  /** When the workbook was last synced (null: never). */
  syncedAt: string | null;
  /** The workbook changed since that sync. */
  stale: boolean;
  figureDiffs: FigureDiff[];
  paired: number;
  workbookOnly: LedgerLine[];
  ledgerOnly: LedgerLine[];
  /** The workbook's watches, by id, to name a line's holders before it is pulled in. */
  workbookWatches: Record<string, { label: string; modelFile: string | null }>;
  /** What did not add up when the workbook was last read. */
  problems: string[];
}

export interface LedgerPageData {
  store: LedgerStore;
  version: string;
  view: LedgerView;
  /** Narrow the lines to one watch's. */
  watchFilter: string | null;
  models: ModelOption[];
  summaries: Record<string, WatchSummary>;
  issues: string[];
  /** Catalogue sales with no sold watch in the ledger. */
  unmatched: string[];
  compare: CompareData | null;
}

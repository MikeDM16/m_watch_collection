/**
 * types.ts — the shape of `.sales/ledger.json`, as written by 1_parse_ledger.py.
 *
 * Only the scripts read the raw dump. What the admin pages read (matches,
 * overrides, financials) is typed in src/app/admin/sales-report/salesData.types.ts.
 */

export interface LedgerRow {
  row: number;
  /** Column C: an id, the platform ("Chrono24"), or an "x" mark. */
  id: string | null;
  /** Column D, whitespace collapsed. */
  text: string;
  bold: boolean;
  /** Column E, money in. Null when empty or typed as text (Excel's SUM skips text too). */
  received: number | null;
  /** Column F, money out. */
  spent: number | null;
  receivedFormula?: string;
  spentFormula?: string;
  receivedText?: string;
  spentText?: string;
  /** Column G as an ISO date. */
  date: string | null;
  /** Column H: a note or a quoted hammer. Never a total. */
  note: string | null;
}

export interface LedgerBlock {
  /** "R25!188" — sheet and first row. */
  id: string;
  sheet: string;
  firstRow: number;
  lastRow: number;
  totalRow: number;
  caption: string | null;
  /** The total Excel cached, and the one recomputed from the rows. */
  total: number | null;
  computedTotal: number;
  exact: boolean;
  rows: LedgerRow[];
}

/** A row of the user's own per-watch summary table (R24–R26, columns L–O). */
export interface SummaryHint {
  sheet: string;
  row: number;
  name: string;
  hammer: number | null;
  received: number;
  gain: number | null;
  formulas: Partial<Record<"L" | "M" | "N" | "P", string>>;
  /** Ledger cells its formulas reach, e.g. "R25!F194". */
  refs: string[];
}

export interface LedgerIssue {
  kind: string;
  cell: string;
  detail: string;
}

export interface LedgerDump {
  version: 1;
  generatedAt: string;
  source: { file: string; mtime: string; sha256: string };
  sheets: string[];
  blocks: LedgerBlock[];
  hints: SummaryHint[];
  issues: LedgerIssue[];
}

import { CollectionIndexEntry } from "@/app/data/collectionIndex";

import type { WatchFinancials } from "./salesData.types";

// ─── Pure price helpers (moved verbatim from page.tsx) ──────────────────────
export const priceOf = (e: CollectionIndexEntry): number => e.saleReport!.price;

// en-GB to match the public sales table, which renders the same figures.
// de-GB grouping ("€108.877") read as a decimal against the site's "€108,877".
export const formatPrice = (n: number): string => "€" + Math.round(n).toLocaleString("en-GB");

export function meanOf(entries: CollectionIndexEntry[]): number {
  if (entries.length === 0) return 0;
  return entries.reduce((sum, e) => sum + priceOf(e), 0) / entries.length;
}

export function medianOf(entries: CollectionIndexEntry[]): number {
  if (entries.length === 0) return 0;
  const sorted = [...entries].map(priceOf).sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

export function minBy(entries: CollectionIndexEntry[]): CollectionIndexEntry {
  return entries.reduce((best, e) => (priceOf(e) < priceOf(best) ? e : best));
}

export function maxBy(entries: CollectionIndexEntry[]): CollectionIndexEntry {
  return entries.reduce((best, e) => (priceOf(e) > priceOf(best) ? e : best));
}

export function totalOf(entries: CollectionIndexEntry[]): number {
  return entries.reduce((sum, e) => sum + priceOf(e), 0);
}

export function groupBy<K>(
  entries: CollectionIndexEntry[],
  keyFn: (e: CollectionIndexEntry) => K,
): Map<K, CollectionIndexEntry[]> {
  const map = new Map<K, CollectionIndexEntry[]>();
  for (const e of entries) {
    const k = keyFn(e);
    const arr = map.get(k);
    if (arr) arr.push(e);
    else map.set(k, [e]);
  }
  return map;
}

export const TOP_BRANDS_LIMIT = 20;

// ─── Date parsing (single canonical parser for "DD/MM/YYYY") ────────────────
// Mirrors collectionService.parseDate semantics (local time, month is 0-based).
export function parseSaleDate(dateStr: string): Date {
  const [d, m, y] = (dateStr || "").split("/").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

export const saleDateOf = (e: CollectionIndexEntry): Date => parseSaleDate(e.saleReport!.date);
export const saleYearOf = (e: CollectionIndexEntry): number => saleDateOf(e).getFullYear();

const MONTHS_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const pad = (n: number): string => String(n).padStart(2, "0");

// ─── Calendar helpers (no date library) ─────────────────────────────────────
const startOfDay = (d: Date): Date => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const startOfMonth = (d: Date): Date => new Date(d.getFullYear(), d.getMonth(), 1);
const startOfNextMonth = (d: Date): Date => new Date(d.getFullYear(), d.getMonth() + 1, 1);
const startOfYear = (d: Date): Date => new Date(d.getFullYear(), 0, 1);
const startOfNextYear = (d: Date): Date => new Date(d.getFullYear() + 1, 0, 1);
const startOfQuarter = (d: Date): Date =>
  new Date(d.getFullYear(), Math.floor(d.getMonth() / 3) * 3, 1);
const startOfNextQuarter = (d: Date): Date =>
  new Date(d.getFullYear(), Math.floor(d.getMonth() / 3) * 3 + 3, 1);
const addMonths = (d: Date, n: number): Date =>
  new Date(d.getFullYear(), d.getMonth() + n, d.getDate());
const addYears = (d: Date, n: number): Date =>
  new Date(d.getFullYear() + n, d.getMonth(), d.getDate());
const addDays = (d: Date, n: number): Date =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);

// ─── Time windows ───────────────────────────────────────────────────────────
export type TimeWindowId =
  | "thisMonth"
  | "thisQuarter"
  | "lastQuarter"
  | "ytd"
  | "lastYear"
  | "last12Months"
  | "all"
  | string; // dynamic per-year ids such as "y2024"

export interface DateRange {
  start: Date;
  end: Date;
}

export interface TimeWindowOption {
  id: TimeWindowId;
  label: string;
  // Half-open range [start, end); `null` means "all time" (no filtering).
  range: (now: Date) => DateRange | null;
}

export const WINDOW_OPTIONS: TimeWindowOption[] = [
  {
    id: "thisMonth",
    label: "This month",
    range: (n) => ({ start: startOfMonth(n), end: startOfNextMonth(n) }),
  },
  {
    id: "thisQuarter",
    label: "This quarter",
    range: (n) => ({ start: startOfQuarter(n), end: startOfNextQuarter(n) }),
  },
  {
    id: "lastQuarter",
    label: "Last quarter",
    range: (n) => {
      const s = startOfQuarter(n);
      return { start: addMonths(s, -3), end: s };
    },
  },
  {
    id: "ytd",
    label: "This year",
    range: (n) => ({ start: startOfYear(n), end: startOfNextYear(n) }),
  },
  {
    id: "lastYear",
    label: "Last year",
    range: (n) => ({ start: startOfYear(addYears(n, -1)), end: startOfYear(n) }),
  },
  {
    id: "last12Months",
    label: "Last 12 months",
    range: (n) => ({ start: addMonths(startOfMonth(n), -11), end: startOfNextMonth(n) }),
  },
  { id: "all", label: "All time", range: () => null },
];

export const DEFAULT_WINDOW_ID: TimeWindowId = "all";

// One window per distinct sale year present in the data (newest first).
export function yearWindowOptions(entries: CollectionIndexEntry[]): TimeWindowOption[] {
  const years = new Set<number>();
  for (const e of entries) {
    const y = saleDateOf(e).getFullYear();
    if (!Number.isNaN(y)) years.add(y);
  }
  return [...years]
    .sort((a, b) => b - a)
    .map((y) => ({
      id: `y${y}`,
      label: String(y),
      range: () => ({ start: new Date(y, 0, 1), end: new Date(y + 1, 0, 1) }),
    }));
}

export function findWindow(id: TimeWindowId, entries: CollectionIndexEntry[]): TimeWindowOption {
  return (
    WINDOW_OPTIONS.find((o) => o.id === id) ??
    yearWindowOptions(entries).find((o) => o.id === id) ??
    WINDOW_OPTIONS[WINDOW_OPTIONS.length - 1] // fall back to "All time"
  );
}

export function entriesInWindow(
  entries: CollectionIndexEntry[],
  opt: TimeWindowOption,
  now: Date = new Date(),
): CollectionIndexEntry[] {
  const r = opt.range(now);
  if (!r) return entries;
  const start = r.start.getTime();
  const end = r.end.getTime();
  return entries.filter((e) => {
    const t = saleDateOf(e).getTime();
    return !Number.isNaN(t) && t >= start && t < end;
  });
}

// ─── Adaptive time-bucketing for the over-time chart ────────────────────────
export type Granularity = "day" | "month" | "year";

export function pickGranularity(opt: TimeWindowOption, now: Date = new Date()): Granularity {
  if (opt.id === "thisMonth") return "day";
  if (opt.id === "all") return "year";
  const r = opt.range(now);
  if (!r) return "year";
  const days = (r.end.getTime() - r.start.getTime()) / 86_400_000;
  if (days <= 45) return "day";
  if (days <= 400) return "month";
  return "year";
}

const bucketStartOf = (d: Date, g: Granularity): Date =>
  g === "day" ? startOfDay(d) : g === "month" ? startOfMonth(d) : startOfYear(d);

const nextBucketStart = (d: Date, g: Granularity): Date =>
  g === "day" ? addDays(d, 1) : g === "month" ? startOfNextMonth(d) : startOfNextYear(d);

const bucketKey = (d: Date, g: Granularity): string =>
  g === "day"
    ? `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
    : g === "month"
      ? `${d.getFullYear()}-${pad(d.getMonth() + 1)}`
      : `${d.getFullYear()}`;

function bucketLabel(d: Date, g: Granularity, multiYear: boolean): string {
  if (g === "year") return String(d.getFullYear());
  if (g === "day") return `${pad(d.getDate())} ${MONTHS_SHORT[d.getMonth()]}`;
  return multiYear
    ? `${MONTHS_SHORT[d.getMonth()]} ${String(d.getFullYear()).slice(2)}`
    : MONTHS_SHORT[d.getMonth()];
}

export interface TimeBucket {
  key: string;
  label: string;
  revenue: number;
  count: number;
}

export interface ProfitBucket {
  key: string;
  label: string;
  /** Net cost (cost − refunds) and profit, which together make the payout. */
  cost: number;
  profit: number;
  received: number;
  count: number;
}

// Resolve the span the chart should draw. For fixed windows we cap the end at the
// current bucket so we never project empty future buckets; for "all time" we span
// the data's own min/max sale date.
function bucketingRange(
  entries: CollectionIndexEntry[],
  opt: TimeWindowOption,
  g: Granularity,
  now: Date,
): DateRange | null {
  const wr = opt.range(now);
  if (wr) {
    const cap = nextBucketStart(bucketStartOf(now, g), g).getTime();
    const end = Math.min(wr.end.getTime(), cap);
    if (end <= wr.start.getTime()) return null;
    return { start: bucketStartOf(wr.start, g), end: new Date(end) };
  }
  let min = Infinity;
  let max = -Infinity;
  for (const e of entries) {
    const t = saleDateOf(e).getTime();
    if (Number.isNaN(t)) continue;
    if (t < min) min = t;
    if (t > max) max = t;
  }
  if (!Number.isFinite(min)) return null;
  return {
    start: bucketStartOf(new Date(min), g),
    end: nextBucketStart(bucketStartOf(new Date(max), g), g),
  };
}

// Zero-filled buckets across the span, so lines and bars stay continuous. Every
// over-time chart shares it; each fills in its own metric.
function emptyBuckets<T>(
  entries: CollectionIndexEntry[],
  opt: TimeWindowOption,
  now: Date,
  init: (key: string, label: string) => T,
): { g: Granularity; buckets: Map<string, T> } | null {
  const g = pickGranularity(opt, now);
  const range = bucketingRange(entries, opt, g, now);
  if (!range) return null;

  const multiYear = range.start.getFullYear() !== new Date(range.end.getTime() - 1).getFullYear();

  const buckets = new Map<string, T>();
  for (let cur = range.start; cur.getTime() < range.end.getTime(); cur = nextBucketStart(cur, g)) {
    const key = bucketKey(cur, g);
    buckets.set(key, init(key, bucketLabel(cur, g, multiYear)));
  }
  return { g, buckets };
}

// Revenue + count per time bucket.
export function bucketSalesOverTime(
  entries: CollectionIndexEntry[],
  opt: TimeWindowOption,
  now: Date = new Date(),
): TimeBucket[] {
  const sk = emptyBuckets(entries, opt, now, (key, label) => ({
    key,
    label,
    revenue: 0,
    count: 0,
  }));
  if (!sk) return [];

  for (const e of entries) {
    const d = saleDateOf(e);
    if (Number.isNaN(d.getTime())) continue;
    const b = sk.buckets.get(bucketKey(d, sk.g));
    if (b) {
      b.revenue += priceOf(e);
      b.count += 1;
    }
  }
  return [...sk.buckets.values()];
}

// Net cost and profit per time bucket, over the sales that have a P&L.
export function bucketProfitOverTime(
  entries: CollectionIndexEntry[],
  fin: Financials,
  opt: TimeWindowOption,
  now: Date = new Date(),
): ProfitBucket[] {
  const sk = emptyBuckets(entries, opt, now, (key, label) => ({
    key,
    label,
    cost: 0,
    profit: 0,
    received: 0,
    count: 0,
  }));
  if (!sk) return [];

  for (const e of entries) {
    const f = fin[e.modelFile];
    const d = saleDateOf(e);
    if (!f || Number.isNaN(d.getTime())) continue;
    const b = sk.buckets.get(bucketKey(d, sk.g));
    if (b) {
      b.cost += netCostOf(f);
      b.profit += f.profit;
      b.received += f.received;
      b.count += 1;
    }
  }
  return [...sk.buckets.values()];
}

// ─── Brand chart dataset ────────────────────────────────────────────────────
export interface BrandDatum {
  label: string;
  revenue: number;
  count: number;
}

export function brandBreakdown(
  entries: CollectionIndexEntry[],
  opts?: { top?: number },
): BrandDatum[] {
  const top = opts?.top ?? 10;
  return [...groupBy(entries, (e) => e.brand).entries()]
    .map(([label, es]) => ({ label, revenue: totalOf(es), count: es.length }))
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, top);
}

// ─── Windowed report (tiles, top/bottom cards, tables) ──────────────────────
export interface YearRow {
  year: number;
  count: number;
  total: number;
  mean: number;
  min: CollectionIndexEntry;
  max: CollectionIndexEntry;
}

export interface BrandRow {
  label: string;
  count: number;
  total: number;
  mean: number;
  min: CollectionIndexEntry;
  max: CollectionIndexEntry;
  isOther: boolean;
}

export interface SalesReport {
  count: number;
  total: number;
  mean: number;
  median: number;
  highest: CollectionIndexEntry | null;
  lowest: CollectionIndexEntry | null;
  yearRows: YearRow[];
  brandRows: BrandRow[];
}

const EMPTY_REPORT: SalesReport = {
  count: 0,
  total: 0,
  mean: 0,
  median: 0,
  highest: null,
  lowest: null,
  yearRows: [],
  brandRows: [],
};

export function computeReport(entries: CollectionIndexEntry[]): SalesReport {
  // Guard the empty window: minBy/maxBy reduce without a seed and would throw on [].
  if (entries.length === 0) return EMPTY_REPORT;

  const byYear = groupBy(entries, saleYearOf);
  const yearRows: YearRow[] = [...byYear.entries()]
    .sort(([a], [b]) => b - a)
    .map(([year, es]) => ({
      year,
      count: es.length,
      total: totalOf(es),
      mean: meanOf(es),
      min: minBy(es),
      max: maxBy(es),
    }));

  const brandGroups = [...groupBy(entries, (e) => e.brand).entries()].sort(
    ([, a], [, b]) => b.length - a.length,
  );
  const topBrands = brandGroups.slice(0, TOP_BRANDS_LIMIT);
  const otherBrands = brandGroups.slice(TOP_BRANDS_LIMIT);
  const brandRows: BrandRow[] = topBrands.map(([brand, es]) => ({
    label: brand,
    count: es.length,
    total: totalOf(es),
    mean: meanOf(es),
    min: minBy(es),
    max: maxBy(es),
    isOther: false,
  }));
  if (otherBrands.length > 0) {
    const otherEntries = otherBrands.flatMap(([, es]) => es);
    brandRows.push({
      label: `Other (${otherBrands.length} brands)`,
      count: otherEntries.length,
      total: totalOf(otherEntries),
      mean: meanOf(otherEntries),
      min: minBy(otherEntries),
      max: maxBy(otherEntries),
      isOther: true,
    });
  }

  return {
    count: entries.length,
    total: totalOf(entries),
    mean: meanOf(entries),
    median: medianOf(entries),
    highest: maxBy(entries),
    lowest: minBy(entries),
    yearRows,
    brandRows,
  };
}

// ─── Profitability (.sales/financials.json, when the ledger has been synced) ─
// Keyed by CollectionIndexEntry.modelFile. The window still filters on
// saleReport.date, so a sale's profit lands in the period its auction did.
export type Financials = Record<string, WatchFinancials>;

/** Cost net of refunds: what separates the payout from the profit. */
export const netCostOf = (f: WatchFinancials): number => f.cost - f.refunds;

/** A brand needs this many sales with a P&L before its margin is ranked. */
export const MIN_BRAND_SALES = 3;

/** Flags that make a sale's margin a bookkeeping artefact rather than a result. */
const UNRANKED_FLAGS = ["no-purchase", "negative-cost"];

/** formatPrice with a proper minus for losses: "−€50", not "€-50" — and never "−€0". */
export const formatMoney = (n: number): string => {
  const r = Math.round(n);
  return r < 0 ? `−${formatPrice(-r)}` : formatPrice(r);
};

export const formatPercent = (r: number | null): string =>
  r === null ? "—" : `${(r * 100).toFixed(1)}%`;

const medianNum = (xs: number[]): number => {
  const s = [...xs].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? (s[mid - 1] + s[mid]) / 2 : s[mid];
};

export interface ProfitTotals {
  /** Sales in the window, and how many of them have a P&L. */
  count: number;
  covered: number;
  received: number;
  /** Net of refunds. */
  cost: number;
  profit: number;
  /** Σprofit ÷ Σreceived — the ledger summary tables' own definition. */
  margin: number | null;
  /** Σprofit ÷ Σcost. */
  roi: number | null;
  medianDaysHeld: number | null;
  meanDaysHeld: number | null;
}

export function profitTotals(entries: CollectionIndexEntry[], fin: Financials): ProfitTotals {
  const rows = entries.flatMap((e) => (fin[e.modelFile] ? [fin[e.modelFile]] : []));
  const received = rows.reduce((s, f) => s + f.received, 0);
  const cost = rows.reduce((s, f) => s + netCostOf(f), 0);
  const profit = rows.reduce((s, f) => s + f.profit, 0);
  const days = rows.flatMap((f) => (f.daysHeld === null ? [] : [f.daysHeld]));
  return {
    count: entries.length,
    covered: rows.length,
    received,
    cost,
    profit,
    margin: received > 0 ? profit / received : null,
    roi: cost >= 1 ? profit / cost : null,
    medianDaysHeld: days.length ? medianNum(days) : null,
    meanDaysHeld: days.length ? days.reduce((s, d) => s + d, 0) / days.length : null,
  };
}

export interface BrandProfitRow extends ProfitTotals {
  brand: string;
}

/** Every brand with at least one sale with a P&L, most profitable first. */
export function brandProfitability(
  entries: CollectionIndexEntry[],
  fin: Financials,
): BrandProfitRow[] {
  return [...groupBy(entries, (e) => e.brand).entries()]
    .map(([brand, es]) => ({ brand, ...profitTotals(es, fin) }))
    .filter((r) => r.covered > 0)
    .sort((a, b) => b.profit - a.profit);
}

export interface Flip {
  entry: CollectionIndexEntry;
  f: WatchFinancials;
}

/** The sales with a P&L, joined to their catalogue entry. */
export function withFinancials(entries: CollectionIndexEntry[], fin: Financials): Flip[] {
  return entries.flatMap((entry) =>
    fin[entry.modelFile] ? [{ entry, f: fin[entry.modelFile] }] : [],
  );
}

export function flips(
  entries: CollectionIndexEntry[],
  fin: Financials,
  n = 5,
): { byProfit: Flip[]; byMargin: Flip[]; worst: Flip[] } {
  const all = withFinancials(entries, fin);
  const byProfit = [...all].sort((a, b) => b.f.profit - a.f.profit);
  // A watch with no purchase line, or with costs netting negative, would top any
  // margin ranking on a bookkeeping gap, so it sits the margin ranking out.
  const byMargin = all
    .filter((x) => x.f.margin !== null && !UNRANKED_FLAGS.some((flag) => x.f.flags.includes(flag)))
    .sort((a, b) => b.f.margin! - a.f.margin!);
  return {
    byProfit: byProfit.slice(0, n),
    byMargin: byMargin.slice(0, n),
    worst: [...byProfit].reverse().slice(0, n),
  };
}

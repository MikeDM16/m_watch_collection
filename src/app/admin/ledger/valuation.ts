/**
 * What the kept collection is worth: the ledger's kept watches, each valued at
 * Chrono24's estimate when the market store links one to it, and at its cost
 * otherwise. Pure — no fs, no server-only — so the valuation report script
 * and the admin pages share it.
 *
 * Cost is the watch's ledger share of every line it holds (purchase, service,
 * strap…), from `watchSummaries`. A watch kept out of a lot uses its share at
 * cost, never the "virtually free" effective figure: the same convention the
 * "Money over time" series follow.
 */

import { watchSummaries } from "./buildFinancials";
import type { LedgerStore } from "./ledger.types";
import type { HistoryPoint, MarketItem, MarketStore } from "./market.types";

/** The catalogue fields a valuation needs, per model. */
export interface ValuationModel {
  modelFile: string;
  brand: string;
  legend: string;
  year?: number;
  srcImage?: string;
}

export interface ValuationRow {
  watchId: string;
  /** The ledger's label for the watch. */
  label: string;
  modelFile: string | null;
  model: ValuationModel | null;
  acquired: string | null;
  cost: number;
  /** The linked Chrono24 item, if any. */
  item: MarketItem | null;
  /** The value the report uses: the market estimate when tracked, cost otherwise. */
  value: number;
  basis: "chrono24" | "cost";
  /** Market value − cost, only for tracked watches. */
  gain: number | null;
  gainPct: number | null;
}

export interface ValuationTotals {
  count: number;
  tracked: number;
  /** Σ value: market estimate where tracked, cost elsewhere. */
  value: number;
  cost: number;
  trackedValue: number;
  trackedCost: number;
  /** Unrealized gain over the tracked watches only. */
  gain: number;
  gainPct: number | null;
}

export interface Valuation {
  /** The kept watches: what the report covers. */
  rows: ValuationRow[];
  /** Watches bought to sell that Chrono24 values: shown apart, never in the totals. */
  stock: ValuationRow[];
  totals: ValuationTotals;
  /** Chrono24 items still in the collection but linked to no ledger watch. */
  unlinked: MarketItem[];
  /** Chrono24 items gone from the collection at the last run. */
  gone: MarketItem[];
  /** The latest snapshot's date, or null before the first run. */
  asOf: string | null;
}

const round2 = (n: number) => Math.round(n * 100) / 100;
const pct = (gain: number, cost: number) => (cost > 0 ? round2((gain / cost) * 100) : null);

/** itemId of the live Chrono24 item linked to each kept watch. */
export function linkedItems(market: MarketStore): Map<string, MarketItem> {
  const out = new Map<string, MarketItem>();
  for (const [itemId, link] of Object.entries(market.links)) {
    const item = market.items[itemId];
    if (!link.watchId || !item || item.gone) continue;
    if (!out.has(link.watchId)) out.set(link.watchId, item);
  }
  return out;
}

export function buildValuation(
  store: LedgerStore,
  market: MarketStore | null,
  models: ValuationModel[],
): Valuation {
  const byFile = new Map(models.map((m) => [m.modelFile, m]));
  const money = watchSummaries(store);
  const linked = market ? linkedItems(market) : new Map<string, MarketItem>();

  const rowOf = (w: LedgerStore["watches"][number]): ValuationRow => {
    const cost = round2(money[w.id]?.cost ?? 0);
    const item = linked.get(w.id) ?? null;
    const gain = item ? round2(item.value - cost) : null;
    return {
      watchId: w.id,
      label: w.label,
      modelFile: w.modelFile,
      model: w.modelFile ? (byFile.get(w.modelFile) ?? null) : null,
      acquired: w.acquired ?? null,
      cost,
      item,
      value: item ? item.value : cost,
      basis: item ? "chrono24" : "cost",
      gain,
      gainPct: gain === null ? null : pct(gain, cost),
    };
  };
  const byBrandYear = (a: ValuationRow, b: ValuationRow) =>
    (a.model?.brand ?? a.label).localeCompare(b.model?.brand ?? b.label) ||
    (a.model?.year ?? 0) - (b.model?.year ?? 0) ||
    a.label.localeCompare(b.label);

  const rows = store.watches
    .filter((w) => w.status === "kept")
    .map(rowOf)
    .sort(byBrandYear);
  const stock = store.watches
    .filter((w) => w.status === "for-sale" && linked.has(w.id))
    .map(rowOf)
    .sort(byBrandYear);

  const tracked = rows.filter((r) => r.basis === "chrono24");
  const sum = (rs: ValuationRow[], f: (r: ValuationRow) => number) =>
    round2(rs.reduce((s, r) => s + f(r), 0));
  const trackedValue = sum(tracked, (r) => r.value);
  const trackedCost = sum(tracked, (r) => r.cost);
  const gain = round2(trackedValue - trackedCost);

  // Linked to any ledger watch: a kept one (in the rows) or stock for sale.
  const ledgerIds = new Set(store.watches.map((w) => w.id));
  const linkedIds = new Set(
    Object.entries(market?.links ?? {})
      .filter(([, l]) => l.watchId && ledgerIds.has(l.watchId))
      .map(([id]) => id),
  );
  const items = Object.values(market?.items ?? {});

  return {
    rows,
    stock,
    totals: {
      count: rows.length,
      tracked: tracked.length,
      value: sum(rows, (r) => r.value),
      cost: sum(rows, (r) => r.cost),
      trackedValue,
      trackedCost,
      gain,
      gainPct: pct(gain, trackedCost),
    },
    unlinked: items.filter((i) => !i.gone && !linkedIds.has(i.itemId)),
    gone: items.filter((i) => i.gone),
    asOf: market?.snapshots.at(-1)?.at ?? null,
  };
}

/**
 * The collection's value over time: Chrono24's own series, with each run's
 * snapshot total laid over it on its day. Oldest first.
 */
export function marketSeries(market: MarketStore): HistoryPoint[] {
  const byDate = new Map<string, HistoryPoint>();
  for (const p of market.collectionHistory ?? []) byDate.set(p.date, p);
  for (const s of market.snapshots) byDate.set(s.at, { date: s.at, value: s.total });
  return [...byDate.values()].sort((a, b) => a.date.localeCompare(b.date));
}

/** One month of the kept watches' worth: Chrono24's value (cost where untracked) and their cost. */
export interface ValuationPoint {
  /** The month's last day, or today for the current month. */
  date: string;
  /** "Mar 2024". */
  label: string;
  value: number;
  cost: number;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** A history's value on a day: its last point on or before it, else its first. */
function valueAt(history: HistoryPoint[], day: string): number | null {
  if (!history.length) return null;
  let v = history[0].value;
  for (const p of history) {
    if (p.date > day) break;
    v = p.value;
  }
  return v;
}

/**
 * Month by month, from the first kept watch's purchase to today: what the
 * watches kept by then were worth on Chrono24 — each from its model's history,
 * at cost when Chrono24 does not track it — and what they cost. A watch counts
 * from the month it was bought. Cost is as recorded today, extras included. The
 * last point is today's valuation exactly.
 */
export function valueOverTime(v: Valuation, today: string): ValuationPoint[] {
  const dated = v.rows.map((r) => ({ r, from: r.acquired ?? today }));
  const first = dated.reduce((m, d) => (d.from < m ? d.from : m), today);
  const out: ValuationPoint[] = [];
  let y = Number(first.slice(0, 4));
  let m = Number(first.slice(5, 7));
  const endKey = today.slice(0, 7);
  for (;;) {
    const key = `${y}-${String(m).padStart(2, "0")}`;
    const isLast = key >= endKey;
    const lastDay = new Date(Date.UTC(y, m, 0)).toISOString().slice(0, 10);
    const day = isLast ? today : lastDay;
    let value = 0;
    let cost = 0;
    for (const { r, from } of dated) {
      if (from > day) continue;
      cost += r.cost;
      value += isLast || !r.item ? r.value : (valueAt(r.item.history, day) ?? r.value);
    }
    out.push({
      date: day,
      label: `${MONTHS[m - 1]} ${y}`,
      value: round2(value),
      cost: round2(cost),
    });
    if (isLast) break;
    if (++m > 12) {
      m = 1;
      y++;
    }
  }
  return out;
}

/** A row as a page needs it: the item without its long history. */
const lean = (r: ValuationRow): ValuationRow =>
  r.item ? { ...r, item: { ...r.item, history: [] } } : r;

/** Everything the admin's market section shows, ready to hand to a client component. */
export interface MarketView {
  rows: ValuationRow[];
  stock: ValuationRow[];
  totals: ValuationTotals;
  series: ValuationPoint[];
  asOf: string | null;
  /** Days from the last export to the day the view was built. */
  asOfDays: number | null;
  /** Chrono24's own total for its whole collection (stock included), at the last run. */
  c24Total: number | null;
  c24Range: { min: number; max: number } | null;
  /** Chrono24 watches linked to no ledger watch, by title. */
  unlinked: string[];
}

export function marketView(
  store: LedgerStore,
  market: MarketStore,
  models: ValuationModel[],
  today: string,
): MarketView {
  const v = buildValuation(store, market, models);
  const last = market.snapshots.at(-1);
  return {
    rows: v.rows.map(lean),
    stock: v.stock.map(lean),
    totals: v.totals,
    series: valueOverTime(v, today),
    asOf: v.asOf,
    asOfDays: v.asOf ? Math.round((Date.parse(today) - Date.parse(v.asOf)) / 86_400_000) : null,
    c24Total: last?.total ?? null,
    c24Range: last?.range ?? null,
    unlinked: v.unlinked.map((i) => i.title),
  };
}

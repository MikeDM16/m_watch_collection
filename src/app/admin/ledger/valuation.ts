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
  rows: ValuationRow[];
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

  const rows: ValuationRow[] = store.watches
    .filter((w) => w.status === "kept")
    .map((w) => {
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
      } satisfies ValuationRow;
    })
    .sort(
      (a, b) =>
        (a.model?.brand ?? a.label).localeCompare(b.model?.brand ?? b.label) ||
        (a.model?.year ?? 0) - (b.model?.year ?? 0) ||
        a.label.localeCompare(b.label),
    );

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

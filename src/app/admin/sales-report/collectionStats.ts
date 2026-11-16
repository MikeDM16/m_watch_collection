/**
 * Money over time: the ledger's day-by-day money (financials.json `daily`) as
 * window totals, running balances and a per-year table, plus the watches kept
 * and the ones not sold yet. Pure functions; the dashboard memoises them.
 *
 * "Spent" is everything spent on the hobby: the year tabs (watches bought to
 * sell, their extras, overhead) and the Collection tab (watches kept).
 */

import type { DailyMoney, KeptWatchFinancials, StockItemFinancials } from "./salesData.types";
import {
  cumulativeOverTime,
  parseIsoDate,
  type BalanceBucket,
  type TimeWindowOption,
} from "./salesStats";

/** Files synced before the Collection tab was read carry no collection fields. */
const collectionSpentOf = (d: DailyMoney): number => d.collectionSpent ?? 0;
const keptDeltaOf = (d: DailyMoney): number => d.keptDelta ?? 0;

export interface MoneyTotals {
  /** Flows inside the window. `spent` includes `keptSpent`. */
  received: number;
  spent: number;
  keptSpent: number;
  /** Capital at the window's end (or today): bought to sell, and kept. */
  stockAtEnd: number;
  keptAtEnd: number;
  /** The same flows over all time, for comparison. */
  allReceived: number;
  allSpent: number;
}

export function moneyTotals(
  daily: DailyMoney[],
  opt: TimeWindowOption,
  now: Date = new Date(),
): MoneyTotals {
  const r = opt.range(now);
  const start = r ? r.start.getTime() : -Infinity;
  const end = r ? Math.min(r.end.getTime(), now.getTime() + 1) : Infinity;
  const out: MoneyTotals = {
    received: 0,
    spent: 0,
    keptSpent: 0,
    stockAtEnd: 0,
    keptAtEnd: 0,
    allReceived: 0,
    allSpent: 0,
  };
  for (const d of daily) {
    const t = parseIsoDate(d.date).getTime();
    const spent = d.spent + collectionSpentOf(d);
    out.allReceived += d.received;
    out.allSpent += spent;
    if (t >= end) continue;
    out.stockAtEnd += d.stockDelta;
    out.keptAtEnd += keptDeltaOf(d);
    if (t >= start) {
      out.received += d.received;
      out.spent += spent;
      out.keptSpent += collectionSpentOf(d);
    }
  }
  return out;
}

export type MoneyBucket = BalanceBucket<"received" | "spent" | "keptSpent">;
export type CapitalBucket = BalanceBucket<"stock" | "kept">;

/** Everything spent (of which on kept watches) and received to date, per period. */
export function moneyOverTime(
  daily: DailyMoney[],
  opt: TimeWindowOption,
  now?: Date,
): MoneyBucket[] {
  return cumulativeOverTime(
    daily.map((d) => ({
      date: d.date,
      received: d.received,
      spent: d.spent + collectionSpentOf(d),
      keptSpent: collectionSpentOf(d),
    })),
    ["received", "spent", "keptSpent"] as const,
    opt,
    now,
  );
}

/** Capital held in watches at cost, bought to sell and kept, per period. */
export function capitalOverTime(
  daily: DailyMoney[],
  opt: TimeWindowOption,
  now?: Date,
): CapitalBucket[] {
  return cumulativeOverTime(
    daily.map((d) => ({ date: d.date, stock: d.stockDelta, kept: keptDeltaOf(d) })),
    ["stock", "kept"] as const,
    opt,
    now,
  );
}

export interface YearMoneyRow {
  year: number;
  received: number;
  /** Everything spent, kept watches included. */
  spent: number;
  /** Of which on watches kept (the Collection tab). */
  keptSpent: number;
  /** received − spent: what the year added to (or took from) the hobby's cash. */
  net: number;
  /** Capital on 31 December (today, for this year), at cost. */
  stockAtYearEnd: number;
  keptAtYearEnd: number;
}

/** One row per year with any money, newest first — the workbook's Resumo, by row date. */
export function yearMoneyRows(daily: DailyMoney[]): YearMoneyRow[] {
  const rows = new Map<number, YearMoneyRow>();
  let stock = 0;
  let kept = 0;
  for (const d of [...daily].sort((a, b) => a.date.localeCompare(b.date))) {
    const year = Number(d.date.slice(0, 4));
    let row = rows.get(year);
    if (!row) {
      row = {
        year,
        received: 0,
        spent: 0,
        keptSpent: 0,
        net: 0,
        stockAtYearEnd: 0,
        keptAtYearEnd: 0,
      };
      rows.set(year, row);
    }
    stock += d.stockDelta;
    kept += keptDeltaOf(d);
    row.received += d.received;
    row.spent += d.spent + collectionSpentOf(d);
    row.keptSpent += collectionSpentOf(d);
    row.net = row.received - row.spent;
    row.stockAtYearEnd = stock;
    row.keptAtYearEnd = kept;
  }
  return [...rows.values()].sort((a, b) => b.year - a.year);
}

/** Whole days from an ISO date to today. */
export function daysSince(iso: string | null, now: Date = new Date()): number | null {
  if (!iso) return null;
  const t = parseIsoDate(iso).getTime();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return Math.max(0, Math.round((today - t) / 86_400_000));
}

/** "3 y 2 m", "5 m", "12 d". */
export function formatHeld(days: number | null): string {
  if (days === null) return "—";
  if (days < 31) return `${days} d`;
  const months = Math.floor(days / 30.44);
  if (months < 12) return `${months} m`;
  const y = Math.floor(months / 12);
  const m = months % 12;
  return m ? `${y} y ${m} m` : `${y} y`;
}

/** Cost besides the purchase itself: service, straps, shipping, box, fees. */
export const extrasOf = (s: StockItemFinancials | KeptWatchFinancials): number =>
  s.cost - (s.costByCategory.purchase ?? 0);

/** A stock item's capital still for sale: all of it, less any share a kept watch claims. */
export const forSaleNet = (s: StockItemFinancials): number => s.net * (1 - (s.keptShare ?? 0));

/** Newest first; undated last. */
export const byPurchaseDateDesc = <T extends { purchaseDate: string | null }>(xs: T[]): T[] =>
  [...xs].sort((a, b) => (b.purchaseDate ?? "").localeCompare(a.purchaseDate ?? ""));

const FLAG_TEXT: Record<string, string> = {
  "no-cost": "no money of its own in the Collection tab",
  "no-purchase": "its purchase is not in the Collection tab",
  "trade-in": "includes a watch traded in",
  undated: "no purchase date",
  "possible-double-count": "may also be in the year tabs",
};

/** A kept watch's notes, in words: what was noted beside it, and its flags. */
export function keptNotes(k: KeptWatchFinancials): string[] {
  const out: string[] = [];
  if (k.link) out.push(`bought in ${k.link.ref} (${k.link.label})`);
  if (k.paid !== null && Math.abs(k.paid - k.net) >= 1) out.push(`noted €${Math.round(k.paid)}`);
  if (Math.abs(k.effective - k.net) >= 1)
    out.push(`effectively €${Math.round(k.effective)} after its lot's sales`);
  for (const f of k.flags) out.push(FLAG_TEXT[f] ?? f);
  return out;
}

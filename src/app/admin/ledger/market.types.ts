/**
 * The market store: what Chrono24's Watch Collection says the kept watches are
 * worth, and how that moved over time. It lives in the gitignored
 * `.ledger/market.json`, beside `ledger.json` but in its own file, so a scrape
 * never trips the sha check that guards the back-office's edits to the ledger.
 *
 * Written by `scripts/chrono24/4_apply.ts`; read by the valuation report and,
 * later, the admin dashboards (`valuation.ts`).
 *
 * Types only, and always imported with `import type`. It holds purchase prices
 * and values: nothing of it may reach a bundle.
 */

/** One point of a value series. Chrono24 draws a line plus a low–high band. */
export interface HistoryPoint {
  /** ISO date, "2014-06-01". */
  date: string;
  value: number;
  low?: number;
  high?: number;
}

/** A watch as Chrono24's Watch Collection shows it, normalised from a scrape. */
export interface MarketItem {
  /** Chrono24's `itemId`, from `view-item.htm?itemId=…`. */
  itemId: string;
  url: string;
  /** "Breitling Chronomat", as Chrono24 titles it. */
  title: string;
  reference?: string;
  /** Verbatim, in whatever language the site served ("Usado"). */
  condition?: string;
  accessories?: string;
  manufacturer?: string;
  /** Chrono24's current estimate (the mean of its range), in euros. */
  value: number;
  /** The range Chrono24 gives around the estimate. */
  valueRange?: { min: number; max: number };
  /** What Chrono24 was told the watch cost. The ledger's cost is the truth. */
  purchasePrice?: number;
  /** ISO date as Chrono24 stores it: month precision, so usually the 1st. */
  purchaseDate?: string;
  /** "Dados do relógio", flattened: "caseDetails.caseMaterial" → "Ouro amarelo", verbatim. */
  specs: Record<string, string>;
  /** The model's value history, merged by date across runs and never truncated. */
  history: HistoryPoint[];
  /** Chrono24's 500px square photo, on its CDN. */
  imageUrl?: string;
  /** ISO dates. */
  firstSeen: string;
  lastSeen: string;
  /** No longer in the Chrono24 collection at the last run. */
  gone?: true;
}

/**
 * Which ledger watch a Chrono24 item is. `null` is a decision too: the item is
 * not one of the kept watches. Strongest first: user > claude > high.
 */
export interface MarketLink {
  watchId: string | null;
  by: "user" | "claude" | "high";
  reason?: string;
  /** ISO timestamp. */
  at: string;
}

/** What the collection was worth on one run day. A same-day re-run replaces it. */
export interface MarketSnapshot {
  /** ISO date. */
  at: string;
  /** Chrono24's collection total. */
  total: number;
  /** The range Chrono24 gives around the total. */
  range?: { min: number; max: number };
  /** Chrono24's own profit figure, from the purchase prices it was given. */
  c24Profit?: number;
  /** itemId → value. */
  values: Record<string, number>;
}

export interface MarketStore {
  version: 1;
  /** Keyed by itemId. */
  items: Record<string, MarketItem>;
  /** Keyed by itemId. */
  links: Record<string, MarketLink>;
  /** Oldest first. */
  snapshots: MarketSnapshot[];
  /** Chrono24's own series for the whole collection, merged by date. */
  collectionHistory?: HistoryPoint[];
}

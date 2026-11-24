/**
 * types.ts — the export file the snippet downloads (Chrono24's own API
 * responses, as read on 2026-11-24 from a HAR of the Watch Collection pages),
 * and `.chrono24/scrape.json`, the import's hand-off to the apply step.
 *
 * Only the fields the pipeline reads are typed; the raw export keeps the rest.
 */

import type { HistoryPoint, MarketItem } from "../../src/app/admin/ledger/market.types";

/** Chrono24 writes money as a string: { amount: "2373.59", currency: "EUR" }. */
export interface C24Money {
  amount: string;
  currency: string;
}

export interface C24Range {
  min: C24Money;
  mean: C24Money;
  max: C24Money;
}

export interface C24ChartPoint {
  amount: number;
  /** Midnight CET, written in UTC: "2014-06-30T22:00:00Z" is 1 July. */
  date: string;
  min?: number;
  max?: number;
  /** DOTTED before the purchase, SOLID after. */
  style?: string;
  isEventPoint?: boolean;
}

export interface C24Chart {
  chart: { priceChart: { currency: string; dataPoints: C24ChartPoint[] } };
}

/** `get-items.json?category=Owns`. */
export interface C24ListItem {
  watchCollectionItemId: number;
  name: string;
  purchaseDate?: string;
  value: C24Money;
  valueChangePercentage?: number;
  previewImage?: string;
}

/** `get-overview.json`. */
export interface C24Overview {
  owned: {
    value: C24Money;
    profitAmount?: C24Money;
    profitPercentage?: number;
    estimatedWorthChart?: C24Chart & { currentValuation?: C24Range };
  };
}

/** `get-item.json?watchCollectionItemId=…`. */
export interface C24Item {
  title: string;
  refId?: string;
  owned?: boolean;
  summary?: Record<string, { label: string; value: string } | undefined>;
  valuationData?: { marketValue?: C24Range; profitAmount?: C24Money; profitPercent?: number };
  chart?: C24Chart["chart"];
  images?: { imageUrl?: string; fullscreenImageUrl?: string }[];
  additionalData?: {
    manufacturer?: string;
    purchaseDetails?: {
      purchaseDate?: string;
      purchasePrice?: C24Money;
      purchaseCondition?: string;
      scopeOfDelivery?: string;
      placeOfPurchase?: string;
    };
    [section: string]: unknown;
  };
}

/** What export-snippet.js downloads. */
export interface C24Export {
  kind: "chrono24-watch-collection";
  version: 1;
  exportedAt: string;
  origin: string;
  locale?: string;
  items: { items: C24ListItem[] };
  overview: C24Overview;
  /** Keyed by watchCollectionItemId. */
  details: Record<string, C24Item>;
}

/** A market item as one export saw it, before it meets the store's history. */
export type ScrapedItem = Omit<MarketItem, "firstSeen" | "lastSeen" | "gone">;

export interface ScrapeFile {
  version: 1;
  /** ISO timestamp of the export. */
  exportedAt: string;
  /** The export file it was read from, under `.chrono24/exports/`. */
  source: string;
  total: number;
  range?: { min: number; max: number };
  c24Profit?: number;
  items: ScrapedItem[];
  collectionHistory: HistoryPoint[];
}

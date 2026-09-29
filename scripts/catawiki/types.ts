/**
 * types.ts — the shape of `.catawiki/orders.json`, the hand-off between the
 * scrape (step 3) and everything downstream (steps 4 and 5).
 *
 * Kept deliberately close to what the page actually shows: raw strings are
 * preserved alongside the normalised values, so a parsing mistake can be spotted
 * and re-derived from the dump without re-scraping 208 pages.
 */

export interface ScrapedReview {
  /** Verbatim review text, in whatever language the buyer wrote it. */
  text: string;
  /** Normalised to DD/MM/YYYY, matching the existing `saleReport.date`. */
  date: string;
  /** Exactly as rendered, e.g. "17 April" — kept so `date` can be re-derived. */
  rawDate: string;
  /** How the year in `date` was established. "derived" means inferred, not read. */
  dateSource: "datetime-attr" | "api" | "derived-from-order" | "unknown";
  lang?: string;
  sentiment?: "positive" | "neutral" | "negative";
  sellerReply?: { text: string; date: string };
}

export interface ScrapedOrder {
  lotId: string;
  lotTitle: string;
  lotUrl: string | null;
  orderUrl: string;
  price: string | null;
  /** As rendered on the list, e.g. "April 8, 2026". */
  paidDate: string | null;
  closedDate: string | null;
  /** `null` means the order page had no review — a real result, not a failure. */
  review: ScrapedReview | null;
  scrapedAt: string;
}

/** Keyed by lot id, so an interrupted run can resume by skipping known keys. */
export type OrdersDump = Record<string, ScrapedOrder>;

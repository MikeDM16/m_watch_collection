/**
 * 4_match.ts — step 4 of the Catawiki review pipeline: join, then report.
 *
 * Joins `.catawiki/orders.json` to `src/app/data/collection-index.json` on the
 * numeric lot id, which both sides already carry: the scrape reads it off the
 * list, and the catalogue has it inside `saleReport.url`.
 *
 * This is the checkpoint. It writes a report and touches nothing else — step 5
 * is the only thing that edits `src/`. Read the report before running it.
 *
 * The buckets matter as much as the match count. A scrape that silently returned
 * nothing looks identical to a collection with no reviews unless you can see
 * "208 orders scraped, 0 with a review" side by side.
 *
 * Usage:
 *   npx tsx scripts/catawiki/4_match.ts
 */

import fs from "fs";
import path from "path";

import { lotIdFromUrl, MATCH_REPORT, ORDERS_JSON, REPO_ROOT } from "./_shared";
import type { OrdersDump } from "./types";

interface IndexEntry {
  brand: string;
  legend: string;
  saleReport: { price: number; date: string; url?: string } | null;
  modelFile: string;
}

export interface Match {
  lotId: string;
  legend: string;
  brand: string;
  modelFile: string;
  review: NonNullable<OrdersDump[string]["review"]>;
}

/** Shared with step 5, so the two cannot disagree about what "matched" means. */
export function buildMatches() {
  const indexPath = path.join(REPO_ROOT, "src/app/data/collection-index.json");
  const index: Record<string, IndexEntry> = JSON.parse(fs.readFileSync(indexPath, "utf-8"));

  if (!fs.existsSync(ORDERS_JSON)) {
    throw new Error(`No scrape found at ${ORDERS_JSON}. Run 3_scrape.ts first.`);
  }
  const orders: OrdersDump = JSON.parse(fs.readFileSync(ORDERS_JSON, "utf-8"));

  // Catalogue side, bucketed by whether we can even join on it.
  const byLotId = new Map<string, { key: string; entry: IndexEntry }>();
  const salesWithoutUrl: string[] = [];
  let totalSales = 0;

  for (const [key, entry] of Object.entries(index)) {
    if (!entry.saleReport) continue;
    totalSales++;
    const lotId = lotIdFromUrl(entry.saleReport.url);
    if (!lotId) {
      salesWithoutUrl.push(key);
      continue;
    }
    byLotId.set(lotId, { key, entry });
  }

  const matchedWithReview: Match[] = [];
  const matchedNoReview: string[] = [];
  const scrapedNotInCollection: string[] = [];

  for (const [lotId, order] of Object.entries(orders)) {
    const hit = byLotId.get(lotId);
    if (!hit) {
      scrapedNotInCollection.push(`${lotId} — ${order.lotTitle}`);
      continue;
    }
    if (!order.review) {
      matchedNoReview.push(`${hit.key} (lot ${lotId})`);
      continue;
    }
    matchedWithReview.push({
      lotId,
      legend: hit.key,
      brand: hit.entry.brand,
      modelFile: hit.entry.modelFile,
      review: order.review,
    });
  }

  const scrapedIds = new Set(Object.keys(orders));
  const inCollectionNotScraped = [...byLotId.entries()]
    .filter(([lotId]) => !scrapedIds.has(lotId))
    .map(([lotId, { key }]) => `${key} (lot ${lotId})`);

  return {
    totalSales,
    totalScraped: Object.keys(orders).length,
    matchedWithReview,
    matchedNoReview,
    scrapedNotInCollection,
    inCollectionNotScraped,
    salesWithoutUrl,
  };
}

function section(title: string, lines: string[]): string {
  if (lines.length === 0) return `## ${title} — none\n`;
  return `## ${title} (${lines.length})\n\n${lines.map((l) => `- ${l}`).join("\n")}\n`;
}

function main() {
  const r = buildMatches();

  const report = [
    "# Catawiki review match report",
    "",
    `Generated ${new Date().toISOString()}`,
    "",
    "| | count |",
    "| --- | ---: |",
    `| Sales in collection-index.json | ${r.totalSales} |`,
    `| Orders scraped from Catawiki | ${r.totalScraped} |`,
    `| **Matched, with a review** | **${r.matchedWithReview.length}** |`,
    `| Matched, no review on the order | ${r.matchedNoReview.length} |`,
    `| Scraped but not in the collection | ${r.scrapedNotInCollection.length} |`,
    `| In the collection but not scraped | ${r.inCollectionNotScraped.length} |`,
    `| Sales with no lot URL (unjoinable) | ${r.salesWithoutUrl.length} |`,
    "",
    section(
      "Matched, with a review — step 5 will write these",
      r.matchedWithReview.map(
        (m) => `**${m.legend}** (lot ${m.lotId}) — ${JSON.stringify(m.review.text.slice(0, 140))}`,
      ),
    ),
    "",
    section("Matched, no review on the order", r.matchedNoReview),
    "",
    section("Scraped but not in the collection", r.scrapedNotInCollection),
    "",
    section("In the collection but not scraped", r.inCollectionNotScraped),
    "",
    section("Sales with no lot URL — cannot be joined", r.salesWithoutUrl),
    "",
  ].join("\n");

  fs.writeFileSync(MATCH_REPORT, report);

  console.log(`Sales in collection:    ${r.totalSales}`);
  console.log(`Orders scraped:         ${r.totalScraped}`);
  console.log(`Matched with a review:  ${r.matchedWithReview.length}`);
  console.log(`Matched, no review:     ${r.matchedNoReview.length}`);
  console.log(`Scraped, not in coll.:  ${r.scrapedNotInCollection.length}`);
  console.log(`In coll., not scraped:  ${r.inCollectionNotScraped.length}`);
  console.log(`Sales with no lot URL:  ${r.salesWithoutUrl.length}`);
  console.log(`\nReport: ${MATCH_REPORT}`);

  if (r.totalScraped > 0 && r.matchedWithReview.length === 0) {
    console.warn("\nNo review matched anything. Check the scrape before trusting this.");
  }
}

if (require.main === module) main();

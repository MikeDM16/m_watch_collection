/**
 * 3_import.ts — read the snippet's export into `.chrono24/scrape.json`.
 *
 * Takes the newest `chrono24-collection-*.json` in Downloads (or the file you
 * name), moves it, and any older ones, into `.chrono24/exports/` so private
 * values do not linger in Downloads, and normalises it: one item per owned watch with its estimate and
 * range, Chrono24's purchase data, specs and model history, plus the
 * collection's own value series.
 *
 * It refuses, loudly, an export that does not add up: a listed watch with no
 * detail, a watch with no value, or item values that do not sum to Chrono24's
 * collection total. A short export must never pass for a smaller collection.
 *
 * Usage:
 *   npm run chrono24:import
 *   npm run chrono24:import -- path/to/chrono24-collection-2026-11-24.json
 */

import fs from "fs";
import path from "path";

import type { HistoryPoint } from "../../src/app/admin/ledger/market.types";
import { readJson, writeFileAtomic } from "../sales/_shared";
import {
  dayOf,
  DOWNLOADS_DIR,
  ensureDir,
  EXPORT_FILE,
  EXPORTS_DIR,
  itemUrl,
  SCRAPE_JSON,
} from "./_shared";
import type {
  C24ChartPoint,
  C24Export,
  C24Item,
  C24ListItem,
  ScrapedItem,
  ScrapeFile,
} from "./types";

/** How far item values may sum from Chrono24's total before the export is refused. */
const TOTAL_TOLERANCE = 1;

/** Every export in Downloads, newest first ("…(1).json" when the bookmark was clicked twice). */
function exportsInDownloads(): string[] {
  if (!fs.existsSync(DOWNLOADS_DIR)) return [];
  return fs
    .readdirSync(DOWNLOADS_DIR)
    .filter((f) => EXPORT_FILE.test(f))
    .map((f) => path.join(DOWNLOADS_DIR, f))
    .sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs);
}

/** Move a Downloads file into `.chrono24/exports/`; one already there stays put. */
function adopt(file: string): string {
  ensureDir(EXPORTS_DIR);
  if (path.resolve(path.dirname(file)) === path.resolve(EXPORTS_DIR)) return file;
  const stamp = new Date(fs.statSync(file).mtimeMs).toISOString().replace(/[:.]/g, "-");
  const dest = path.join(EXPORTS_DIR, `${path.basename(file, ".json")}_${stamp}.json`);
  fs.copyFileSync(file, dest);
  fs.unlinkSync(file);
  return dest;
}

const num = (m: { amount: string } | undefined): number | undefined => {
  const n = m ? Number(m.amount) : NaN;
  return Number.isFinite(n) ? n : undefined;
};

const round2 = (n: number) => Math.round(n * 100) / 100;

function series(points: C24ChartPoint[] | undefined): HistoryPoint[] {
  return (points ?? [])
    .filter((p) => Number.isFinite(p.amount))
    .map((p) => ({
      date: dayOf(p.date),
      value: p.amount,
      ...(Number.isFinite(p.min) && Number.isFinite(p.max) ? { low: p.min, high: p.max } : {}),
    }));
}

/** Sections of additionalData kept elsewhere on the item, or not specs at all. */
const NOT_SPECS = new Set(["purchaseDetails", "imageUrl", "creationDate"]);

/** additionalData's specs, flattened to "caseDetails.caseMaterial" → "Ouro amarelo". */
function flatSpecs(data: C24Item["additionalData"]): Record<string, string> {
  const out: Record<string, string> = {};
  const walk = (prefix: string, v: unknown) => {
    if (v === null || v === undefined || v === "") return;
    if (Array.isArray(v)) out[prefix] = v.join(", ");
    else if (typeof v === "object") {
      const o = v as Record<string, unknown>;
      if ("amount" in o && "currency" in o)
        out[prefix] = `${String(o.amount)} ${String(o.currency)}`;
      else for (const [k, x] of Object.entries(o)) walk(prefix ? `${prefix}.${k}` : k, x);
    } else out[prefix] = String(v);
  };
  for (const [k, v] of Object.entries(data ?? {})) if (!NOT_SPECS.has(k)) walk(k, v);
  return out;
}

function toItem(listed: C24ListItem, d: C24Item, origin: string): ScrapedItem {
  const id = String(listed.watchCollectionItemId);
  const purchase = d.additionalData?.purchaseDetails;
  const range = d.valuationData?.marketValue;
  const value = num(listed.value) ?? num(range?.mean);
  if (value === undefined) throw new Error(`Watch ${id} (${listed.name}) has no value.`);
  const mean = num(range?.mean);
  if (mean !== undefined && Math.abs(mean - value) > TOTAL_TOLERANCE)
    console.warn(
      `  ${listed.name}: list value ${value} ≠ detail estimate ${mean}; using the list's.`,
    );
  const min = num(range?.min);
  const max = num(range?.max);

  return {
    itemId: id,
    url: itemUrl(id, origin),
    title: d.title || listed.name,
    reference: d.refId || undefined,
    manufacturer: d.additionalData?.manufacturer,
    condition: d.summary?.condition?.value ?? purchase?.purchaseCondition,
    accessories: d.summary?.scopeOfDelivery?.value ?? purchase?.scopeOfDelivery,
    value,
    ...(min !== undefined && max !== undefined ? { valueRange: { min, max } } : {}),
    purchasePrice: num(purchase?.purchasePrice),
    purchaseDate: purchase?.purchaseDate ?? listed.purchaseDate,
    specs: flatSpecs(d.additionalData),
    history: series(d.chart?.priceChart.dataPoints),
    imageUrl: d.images?.[0]?.imageUrl ?? listed.previewImage,
  };
}

function main() {
  const given = process.argv[2];
  const downloads = given ? [] : exportsInDownloads();
  const found = given ? path.resolve(given) : downloads[0];
  if (!found || !fs.existsSync(found)) {
    console.error(
      given
        ? `No such file: ${given}`
        : `No chrono24-collection-*.json in ${DOWNLOADS_DIR}. Run the export bookmarklet on chrono24.pt first.`,
    );
    process.exit(1);
  }

  const raw = readJson<C24Export>(found);
  if (raw.kind !== "chrono24-watch-collection" || raw.version !== 1)
    throw new Error(`${found} is not a Chrono24 collection export (version 1).`);
  const file = adopt(found);
  console.log(`Export of ${raw.exportedAt} → ${path.relative(process.cwd(), file)}`);
  // Older or duplicate exports leave Downloads too, so none is mistaken for a fresh one later.
  for (const older of downloads.slice(1)) {
    adopt(older);
    console.log(`  also moved ${path.basename(older)} (older or duplicate) into .chrono24/exports`);
  }

  const listed = raw.items.items ?? [];
  const missing = listed.filter((l) => !raw.details[String(l.watchCollectionItemId)]);
  if (missing.length)
    throw new Error(`No detail for ${missing.map((m) => m.name).join(", ")}: re-run the export.`);
  const items = listed.map((l) =>
    toItem(l, raw.details[String(l.watchCollectionItemId)], raw.origin),
  );

  const total = num(raw.overview.owned.value);
  if (total === undefined) throw new Error("The export has no collection total.");
  const sum = round2(items.reduce((s, i) => s + i.value, 0));
  if (Math.abs(sum - total) > TOTAL_TOLERANCE)
    throw new Error(
      `Item values sum to ${sum} € but Chrono24's total is ${total} €. Re-run the export.`,
    );

  const worth = raw.overview.owned.estimatedWorthChart;
  const rmin = num(worth?.currentValuation?.min);
  const rmax = num(worth?.currentValuation?.max);
  const out: ScrapeFile = {
    version: 1,
    exportedAt: raw.exportedAt,
    source: path.relative(path.dirname(SCRAPE_JSON), file).replace(/\\/g, "/"),
    total,
    ...(rmin !== undefined && rmax !== undefined ? { range: { min: rmin, max: rmax } } : {}),
    c24Profit: num(raw.overview.owned.profitAmount),
    items,
    collectionHistory: series(worth?.chart.priceChart.dataPoints),
  };
  writeFileAtomic(SCRAPE_JSON, JSON.stringify(out, null, 1));

  const noHistory = items.filter((i) => i.history.length < 2).map((i) => i.title);
  console.log(`${items.length} watches · total ${total} € (matches the sum of the items)`);
  console.log(`Collection history: ${out.collectionHistory.length} points`);
  if (noHistory.length) console.warn(`No model history for: ${noHistory.join(", ")}`);
  console.log(`Written ${SCRAPE_JSON}\nNext: npm run chrono24:apply`);
}

main();

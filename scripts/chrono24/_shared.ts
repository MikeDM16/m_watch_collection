/**
 * _shared.ts — common bits for the Chrono24 market-value pipeline.
 *
 * Chrono24's Watch Collection estimates what each owned watch is worth and
 * keeps a value history per model. The pipeline copies that into the private
 * ledger and renders a valuation report:
 *
 *   export-snippet.js  runs in your own logged-in Chrome tab and downloads the
 *                      collection as one JSON file (the site's own API)
 *   3_import.ts        reads that file into `.chrono24/scrape.json`
 *   4_apply.ts         links items to the ledger's kept watches, writes `.ledger/market.json`
 *   5_report.tsx       renders the valuation PDFs (Portuguese and English)
 *
 * Why a snippet in your own browser rather than an automated one: Cloudflare
 * refuses automated browsers at login, and since Chrome 136 a script cannot
 * attach to your everyday Chrome profile. A snippet running in your tab is
 * just you using the site.
 *
 * Everything written here lands in `.chrono24/` at the repo root, which is
 * gitignored: the exports hold values and purchase prices.
 */

import fs from "fs";
import os from "os";
import path from "path";

/** Repo root, two levels up from scripts/chrono24. */
export const REPO_ROOT = path.resolve(__dirname, "../..");

/** Gitignored working directory for the whole pipeline. */
export const WORK_DIR = path.join(REPO_ROOT, ".chrono24");
export const PROBE_DIR = path.join(WORK_DIR, "probe");
/** Every export the import has read, kept as the raw record of each run. */
export const EXPORTS_DIR = path.join(WORK_DIR, "exports");
export const SCRAPE_JSON = path.join(WORK_DIR, "scrape.json");
export const MATCH_REPORT = path.join(WORK_DIR, "match-report.md");
export const BOOKMARKLET_HTML = path.join(WORK_DIR, "bookmarklet.html");

/** Where Chrome saves the snippet's download. */
export const DOWNLOADS_DIR = path.join(os.homedir(), "Downloads");
/** The snippet's download name: chrono24-collection-2026-11-24.json. */
export const EXPORT_FILE = /^chrono24-collection-.*\.json$/;

export const ORIGIN = "https://www.chrono24.pt";
export const itemUrl = (itemId: string, origin = ORIGIN) =>
  `${origin}/user/watch-collection/view-item.htm?itemId=${itemId}`;

export function ensureDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}

const pad = (n: number) => String(n).padStart(2, "0");

/** The local calendar day of a timestamp, "2026-11-24". */
export function localDay(iso: string): string {
  const d = new Date(iso);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export const today = (): string => localDay(new Date().toISOString());

/**
 * The calendar day a Chrono24 timestamp means. Its chart points are midnight
 * in Central European time written in UTC ("2014-06-30T22:00:00Z" is 1 July),
 * so noon of the following half-day lands on the right date in either season.
 */
export function dayOf(iso: string): string {
  return new Date(Date.parse(iso) + 12 * 3600 * 1000).toISOString().slice(0, 10);
}

/**
 * _shared.ts — common bits for the Catawiki review pipeline.
 *
 * The pipeline harvests buyer reviews from the Catawiki seller dashboard and
 * writes them into each model's existing `saleReport` block. Steps run in order:
 *
 *   1_login.ts   open a headed browser, you log in by hand, session is kept
 *   2_probe.ts   recon: dump the list + order page HTML and every JSON response
 *   3_scrape.ts  walk the 9 list pages, then every order page
 *   4_match.ts   join the dump to collection-index.json, write a match report
 *   5_apply.ts   codemod the matched reviews into the model .tsx files
 *
 * Everything the pipeline writes — including the browser profile, which holds
 * live session cookies — lands in `.catawiki/` at the repo root, which is
 * gitignored. Nothing here ever writes to `src/` except step 5.
 */

import fs from "fs";
import path from "path";

/** Repo root, two levels up from scripts/catawiki. */
export const REPO_ROOT = path.resolve(__dirname, "../..");

/** Gitignored working directory for the whole pipeline. */
export const WORK_DIR = path.join(REPO_ROOT, ".catawiki");

/**
 * Persistent Chromium profile. Using a real profile directory rather than a
 * `storageState` dump means the login survives 2FA, device-trust prompts and
 * whatever else Catawiki decides to ask, and later runs just reuse it.
 */
export const PROFILE_DIR = path.join(WORK_DIR, "profile");

export const PROBE_DIR = path.join(WORK_DIR, "probe");
export const ORDERS_JSON = path.join(WORK_DIR, "orders.json");
export const MATCH_REPORT = path.join(WORK_DIR, "match-report.md");

/**
 * The two statuses the collection cares about: a lot the buyer has paid for, and
 * one whose funds have reached the seller. Archived is deliberately excluded —
 * that was the scope decision for this pass.
 */
export const STATUSES = ["paid_to_seller", "paid_by_buyer"] as const;

export const LIST_PAGE_COUNT = 9;

export function submissionsUrl(page: number): string {
  const statuses = STATUSES.map((s) => `statuses%5B%5D=${s}`).join("&");
  return `https://www.catawiki.com/en/v/lots/submissions?page=${page}&${statuses}`;
}

/** A known-good order page, used by the probe to learn the review markup. */
export const SAMPLE_ORDER_URL = "https://www.catawiki.com/en/f/seller/orders/46074966";

/**
 * Pull the numeric lot id out of any Catawiki lot URL. Covers all three shapes
 * present in the collection data:
 *   https://www.catawiki.com/en/l/97096270
 *   https://www.catawiki.com/en/l/89180283-bergeon-vitesse-mechanique-...
 *   https://www.catawiki.pt/l/26122123-belex-precision-...     (no /en, .pt host)
 */
export function lotIdFromUrl(url: string | undefined | null): string | null {
  if (!url) return null;
  const m = url.match(/\/l\/(\d+)/);
  return m ? m[1] : null;
}

export function ensureDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Randomised pause between requests, so the run does not look like a metronome. */
export const politePause = (min = 800, max = 1500) =>
  sleep(min + Math.floor(Math.random() * (max - min)));

/** Filesystem-safe slug for probe dump filenames. */
export function slug(s: string): string {
  return s.replace(/[^a-z0-9]+/gi, "_").slice(0, 120);
}

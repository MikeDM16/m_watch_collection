/**
 * _market.ts — reading the ledger and reading/writing the market store
 * (`.ledger/market.json`) from the Chrono24 scripts.
 *
 * The market store follows the ledger's write rules: every write backs the old
 * file up into `.ledger/backups/` (the last 30, as `market-<stamp>.json`, plus a
 * copy in LEDGER_BACKUP_DIR when that is set), writes atomically, and is
 * refused if the file changed on disk while the script ran. `ledger.json`
 * itself is only ever read here.
 */

import crypto from "crypto";
import fs from "fs";
import path from "path";

import type { LedgerStore } from "../../src/app/admin/ledger/ledger.types";
import type { MarketStore } from "../../src/app/admin/ledger/market.types";
import type { ValuationModel } from "../../src/app/admin/ledger/valuation";
import type { CollectionIndexEntry } from "../../src/app/data/collectionIndex";
import { readJson, REPO_ROOT, writeFileAtomic } from "../sales/_shared";

export const LEDGER_DIR = path.join(REPO_ROOT, ".ledger");
export const STORE_JSON = path.join(LEDGER_DIR, "ledger.json");
export const MARKET_JSON = path.join(LEDGER_DIR, "market.json");
export const REPORTS_DIR = path.join(LEDGER_DIR, "reports");
const INDEX_JSON = path.join(REPO_ROOT, "src", "app", "data", "collection-index.json");
const BACKUPS = 30;

const sha = (text: string) => crypto.createHash("sha256").update(text).digest("hex");

export function loadLedger(): LedgerStore {
  if (!fs.existsSync(STORE_JSON)) {
    console.error("No ledger yet: run `npm run ledger:import` first.");
    process.exit(1);
  }
  const store = readJson<LedgerStore>(STORE_JSON);
  if (store.version !== 1) throw new Error(`Unknown ledger version ${String(store.version)}.`);
  return store;
}

export const emptyMarket = (): MarketStore => ({ version: 1, items: {}, links: {}, snapshots: [] });

/** The market store and the sha of the file it came from ("" when there is none yet). */
export function loadMarket(): { market: MarketStore; version: string } {
  if (!fs.existsSync(MARKET_JSON)) return { market: emptyMarket(), version: "" };
  const raw = fs.readFileSync(MARKET_JSON, "utf-8");
  const market = JSON.parse(raw) as MarketStore;
  if (market.version !== 1)
    throw new Error(`Unknown market store version ${String(market.version)}.`);
  return { market, version: sha(raw) };
}

function backup() {
  if (!fs.existsSync(MARKET_JSON)) return;
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const copyTo = (dir: string) => {
    fs.mkdirSync(dir, { recursive: true });
    fs.copyFileSync(MARKET_JSON, path.join(dir, `market-${stamp}.json`));
    const old = fs
      .readdirSync(dir)
      .filter((f) => /^market-.*\.json$/.test(f))
      .sort()
      .slice(0, -BACKUPS);
    for (const f of old) fs.unlinkSync(path.join(dir, f));
  };
  copyTo(path.join(LEDGER_DIR, "backups"));
  if (process.env.LEDGER_BACKUP_DIR) {
    try {
      copyTo(path.resolve(process.env.LEDGER_BACKUP_DIR));
    } catch (err) {
      console.warn(`Extra backup to LEDGER_BACKUP_DIR failed: ${String(err)}`);
    }
  }
}

/** Write the store, refusing if the file changed since `version` was read. */
export function saveMarket(next: MarketStore, version: string): void {
  const now = fs.existsSync(MARKET_JSON) ? sha(fs.readFileSync(MARKET_JSON, "utf-8")) : "";
  if (now !== version) {
    console.error("market.json changed on disk while this ran. Nothing written; run it again.");
    process.exit(1);
  }
  backup();
  writeFileAtomic(MARKET_JSON, JSON.stringify(next, null, 1));
}

/** The catalogue fields a valuation needs, read from collection-index.json. */
export function readModels(): ValuationModel[] {
  const index = readJson<Record<string, CollectionIndexEntry>>(INDEX_JSON);
  return Object.values(index).map(({ modelFile, brand, legend, year, srcImage }) => ({
    modelFile,
    brand,
    legend,
    year,
    srcImage,
  }));
}

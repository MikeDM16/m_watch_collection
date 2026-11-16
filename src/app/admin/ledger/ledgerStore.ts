import "server-only";

import crypto from "crypto";
import fs from "fs";
import path from "path";

import type { SalesFinancials } from "../sales-report/salesData.types";
import { buildFinancials } from "./buildFinancials";
import type { CatalogueSaleRef, LedgerStore, WorkbookSnapshot } from "./ledger.types";

/**
 * The back-office ledger on disk (`.ledger/`, gitignored, local only), for the
 * dev-only admin pages and routes. Call it only after the NODE_ENV gate, from
 * inside a component or handler: never at module scope, never by importing the
 * JSON. Either would put purchase prices into the build, and break it, since
 * `.ledger/` exists on this machine only.
 *
 * Saves are atomic, checked against the version the page loaded (a sha256 of
 * the file), and keep the last BACKUPS copies in `.ledger/backups/`. Set
 * LEDGER_BACKUP_DIR to copy each save somewhere else too (a OneDrive folder):
 * the ledger is the only copy of what is entered in the back-office.
 */

const LEDGER_DIR = path.join(process.cwd(), ".ledger");
const STORE_JSON = path.join(LEDGER_DIR, "ledger.json");
const BACKUPS = 30;

/** The catalogue fields the ledger needs, per model. */
export interface CatalogueRow {
  modelFile: string;
  brand: string;
  legend: string;
  srcImage: string;
  saleReport: { price: number; date: string; url?: string } | null;
}

/**
 * The collection index, read with fs rather than imported: the model editor
 * regenerates it on save, and an import would put it in the page's module graph
 * and recompile the page under the user.
 */
export function readCatalogue(): CatalogueRow[] {
  const index = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "src", "app", "data", "collection-index.json"),
      "utf-8",
    ),
  ) as Record<string, CatalogueRow>;
  return Object.values(index).map(({ modelFile, brand, legend, srcImage, saleReport }) => ({
    modelFile,
    brand,
    legend,
    srcImage,
    saleReport: saleReport ?? null,
  }));
}

/** Has the ledger been seeded on this machine? */
export const ledgerExists = (): boolean => fs.existsSync(STORE_JSON);

export interface LoadedStore {
  store: LedgerStore;
  /** sha256 of the file as read: what a save must still find on disk. */
  version: string;
  mtime: string;
}

export function loadStore(): LoadedStore | null {
  try {
    const raw = fs.readFileSync(STORE_JSON, "utf-8");
    const store = JSON.parse(raw) as LedgerStore;
    if (store.version !== 1) return null;
    return {
      store,
      version: crypto.createHash("sha256").update(raw).digest("hex"),
      mtime: fs.statSync(STORE_JSON).mtime.toISOString(),
    };
  } catch {
    return null;
  }
}

/** The workbook read as a ledger, from the last `npm run sales:sync`; null before the first. */
export function loadSnapshot(): WorkbookSnapshot | null {
  try {
    const s = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), ".sales", "workbook-ledger.json"), "utf-8"),
    ) as WorkbookSnapshot;
    return s.version === 1 ? s : null;
  } catch {
    return null;
  }
}

/** The sales report's figures, built from the ledger. Null until it has been seeded. */
export function ledgerFinancials(
  catalogue: CatalogueSaleRef[],
): { data: SalesFinancials; issues: string[] } | null {
  const loaded = loadStore();
  if (!loaded) return null;
  const { financials, issues } = buildFinancials(loaded.store, catalogue, new Date(), {
    file: ".ledger/ledger.json",
    mtime: loaded.mtime,
    sha256: loaded.version,
  });
  return { data: financials, issues };
}

export class StoreConflict extends Error {}

/**
 * Writes the ledger if it is still the version the caller loaded, after copying
 * the current file into the backups. Returns the new version.
 */
export function saveStore(store: LedgerStore, expectVersion: string): string {
  const current = loadStore();
  if (current && current.version !== expectVersion)
    throw new StoreConflict("The ledger changed since the page loaded. Refresh and try again.");

  fs.mkdirSync(LEDGER_DIR, { recursive: true });
  if (fs.existsSync(STORE_JSON)) backup();
  const text = JSON.stringify(store, null, 1);
  const tmp = `${STORE_JSON}.tmp`;
  fs.writeFileSync(tmp, text);
  fs.renameSync(tmp, STORE_JSON);
  return crypto.createHash("sha256").update(text).digest("hex");
}

function backup() {
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const copyTo = (dir: string) => {
    fs.mkdirSync(dir, { recursive: true });
    fs.copyFileSync(STORE_JSON, path.join(dir, `ledger-${stamp}.json`));
    const old = fs
      .readdirSync(dir)
      .filter((f) => /^ledger-.*\.json$/.test(f))
      .sort()
      .slice(0, -BACKUPS);
    for (const f of old) fs.unlinkSync(path.join(dir, f));
  };
  // The local copy must succeed, or nothing is saved.
  copyTo(path.join(LEDGER_DIR, "backups"));
  // The extra copy is best effort: an unplugged drive must not block a save.
  if (process.env.LEDGER_BACKUP_DIR) {
    try {
      copyTo(path.resolve(/*turbopackIgnore: true*/ process.env.LEDGER_BACKUP_DIR));
    } catch {
      /* reported nowhere on purpose: the local backup above holds */
    }
  }
}

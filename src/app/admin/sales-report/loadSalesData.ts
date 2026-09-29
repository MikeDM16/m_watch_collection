import "server-only";

import crypto from "crypto";
import fs from "fs";
import path from "path";

import type { MatchesFile, SalesFinancials } from "./salesData.types";

/**
 * Reads the sales margin pipeline's output (scripts/sales) for the dev-only
 * admin pages. Call it only after the page's NODE_ENV gate, from inside the
 * component: never at module scope and never through an `import` of the JSON.
 * Either would put purchase prices into the build — and break it, since the
 * gitignored `.sales/` folder does not exist in CI or on Vercel.
 */

const WORK_DIR = path.join(process.cwd(), ".sales");

function readJson<T extends { version: number }>(name: string): T | null {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(WORK_DIR, name), "utf-8")) as T;
    return data.version === 1 ? data : null;
  } catch {
    return null;
  }
}

/** True when the workbook has changed since the pipeline last read it. */
function workbookChanged(source: SalesFinancials["source"]): boolean {
  try {
    const bytes = fs.readFileSync(path.join(process.cwd(), source.file));
    return crypto.createHash("sha256").update(bytes).digest("hex") !== source.sha256;
  } catch {
    return false;
  }
}

export interface LoadedFinancials {
  data: SalesFinancials;
  /** The workbook was edited after the last sync: the figures may be out of date. */
  stale: boolean;
}

export function loadFinancials(): LoadedFinancials | null {
  const data = readJson<SalesFinancials>("financials.json");
  return data ? { data, stale: workbookChanged(data.source) } : null;
}

export function loadMatches(): MatchesFile | null {
  return readJson<MatchesFile>("matches.json");
}

/**
 * snapshot.ts — the last step of `npm run sales:sync`: the workbook read as a
 * back-office ledger (see _seed.ts), written to .sales/workbook-ledger.json.
 * The compare view on /admin/ledger pairs the ledger's lines with these and
 * offers to pull a workbook line the ledger lacks, already split between its
 * watches. It never touches the ledger itself.
 *
 * Usage:
 *   npx tsx scripts/ledger/snapshot.ts
 */

import path from "path";

import type { WorkbookSnapshot } from "../../src/app/admin/ledger/ledger.types";
import type { MatchesFile } from "../../src/app/admin/sales-report/salesData.types";
import {
  LEDGER_JSON,
  loadOverrides,
  MATCHES_JSON,
  readJson,
  requireFile,
  WORK_DIR,
  writeJsonAtomic,
} from "../sales/_shared";
import type { LedgerDump } from "../sales/types";
import { seedFromWorkbook } from "./_seed";

export const SNAPSHOT_JSON = path.join(WORK_DIR, "workbook-ledger.json");

function main() {
  requireFile(LEDGER_JSON, "Run `npm run sales:parse` first.");
  requireFile(MATCHES_JSON, "Run `npm run sales:match` first.");
  const dump = readJson<LedgerDump>(LEDGER_JSON);
  const seed = seedFromWorkbook(dump, readJson<MatchesFile>(MATCHES_JSON), loadOverrides());
  const snapshot: WorkbookSnapshot = {
    version: 1,
    generatedAt: new Date().toISOString(),
    workbookSha256: dump.source.sha256,
    groups: seed.groups,
    watches: seed.watches,
    lines: seed.lines,
    problems: seed.problems,
  };
  writeJsonAtomic(SNAPSHOT_JSON, snapshot);
  console.log(
    `Workbook as a ledger: ${seed.lines.length} lines, ${seed.watches.length} watches → .sales/workbook-ledger.json` +
      (seed.problems.length
        ? ` (${seed.problems.length} problem(s): the compare view lists them)`
        : ""),
  );
}

if (require.main === module) main();

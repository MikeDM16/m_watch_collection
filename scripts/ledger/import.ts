/**
 * import.ts — seeds the back-office ledger (.ledger/ledger.json) once, from the
 * workbook pipeline's reconciled state (see _seed.ts for how each line is split
 * between watches). Run `npm run sales:sync` and copy .sales/financials.json to
 * .ledger/baseline/ first; then `npm run ledger:verify` proves the seeded ledger
 * reproduces the sales report to the cent.
 *
 * Nothing in scripts/sales changes or stops: the workbook stays, and the compare
 * view on /admin/ledger shows where the two drift apart afterwards.
 *
 * Refuses to run when a store exists (pass --force to replace it; the old one is
 * backed up), or when any workbook block, stock grouping or line share does not
 * add up.
 *
 * Usage:
 *   npx tsx scripts/ledger/import.ts [--force]
 */

import fs from "fs";
import path from "path";

import type { LedgerStore } from "../../src/app/admin/ledger/ledger.types";
import type {
  MatchesFile,
  SalesFinancials,
} from "../../src/app/admin/sales-report/salesData.types";
import {
  LEDGER_JSON,
  loadOverrides,
  MATCHES_JSON,
  readJson,
  REPO_ROOT,
  requireFile,
  writeFileAtomic,
  writeJsonAtomic,
} from "../sales/_shared";
import type { LedgerDump } from "../sales/types";
import { seedFromWorkbook } from "./_seed";

export const LEDGER_DIR = path.join(REPO_ROOT, ".ledger");
export const STORE_JSON = path.join(LEDGER_DIR, "ledger.json");
export const BASELINE_JSON = path.join(LEDGER_DIR, "baseline", "financials.json");

function main() {
  const force = process.argv.includes("--force");
  requireFile(LEDGER_JSON, "Run `npm run sales:sync` first.");
  requireFile(MATCHES_JSON, "Run `npm run sales:sync` first.");
  if (fs.existsSync(STORE_JSON) && !force) {
    console.error(
      `${path.relative(REPO_ROOT, STORE_JSON)} already exists: the import only seeds a new ledger. Pass --force to replace it (it is backed up first).`,
    );
    process.exit(1);
  }

  const dump = readJson<LedgerDump>(LEDGER_JSON);
  const matches = readJson<MatchesFile>(MATCHES_JSON);
  const seed = seedFromWorkbook(dump, matches, loadOverrides());
  const problems = [...seed.problems];
  if (fs.existsSync(BASELINE_JSON)) {
    const baseline = readJson<SalesFinancials>(BASELINE_JSON);
    if (baseline.source.sha256 !== dump.source.sha256)
      problems.push(
        "The baseline (.ledger/baseline/financials.json) is from another workbook: copy the current .sales/financials.json there first.",
      );
  } else problems.push("No baseline: copy .sales/financials.json to .ledger/baseline/ first.");

  if (problems.length) {
    console.error(`Import refused: ${problems.length} problem(s). Nothing written.`);
    for (const p of problems.slice(0, 40)) console.error(`  ${p}`);
    process.exit(1);
  }

  const store: LedgerStore = {
    version: 1,
    seeded: { at: new Date().toISOString(), workbookSha256: dump.source.sha256 },
    groups: seed.groups,
    watches: seed.watches,
    lines: seed.lines,
  };
  fs.mkdirSync(LEDGER_DIR, { recursive: true });
  if (fs.existsSync(STORE_JSON)) {
    const backups = path.join(LEDGER_DIR, "backups");
    fs.mkdirSync(backups, { recursive: true });
    fs.copyFileSync(
      STORE_JSON,
      path.join(backups, `ledger-${new Date().toISOString().replace(/[:.]/g, "-")}.json`),
    );
  }
  writeJsonAtomic(STORE_JSON, store);

  const { watches, lines, groups, passthrough } = seed;
  const by = (s: string) => watches.filter((w) => w.status === s).length;
  writeFileAtomic(
    path.join(LEDGER_DIR, "import-report.md"),
    [
      "# Ledger seed import",
      "",
      `Seeded ${store.seeded!.at} from workbook ${dump.source.sha256.slice(0, 12)}.`,
      "",
      `- ${lines.length} lines (${lines.filter((l) => l.book === "collection").length} from the Collection tab), ${groups.length} groups`,
      `- ${watches.length} watches: ${by("sold")} sold, ${by("for-sale")} for sale, ${by("kept")} kept`,
      `- ${lines.filter((l) => l.holders.some((h) => h.id === "overhead")).length} lines held (at least partly) by overhead`,
      "",
      `## Pass-throughs left out (${passthrough.length})`,
      "",
      "Cancelled orders and purchases refunded in full: each pair nets to zero, as in the report.",
      "",
      ...passthrough,
      "",
    ].join("\n"),
  );

  console.log("=".repeat(60));
  console.log(`Ledger seeded:   ${path.relative(REPO_ROOT, STORE_JSON)}`);
  console.log(`Lines:           ${lines.length}  (${passthrough.length} pass-throughs left out)`);
  console.log(
    `Watches:         ${watches.length}  (sold ${by("sold")} · for sale ${by("for-sale")} · kept ${by("kept")})`,
  );
  console.log(`Groups:          ${groups.length}`);
  console.log("=".repeat(60));
  console.log("Next: npm run ledger:verify");
}

if (require.main === module) main();

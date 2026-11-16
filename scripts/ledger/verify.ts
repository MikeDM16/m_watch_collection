/**
 * verify.ts — proves the back-office ledger reproduces the sales report: builds
 * the report's figures from .ledger/ledger.json and compares them with the
 * baseline (.ledger/baseline/financials.json, the workbook pipeline's own output
 * the day the ledger was seeded), figure by figure (see compareLedger.ts). Run
 * it the same day: future dates count on the day of the build, in both.
 *
 * Usage:
 *   npx tsx scripts/ledger/verify.ts
 */

import crypto from "crypto";
import fs from "fs";

import { buildFinancials } from "../../src/app/admin/ledger/buildFinancials";
import { compareFinancials } from "../../src/app/admin/ledger/compareLedger";
import type { CatalogueSaleRef, LedgerStore } from "../../src/app/admin/ledger/ledger.types";
import type { SalesFinancials } from "../../src/app/admin/sales-report/salesData.types";
import type { CollectionIndexEntry } from "../../src/app/data/collectionIndex";
import { INDEX_JSON, readJson, requireFile } from "../sales/_shared";
import { BASELINE_JSON, STORE_JSON } from "./import";

function main() {
  requireFile(STORE_JSON, "Run `npm run ledger:import` first.");
  requireFile(BASELINE_JSON, "Copy .sales/financials.json to .ledger/baseline/ first.");
  const raw = fs.readFileSync(STORE_JSON, "utf-8");
  const store = JSON.parse(raw) as LedgerStore;
  const base = readJson<SalesFinancials>(BASELINE_JSON);
  const index = readJson<Record<string, CollectionIndexEntry>>(INDEX_JSON);
  const catalogue: CatalogueSaleRef[] = Object.values(index).flatMap((e) =>
    e.saleReport
      ? [{ modelFile: e.modelFile, price: e.saleReport.price, date: e.saleReport.date }]
      : [],
  );
  const { financials: got, issues } = buildFinancials(store, catalogue, new Date(), {
    file: ".ledger/ledger.json",
    mtime: fs.statSync(STORE_JSON).mtime.toISOString(),
    sha256: crypto.createHash("sha256").update(raw).digest("hex"),
  });
  const diffs = compareFinancials(base, got);

  const pad = (s: string) => s.padEnd(22);
  console.log("=".repeat(60));
  console.log(
    `${pad("Sold models:")}${Object.keys(got.byModel).length} (workbook ${Object.keys(base.byModel).length})`,
  );
  console.log(
    `${pad("For sale / kept:")}${got.stockItems?.length ?? 0} / ${got.kept?.length ?? 0}`,
  );
  console.log(
    `${pad("Days of money:")}${got.daily?.length ?? 0} (workbook ${base.daily?.length ?? 0})`,
  );
  console.log(`${pad("Store issues:")}${issues.length}`);
  console.log(`${pad("Differences:")}${diffs.length}`);
  console.log("=".repeat(60));
  for (const i of issues.slice(0, 20)) console.log(`issue: ${i}`);
  for (const d of diffs.slice(0, 60))
    console.log(`diff:  ${d.where} · ${d.field}: workbook ${d.workbook}, ledger ${d.ledger}`);
  if (diffs.length > 60) console.log(`… and ${diffs.length - 60} more`);
  if (diffs.length || issues.length) process.exit(1);
  console.log("The ledger reproduces the workbook's figures.");
}

if (require.main === module) main();

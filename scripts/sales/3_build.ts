/**
 * 3_build.ts — step 3 of the sales margin pipeline: the P&L.
 *
 * Turns every accepted match in matches.json into the financials of one sold
 * watch: net payout, the costs attributed to it by category, profit, margin
 * (profit ÷ payout, the ledger summary tables' own definition), return on cost,
 * and days held (purchase → auction). Several models sharing one payout (sold
 * together in one lot) each take their share of it.
 *
 * It also accounts for the rest of the ledger, so the report can show where
 * every euro went: payouts no catalogue sale claimed, overhead (boxes, straps
 * in stock, batteries) and money sitting in watches not sold yet. Two checks
 * must pass, or nothing is written:
 *   - every block's pieces add back up to that block's own total;
 *   - the whole ledger's total equals attributed + unlinked + overhead + stock.
 *
 * Differences from the ledger's own "Ganho Real" figures are listed in
 * build-report.md: they are expected where the ledger's formulas skip a strap
 * or a repair, and worth a look where they are large.
 *
 * Usage:
 *   npx tsx scripts/sales/3_build.ts
 */

import type {
  Confidence,
  CostCategory,
  MatchesFile,
  SalesFinancials,
  WatchFinancials,
} from "../../src/app/admin/sales-report/salesData.types";
import { costLines, interpretLedger, linkHints, signed, type Unit } from "./_ledger";
import {
  daysBetween,
  FINANCIALS_JSON,
  LEDGER_JSON,
  loadOverrides,
  MATCHES_JSON,
  parseCatalogueDate,
  parseIso,
  readJson,
  requireFile,
  round2,
  WORK_DIR,
  writeFileAtomic,
  writeJsonAtomic,
} from "./_shared";
import type { LedgerDump } from "./types";

const ACCEPTED: readonly string[] = ["user", "claude", "ledger-link", "high"];

/** A "Ganho Real" difference worth listing. */
const GAIN_TOLERANCE = (gain: number) => Math.max(15, 0.1 * Math.abs(gain));

function main() {
  requireFile(LEDGER_JSON, "Run `python scripts/sales/1_parse_ledger.py` first.");
  requireFile(MATCHES_JSON, "Run `npx tsx scripts/sales/2_match.ts` first.");
  const dump = readJson<LedgerDump>(LEDGER_JSON);
  const matches = readJson<MatchesFile>(MATCHES_JSON);
  if (matches.ledgerSha256 !== dump.source.sha256) {
    console.error(
      "matches.json was built from another version of the workbook. Re-run 2_match.ts first.",
    );
    process.exit(1);
  }

  const interp = interpretLedger(dump, loadOverrides());
  linkHints(interp, dump.hints);

  // ── Watches.
  const byModel: Record<string, WatchFinancials> = {};
  const shareOfUnit = new Map<Unit, number>();
  const unmatched: string[] = [];
  const gainDiffs: string[] = [];

  for (const m of Object.values(matches.byModel)) {
    const u = m.unit ? interp.unitByKey.get(m.unit) : undefined;
    if (!ACCEPTED.includes(m.status) || !u) {
      unmatched.push(m.modelFile);
      continue;
    }
    const share = m.share || 1;
    shareOfUnit.set(u, (shareOfUnit.get(u) ?? 0) + share);

    const lines = costLines(u).map((l) => ({ ...l, amount: round2(l.amount * share) }));
    const costByCategory: Partial<Record<CostCategory, number>> = {};
    for (const l of lines)
      costByCategory[l.category] = round2((costByCategory[l.category] ?? 0) + l.amount);

    const received = round2(u.received * share);
    const refunds = round2(u.refunds * share);
    const cost = round2(u.cost * share);
    const profit = round2(received + refunds - cost);

    const flags = [...u.flags];
    if (share < 1) flags.push("shared-payout");
    const auction = parseCatalogueDate(m.date);
    const bought = parseIso(u.purchaseDate);
    let daysHeld = auction && bought ? daysBetween(bought, auction) : null;
    if (daysHeld !== null && daysHeld < 0) {
      flags.push("bought-after-auction");
      daysHeld = null;
    }

    const gain = u.hints.find((h) => h.gain !== null)?.gain ?? null;
    const userGain = gain !== null && share === 1 ? round2(gain) : null;
    if (userGain !== null && Math.abs(profit - userGain) > GAIN_TOLERANCE(userGain)) {
      gainDiffs.push(
        `- **${m.legend}**: computed €${profit.toFixed(2)}, ledger summary €${userGain.toFixed(2)} (${u.block.sheet}!${u.saleRow.row})`,
      );
    }

    byModel[m.modelFile] = {
      modelFile: m.modelFile,
      confidence: m.status as Confidence,
      score: m.score,
      evidence: [...m.evidence, ...(m.reason ? [`decision: ${m.reason}`] : [])],
      unit: u.key,
      label: u.label,
      gross: round2(m.gross * share),
      saleShare: share,
      received,
      refunds,
      cost,
      costByCategory,
      profit,
      margin: received > 0 ? round2((profit / received) * 10_000) / 10_000 : null,
      roi: cost >= 1 ? round2((profit / cost) * 10_000) / 10_000 : null,
      purchaseDate: u.purchaseDate,
      payoutDate: u.payoutDate,
      daysHeld,
      block: {
        ref: `${u.block.sheet}!${u.block.firstRow}:${u.block.lastRow}`,
        kind: u.blockKind,
        units: u.lotSize,
      },
      costLines: lines,
      flags,
      userGain,
    };
  }

  // ── The rest of the ledger. A payout claimed only in part (shares under 1)
  // leaves the remainder unlinked.
  let attributed = 0;
  let unlinked = 0;
  const unlinkedSales: SalesFinancials["totals"]["unlinkedSales"] = [];
  for (const u of interp.units) {
    const claimed = Math.min(1, shareOfUnit.get(u) ?? 0);
    attributed += u.profit * claimed;
    unlinked += u.profit * (1 - claimed);
    if (claimed === 0) {
      unlinkedSales.push({
        label: u.label,
        ref: `${u.block.sheet}!${u.saleRow.row}`,
        received: u.received,
        profit: u.profit,
      });
    }
  }
  const overhead = interp.blocks.reduce(
    (s, b) => s + b.overhead.reduce((t, a) => t + signed(a), 0),
    0,
  );
  const stock = interp.blocks.reduce((s, b) => s + b.stock.reduce((t, a) => t + signed(a), 0), 0);
  const ledgerNet = interp.blocks.reduce((s, b) => s + b.block.computedTotal, 0);

  const mismatches = interp.blocks
    .filter((b) => Math.abs(b.delta) > 0.01)
    .map((b) => ({
      ref: b.block.id,
      expected: b.block.computedTotal,
      got: round2(b.block.computedTotal - b.delta),
    }));
  const gap = round2(ledgerNet - (attributed + unlinked + overhead + stock));

  const out: SalesFinancials = {
    version: 1,
    generatedAt: new Date().toISOString(),
    source: dump.source,
    byModel,
    unmatched,
    totals: {
      ledgerNet: round2(ledgerNet),
      attributed: round2(attributed),
      unlinked: round2(unlinked),
      overhead: round2(overhead),
      stock: round2(stock),
      unlinkedSales: unlinkedSales.sort((a, b) => b.received - a.received),
    },
    reconciliation: {
      blocks: interp.blocks.length,
      ok: interp.blocks.length - mismatches.length,
      mismatches,
    },
  };

  if (mismatches.length || Math.abs(gap) > 0.05) {
    console.error(
      `Reconciliation failed: ${mismatches.length} block(s) off, ledger gap €${gap}. Nothing written.`,
    );
    for (const m of mismatches)
      console.error(`  ${m.ref}: total ${m.expected}, attributed ${m.got}`);
    process.exit(1);
  }
  writeJsonAtomic(FINANCIALS_JSON, out);

  const report = [
    "# Sales P&L build report",
    "",
    `Generated ${out.generatedAt}.`,
    "",
    `## Differences from the ledger summary's "Ganho Real" (${gainDiffs.length})`,
    "",
    "Listed when they differ by more than max(€15, 10%). Usually the summary's formula leaves out a strap, a repair or a share of a lot cost.",
    "",
    ...gainDiffs,
    "",
  ].join("\n");
  writeFileAtomic(`${WORK_DIR}/build-report.md`, report);

  const watches = Object.values(byModel);
  const sum = (f: (w: WatchFinancials) => number) => watches.reduce((s, w) => s + f(w), 0);
  const totalReceived = sum((w) => w.received);
  const totalProfit = sum((w) => w.profit);
  const eur = (n: number) => `€${Math.round(n).toLocaleString("en-GB")}`;
  const pad = (s: string) => s.padEnd(22);
  console.log("=".repeat(60));
  console.log(
    `${pad("Watches with a P&L:")}${watches.length} of ${Object.keys(matches.byModel).length} catalogue sales`,
  );
  console.log(
    `${pad("Received / profit:")}${eur(totalReceived)} / ${eur(totalProfit)}  (margin ${((totalProfit / totalReceived) * 100).toFixed(1)}%)`,
  );
  console.log(
    `${pad("Ledger total:")}${eur(ledgerNet)} = attributed ${eur(attributed)} + unlinked ${eur(unlinked)} + overhead ${eur(overhead)} + stock ${eur(stock)}`,
  );
  console.log(`${pad("Blocks reconciled:")}${out.reconciliation.ok}/${out.reconciliation.blocks}`);
  console.log(`${pad("Ganho Real diffs:")}${gainDiffs.length}  (see .sales/build-report.md)`);
  console.log(`${pad("Written:")}.sales/financials.json`);
  console.log("=".repeat(60));
  console.log("Next: open /admin/sales-report with `npm run dev`.");
}

if (require.main === module) main();

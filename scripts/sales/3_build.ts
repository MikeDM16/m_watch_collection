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
  CostLine,
  DailyMoney,
  KeptMatch,
  KeptWatchFinancials,
  MatchesFile,
  SalesFinancials,
  StockItemFinancials,
  WatchFinancials,
} from "../../src/app/admin/sales-report/salesData.types";
import { interpretCollection, type CollectionInterpretation } from "./_collection";
import { acceptedLinks } from "./_kept";
import {
  costLines,
  interpretLedger,
  linkHints,
  signed,
  type Allocation,
  type BlockResult,
  type Interpretation,
  type StockItem,
  type Unit,
} from "./_ledger";
import {
  daysBetween,
  FINANCIALS_JSON,
  isoOf,
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

export const ACCEPTED: readonly string[] = ["user", "claude", "ledger-link", "high"];

/** A "Ganho Real" difference worth listing. */
const GAIN_TOLERANCE = (gain: number) => Math.max(15, 0.1 * Math.abs(gain));

function byCategory(lines: CostLine[]): Partial<Record<CostCategory, number>> {
  const out: Partial<Record<CostCategory, number>> = {};
  for (const l of lines) out[l.category] = round2((out[l.category] ?? 0) + l.amount);
  return out;
}

const KEPT_ACCEPTED: readonly string[] = ["user", "claude", "high"];

const sideSum = (allocations: Allocation[], s: "E" | "F") =>
  allocations.filter((a) => a.part.side === s).reduce((t, a) => t + a.part.amount * a.share, 0);

export const itemDate = (it: StockItem): string | null =>
  it.anchor.date ??
  it.allocations.flatMap((a) => (a.part.row.date ? [a.part.row.date] : [])).sort()[0] ??
  null;

/**
 * Stock items that are really watches kept: the Collection tab names them, the
 * year tabs hold their money. Each linked item gives `fraction` of itself to its
 * kept watches, split evenly — all of it, unless the item covers more unsold
 * watches (a lot's share) than were kept.
 */
export interface ItemLink {
  item: StockItem;
  kept: string[];
  fraction: number;
}

export function itemLinks(interp: Interpretation, kept: KeptMatch[]): Map<string, ItemLink> {
  const items = new Map(interp.blocks.flatMap((b) => b.stockItems).map((it) => [it.key, it]));
  const out = new Map<string, ItemLink>();
  for (const [stock, keys] of acceptedLinks(kept)) {
    const item = items.get(stock);
    if (item) out.set(stock, { item, kept: keys, fraction: Math.min(1, keys.length / item.count) });
  }
  return out;
}

/** What is bought and not sold yet, one item per watch or lot share, newest first. */
function buildStockItems(
  interp: Interpretation,
  links: Map<string, ItemLink>,
): StockItemFinancials[] {
  return interp.blocks
    .flatMap((b) =>
      b.stockItems.map((it): StockItemFinancials => {
        const lines = costLines(it);
        const cost = round2(sideSum(it.allocations, "F"));
        const refunds = round2(sideSum(it.allocations, "E"));
        return {
          key: it.key,
          label: it.label,
          kind: it.kind,
          count: it.count,
          blockRef: `${b.block.sheet}!${b.block.firstRow}:${b.block.lastRow}`,
          ref: `${b.block.sheet}!${it.anchor.row}`,
          purchaseDate: itemDate(it),
          cost,
          refunds,
          net: round2(cost - refunds),
          costByCategory: byCategory(lines),
          costLines: lines,
          keptShare: links.get(it.key)?.fraction ?? 0,
        };
      }),
    )
    .sort((a, b) => (b.purchaseDate ?? "").localeCompare(a.purchaseDate ?? ""));
}

/**
 * The watches kept, in the Collection tab's own order: their own money, plus
 * their share of any stock item linked to them. A watch kept out of a year-tab
 * block whose other watches sold (a lot: "8 Watches", or a Cuervo bought with
 * others) costs effectively what that block has not yet earned back: nothing,
 * once the others' sales covered the whole block. A block with no sales has
 * earned nothing back, so there the effective cost is the cost.
 */
function buildKept(
  coll: CollectionInterpretation,
  matched: KeptMatch[],
  links: Map<string, ItemLink>,
  ledger: Interpretation,
): KeptWatchFinancials[] {
  const matchOf = new Map(matched.map((k) => [k.key, k]));
  const blockOf = new Map<StockItem, BlockResult>(
    ledger.blocks.flatMap((b) => b.stockItems.map((it): [StockItem, BlockResult] => [it, b])),
  );
  const linkOf = new Map<string, ItemLink>();
  for (const l of links.values()) for (const k of l.kept) linkOf.set(k, l);

  return coll.watches.map((w): KeptWatchFinancials => {
    const m = matchOf.get(w.key);
    const own = costLines(w);
    let cost = sideSum(w.allocations, "F");
    let refunds = sideSum(w.allocations, "E");
    let lines = own;
    let flags = [...(m?.flags ?? w.flags)];
    let purchaseDate = w.purchaseDate;
    let effectiveLinked = 0;
    let link: KeptWatchFinancials["link"] = null;

    const l = linkOf.get(w.key);
    if (l) {
      const share = l.fraction / l.kept.length;
      const { item } = l;
      cost += sideSum(item.allocations, "F") * share;
      refunds += sideSum(item.allocations, "E") * share;
      lines = [
        ...own,
        ...costLines(item).map((x) => ({
          ...x,
          amount: round2(x.amount * share),
          share: Math.round(x.share * share * 10_000) / 10_000,
        })),
      ];
      // What its block has not earned back, shared by what the block still holds.
      const part = (sideSum(item.allocations, "F") - sideSum(item.allocations, "E")) * share;
      const result = blockOf.get(item)!;
      const shortfall = Math.max(0, -result.block.computedTotal);
      const held = result.stockItems.reduce(
        (s, it) => s + sideSum(it.allocations, "F") - sideSum(it.allocations, "E"),
        0,
      );
      effectiveLinked = held > 0 ? Math.min(part, (shortfall * part) / held) : part;
      if (flags.includes("no-cost") || flags.includes("no-purchase")) {
        purchaseDate = itemDate(item) ?? purchaseDate;
        flags = flags.filter((f) => !["no-cost", "no-purchase", "undated"].includes(f));
      }
      link = {
        stock: item.key,
        ref: `${item.block.sheet}!${item.anchor.row}`,
        label: item.label,
      };
    }

    const net = round2(cost - refunds);
    const ownNet = sideSum(w.allocations, "F") - sideSum(w.allocations, "E");
    return {
      key: w.key,
      label: w.label,
      blockRef: `${w.block.sheet}!${w.block.firstRow}:${w.block.lastRow}`,
      ref: `${w.block.sheet}!${w.anchor.row}`,
      modelFile:
        m && m.model.modelFile && KEPT_ACCEPTED.includes(m.model.status) ? m.model.modelFile : null,
      purchaseDate,
      cost: round2(cost),
      refunds: round2(refunds),
      net,
      paid: w.paid,
      effective: round2(ownNet + effectiveLinked),
      costByCategory: byCategory(lines),
      costLines: lines,
      link,
      flags,
    };
  });
}

/**
 * When each sold watch left stock: its payout day when the ledger's date is one,
 * else the catalogue's auction day, else whatever date the ledger has. Unclamped.
 */
export function soldDates(
  interp: Interpretation,
  matches: MatchesFile,
): (u: Unit) => string | null {
  const auction = new Map<Unit, string>();
  for (const m of Object.values(matches.byModel)) {
    const u = m.unit && ACCEPTED.includes(m.status) ? interp.unitByKey.get(m.unit) : undefined;
    const d = parseCatalogueDate(m.date);
    if (!u || !d) continue;
    const iso = isoOf(d);
    const prev = auction.get(u);
    if (!prev || iso < prev) auction.set(u, iso);
  }
  return (u) =>
    u.dateKind === "payout" && u.payoutDate
      ? u.payoutDate
      : (auction.get(u) ?? u.payoutDate ?? u.purchaseDate);
}

interface DailyBuild {
  daily: DailyMoney[];
  received: number;
  spent: number;
  collectionSpent: number;
  /** Capital in watches bought to sell, and in watches kept, at the end of the series. */
  stockEnd: number;
  keptEnd: number;
  notes: string[];
}

/**
 * The ledger day by day. Cash: every part but the pass-throughs, by its row's
 * date. Stock at cost: a sold watch holds its costs from the day each was paid
 * until the day it sold (a line paid after the sale, like the buyer's shipping,
 * counts on the sale day); a watch not sold yet holds them still.
 */
function buildDaily(
  interp: Interpretation,
  matches: MatchesFile,
  coll: CollectionInterpretation,
  links: Map<string, ItemLink>,
): DailyBuild {
  const today = isoOf(new Date());
  const days = new Map<string, DailyMoney>();
  const at = (date: string): DailyMoney => {
    let d = days.get(date);
    if (!d)
      days.set(
        date,
        (d = { date, received: 0, spent: 0, collectionSpent: 0, stockDelta: 0, keptDelta: 0 }),
      );
    return d;
  };
  const future = new Set<string>();
  const when = (date: string | null, ref: string): string | null => {
    if (!date || date <= today) return date;
    future.add(`- ${ref}: dated ${date}, after the build day; counted on ${today}.`);
    return today;
  };
  const firstDate = (rows: { date: string | null }[]) => rows.find((r) => r.date)?.date ?? null;
  const undated: string[] = [];

  let received = 0;
  let spent = 0;
  for (const b of interp.blocks) {
    for (const p of b.parts) {
      if (p.kind === "passthrough") continue;
      const date = when(p.row.date ?? firstDate(b.block.rows), p.ref);
      if (!date) {
        undated.push(`- ${p.ref}: no date in its row or block; left out of the series.`);
        continue;
      }
      const d = at(date);
      if (p.side === "E" && p.kind === "sale") {
        d.received += p.amount;
        received += p.amount;
      } else {
        const v = p.side === "E" ? -p.amount : p.amount;
        d.spent += v;
        spent += v;
      }
    }
  }

  const soldOn = soldDates(interp, matches);

  let lateLines = 0;
  let stockEnd = 0;
  for (const u of interp.units) {
    const ref = `${u.block.sheet}!${u.saleRow.row}`;
    const sold = when(soldOn(u), ref);
    if (!sold) {
      undated.push(`- ${ref} (${u.label}): no sale date; left out of the stock series.`);
      continue;
    }
    let held = 0;
    for (const a of u.allocations) {
      const v = -signed(a);
      let date = when(a.part.row.date, a.part.ref) ?? sold;
      if (date > sold) {
        date = sold;
        lateLines++;
      }
      at(date).stockDelta += v;
      held += v;
    }
    at(sold).stockDelta -= held;
  }
  // Watches not sold yet hold their money still: as stock, or — the share
  // linked to a kept watch — as the collection, from the same days.
  let linkedEnd = 0;
  for (const b of interp.blocks) {
    for (const it of b.stockItems) {
      const keptShare = links.get(it.key)?.fraction ?? 0;
      for (const a of it.allocations) {
        const date = when(a.part.row.date ?? firstDate(b.block.rows), a.part.ref);
        if (!date) {
          undated.push(`- ${a.part.ref} (${it.label}): no date; left out of the stock series.`);
          continue;
        }
        const v = -signed(a);
        at(date).stockDelta += v * (1 - keptShare);
        at(date).keptDelta += v * keptShare;
        stockEnd += v * (1 - keptShare);
        linkedEnd += v * keptShare;
      }
    }
  }

  // The Collection tab: its money is spending on the hobby too, and each euro
  // of it is held in a kept watch from the day it was paid.
  let collectionSpent = 0;
  for (const b of coll.blocks) {
    for (const p of b.parts) {
      if (p.kind === "passthrough") continue;
      const date = when(p.row.date ?? firstDate(b.block.rows), p.ref);
      if (!date) {
        undated.push(`- ${p.ref}: no date in its row or block; left out of the series.`);
        continue;
      }
      const v = p.side === "E" ? -p.amount : p.amount;
      at(date).collectionSpent += v;
      collectionSpent += v;
    }
  }
  let keptEnd = linkedEnd;
  for (const w of coll.watches) {
    for (const a of w.allocations) {
      const date = when(a.part.row.date ?? w.purchaseDate, a.part.ref);
      if (!date) {
        undated.push(`- ${a.part.ref} (${w.label}): no date; left out of the kept series.`);
        continue;
      }
      const v = -signed(a);
      at(date).keptDelta += v;
      keptEnd += v;
    }
  }

  const daily = [...days.values()]
    .map((d) => ({
      date: d.date,
      received: round2(d.received),
      spent: round2(d.spent),
      collectionSpent: round2(d.collectionSpent),
      stockDelta: round2(d.stockDelta),
      keptDelta: round2(d.keptDelta),
    }))
    .filter((d) => d.received || d.spent || d.collectionSpent || d.stockDelta || d.keptDelta)
    .sort((a, b) => a.date.localeCompare(b.date));

  const notes = [
    ...future,
    ...undated,
    `- ${lateLines} cost line(s) of sold watches are dated after the sale (usually the buyer's shipping); they count on the sale day.`,
  ];
  return { daily, received, spent, collectionSpent, stockEnd, keptEnd, notes };
}

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

  const ov = loadOverrides();
  const interp = interpretLedger(dump, ov);
  linkHints(interp, dump.hints);
  const coll = interpretCollection(dump.collection ?? [], ov);

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

  // ── Stock items and the day-by-day series. Each must land on figures the
  // ledger already proves: the items on each block's stock, the cash on the
  // ledger total, the stock series on the stock total.
  // Stock items the Collection tab claims (kept out of a lot) move to the kept
  // side; `stock` itself is untouched, only split.
  const matchedKept = matches.kept ?? [];
  const links = itemLinks(interp, matchedKept);
  const stockItems = buildStockItems(interp, links);
  const stockKept = [...links.values()].reduce(
    (s, l) => s + l.item.allocations.reduce((t, a) => t + signed(a), 0) * l.fraction,
    0,
  );
  const stockForSale = stock - stockKept;
  const itemMismatches = interp.blocks
    .filter((b) => Math.abs(b.stockItemsDelta) > 0.01)
    .map((b) => `${b.block.id}: stock items off by €${b.stockItemsDelta}`);
  const days = buildDaily(interp, matches, coll, links);

  // The Collection tab: every block against its own total, and the kept
  // series against them all.
  const kept = buildKept(coll, matchedKept, links, interp);
  const collectionNet = coll.blocks.reduce((s, b) => s + b.block.computedTotal, 0);
  const collectionMismatches = coll.blocks
    .filter((b) => Math.abs(b.delta) > 0.01)
    .map((b) => ({
      ref: b.block.id,
      expected: b.block.computedTotal,
      got: round2(b.block.computedTotal - b.delta),
    }));

  const cashGap = round2(
    days.received - days.spent - days.collectionSpent - (ledgerNet + collectionNet),
  );
  const seriesStock = days.daily.reduce((s, d) => s + d.stockDelta, 0);
  const stockGap = round2(seriesStock + stockForSale);
  const seriesKept = days.daily.reduce((s, d) => s + d.keptDelta, 0);
  const keptGap = round2(seriesKept + collectionNet + stockKept);
  const keptListGap = round2(kept.reduce((s, k) => s + k.net, 0) + collectionNet + stockKept);
  const seriesProblems = [
    ...itemMismatches,
    ...collectionMismatches.map(
      (m) => `${m.ref}: Collection block total ${m.expected}, its watches hold ${m.got}`,
    ),
    ...(Math.abs(cashGap) > 0.05 ? [`cash series off the ledger totals by €${cashGap}`] : []),
    ...(Math.abs(stockGap) > 0.05 ? [`stock series off the stock total by €${stockGap}`] : []),
    ...(Math.abs(keptGap) > 0.05 ? [`kept series off the kept total by €${keptGap}`] : []),
    ...(Math.abs(keptListGap) > 0.05
      ? [`kept watches' costs off the kept total by €${keptListGap}`]
      : []),
  ];

  const out: SalesFinancials = {
    version: 1,
    generatedAt: new Date().toISOString(),
    source: dump.source,
    byModel,
    stockItems,
    kept,
    collection: {
      net: round2(collectionNet),
      blocks: coll.blocks.length,
      ok: coll.blocks.length - collectionMismatches.length,
      mismatches: collectionMismatches,
    },
    daily: days.daily,
    unmatched,
    totals: {
      ledgerNet: round2(ledgerNet),
      attributed: round2(attributed),
      unlinked: round2(unlinked),
      overhead: round2(overhead),
      stock: round2(stock),
      stockForSale: round2(stockForSale),
      stockKept: round2(stockKept),
      unlinkedSales: unlinkedSales.sort((a, b) => b.received - a.received),
    },
    reconciliation: {
      blocks: interp.blocks.length,
      ok: interp.blocks.length - mismatches.length,
      mismatches,
    },
  };

  if (mismatches.length || Math.abs(gap) > 0.05 || seriesProblems.length) {
    console.error(
      `Reconciliation failed: ${mismatches.length} block(s) off, ledger gap €${gap}, ${seriesProblems.length} series problem(s). Nothing written.`,
    );
    for (const m of mismatches)
      console.error(`  ${m.ref}: total ${m.expected}, attributed ${m.got}`);
    for (const p of seriesProblems) console.error(`  ${p}`);
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
    `## Dates in the money-over-time series`,
    "",
    ...days.notes,
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
  console.log(
    `${pad("Not sold yet:")}${stockItems.length} items, ${eur(-stock)} at cost · ${days.daily.length} days of money`,
  );
  console.log(
    `${pad("Kept (Collection):")}${kept.length} watches, ${eur(-collectionNet - stockKept)} at cost (${eur(-stockKept)} of it linked from stock) · ${out.collection!.ok}/${out.collection!.blocks} blocks reconciled`,
  );
  console.log(`${pad("Ganho Real diffs:")}${gainDiffs.length}  (see .sales/build-report.md)`);
  console.log(`${pad("Written:")}.sales/financials.json`);
  console.log("=".repeat(60));
  console.log("Next: open /admin/sales-report with `npm run dev`.");
}

if (require.main === module) main();

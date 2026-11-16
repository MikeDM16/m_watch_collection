/**
 * The back-office ledger, turned into the figures the sales report shows: the
 * same `SalesFinancials` shape that scripts/sales/3_build.ts writes from the
 * workbook, so the report can show either source unchanged.
 *
 * Pure: the store, the catalogue's sales and today's date in; figures and the
 * problems found out. No fs, no imports from scripts/: the dev pages call it at
 * request time, and scripts/ledger/verify.ts calls it to prove a seeded store
 * reproduces the workbook's figures.
 *
 * MONEY
 *   A line's money is split between its holders by share. A watch's cost is its
 *   share of the lines going out, its refunds its share of money back that is
 *   not a sale, its received its share of the sales.
 *
 * OVER TIME
 *   Cash moves on each line's date. A sold watch holds its costs from the day
 *   each was paid until the day it sold (`watch.sold`, else its first sale
 *   line); a line paid after the sale counts on the sale day. A watch for sale
 *   or kept holds them still. Dates after today count today.
 *
 * EFFECTIVE COST
 *   A kept watch costs, effectively, what each group it holds money in has not
 *   earned back, shared by what the group still holds: nothing, once the other
 *   watches' sales covered a lot it was kept out of.
 */

import type {
  BlockKind,
  Confidence,
  CostCategory,
  CostLine,
  DailyMoney,
  KeptWatchFinancials,
  SalesFinancials,
  StockItemFinancials,
  WatchFinancials,
} from "../sales-report/salesData.types";
import type {
  CatalogueSaleRef,
  LedgerGroup,
  LedgerLine,
  LedgerStore,
  LedgerWatch,
} from "./ledger.types";

export const OVERHEAD_ID = "overhead";

const round2 = (x: number): number => Math.round((x + Number.EPSILON) * 100) / 100;
const round4 = (x: number): number => Math.round(x * 10_000) / 10_000;

const COST_CATEGORIES: readonly string[] = [
  "purchase",
  "service",
  "strap",
  "box",
  "shipping",
  "fees",
];

/** A line's cost category. Parts bought for another watch count as its service. */
function categoryOf(line: LedgerLine): CostCategory {
  if (line.kind === "parts") return "service";
  return (COST_CATEGORIES.includes(line.kind) ? line.kind : "other") as CostCategory;
}

const isSale = (l: LedgerLine) => l.direction === "in" && l.kind === "sale";

/** + money in, − money out: the line's effect on the ledger's total. */
const signedOf = (l: LedgerLine) => (l.direction === "in" ? l.amount : -l.amount);

/** Flags the build works out itself; the stored ones are only the workbook's archive. */
const DERIVED_FLAGS = [
  "no-purchase",
  "negative-cost",
  "shared-payout",
  "bought-after-auction",
  "no-cost",
  "trade-in",
];

const BLOCK_KINDS: readonly string[] = ["single", "lot", "overhead"];

/** "DD/MM/YYYY" → a UTC date. */
function catalogueDate(s: string): Date | null {
  const [d, m, y] = (s || "").split("/").map(Number);
  return d && m && y ? new Date(Date.UTC(y, m - 1, d)) : null;
}

function isoDate(s: string | null | undefined): Date | null {
  if (!s) return null;
  const [y, m, d] = s.split("-").map(Number);
  return y && m && d ? new Date(Date.UTC(y, m - 1, d)) : null;
}

const isoOf = (d: Date): string => d.toISOString().slice(0, 10);

interface Holding {
  line: LedgerLine;
  share: number;
}

/** A watch's money, from its holdings. */
interface Money {
  received: number;
  refunds: number;
  cost: number;
  lines: CostLine[];
  costByCategory: Partial<Record<CostCategory, number>>;
  hasPurchase: boolean;
}

function moneyOf(holdings: Holding[]): Money {
  let received = 0;
  let refunds = 0;
  let cost = 0;
  const lines: CostLine[] = [];
  const costByCategory: Partial<Record<CostCategory, number>> = {};
  let hasPurchase = false;
  for (const { line, share } of holdings) {
    const amount = line.amount * share;
    if (isSale(line)) received += amount;
    else if (line.direction === "in") refunds += amount;
    else {
      cost += amount;
      const category = categoryOf(line);
      if (category === "purchase") hasPurchase = true;
      const rounded = round2(amount);
      costByCategory[category] = round2((costByCategory[category] ?? 0) + rounded);
      lines.push({
        category,
        label: line.text || line.note || "(no description)",
        amount: rounded,
        share: round4(share),
        ref: line.origin ?? line.id,
        date: line.dateGuessed ? null : line.date,
      });
    }
  }
  return {
    received: round2(received),
    refunds: round2(refunds),
    cost: round2(cost),
    lines,
    costByCategory,
    hasPurchase,
  };
}

export interface WatchSummary {
  received: number;
  refunds: number;
  cost: number;
  /** received + refunds − cost. */
  profit: number;
  /** Lines holding money for it. */
  lines: number;
}

/** Every watch's money in one pass, for the back-office's tables. */
export function watchSummaries(store: LedgerStore): Record<string, WatchSummary> {
  const holdings = new Map<string, Holding[]>();
  for (const line of store.lines)
    for (const h of line.holders)
      holdings.set(h.id, [...(holdings.get(h.id) ?? []), { line, share: h.share }]);
  const out: Record<string, WatchSummary> = {};
  for (const w of store.watches) {
    const hs = holdings.get(w.id) ?? [];
    const m = moneyOf(hs);
    out[w.id] = {
      received: m.received,
      refunds: m.refunds,
      cost: m.cost,
      profit: round2(m.received + m.refunds - m.cost),
      lines: hs.length,
    };
  }
  return out;
}

export interface BuildResult {
  financials: SalesFinancials;
  /** Problems in the store: a line not fully held, an unknown watch, a sold watch with no sale. */
  issues: string[];
}

export function buildFinancials(
  store: LedgerStore,
  catalogue: CatalogueSaleRef[],
  today: Date,
  source: SalesFinancials["source"],
): BuildResult {
  const issues: string[] = [];
  const todayIso = isoOf(
    new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())),
  );
  const clamp = (d: string) => (d > todayIso ? todayIso : d);

  const watchById = new Map(store.watches.map((w) => [w.id, w]));
  const groupById = new Map<string, LedgerGroup>(store.groups.map((g) => [g.id, g]));
  const saleOf = new Map(catalogue.map((c) => [c.modelFile, c]));

  // ── Holdings, and the store's own consistency.
  const holdings = new Map<string, Holding[]>();
  const overhead: Holding[] = [];
  for (const line of store.lines) {
    if (!line.holders.length) issues.push(`${line.origin ?? line.id}: nobody holds this line`);
    const total = line.holders.reduce((s, h) => s + h.share, 0);
    if (Math.abs(total - 1) > 1e-6)
      issues.push(`${line.origin ?? line.id}: its holders' shares add up to ${round4(total)}`);
    for (const h of line.holders) {
      if (h.id === OVERHEAD_ID) overhead.push({ line, share: h.share });
      else if (!watchById.has(h.id))
        issues.push(`${line.origin ?? line.id}: held by an unknown watch ${h.id}`);
      else holdings.set(h.id, [...(holdings.get(h.id) ?? []), { line, share: h.share }]);
    }
  }
  const seenModel = new Map<string, string>();
  for (const w of store.watches) {
    if (!w.modelFile) continue;
    const other = seenModel.get(w.modelFile);
    if (other && other !== w.id && w.status !== "sold")
      issues.push(`${w.label}: ${w.modelFile} is already another watch`);
    seenModel.set(w.modelFile, w.id);
  }

  const held = (w: LedgerWatch) => holdings.get(w.id) ?? [];
  const groupRef = (id: string | undefined) => {
    const g = id ? groupById.get(id) : undefined;
    return g?.origin ?? g?.id ?? id ?? "";
  };

  // ── Sold watches.
  const byModel: Record<string, WatchFinancials> = {};
  const unlinkedSales: SalesFinancials["totals"]["unlinkedSales"] = [];
  let attributed = 0;
  let unlinked = 0;
  const firstSaleDate = (w: LedgerWatch) => {
    const s = held(w).find((h) => isSale(h.line));
    return s ? (s.line.dateGuessed ? null : s.line.date) : null;
  };

  for (const w of store.watches) {
    if (w.status !== "sold") continue;
    const hs = held(w);
    const m = moneyOf(hs);
    const profit = round2(m.received + m.refunds - m.cost);
    const sale = w.modelFile ? saleOf.get(w.modelFile) : undefined;
    if (!hs.some((h) => isSale(h.line))) issues.push(`${w.label}: sold, but has no sale line`);
    if (!sale) {
      if (w.modelFile)
        issues.push(
          `${w.label}: sold as ${w.modelFile}, which has no sale report in the catalogue`,
        );
      unlinked += profit;
      unlinkedSales.push({
        label: w.label,
        ref: w.origin ?? w.id,
        received: m.received,
        profit,
      });
      continue;
    }
    attributed += profit;
    const saleShare = hs.find((h) => isSale(h.line))?.share ?? 1;
    const flags = [...(w.flags ?? []).filter((f) => !DERIVED_FLAGS.includes(f))];
    if (!m.hasPurchase) flags.push("no-purchase");
    if (saleShare < 1 - 1e-9) flags.push("shared-payout");
    if (m.cost < 0) flags.push("negative-cost");
    const auction = catalogueDate(sale.date);
    const bought = isoDate(w.acquired ?? null);
    let daysHeld =
      auction && bought ? Math.round((auction.getTime() - bought.getTime()) / 86_400_000) : null;
    if (daysHeld !== null && daysHeld < 0) {
      flags.push("bought-after-auction");
      daysHeld = null;
    }
    const group = w.group ? groupById.get(w.group) : undefined;
    byModel[w.modelFile!] = {
      modelFile: w.modelFile!,
      confidence: (w.linkedBy ?? "user") as Confidence,
      score: null,
      evidence: w.note ? [w.note] : [],
      unit: w.id,
      label: w.label,
      gross: round2(sale.price * saleShare),
      saleShare,
      received: m.received,
      refunds: m.refunds,
      cost: m.cost,
      costByCategory: m.costByCategory,
      profit,
      margin: m.received > 0 ? round2((profit / m.received) * 10_000) / 10_000 : null,
      roi: m.cost >= 1 ? round2((profit / m.cost) * 10_000) / 10_000 : null,
      purchaseDate: w.acquired ?? null,
      payoutDate: firstSaleDate(w),
      daysHeld,
      block: {
        ref: groupRef(w.group),
        kind: (group && BLOCK_KINDS.includes(group.kind) ? group.kind : "single") as BlockKind,
        units: group?.size ?? 1,
      },
      costLines: m.lines,
      flags,
      userGain: w.archive?.userGain ?? null,
    };
  }
  const soldFiles = new Set(Object.keys(byModel));
  const unmatched = catalogue.filter((c) => !soldFiles.has(c.modelFile)).map((c) => c.modelFile);

  // ── Groups: what each still has to earn back, and what its unsold watches hold.
  const groupSigned = new Map<string, number>();
  for (const line of store.lines) {
    const g = line.group ?? `line:${line.id}`;
    groupSigned.set(g, (groupSigned.get(g) ?? 0) + signedOf(line));
  }
  const costIn = (h: Holding) => (h.line.direction === "out" ? 1 : -1) * h.line.amount * h.share;
  const groupHeld = new Map<string, number>();
  for (const w of store.watches) {
    if (w.status !== "for-sale" && w.status !== "kept") continue;
    for (const h of held(w)) {
      if (isSale(h.line)) continue;
      const g = h.line.group ?? `line:${h.line.id}`;
      groupHeld.set(g, (groupHeld.get(g) ?? 0) + costIn(h));
    }
  }

  // ── Watches not sold yet: for sale, and kept.
  const stockItems: StockItemFinancials[] = [];
  const kept: KeptWatchFinancials[] = [];
  let stockForSale = 0;
  let stockKept = 0;
  let overheadTotal = overhead.reduce((s, h) => s - costIn(h), 0);
  for (const w of store.watches) {
    const hs = held(w).filter((h) => !isSale(h.line));
    const m = moneyOf(hs);
    const net = round2(m.cost - m.refunds);
    if (w.status === "returned" || w.status === "gone") {
      overheadTotal -= hs.reduce((s, h) => s + costIn(h), 0);
      continue;
    }
    if (w.status === "for-sale") {
      stockForSale -= hs.reduce((s, h) => s + costIn(h), 0);
      stockItems.push({
        key: w.id,
        label: w.label,
        kind: w.count ? "lot-share" : "watch",
        count: w.count ?? 1,
        blockRef: groupRef(w.group),
        ref: w.origin ?? w.id,
        purchaseDate: w.acquired ?? null,
        cost: m.cost,
        refunds: m.refunds,
        net,
        costByCategory: m.costByCategory,
        costLines: m.lines,
        keptShare: 0,
      });
    }
    if (w.status === "kept") {
      const trade = hs.filter((h) => h.line.book === "trade");
      stockKept -= trade.reduce((s, h) => s + costIn(h), 0);
      // Effective: per group, its part of what the group has not earned back.
      const parts = new Map<string, number>();
      for (const h of hs) {
        const g = h.line.group ?? `line:${h.line.id}`;
        parts.set(g, (parts.get(g) ?? 0) + costIn(h));
      }
      let effective = 0;
      for (const [g, part] of parts) {
        const shortfall = Math.max(0, -(groupSigned.get(g) ?? 0));
        const holding = groupHeld.get(g) ?? 0;
        effective += holding > 0 ? Math.min(part, (shortfall * part) / holding) : part;
      }
      const flags = [...(w.flags ?? []).filter((f) => !DERIVED_FLAGS.includes(f))];
      if (net < 1) flags.push("no-cost");
      else if (!m.hasPurchase) flags.push("no-purchase");
      if (hs.some((h) => h.line.tradeIn)) flags.push("trade-in");
      kept.push({
        key: w.id,
        label: w.label,
        blockRef: groupRef(w.group),
        ref: w.origin ?? w.id,
        modelFile: w.modelFile,
        purchaseDate: w.acquired ?? null,
        cost: m.cost,
        refunds: m.refunds,
        net,
        paid: w.paidNote ?? null,
        effective: round2(effective),
        costByCategory: m.costByCategory,
        costLines: m.lines,
        link: trade.length && w.archive?.link ? w.archive.link : null,
        flags,
      });
    }
  }
  stockItems.sort((a, b) => (b.purchaseDate ?? "").localeCompare(a.purchaseDate ?? ""));

  // ── Day by day.
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
  let ledgerNet = 0;
  let collectionNet = 0;
  for (const line of store.lines) {
    const d = at(clamp(line.date));
    if (line.book === "collection") collectionNet += signedOf(line);
    else ledgerNet += signedOf(line);
    if (isSale(line)) d.received += line.amount;
    else if (line.book === "collection") d.collectionSpent -= signedOf(line);
    else d.spent -= signedOf(line);
  }
  for (const w of store.watches) {
    const hs = held(w).filter((h) => !isSale(h.line));
    if (w.status === "sold") {
      const raw = w.sold ?? firstSaleDate(w);
      if (!raw) {
        issues.push(`${w.label}: sold, with no date to leave stock on`);
        continue;
      }
      const sold = clamp(raw);
      let holding = 0;
      for (const h of hs) {
        const v = costIn(h);
        const date = clamp(h.line.date);
        at(date > sold ? sold : date).stockDelta += v;
        holding += v;
      }
      at(sold).stockDelta -= holding;
    } else if (w.status === "for-sale" || w.status === "kept") {
      for (const h of hs) {
        const d = at(clamp(h.line.date));
        if (w.status === "kept") d.keptDelta += costIn(h);
        else d.stockDelta += costIn(h);
      }
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

  const tradeGroups = store.groups.filter((g) => g.kind !== "collection");
  const collectionGroups = store.groups.filter((g) => g.kind === "collection");
  const stock = stockForSale + stockKept;

  return {
    issues,
    financials: {
      version: 1,
      generatedAt: new Date().toISOString(),
      source,
      byModel,
      stockItems,
      kept,
      collection: {
        net: round2(collectionNet),
        blocks: collectionGroups.length,
        ok: collectionGroups.length,
        mismatches: [],
      },
      daily,
      unmatched,
      totals: {
        ledgerNet: round2(ledgerNet),
        attributed: round2(attributed),
        unlinked: round2(unlinked),
        overhead: round2(overheadTotal),
        stock: round2(stock),
        stockForSale: round2(stockForSale),
        stockKept: round2(stockKept),
        unlinkedSales: unlinkedSales.sort((a, b) => b.received - a.received),
      },
      reconciliation: {
        blocks: tradeGroups.length,
        ok: issues.length ? 0 : tradeGroups.length,
        mismatches: [],
      },
    },
  };
}

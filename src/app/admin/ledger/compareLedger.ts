/**
 * Workbook vs back-office ledger: where the two disagree. Pure: used by the
 * compare view on /admin/ledger, and by scripts/ledger/verify.ts to prove a
 * freshly seeded ledger reproduces the workbook.
 *
 * FIGURES
 *   The sales report's own figures from each side, compared to the cent: every
 *   sold catalogue model, the totals, every watch not sold yet and every kept
 *   watch, and the day-by-day series. A watch whose shares compound (a payout
 *   split between models, a kept watch's linked lot share) may differ by a cent
 *   per figure: the workbook pipeline rounds twice, the ledger once.
 *
 * LINES
 *   Each ledger line is paired with a workbook line: by the workbook row's
 *   fingerprint first (text and amounts unchanged), then by direction, amount
 *   (±€0.01) and the nearest date within a week. What is left on either side is
 *   money one side has and the other does not.
 */

import type { CostLine, SalesFinancials } from "../sales-report/salesData.types";
import type { LedgerLine } from "./ledger.types";

const CENT = 0.011;

export interface FigureDiff {
  where: string;
  field: string;
  workbook: string;
  ledger: string;
}

export function compareFinancials(base: SalesFinancials, got: SalesFinancials): FigureDiff[] {
  const diffs: FigureDiff[] = [];
  const show = (v: unknown) => (v === undefined ? "—" : JSON.stringify(v));
  const near = (a: number | null | undefined, b: number | null | undefined, tol = CENT) =>
    a === b ||
    (a == null && b === 0) ||
    (a === 0 && b == null) ||
    (typeof a === "number" && typeof b === "number" && Math.abs(a - b) <= tol);
  const num = (
    where: string,
    field: string,
    a: number | null | undefined,
    b: number | null | undefined,
    tol = CENT,
  ) => {
    if (!near(a, b, tol)) diffs.push({ where, field, workbook: show(a), ledger: show(b) });
  };
  const same = (where: string, field: string, a: unknown, b: unknown) => {
    if (JSON.stringify(a) !== JSON.stringify(b))
      diffs.push({ where, field, workbook: show(a), ledger: show(b) });
  };
  const sameSet = (where: string, field: string, a: string[], b: string[]) => {
    const sa = new Set(a);
    const sb = new Set(b);
    const onlyA = [...sa].filter((x) => !sb.has(x));
    const onlyB = [...sb].filter((x) => !sa.has(x));
    if (onlyA.length || onlyB.length)
      diffs.push({
        where,
        field,
        workbook: onlyA.length ? `only here: ${onlyA.join(", ")}` : "—",
        ledger: onlyB.length ? `only here: ${onlyB.join(", ")}` : "—",
      });
  };
  const byRef = (ls: CostLine[]) => {
    const m = new Map<string, number>();
    for (const l of ls) m.set(l.ref, (m.get(l.ref) ?? 0) + l.amount);
    return m;
  };
  const lines = (where: string, a: CostLine[], b: CostLine[], tol: number) => {
    const ma = byRef(a);
    const mb = byRef(b);
    for (const ref of new Set([...ma.keys(), ...mb.keys()]))
      num(where, `line ${ref}`, ma.get(ref), mb.get(ref), tol);
  };

  // Sold catalogue models.
  sameSet("Sold models", "models", Object.keys(base.byModel), Object.keys(got.byModel));
  for (const [file, a] of Object.entries(base.byModel)) {
    const b = got.byModel[file];
    if (!b) continue;
    const where = a.label ? `${file} (${a.label})` : file;
    const tol = a.saleShare < 1 ? CENT + 0.01 : CENT;
    for (const f of [
      "received",
      "refunds",
      "cost",
      "profit",
      "gross",
      "saleShare",
      "userGain",
      "daysHeld",
    ] as const)
      num(where, f, a[f], b[f], tol);
    for (const f of ["margin", "roi"] as const) num(where, f, a[f], b[f], 0.0002);
    same(where, "purchaseDate", a.purchaseDate, b.purchaseDate);
    same(where, "payoutDate", a.payoutDate, b.payoutDate);
    same(where, "block", a.block, b.block);
    sameSet(where, "flags", a.flags, b.flags);
    const catTol = tol + (a.saleShare < 1 ? 0.01 * a.costLines.length : 0);
    for (const c of new Set([...Object.keys(a.costByCategory), ...Object.keys(b.costByCategory)]))
      num(where, `cost ${c}`, a.costByCategory[c as never], b.costByCategory[c as never], catTol);
    lines(where, a.costLines, b.costLines, tol);
  }
  sameSet("Catalogue sales with no money", "models", base.unmatched, got.unmatched);

  // Totals.
  for (const f of [
    "ledgerNet",
    "attributed",
    "unlinked",
    "overhead",
    "stock",
    "stockForSale",
    "stockKept",
  ] as const)
    num("Totals", f, base.totals[f], got.totals[f], f === "ledgerNet" ? 0.05 : 0.03);
  sameSet(
    "Totals",
    "unlinked sales",
    base.totals.unlinkedSales.map((s) => `${s.ref} ${s.received} ${s.profit}`),
    got.totals.unlinkedSales.map((s) => `${s.ref} ${s.received} ${s.profit}`),
  );
  num("Collection", "net", base.collection?.net, got.collection?.net, 0.05);

  // Not sold yet: what is still for sale (a stock item kept watches claim in full is theirs).
  const forSale = (base.stockItems ?? []).filter((s) => (s.keptShare ?? 0) < 1);
  const gotItems = new Map(
    (got.stockItems ?? []).filter((s) => (s.keptShare ?? 0) < 1).map((s) => [s.ref, s]),
  );
  sameSet(
    "Bought to sell",
    "watches",
    forSale.map((s) => s.ref),
    [...gotItems.keys()],
  );
  for (const a of forSale) {
    const b = gotItems.get(a.ref);
    if (!b) continue;
    const where = `${a.ref} (${a.label})`;
    const share = 1 - (a.keptShare ?? 0);
    num(where, "net", a.net * share, b.net * (1 - (b.keptShare ?? 0)));
    num(where, "cost", a.cost * share, b.cost * (1 - (b.keptShare ?? 0)));
    same(where, "purchaseDate", a.purchaseDate, b.purchaseDate);
    same(where, "kind/count", `${a.kind}/${a.count}`, `${b.kind}/${b.count}`);
  }

  // Kept.
  const gotKept = new Map((got.kept ?? []).map((k) => [k.ref, k]));
  sameSet(
    "Kept",
    "watches",
    (base.kept ?? []).map((k) => k.ref),
    [...gotKept.keys()],
  );
  for (const a of base.kept ?? []) {
    const b = gotKept.get(a.ref);
    if (!b) continue;
    const where = `${a.ref} (${a.label})`;
    const tol = a.link ? CENT + 0.01 : CENT;
    for (const f of ["net", "cost", "refunds", "effective", "paid"] as const)
      num(where, f, a[f], b[f], tol);
    same(where, "purchaseDate", a.purchaseDate, b.purchaseDate);
    same(where, "modelFile", a.modelFile, b.modelFile);
    same(where, "link", a.link?.ref ?? null, b.link?.ref ?? null);
    sameSet(where, "flags", a.flags, b.flags);
    lines(where, a.costLines, b.costLines, a.link ? CENT + 0.01 * a.costLines.length : CENT);
  }

  // Day by day.
  const baseDays = new Map((base.daily ?? []).map((d) => [d.date, d]));
  const gotDays = new Map((got.daily ?? []).map((d) => [d.date, d]));
  for (const date of [...new Set([...baseDays.keys(), ...gotDays.keys()])].sort()) {
    const a = baseDays.get(date);
    const b = gotDays.get(date);
    for (const f of ["received", "spent", "collectionSpent", "stockDelta", "keptDelta"] as const)
      num(`Day ${date}`, f, a?.[f] ?? 0, b?.[f] ?? 0, 0.02);
  }
  return diffs;
}

export interface LinePairing {
  paired: number;
  /** Workbook lines the ledger lacks: candidates to pull in. */
  workbookOnly: LedgerLine[];
  /** Ledger lines the workbook lacks: entered in the back-office only. */
  ledgerOnly: LedgerLine[];
}

const DAY = 86_400_000;
const dayOf = (iso: string) => Date.parse(`${iso}T00:00:00Z`);

export function pairLines(ledger: LedgerLine[], workbook: LedgerLine[]): LinePairing {
  const free = new Set(workbook);
  const byFingerprint = new Map<string, LedgerLine[]>();
  for (const w of workbook) {
    if (!w.fingerprint) continue;
    byFingerprint.set(w.fingerprint, [...(byFingerprint.get(w.fingerprint) ?? []), w]);
  }
  const ledgerOnly: LedgerLine[] = [];
  const rest: LedgerLine[] = [];
  let paired = 0;

  // The same workbook row, untouched.
  for (const l of ledger) {
    const match = l.fingerprint
      ? byFingerprint.get(l.fingerprint)?.find((w) => free.has(w))
      : undefined;
    if (match) {
      free.delete(match);
      paired++;
    } else rest.push(l);
  }
  // The same money: direction, amount, and the nearest date within a week.
  for (const l of rest) {
    let best: LedgerLine | null = null;
    let bestGap = Infinity;
    for (const w of free) {
      if (w.direction !== l.direction || Math.abs(w.amount - l.amount) > 0.01) continue;
      const gap = Math.abs(dayOf(w.date) - dayOf(l.date));
      if (gap <= 7 * DAY && gap < bestGap) {
        best = w;
        bestGap = gap;
      }
    }
    if (best) {
      free.delete(best);
      paired++;
    } else ledgerOnly.push(l);
  }
  const workbookOnly = workbook.filter((w) => free.has(w));
  const newestFirst = (a: LedgerLine, b: LedgerLine) => b.date.localeCompare(a.date);
  return {
    paired,
    workbookOnly: workbookOnly.sort(newestFirst),
    ledgerOnly: ledgerOnly.sort(newestFirst),
  };
}

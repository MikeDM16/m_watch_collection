/**
 * _ledger.ts — reads meaning into the raw ledger dump. Shared by steps 2 and 3,
 * so the matcher and the P&L can never disagree about what a row is.
 *
 * ROWS INTO PARTS
 * A row can carry money in both columns: a payout in E and its shipping in F; in
 * a lot, a watch's purchase share in F and its payout in E; or a purchase with a
 * partial refund. So each row is split into an E part and an F part, and each is
 * classified on its own — by keyword first (typo-tolerant: "Emvio", "Refunf",
 * "Braceleletes" all land), then by position and size.
 *
 * PARTS INTO WATCHES
 * What the matcher links to a catalogue sale is a sold watch, not a row:
 *   - a single-watch block is one watch, and every cost in it is its cost;
 *   - in a lot, each named purchase row is a watch, a payout attaches to the
 *     watch its row names, and a payout naming none is a watch from the block's
 *     lump purchase ("5x Novart Povoa");
 *   - extra rows that name a watch ("Envio Omega Geneve Blue") go to it; the
 *     rest are split evenly over every watch in the lot, unsold ones included.
 *     That is the ledger's own convention (its summary tables charge €130 a
 *     watch), and it keeps a sold watch's profit from moving when a sibling
 *     sells later. The unsold shares are counted as stock.
 * Blocks with no payout are stock (a watch not sold yet) or overhead (boxes,
 * batteries, strap stock). Pass-through rows — E equal to F: cancelled orders,
 * refunded purchases — net to zero and are left out.
 *
 * Whatever the heuristics decide, every euro of a block lands somewhere — in a
 * watch, in stock or in overhead — and `delta` checks that against the block's
 * own total. Where they decide wrong, overrides.json can reclassify a row
 * (`rowTypes`) or hand it to a watch (`attributions`).
 */

import type {
  BlockKind,
  CostCategory,
  CostLine,
  OverridesFile,
} from "../../src/app/admin/sales-report/salesData.types";
import {
  hasKeyword,
  hasToken,
  normalizeText,
  parseIso,
  rawWords,
  round2,
  rowFingerprint,
  tokenize,
} from "./_shared";
import type { LedgerBlock, LedgerDump, LedgerRow, SummaryHint } from "./types";

// ─── Vocabulary ─────────────────────────────────────────────────────────────

/** Checked in this order, so "Reparação bracelete" is a service, not a strap. */
const COST_KEYWORDS: [CostCategory, readonly string[]][] = [
  [
    "service",
    [
      ..."reparacao reparacoes reparar revisao revisoes limpeza polir polimento vidro servico afinacao".split(
        " ",
      ),
      ..."alinhamento pilha pilhas coroa pushers maquina ponteiro ponteiros tinta cromar soldar".split(
        " ",
      ),
      ..."mecanismo timegrapher restauro bateria movimento".split(" "),
    ],
  ],
  [
    "strap",
    "bracelete braceletes bracelet bracelets bracele strap straps elo fecho fechos nato bascula basculas pulseira".split(
      " ",
    ),
  ],
  [
    "box",
    "caixa caixas catalogo catalogos cartao garantia miniaturas livro protecoes protecao estojo".split(
      " ",
    ),
  ],
  ["shipping", "envio envios emvio shipping postage portes correio ctt".split(" ")],
  ["fees", "taxas taxa alfandega fee fees comissao customs iva".split(" ")],
  ["purchase", ["compra", "compras"]],
];

const REFUND_WORDS: readonly string[] =
  "refund refunf reembolso reembolsado devolucao devolvido devolvida retorno cancel cancelado cancelada cancelled canceled stolen returned".split(
    " ",
  );

/** Words that describe a sale event rather than a watch. */
const SALE_WORDS: readonly string[] = ["venda", "pagamento", "catawiki", "leilao"];

/** A payout row naming one of these was a direct sale, with no auction fees. */
const DIRECT_WORDS: readonly string[] =
  "olx wallapop vinted ebay chrono24 custojusto helder sara zhong amigo".split(" ");

const CONSUMABLES: readonly string[] = ["service", "strap", "box", "shipping", "fees"];

const COST_WORDS = new Set(COST_KEYWORDS.flatMap(([, w]) => w));

// ─── Types ──────────────────────────────────────────────────────────────────

export type PartKind = "sale" | "refund" | "passthrough" | "ignore" | CostCategory;

export interface Part {
  block: LedgerBlock;
  row: LedgerRow;
  side: "E" | "F";
  amount: number;
  kind: PartKind;
  /** The ledger cell, "R25!F194". */
  ref: string;
  /** Row fingerprint plus side — what overrides key on. */
  key: string;
}

export interface Allocation {
  part: Part;
  share: number;
}

export type DateKind = "payout" | "purchase" | "placeholder" | "uniform" | "none";

export interface Unit {
  /** `sheet|text|received|spent#n`, stable across edits elsewhere in the workbook. */
  key: string;
  block: LedgerBlock;
  blockKind: BlockKind;
  lotSize: number;
  saleRow: LedgerRow;
  label: string;
  /** What the catalogue is matched against. */
  tokens: string[];
  sales: Part[];
  /** Costs (F) and refunds (E) attributed to this watch. */
  allocations: Allocation[];
  received: number;
  refunds: number;
  cost: number;
  profit: number;
  payoutDate: string | null;
  dateKind: DateKind;
  purchaseDate: string | null;
  flags: string[];
  /** Hammer prices written in its rows ("Venda 470", a quoted "550"). */
  hammerMentions: number[];
  /** Its payout row names a direct-sale channel (OLX, Wallapop, a friend). */
  direct: boolean;
  /** The ledger's own summary rows describing this watch. */
  hints: SummaryHint[];
}

export interface BlockResult {
  block: LedgerBlock;
  kind: BlockKind | "unsold" | "void";
  units: Unit[];
  /** Money in watches not sold yet. */
  stock: Allocation[];
  /** Money tied to no watch. */
  overhead: Allocation[];
  /** Block total minus everything attributed. Zero unless this module has a bug. */
  delta: number;
}

export interface Interpretation {
  blocks: BlockResult[];
  units: Unit[];
  unitByKey: Map<string, Unit>;
  /** "R25!188" → the unit that owns that row outright (its payout row, or an unshared line). */
  unitByRow: Map<string, Unit>;
}

interface Watch {
  name: string;
  tokens: string[];
  anchor: LedgerRow;
  purchase: Part | null;
  sales: Part[];
  /** Came from a payout rather than a purchase row of its own. */
  fromSale: boolean;
  flag?: string;
}

// ─── Row reading ────────────────────────────────────────────────────────────

export const signed = (a: Allocation): number =>
  (a.part.side === "E" ? 1 : -1) * a.part.amount * a.share;

const lettered = (tokens: string[]): string[] => tokens.filter((t) => /[a-z]/.test(t));

/** "Venda 470" and "Pagamento Catawiki 335€" name a price, not a watch. */
function stripAmounts(s: string | null | undefined): string {
  return (s ?? "").replace(
    /\b(venda|pagamento|catawiki|leil[aã]o)(\s+catawiki)?\s+\d{2,5}\s*(€|eur)?/gi,
    "$1",
  );
}

/**
 * Tokens that name an item: cost and refund words removed, and short bare
 * numbers ("7" jewels, "2" watches). Three-digit-plus numbers stay — "516",
 * "7750" and "166041" are the strongest evidence there is.
 */
export function itemTokens(s: string | null | undefined): string[] {
  return tokenize(stripAmounts(s)).filter(
    (t) => (/[a-z]/.test(t) || t.length >= 3) && !COST_WORDS.has(t) && !REFUND_WORDS.includes(t),
  );
}

/** A quoted hammer ("550") or a sum ("35+8") in H is a note about money, not a name. */
const isQuotedNumber = (s: string | null): boolean => !!s && /^"?\s*[\d.,+ ]+\s*"?$/.test(s);

/** What a row is about: its text, or its note when the text names nothing. */
function nameTokens(row: LedgerRow): string[] {
  const fromText = itemTokens(row.text);
  if (fromText.length) return fromText;
  return isQuotedNumber(row.note) ? [] : itemTokens(row.note);
}

const isGeneric = (s: string | null | undefined): boolean => lettered(tokenize(s)).length === 0;

function displayName(row: LedgerRow, fallback: string): string {
  if (!isGeneric(row.text)) return row.text;
  if (row.note && !isQuotedNumber(row.note) && !isGeneric(row.note)) return row.note;
  return fallback;
}

function costKeyword(s: string | null | undefined): CostCategory | null {
  for (const [category, words] of COST_KEYWORDS) if (hasKeyword(s, words)) return category;
  return null;
}

const COUNT_X = /\b(\d{1,2})\s*x\b|\bx\s*(\d{1,2})\b/;
const COUNT_WORDS = /\b(\d{1,2})\s+(watches|relogios|chronos|chronographs|chrono)\b/;

/** How many watches a purchase line covers: "5x Novart", "8 Watches", "Lanco + Tourist + Helma". */
export function itemCount(s: string | null | undefined): number {
  const t = normalizeText(s);
  const xs = [...t.matchAll(new RegExp(COUNT_X, "g"))];
  let n = xs.length
    ? xs.reduce((sum, m) => sum + Number(m[1] ?? m[2]), 0)
    : [...t.matchAll(new RegExp(COUNT_WORDS, "g"))].reduce((sum, m) => sum + Number(m[1]), 0);
  const items = t.split(/\s*[+,]\s*/).filter((seg) => /[a-z]/.test(seg));
  if (items.length >= 2)
    n += items.filter((seg) => !COUNT_X.test(seg) && !COUNT_WORDS.test(seg)).length;
  return n;
}

function lotSource(row: LedgerRow): string | null {
  return isGeneric(row.text) ? row.note : row.text;
}

function isLotDescriptor(row: LedgerRow): boolean {
  const source = lotSource(row);
  if (itemCount(source) >= 2) return true;
  return rawWords(source).some((w) => w === "relogios" || w === "watches");
}

function classifyCost(row: LedgerRow, firstMoneyRow: boolean, incomeOnRow: boolean): PartKind {
  const fromText = costKeyword(row.text);
  if (fromText) return fromText;
  // The cost of sending something back ("Devolução F=13.59") buys nothing.
  if (hasKeyword(row.text, REFUND_WORDS)) return "other";
  const spent = row.spent ?? 0;
  // A small amount whose note names a cost is that cost, whatever the text says:
  // "Dado que fiquei com o Timex" is a comment, and its note is "Envio Australia".
  if (spent <= 30) {
    const fromNote = costKeyword(row.note);
    if (fromNote) return fromNote;
  }
  // A payout row's own F. Up to €12, or on a row describing the sale itself
  // ("Venda Corticima", "Pagamento Catawiki"), it is shipping. On a row that is
  // just a watch's name ("Sain Honore Ratrappante F=26.85") it is what that watch
  // cost. Above €30 it is always a purchase.
  if (incomeOnRow) {
    if (spent > 30) return "purchase";
    if (spent <= 12 || isGeneric(row.text) || hasKeyword(row.text, SALE_WORDS)) return "shipping";
    return "purchase";
  }
  // A named item. Its note is commentary ("10e Revisao ponteiros"), not its category.
  if (!isGeneric(row.text)) return "purchase";
  const fromNote = costKeyword(row.note);
  if (fromNote) return fromNote;
  if (row.note && !isQuotedNumber(row.note) && !isGeneric(row.note)) return "purchase";
  if (firstMoneyRow) return "purchase";
  return spent <= 30 ? "shipping" : "other";
}

function classifyIncome(row: LedgerRow, fKind: PartKind | null): PartKind {
  const received = row.received ?? 0;
  const spent = row.spent;
  if (hasKeyword(row.text, REFUND_WORDS) || hasKeyword(row.note, REFUND_WORDS)) return "refund";
  // Money back on a strap or a box is a refund on that extra — unless it is far
  // more than the extra cost, when it is a payout written on that row.
  const category = costKeyword(row.text);
  if (
    (category === "strap" || category === "box") &&
    (spent ? received <= 2 * spent : received < 40)
  ) {
    return "refund";
  }
  // Money in on a purchase row: a partial refund, unless it is the payout of a
  // watch whose purchase share sits on the same row.
  if (fKind === "purchase" && spent && spent > 0) {
    if (isLotDescriptor(row) || received <= 0.25 * spent) return "refund";
  }
  return "sale";
}

function hammerMentions(rows: LedgerRow[]): number[] {
  const out = new Set<number>();
  for (const row of rows) {
    for (const s of [row.text, row.note ?? ""]) {
      const t = normalizeText(s);
      for (const m of t.matchAll(
        /\b(?:venda|pagamento|catawiki|leilao)(?:\s+catawiki)?\s+(\d{2,5})\b/g,
      )) {
        out.add(Number(m[1]));
      }
      const quoted = s.match(/^"\s*(\d{2,5})\s*"?$/);
      if (quoted) out.add(Number(quoted[1]));
    }
    // "=0.85*(200+15)" and "=240+14" keep the price inside the formula.
    const f = row.receivedFormula ?? "";
    const m =
      f.match(/\((\d{2,5})\s*\+\s*\d{1,2}\)/) ?? f.match(/^=\s*(\d{2,5})\s*\+\s*\d{1,2}\s*$/);
    if (m) out.add(Number(m[1]));
  }
  return [...out];
}

// ─── Dates ──────────────────────────────────────────────────────────────────

/** Rows whose dates were dragged down one day at a time: placeholders, not real dates. */
function placeholderRows(block: LedgerBlock): Set<number> {
  const dated = block.rows
    .filter((r) => r.date)
    .map((r) => ({ row: r.row, t: parseIso(r.date)!.getTime() }));
  const out = new Set<number>();
  let run: typeof dated = [];
  const flush = () => {
    if (run.length >= 4) run.forEach((r) => out.add(r.row));
    run = [];
  };
  for (const d of dated) {
    const prev = run[run.length - 1];
    if (prev && d.row === prev.row + 1 && d.t - prev.t === 86_400_000) run.push(d);
    else {
      flush();
      run = [d];
    }
  }
  flush();
  return out;
}

function uniformDates(block: LedgerBlock): boolean {
  const dates = block.rows.map((r) => r.date).filter(Boolean);
  return dates.length >= 2 && new Set(dates).size === 1;
}

// ─── Naming ─────────────────────────────────────────────────────────────────

/**
 * The watches a set of words points at. A word only one watch in the lot has
 * counts fully; a word several share (the brand, in a one-brand lot) counts a
 * quarter. Every watch tied at the top score is returned, so "Reparação Omega"
 * in a lot with two Omegas is split between those two.
 */
function bestWatches(tokens: string[], watches: Watch[]): Watch[] {
  if (!tokens.length || !watches.length) return [];
  const df = new Map(tokens.map((t) => [t, watches.filter((w) => hasToken(w.tokens, t)).length]));
  let best = 0;
  let group: Watch[] = [];
  for (const w of watches) {
    let score = 0;
    for (const t of tokens) if (hasToken(w.tokens, t)) score += df.get(t) === 1 ? 1 : 0.25;
    if (score > best + 1e-9) {
      best = score;
      group = [w];
    } else if (score > 0 && Math.abs(score - best) < 1e-9) group.push(w);
  }
  return best > 0 ? group : [];
}

/**
 * Which watches a cost row names, per segment: "Reparação Certina e Tissoure" is
 * two segments. Segments naming nothing in this block leave their portion in the
 * shared pool (`unnamed`).
 */
function namedTargets(row: LedgerRow, watches: Watch[]): { groups: Watch[][]; unnamed: number } {
  const attempt = (s: string) => {
    const segments = s
      .split(/\s+(?:e|and|&)\s+|\s*[+,]\s*/i)
      .map((seg) => itemTokens(seg))
      .filter((t) => t.length);
    return { segments: segments.length, groups: segments.map((t) => bestWatches(t, watches)) };
  };
  let r = attempt(row.text);
  if (!r.groups.some((g) => g.length) && row.note && !isQuotedNumber(row.note))
    r = attempt(row.note);
  const groups = r.groups.filter((g) => g.length);
  return { groups, unnamed: r.segments - groups.length };
}

// ─── Blocks ─────────────────────────────────────────────────────────────────

function makeParts(block: LedgerBlock, ov: OverridesFile): Part[] {
  const parts: Part[] = [];
  const firstMoneyRow = block.rows.find((r) => r.received !== null || r.spent !== null)?.row;

  for (const row of block.rows) {
    const E = row.received;
    const F = row.spent;
    const fp = rowFingerprint(block.sheet, row.text, E, F);
    const pass = E !== null && F !== null && Math.abs(E - F) < 0.005;
    const make = (side: "E" | "F", amount: number, kind: PartKind): Part => ({
      block,
      row,
      side,
      amount,
      kind,
      ref: `${block.sheet}!${side}${row.row}`,
      key: `${fp}:${side}`,
    });

    let fKind: PartKind | null = null;
    if (F !== null && F !== 0) {
      fKind = pass
        ? "passthrough"
        : classifyCost(row, row.row === firstMoneyRow, E !== null && E !== 0);
      parts.push(make("F", F, fKind));
    }
    if (E !== null && E !== 0)
      parts.push(make("E", E, pass ? "passthrough" : classifyIncome(row, fKind)));
  }

  // A purchase refunded in full on another row ("Compra Ebay Tissot PRS 200
  // F=101.10" … a bare "E=101.10") is a returned watch: both sides cancel.
  for (const e of parts) {
    if (e.side !== "E" || (e.kind !== "sale" && e.kind !== "refund")) continue;
    const unnamed = isGeneric(e.row.text) && (!e.row.note || isGeneric(e.row.note));
    if (e.kind === "sale" && !unnamed) continue;
    const f = parts.find(
      (p) =>
        p.side === "F" &&
        p.kind === "purchase" &&
        p.row !== e.row &&
        Math.abs(p.amount - e.amount) < 0.005,
    );
    if (f) {
      e.kind = "passthrough";
      f.kind = "passthrough";
    }
  }

  for (const p of parts) {
    const forced = ov.rowTypes?.[p.key];
    if (forced) p.kind = forced;
  }
  return parts;
}

function newUnit(block: LedgerBlock, kind: BlockKind, lotSize: number, watch: Watch): Unit {
  const saleRow = watch.sales[0].row;
  return {
    key: "",
    block,
    blockKind: kind,
    lotSize,
    saleRow,
    label: watch.name,
    tokens: watch.tokens,
    sales: watch.sales,
    allocations: [],
    received: 0,
    refunds: 0,
    cost: 0,
    profit: 0,
    payoutDate: saleRow.date,
    dateKind: "payout",
    purchaseDate: null,
    flags: watch.flag ? [watch.flag] : [],
    hammerMentions: [],
    direct: false,
    hints: [],
  };
}

/** Lines overrides.json hands to a unit, applied once every unit has its key. */
interface Forced {
  result: BlockResult;
  part: Part;
  unitKey: string;
}

function interpretBlock(block: LedgerBlock, ov: OverridesFile, forced: Forced[]): BlockResult {
  const result: BlockResult = { block, kind: "void", units: [], stock: [], overhead: [], delta: 0 };
  const parts = makeParts(block, ov);
  const live: Part[] = [];
  for (const p of parts) {
    if (p.kind === "passthrough") continue;
    const unitKey = p.kind !== "sale" ? ov.attributions?.[p.key] : undefined;
    if (unitKey) forced.push({ result, part: p, unitKey });
    else live.push(p);
  }

  const sales = live.filter((p) => p.kind === "sale");
  const firstCost = live.find((p) => p.side === "F");
  const all = (ps: Part[]): Allocation[] => ps.map((part) => ({ part, share: 1 }));
  const blockName = displayName(block.rows[0], block.caption ?? block.id);
  const ignored = live.filter((p) => p.kind === "ignore");
  result.overhead.push(...all(ignored));
  const money = live.filter((p) => p.kind !== "ignore");

  // ── No payout: stock (a named watch not sold yet), overhead, or nothing at all.
  if (!sales.length) {
    const holdsWatch = money.some(
      (p) => p.side === "F" && p.kind === "purchase" && nameTokens(p.row).length,
    );
    if (
      Math.abs(block.computedTotal) < 1 &&
      !money.some((p) => p.kind !== "refund" && p.kind !== "purchase")
    ) {
      result.kind = "void";
      result.overhead.push(...all(money));
    } else if (holdsWatch && !(firstCost && CONSUMABLES.includes(firstCost.kind))) {
      result.kind = "unsold";
      result.stock.push(...all(money));
    } else {
      result.kind = "overhead";
      result.overhead.push(...all(money));
    }
    return finish(result, money);
  }

  // ── A block of consumables that happens to hold a payout: the payout's own row
  // is a watch, and everything else is overhead.
  if (firstCost && CONSUMABLES.includes(firstCost.kind)) {
    result.kind = "overhead";
    const used = new Set<Part>();
    for (const sale of sales) {
      const own = money.filter((p) => p.row === sale.row);
      own.forEach((p) => used.add(p));
      const unit = newUnit(block, "overhead", 1, {
        name: displayName(sale.row, blockName),
        tokens: nameTokens(sale.row),
        anchor: sale.row,
        purchase: null,
        sales: [sale],
        fromSale: true,
      });
      unit.allocations = all(own.filter((p) => p !== sale));
      const bought = own.find((p) => p.side === "F" && p.kind === "purchase");
      unit.purchaseDate = bought ? sale.row.date : null;
      if (!bought) unit.flags.push("no-purchase");
      result.units.push(unit);
    }
    result.overhead.push(...all(money.filter((p) => !used.has(p))));
    return finish(result, money);
  }

  // ── Watches: named purchase rows, and lump purchases shared by several.
  const purchases = money.filter((p) => p.side === "F" && p.kind === "purchase");
  const lumps: Part[] = [];
  const watches: Watch[] = [];
  for (const p of purchases) {
    const toks = nameTokens(p.row);
    if (isLotDescriptor(p.row) || !toks.length) lumps.push(p);
    else {
      watches.push({
        name: displayName(p.row, blockName),
        tokens: toks,
        anchor: p.row,
        purchase: p,
        sales: [],
        fromSale: false,
      });
    }
  }

  // ── One payout and at most one named purchase: a single-watch block.
  if (sales.length === 1 && watches.length <= 1) {
    result.kind = "single";
    const sale = sales[0];
    const identity = block.rows.filter((r) =>
      money.some((p) => p.row === r && (p.kind === "purchase" || p.kind === "sale")),
    );
    const unit = newUnit(block, "single", 1, {
      name: watches[0]?.name ?? blockName,
      tokens: [...new Set(identity.flatMap((r) => [...itemTokens(r.text), ...itemTokens(r.note)]))],
      anchor: sale.row,
      purchase: watches[0]?.purchase ?? null,
      sales: [sale],
      fromSale: false,
    });
    unit.allocations = all(money.filter((p) => p !== sale));
    unit.purchaseDate = (watches[0]?.purchase ?? lumps[0])?.row.date ?? null;
    const counted = lumps.reduce((n, p) => n + itemCount(lotSource(p.row)), 0);
    if (counted >= 2) unit.flags.push(`lot-of-${counted}-one-payout`);
    if (!purchases.length) unit.flags.push("no-purchase");
    result.units.push(unit);
    return finish(result, money);
  }

  // ── A lot. First, payouts that name a watch attach to it.
  result.kind = "lot";
  const unattached: Part[] = [];
  for (const sale of sales) {
    const own = watches.find((w) => w.anchor === sale.row);
    if (own) {
      own.sales.push(sale);
      continue;
    }
    const toks = nameTokens(sale.row);
    let hit = bestWatches(
      toks,
      watches.filter((w) => !w.sales.length),
    );
    if (!hit.length) hit = bestWatches(toks, watches);
    // Tied between watches bought at the same price, the choice cannot move the
    // P&L: take the first, and say so.
    if (
      hit.length > 1 &&
      hit.every(
        (w) =>
          !w.sales.length &&
          w.purchase &&
          Math.abs(w.purchase.amount - hit[0].purchase!.amount) < 0.005,
      )
    ) {
      hit = [hit[0]];
      hit[0].flag = "attached-among-equals";
    }
    if (hit.length === 1) {
      hit[0].sales.push(sale);
      hit[0].tokens = [...new Set([...hit[0].tokens, ...toks])];
    } else unattached.push(sale);
  }

  // Then the rest, by position — only where the structure leaves no doubt.
  const free = () => watches.filter((w) => !w.sales.length);
  if (!lumps.length && free().length === 1 && unattached.length >= 2) {
    // One purchase row, several unnamed payouts: that purchase was a lump.
    const w = free()[0];
    watches.splice(watches.indexOf(w), 1);
    lumps.push(w.purchase!);
  }
  if (!lumps.length) {
    const f = free();
    const compatible =
      f.length === unattached.length &&
      f.every((w, i) => {
        const t = nameTokens(unattached[i].row);
        return !t.length || t.some((x) => hasToken(w.tokens, x));
      });
    if (compatible) {
      f.forEach((w, i) => {
        const sale = unattached[i];
        w.sales.push(sale);
        w.tokens = [...new Set([...w.tokens, ...nameTokens(sale.row)])];
        w.flag = "paired-by-order";
      });
      unattached.length = 0;
    }
  }
  for (const sale of unattached) {
    watches.push({
      name: displayName(sale.row, blockName),
      tokens: nameTokens(sale.row),
      anchor: sale.row,
      purchase: null,
      sales: [sale],
      fromSale: true,
    });
  }

  const fromSale = watches.filter((w) => w.fromSale);
  const named = watches.filter((w) => !w.fromSale);
  const counted = lumps.reduce((n, p) => n + itemCount(lotSource(p.row)), 0);
  // The lump covers the watches that have no purchase row of their own, plus any
  // it counted that have not sold yet.
  const lumpSlots = lumps.length && fromSale.length ? Math.max(counted, fromSale.length) : 0;
  const lotSize = Math.max(
    named.length + (lumps.length ? lumpSlots : fromSale.length),
    counted,
    watches.length,
  );

  // A watch with no words of its own ("Pagamento Catawiki") takes the lump's
  // words, or failing that the block's title row's ("Relógio Jaguar").
  const lumpTokens = [...new Set(lumps.flatMap((p) => nameTokens(p.row)))];
  const titleTokens = nameTokens(block.rows[0]);
  for (const w of fromSale)
    if (!w.tokens.length) w.tokens = lumpTokens.length ? lumpTokens : titleTokens;

  // ── Money into watches.
  const alloc = new Map<Watch, Allocation[]>(watches.map((w) => [w, []]));
  const give = (w: Watch, part: Part, share: number) => {
    if (share > 1e-9) alloc.get(w)!.push({ part, share });
  };
  const shareOut = (part: Part, portion: number) => {
    for (const w of watches) give(w, part, portion / lotSize);
    const rest = portion * (1 - watches.length / lotSize);
    if (rest > 1e-9) result.stock.push({ part, share: rest });
  };
  const lumpRows = new Set(lumps.map((p) => p.row));

  for (const part of money) {
    if (part.kind === "sale") continue;

    const owner = watches.find((w) => w.purchase === part);
    if (owner) {
      give(owner, part, 1);
      continue;
    }

    // The lump, and anything else on its row (a refund on it), is shared by the
    // watches that came out of it; with none, it is an acquisition cost of the lot.
    if (lumpRows.has(part.row)) {
      if (lumpSlots) {
        for (const w of fromSale) give(w, part, 1 / lumpSlots);
        const rest = 1 - fromSale.length / lumpSlots;
        if (rest > 1e-9) result.stock.push({ part, share: rest });
      } else shareOut(part, 1);
      continue;
    }

    // A line on a watch's own row is that watch's: its shipping, its refund.
    const rowOwner = watches.find(
      (w) => w.anchor === part.row || w.sales.some((s) => s.row === part.row),
    );
    if (rowOwner) {
      give(rowOwner, part, 1);
      continue;
    }

    const { groups, unnamed } = namedTargets(part.row, watches);
    const segments = groups.length + unnamed;
    for (const g of groups) for (const w of g) give(w, part, 1 / segments / g.length);
    const shared = segments ? unnamed / segments : 1;
    if (shared > 1e-9) shareOut(part, shared);
  }

  for (const w of watches) {
    if (!w.sales.length) {
      result.stock.push(...alloc.get(w)!);
      continue;
    }
    const unit = newUnit(block, "lot", lotSize, w);
    unit.allocations = alloc.get(w)!;
    if (w.fromSale && lumpSlots) unit.flags.push("lot-share");
    else if (!w.purchase) unit.flags.push("no-purchase");
    unit.purchaseDate = (w.purchase ?? (lumpSlots ? lumps[0] : null))?.row.date ?? null;
    result.units.push(unit);
  }

  return finish(result, money);
}

/** Dates, price mentions and sales channel, once a block's units exist. */
function finish(result: BlockResult, money: Part[]): BlockResult {
  const { block } = result;
  const placeholders = placeholderRows(block);
  const uniform = uniformDates(block);

  for (const unit of result.units) {
    const saleRow = unit.saleRow;
    const purchaseOnRow = money.some(
      (p) => p.row === saleRow && p.side === "F" && p.kind === "purchase",
    );
    unit.dateKind = !saleRow.date
      ? "none"
      : purchaseOnRow
        ? "purchase"
        : placeholders.has(saleRow.row)
          ? "placeholder"
          : uniform
            ? "uniform"
            : "payout";
    unit.hammerMentions = hammerMentions(
      unit.blockKind === "single" ? block.rows : unit.sales.map((s) => s.row),
    );
    unit.direct = unit.sales.some(
      (s) => hasKeyword(s.row.text, DIRECT_WORDS) || hasKeyword(s.row.note, DIRECT_WORDS),
    );
  }
  return result;
}

function settle(unit: Unit): void {
  // One ledger line can reach a watch twice — "Revisao Monza, Coroa Breitling"
  // names the Breitling in one segment and shares the other — so merge by line.
  const merged = new Map<Part, number>();
  for (const a of unit.allocations) merged.set(a.part, (merged.get(a.part) ?? 0) + a.share);
  unit.allocations = [...merged].map(([part, share]) => ({ part, share }));

  const sum = (side: "E" | "F") =>
    unit.allocations
      .filter((a) => a.part.side === side)
      .reduce((s, a) => s + a.part.amount * a.share, 0);
  unit.received = round2(unit.sales.reduce((s, p) => s + p.amount, 0));
  unit.refunds = round2(sum("E"));
  unit.cost = round2(sum("F"));
  unit.profit = round2(unit.received + unit.refunds - unit.cost);
  if (unit.cost < 0) unit.flags.push("negative-cost");
}

// ─── Public ─────────────────────────────────────────────────────────────────

export function interpretLedger(dump: LedgerDump, ov: OverridesFile): Interpretation {
  const forced: Forced[] = [];
  const blocks = dump.blocks.map((b) => interpretBlock(b, ov, forced));
  const units = blocks.flatMap((b) => b.units);

  // Keys: the payout row's fingerprint, or the block's first row's when the
  // payout row says nothing ("E=386.35" under "Tag Heuer F1 Barcelos").
  const seen = new Map<string, number>();
  const unitByKey = new Map<string, Unit>();
  for (const u of units) {
    const text = isGeneric(u.saleRow.text) ? u.block.rows[0].text : u.saleRow.text;
    const base = rowFingerprint(u.block.sheet, text, u.saleRow.received, u.saleRow.spent);
    const n = (seen.get(base) ?? 0) + 1;
    seen.set(base, n);
    u.key = n === 1 ? base : `${base}#${n}`;
    unitByKey.set(u.key, u);
  }

  // A forced line moves into its unit; one pointing at a unit that no longer
  // exists falls back to its own block's overhead, where the report shows it.
  for (const { result, part, unitKey } of forced) {
    const target = unitByKey.get(unitKey);
    if (target) target.allocations.push({ part, share: 1 });
    else result.overhead.push({ part, share: 1 });
  }

  const unitByRow = new Map<string, Unit>();
  for (const u of units) {
    settle(u);
    for (const s of u.sales) unitByRow.set(`${s.block.sheet}!${s.row.row}`, u);
    for (const a of u.allocations) {
      if (a.share === 1) unitByRow.set(`${a.part.block.sheet}!${a.part.row.row}`, u);
    }
  }

  // Reconcile per block by where each part lives, so a line attributed across
  // blocks still counts against its own block's total.
  const sums = new Map<LedgerBlock, number>();
  const add = (part: Part, v: number) => sums.set(part.block, (sums.get(part.block) ?? 0) + v);
  for (const u of units) {
    for (const s of u.sales) add(s, s.amount);
    for (const a of u.allocations) add(a.part, signed(a));
  }
  for (const b of blocks) for (const a of [...b.stock, ...b.overhead]) add(a.part, signed(a));
  for (const b of blocks) b.delta = round2(b.block.computedTotal - (sums.get(b.block) ?? 0));

  return { blocks, units, unitByKey, unitByRow };
}

/**
 * Tie the ledger's own summary rows to units: through the cells their formulas
 * reference when they have any, else through a matching payout and a shared word.
 */
export function linkHints(interp: Interpretation, hints: SummaryHint[]): Map<SummaryHint, Unit> {
  const linked = new Map<SummaryHint, Unit>();
  for (const hint of hints) {
    const words = itemTokens(hint.name);
    // A formula can reference any cell holding the right amount (`=M93-8-F82`
    // charges Arauto the €50 on Jomel's row), so a reference only links when the
    // names or the payouts agree as well.
    const agrees = (u: Unit) =>
      words.some((t) => hasToken(u.tokens, t)) || Math.abs(u.received - hint.received) <= 1;
    const votes = new Map<Unit, number>();
    for (const ref of hint.refs) {
      const m = ref.match(/^(.+)!([A-Z]+)(\d+)$/);
      const u = m ? interp.unitByRow.get(`${m[1]}!${m[3]}`) : undefined;
      if (u && agrees(u)) votes.set(u, (votes.get(u) ?? 0) + 1);
    }
    let unit = [...votes.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];

    if (!unit) {
      // Same payout and a shared word; a tie goes to the summary's own tab.
      const near = interp.units
        .filter((u) => Math.abs(u.received - hint.received) <= 1)
        .map((u) => {
          const shared = words.filter((t) => hasToken(u.tokens, t)).length;
          return { u, score: shared ? shared + (u.block.sheet === hint.sheet ? 0.5 : 0) : 0 };
        })
        .filter((x) => x.score > 0)
        .sort((a, b) => b.score - a.score);
      if (near.length && (near.length === 1 || near[0].score > near[1].score)) unit = near[0].u;
    }

    if (unit) linked.set(hint, unit);
  }

  // Only now do the summaries' words join the units', so the order the hints
  // were read in cannot change which unit a later hint picks.
  for (const [hint, unit] of linked) {
    unit.hints.push(hint);
    unit.tokens = [...new Set([...unit.tokens, ...itemTokens(hint.name)])];
  }
  return linked;
}

/** A unit's attributed costs, as the contract's cost lines. */
export function costLines(unit: Unit): CostLine[] {
  return unit.allocations
    .filter((a) => a.part.side === "F")
    .map((a) => ({
      category: (a.part.kind === "purchase" || CONSUMABLES.includes(a.part.kind)
        ? a.part.kind
        : "other") as CostCategory,
      label: a.part.row.text || a.part.row.note || "(no description)",
      amount: round2(a.part.amount * a.share),
      share: Math.round(a.share * 10_000) / 10_000,
      ref: a.part.ref,
      date: a.part.row.date,
    }));
}

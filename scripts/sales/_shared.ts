/**
 * _shared.ts — common bits for the sales margin pipeline.
 *
 * The pipeline links each catalogue sale (saleReport: the gross hammer price and
 * auction date) to its section of the private sales ledger (purchase, extras,
 * net payout), so the local sales report can show real profit and margin.
 * Steps run in order:
 *
 *   1_parse_ledger.py  workbook → ledger.json, a faithful extract, self-checked
 *   2_match.ts         ledger + catalogue + overrides → matches.json, the review
 *                      queue (adjudicate.json) and match-report.md
 *   3_build.ts         matches → financials.json, reconciled block by block
 *
 * Everything lands in `.sales/` at the repo root, which is gitignored along with
 * the workbook: it holds purchase prices and margins. Nothing here writes to
 * `src/`, and nothing in `src/` imports from here.
 */

import fs from "fs";
import path from "path";

import type { OverridesFile } from "../../src/app/admin/sales-report/salesData.types";

/** Repo root, two levels up from scripts/sales. */
export const REPO_ROOT = path.resolve(__dirname, "../..");

/** Gitignored working directory for the whole pipeline. */
export const WORK_DIR = path.join(REPO_ROOT, ".sales");

export const LEDGER_JSON = path.join(WORK_DIR, "ledger.json");
export const MATCHES_JSON = path.join(WORK_DIR, "matches.json");
export const ADJUDICATE_JSON = path.join(WORK_DIR, "adjudicate.json");
export const MATCH_REPORT = path.join(WORK_DIR, "match-report.md");
export const OVERRIDES_JSON = path.join(WORK_DIR, "overrides.json");
export const FINANCIALS_JSON = path.join(WORK_DIR, "financials.json");

export const INDEX_JSON = path.join(REPO_ROOT, "src/app/data/collection-index.json");

// ─── Files ──────────────────────────────────────────────────────────────────

export function readJson<T>(file: string): T {
  return JSON.parse(fs.readFileSync(file, "utf-8")) as T;
}

/** Write through a temp file and rename, so a crash never leaves half a file. */
export function writeFileAtomic(file: string, contents: string): void {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = `${file}.tmp`;
  fs.writeFileSync(tmp, contents);
  fs.renameSync(tmp, file);
}

export function writeJsonAtomic(file: string, data: unknown): void {
  writeFileAtomic(file, JSON.stringify(data, null, 1));
}

export function loadOverrides(): OverridesFile {
  if (!fs.existsSync(OVERRIDES_JSON)) return { version: 1, matches: {} };
  const o = readJson<OverridesFile>(OVERRIDES_JSON);
  return {
    version: 1,
    matches: o.matches ?? {},
    rowTypes: o.rowTypes,
    attributions: o.attributions,
  };
}

export function requireFile(file: string, hint: string): void {
  if (!fs.existsSync(file)) {
    console.error(`Missing ${path.relative(REPO_ROOT, file)}. ${hint}`);
    process.exit(1);
  }
}

// ─── Numbers and dates ──────────────────────────────────────────────────────

export const round2 = (x: number): number => Math.round((x + Number.EPSILON) * 100) / 100;

export const euro = (x: number): string => `€${round2(x).toFixed(2)}`;

const DAY = 86_400_000;

/** The catalogue's "DD/MM/YYYY" as a UTC date. Tolerates "021/09/2025". */
export function parseCatalogueDate(s: string): Date | null {
  const [d, m, y] = (s || "").split("/").map(Number);
  if (!d || !m || !y) return null;
  return new Date(Date.UTC(y, m - 1, d));
}

export function parseIso(s: string | null): Date | null {
  if (!s) return null;
  const [y, m, d] = s.split("-").map(Number);
  return y && m && d ? new Date(Date.UTC(y, m - 1, d)) : null;
}

export const isoOf = (d: Date): string => d.toISOString().slice(0, 10);

/** Whole days from `a` to `b`. */
export const daysBetween = (a: Date, b: Date): number =>
  Math.round((b.getTime() - a.getTime()) / DAY);

// ─── Catawiki's fee arithmetic ──────────────────────────────────────────────
//
// Verified to the cent against the ledger: the seller is paid the hammer price
// minus a 12.5% commission and 23% VAT on that commission (each rounded to the
// cent), plus whatever whole-euro shipping the buyer paid (usually €14). Since
// mid-2024 a fixed fee plus its VAT comes off as well, tiered by hammer: €2 or
// €3 under €500, €5 under €1,000, €10 above.
//   470  →  411.74   (+€14 shipping, 2021)
//   184  →  153.25   (−€2 + VAT)
//   430  →  360.20   (−€3 + VAT)
//   852  →  714.85   (−€5 + VAT)
//   1651 → 1384.85   (−€10 + VAT)

/** The payout before shipping and fixed fees. */
export function catawikiBase(hammer: number): number {
  const commission = round2(0.125 * hammer);
  const vat = round2(0.23 * commission);
  return round2(hammer - commission - vat);
}

export interface PriceFit {
  p: number;
  note: string;
}

const wholeEuro = (x: number): boolean => Math.abs(x - Math.round(x)) < 0.006;

/** How well a net payout fits a hammer price under Catawiki's fee arithmetic. */
export function catawikiFit(received: number, hammer: number): PriceFit {
  const base = catawikiBase(hammer);
  const delta = round2(received - base);

  const tryFees = (fees: number[], p: number): PriceFit | null => {
    for (const k of fees) {
      const shipping = round2(delta + 1.23 * k);
      if (shipping >= -0.005 && shipping <= 30.005 && wholeEuro(shipping)) {
        const parts = [`${hammer} − 15.375%`];
        if (k) parts.push(`€${k} fee + VAT`);
        if (Math.round(shipping)) parts.push(`+ €${Math.round(shipping)} shipping`);
        return { p, note: `payout ${received.toFixed(2)} = ${parts.join(" ")} (to the cent)` };
      }
    }
    return null;
  };

  const tier = hammer < 500 ? [2, 3] : hammer < 1000 ? [5] : [10];
  const exact = tryFees([0, ...tier], 1);
  if (exact) return exact;

  // 2018–19 payouts followed 85% of hammer plus shipping instead.
  const old = received / 0.85 - hammer;
  if (old >= -0.02 && old <= 30.02 && Math.abs(old - Math.round(old)) < 0.02) {
    return {
      p: 0.9,
      note: `payout ${received.toFixed(2)} = 85% × (${hammer} + ${Math.round(old)})`,
    };
  }

  const odd = tryFees(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].filter((k) => !tier.includes(k)),
    0.7,
  );
  if (odd) return odd;

  const lo = base - 13;
  const hi = base + 35;
  if (received >= lo && received <= hi) {
    return { p: 0.5, note: `payout ${received.toFixed(2)} inside the fee range for ${hammer}` };
  }
  const off = received < lo ? lo - received : received - hi;
  const p = Math.max(0, 0.5 * (1 - off / (0.08 * hammer)));
  return {
    p,
    note: `payout ${received.toFixed(2)} is ${euro(off)} outside the fee range for ${hammer}`,
  };
}

/** A direct sale (OLX, Wallapop, a friend): the payout is the price, maybe plus shipping. */
export function directFit(received: number, price: number): PriceFit {
  const diff = received - price;
  if (Math.abs(diff) <= Math.max(5, 0.02 * price)) {
    return { p: 0.9, note: `payout ${received.toFixed(2)} ≈ price ${price} (direct sale)` };
  }
  if (diff > 0 && diff <= 20 && wholeEuro(diff)) {
    return {
      p: 0.85,
      note: `payout ${received.toFixed(2)} = ${price} + €${Math.round(diff)} shipping (direct)`,
    };
  }
  return { p: 0, note: "" };
}

// ─── Text ───────────────────────────────────────────────────────────────────
//
// The ledger is free text in Portuguese, typed fast ("Porshce", "Emvio",
// "Ratrappante"); the catalogue is careful English. Both sides go through the
// same normalisation, so an alias only has to be right once.

const ALIASES: [RegExp, string][] = [
  [/\btag\s*-?\s*heuer\b/g, "tagheuer"],
  [/\b(?:heuer|tag|th)\b/g, "tagheuer"],
  [/\braymond\s+weill?\b|\brw\b/g, "raymondweil"],
  [/\bmaurice\s+lacroix\b|\bml\b/g, "mauricelacroix"],
  [/\b(?:porsche|porshce|porche|porshe)(?:\s+design)?\b|\bpd\b/g, "porschedesign"],
  [/\bpringeps\b/g, "pryngeps"],
  [/\bbaume\s*(?:et|&|e)?\s*mercier\b/g, "baumemercier"],
  [/\buniversa?l\s+geneve\b/g, "universalgeneve"],
  [/\bgirard\s*-?\s*perreg[ae]ux\b/g, "girardperregaux"],
  [/\bphil+ipp?e?\s+wat?c?h\b|\bphilip\s+wath\b/g, "philipwatch"],
  [/\bcuervo\s+(?:y\s+)?sobr[iy]nos\b/g, "cuervo"],
  [/\btonino\s+lamborgh?ini\b/g, "lamborghini"],
  [/\bmercedes\s*-?\s*benz\b/g, "mercedes"],
  [/\bsaint?\s+honore\b/g, "sainthonore"],
  [/\bamer\s+campos\b/g, "amercampos"],
  [/\bsea\s*star\b/g, "seastar"],
  [/\bsea\s*master\b/g, "seamaster"],
  [/\bde\s*ville\b/g, "deville"],
  [/\bt\s*-?\s*touch\b/g, "ttouch"],
  [/\bt\s*-?\s*classic[io]?\b/g, "tclassic"],
  [/\bt\s*-?\s*race\b/g, "trace"],
  [/\bt\s*-?\s*sports?\b/g, "tsport"],
  [/\bt\s*\.?\s*12\b/g, "t12"],
  [/\bana\s*[-/]?\s*digi(?:tal)?\b|\banalog(?:ic|ue)?\s*[-/]?\s*digital\b/g, "anadigital"],
  [/\bcross\s*-?\s*hair\b|\bx\s*-\s*hair\b/g, "crosshair"],
  [/\bchronograph\b|\bchronographe\b|\bcronografo\b/g, "chrono"],
  [/\brat+rap+ante?\b/g, "rattrapante"],
  [/\baniversary\b|\banniversary\b|\baniversario\b/g, "anniversary"],
];

const COLOURS: Record<string, string> = {
  azul: "blue",
  verde: "green",
  vermelho: "red",
  vermelha: "red",
  preto: "black",
  preta: "black",
  branco: "white",
  branca: "white",
  dourado: "gold",
  dourada: "gold",
  castanho: "brown",
  castanha: "brown",
  laranja: "orange",
  amarelo: "yellow",
  amarela: "yellow",
  cinzento: "grey",
  cinza: "grey",
  gray: "grey",
  prateado: "silver",
  prata: "silver",
  bordeaux: "burgundy",
  bourdeaux: "burgundy",
  roxo: "purple",
  rosa: "pink",
};

/**
 * Words that carry no identity: glue words, the verbs of the ledger, the
 * platforms money moved through, and the places and people that recur in it.
 * Removing them is what lets "Compra olx Braga" count as naming nothing.
 */
const STOP = new Set([
  // glue
  ..."a as o os um uma de do da dos das e em com para por no na nr n ref the and with of for in on at to by".split(
    " ",
  ),
  // ledger verbs
  ..."envio envios emvio pagamento pagamentos venda vendas compra compras transf trans transferencia leilao resumo valor dinheiro sr fico troca".split(
    " ",
  ),
  // platforms
  ..."catawiki ebay olx wallapop vinted custojusto chrono24 paypal paypall mbway ctt amazon lidle".split(
    " ",
  ),
  // generic
  ..."relogio relogios relogo watch watches cal caliber calibre reserve price men mens homem unisex".split(
    " ",
  ),
  // places
  ..."braga parque barcelos povoa varzim moncao coimbra porto caminha agucadoura ponte lima trofa milhazes lisboa espanha suica franca italia australia netherlands uk taiwan dubai gr recreativ vila".split(
    " ",
  ),
  // people and workshops
  ..."helder sara fernando jose morais joaquim rodrigues mario isabel filipa maria mae leo zhong mateus morim gaveto junqueira amigo presente".split(
    " ",
  ),
]);

/** Lower-case, accent-free, aliases applied, "166.041" joined to "166041". */
export function normalizeText(s: string | null | undefined): string {
  let t = (s ?? "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[‘’'`´]/g, "");
  for (const [re, rep] of ALIASES) t = t.replace(re, rep);
  return t.replace(/(\d)[.,](\d)/g, "$1$2");
}

/** Every word, stop words included — for keyword checks. */
export function rawWords(s: string | null | undefined): string[] {
  return normalizeText(s)
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}

/** Identity-bearing tokens: stop words, counts and stray letters removed. */
export function tokenize(s: string | null | undefined): string[] {
  const out: string[] = [];
  for (const word of rawWords(s)) {
    const tok = COLOURS[word] ?? word;
    if (STOP.has(tok)) continue;
    if (tok.length === 1 && !/\d/.test(tok)) continue;
    if (/^\d{1,2}x$|^x\d{1,2}$/.test(tok)) continue;
    out.push(tok);
    // "ck1111" and "pr516" also match a bare "1111" / "516".
    const m = tok.match(/^([a-z]{1,3})(\d{3,})$/);
    if (m) out.push(m[2]);
  }
  return out;
}

/** A reference or calibre number: three-plus digits, not a year or a depth rating. */
export function isReferenceToken(tok: string): boolean {
  const digits = tok.replace(/\D/g, "");
  if (digits.length < 3) return false;
  if (/^(19|20)\d\ds?$/.test(tok)) return false;
  if (/^\d{2,4}m$/.test(tok)) return false;
  return true;
}

/** Edit distance where swapping two neighbouring letters ("Figther") costs one. */
function editDistance(a: string, b: string): number {
  const d = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
  );
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
  }
  return d[a.length][b.length];
}

/**
 * Token equality that forgives one typo in a word of five letters or more, two
 * from ten. Any looser and "mecanico" becomes "mecanismo". Numbers never fuzz.
 */
export function sameToken(a: string, b: string): boolean {
  if (a === b) return true;
  const n = Math.min(a.length, b.length);
  if (n < 5 || /\d/.test(a) || /\d/.test(b)) return false;
  const max = n >= 10 ? 2 : 1;
  return Math.abs(a.length - b.length) <= max && editDistance(a, b) <= max;
}

/** The token in `tokens` that `tok` matches, if any. */
export function findToken(tokens: Iterable<string>, tok: string): string | undefined {
  for (const t of tokens) if (sameToken(t, tok)) return t;
  return undefined;
}

export const hasToken = (tokens: Iterable<string>, tok: string): boolean => {
  for (const t of tokens) if (sameToken(t, tok)) return true;
  return false;
};

/**
 * Does any word of `s` match one of `keywords`? A typo is forgiven only against
 * keywords of seven letters or more: fuzzing short ones turned the "Solar" of a
 * T-Touch Expert Solar into "soldar" (solder), a service. Known short typos
 * ("emvio", "refunf") are listed as keywords of their own instead.
 */
export function hasKeyword(s: string | null | undefined, keywords: readonly string[]): boolean {
  return rawWords(s).some((w) => keywords.some((k) => (k.length >= 7 ? sameToken(w, k) : w === k)));
}

/** Fingerprint of a ledger row that survives inserted rows and moved blocks. */
export function rowFingerprint(
  sheet: string,
  text: string,
  received: number | null,
  spent: number | null,
): string {
  const t = normalizeText(text)
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
  const money = (n: number | null) => (n === null ? "" : n.toFixed(2));
  return `${sheet}|${t}|${money(received)}|${money(spent)}`;
}

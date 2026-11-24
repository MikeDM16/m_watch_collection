/**
 * i18n.ts — the valuation report's words, in Portuguese and English.
 *
 * Money is written the way Chrono24 and the workbook write it, in both
 * languages: "41.775 €". The grouping is done by hand because react-pdf's
 * built-in Helvetica has no glyph for the narrow no-break space that
 * Intl's pt-PT format uses.
 *
 * The catalogue's spec values ("Stainless Steel") stay in English in both
 * reports; only the labels around them change. Chrono24's own words
 * (condition, accessories) arrive in Portuguese and are mapped for the English
 * report, with anything unmapped printed as-is and listed by the script.
 */

export type Lang = "pt" | "en";
export const LANGS: Lang[] = ["pt", "en"];

const STRINGS = {
  pt: {
    title: "Relatório de avaliação da coleção",
    subtitle: "Coleção pessoal de relógios",
    watches: (n: number) => `${n} relógios`,
    generatedOn: "Gerado em",
    owner: "Proprietário",
    totalValue: "Valor total estimado",
    marketAsOf: (d: string) => `Estimativas de mercado Chrono24 de ${d}`,
    noMarket: "Sem estimativas de mercado: todos os relógios valorizados ao custo.",
    summary: "Resumo",
    totalCost: "Custo de aquisição",
    gain: "Ganho não realizado",
    gainNote: "nos relógios acompanhados pelo Chrono24",
    tracked: "Avaliados pelo Chrono24",
    trackedNote: (n: number) => `os restantes ${n} ao custo`,
    valueOverTime: "Valor da coleção no Chrono24 ao longo do tempo",
    byBrand: "Por marca",
    brand: "Marca",
    count: "Relógios",
    cost: "Custo",
    value: "Valor",
    basis: "Base",
    inventory: "Inventário",
    watch: "Relógio",
    reference: "Referência",
    year: "Ano",
    acquired: "Compra",
    basisMarket: "Chrono24",
    basisCost: "Custo",
    total: "Total",
    caseMaterial: "Material da caixa",
    diameter: "Diâmetro",
    movement: "Movimento",
    condition: "Estado",
    accessories: "Acessórios",
    purchaseDate: "Data de compra",
    marketValue: "Valor de mercado",
    gainShort: "Ganho",
    modelPerformance: "Desempenho do modelo no Chrono24",
    purchaseMark: "compra",
    notTracked: "Não acompanhado pelo Chrono24: valorizado ao custo de aquisição.",
    page: (x: number, y: number) => `Página ${x} de ${y}`,
    disclaimer:
      "As estimativas de mercado provêm da Watch Collection do Chrono24 e não constituem uma avaliação certificada. O custo inclui a compra e as revisões, braceletes e outros custos registados para cada relógio.",
  },
  en: {
    title: "Collection valuation report",
    subtitle: "Private watch collection",
    watches: (n: number) => `${n} watches`,
    generatedOn: "Generated on",
    owner: "Owner",
    totalValue: "Total estimated value",
    marketAsOf: (d: string) => `Chrono24 market estimates as of ${d}`,
    noMarket: "No market estimates: every watch valued at cost.",
    summary: "Summary",
    totalCost: "Acquisition cost",
    gain: "Unrealized gain",
    gainNote: "on the watches Chrono24 tracks",
    tracked: "Valued by Chrono24",
    trackedNote: (n: number) => `the other ${n} at cost`,
    valueOverTime: "Collection value on Chrono24 over time",
    byBrand: "By brand",
    brand: "Brand",
    count: "Watches",
    cost: "Cost",
    value: "Value",
    basis: "Basis",
    inventory: "Inventory",
    watch: "Watch",
    reference: "Reference",
    year: "Year",
    acquired: "Bought",
    basisMarket: "Chrono24",
    basisCost: "Cost",
    total: "Total",
    caseMaterial: "Case material",
    diameter: "Diameter",
    movement: "Movement",
    condition: "Condition",
    accessories: "Accessories",
    purchaseDate: "Purchase date",
    marketValue: "Market value",
    gainShort: "Gain",
    modelPerformance: "Model performance on Chrono24",
    purchaseMark: "bought",
    notTracked: "Not tracked by Chrono24: valued at acquisition cost.",
    page: (x: number, y: number) => `Page ${x} of ${y}`,
    disclaimer:
      "Market estimates come from Chrono24's Watch Collection and are not a certified appraisal. Cost includes the purchase plus the service, strap and other costs recorded for each watch.",
  },
} as const;

export type Strings = (typeof STRINGS)[Lang];
export const strings = (lang: Lang): Strings => STRINGS[lang];

/** "41.775 €", "9.573,50 €". Whole euros unless `cents`. */
export function money(n: number, cents = false): string {
  const sign = n < 0 ? "-" : "";
  const abs = Math.abs(n);
  const whole = cents ? Math.trunc(abs) : Math.round(abs);
  const grouped = String(whole).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const frac = cents ? `,${String(Math.round((abs - whole) * 100)).padStart(2, "0")}` : "";
  return `${sign}${grouped}${frac} €`;
}

export const signedMoney = (n: number) => (n > 0 ? "+" : "") + money(n);

export const percent = (n: number | null) =>
  n === null ? "—" : `${n > 0 ? "+" : ""}${n.toFixed(1).replace(".", ",")}%`;

const MONTHS = {
  pt: [
    "jan.",
    "fev.",
    "mar.",
    "abr.",
    "mai.",
    "jun.",
    "jul.",
    "ago.",
    "set.",
    "out.",
    "nov.",
    "dez.",
  ],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

/** ISO "2025-02-13" → "13/02/2025" (pt) or "13 Feb 2025" (en). A bare "YYYY-MM" gives the month. */
export function date(iso: string | null | undefined, lang: Lang): string {
  if (!iso) return "—";
  const [y, m, d] = iso.slice(0, 10).split("-");
  if (!d) return monthYear(iso, lang);
  return lang === "pt" ? `${d}/${m}/${y}` : `${Number(d)} ${MONTHS.en[Number(m) - 1]} ${y}`;
}

/** "fev. 2025" / "Feb 2025". */
export function monthYear(iso: string, lang: Lang): string {
  const [y, m] = iso.split("-");
  return `${MONTHS[lang][Number(m) - 1]} ${y}`;
}

/**
 * Chrono24's Portuguese words for condition and accessories, in English.
 * Matched case-insensitively on the whole value, then on each comma part.
 */
const C24_EN: Record<string, string> = {
  novo: "New",
  "sem uso": "Unworn",
  usado: "Used",
  "muito bom": "Very good",
  bom: "Good",
  satisfatório: "Fair",
  "caixa original": "Original box",
  "papéis originais": "Original papers",
  "caixa e papéis originais": "Original box and papers",
  "com caixa original": "With original box",
  "com papéis originais": "With original papers",
  "sem caixa original": "No original box",
  "sem papéis originais": "No original papers",
  "sem caixa original, sem papéis originais": "No original box, no original papers",
  "documentos originais": "Original papers",
  "não disponíveis": "None",
  "não especificado": "Not specified",
};

/** Words seen that the map above does not know, for the script to list. */
export const unmappedC24 = new Set<string>();

export function c24Word(value: string | undefined, lang: Lang): string | undefined {
  if (!value || lang === "pt") return value;
  const hit = C24_EN[value.trim().toLowerCase()];
  if (hit) return hit;
  return value
    .split(",")
    .map((part) => {
      const p = part.trim();
      const en = C24_EN[p.toLowerCase()];
      if (!en) unmappedC24.add(p);
      return en ?? p;
    })
    .join(", ");
}

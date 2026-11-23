/**
 * Where watches were bought, read from the ledger: per-source totals for the
 * sales report, and suggestions for watches not tagged yet. Pure, so the CLI
 * (scripts/ledger/sources.ts) and the dev-only pages share it.
 *
 * Nothing here names a source: every label comes from the store's own list,
 * which lives in the gitignored `.ledger/` (a seller can be a private person).
 */

import type {
  LedgerLine,
  LedgerSource,
  LedgerStore,
  LedgerWatch,
  WatchStatus,
} from "./ledger.types";

/** The summary row for watches with no source yet. */
export const UNTAGGED = "Untagged";

/** Watches sent back and refunded were never really acquired, so no source counts them. */
const counted = (w: LedgerWatch) => w.status !== "returned";

export const sourcesOf = (store: LedgerStore): LedgerSource[] => store.sources ?? [];

/**
 * Catalogue models with a source of their own (no ledger watch yet). An entry
 * for a model a ledger watch now links to is stale: the watch wins.
 */
function outsideEntries(store: LedgerStore): [modelFile: string, source: string][] {
  const linked = new Set(store.watches.flatMap((w) => (w.modelFile ? [w.modelFile] : [])));
  return Object.entries(store.modelSources ?? {}).filter(([m]) => !linked.has(m));
}

/** modelFile → where it was bought (the source's label), for tagged catalogue watches. */
export function sourceByModel(store: LedgerStore): Record<string, string> {
  const labels = new Map(sourcesOf(store).map((s) => [s.id, s.label]));
  const out: Record<string, string> = {};
  for (const [modelFile, source] of outsideEntries(store)) {
    const label = labels.get(source);
    if (label) out[modelFile] = label;
  }
  for (const w of store.watches) {
    const label = w.source ? labels.get(w.source) : undefined;
    if (w.modelFile && label) out[w.modelFile] = label;
  }
  return out;
}

export interface SourceSummaryRow {
  /** The source id, or null for the Untagged row. */
  id: string | null;
  label: string;
  /** Watches bought from it; a lot share counts as the watches it stands for. */
  bought: number;
  /** Of those, catalogue watches not in the ledger (no cost recorded). */
  outside: number;
  /** What its ledger watches' purchases cost: their shares of `purchase` lines. */
  spent: number;
}

/** The purchase lines a watch holds a share of. */
function purchasesOf(store: LedgerStore, watchId: string): { line: LedgerLine; share: number }[] {
  return store.lines.flatMap((line) => {
    if (line.kind !== "purchase") return [];
    const h = line.holders.find((x) => x.id === watchId);
    return h ? [{ line, share: h.share }] : [];
  });
}

/** One row per source in the store's order, then Untagged (only when any is). */
export function sourceSummary(store: LedgerStore): SourceSummaryRow[] {
  const rows = new Map<string | null, SourceSummaryRow>(
    sourcesOf(store).map((s) => [
      s.id,
      { id: s.id, label: s.label, bought: 0, outside: 0, spent: 0 },
    ]),
  );
  const untagged: SourceSummaryRow = {
    id: null,
    label: UNTAGGED,
    bought: 0,
    outside: 0,
    spent: 0,
  };
  for (const w of store.watches) {
    if (!counted(w)) continue;
    const row = (w.source && rows.get(w.source)) || untagged;
    row.bought += w.count ?? 1;
    for (const { line, share } of purchasesOf(store, w.id))
      row.spent += (line.direction === "out" ? 1 : -1) * line.amount * share;
  }
  for (const [, source] of outsideEntries(store)) {
    const row = rows.get(source);
    if (!row) continue;
    row.bought += 1;
    row.outside += 1;
  }
  const out = [...rows.values()];
  if (untagged.bought) out.push(untagged);
  return out.map((r) => ({ ...r, spent: Math.round(r.spent * 100) / 100 }));
}

export interface SourceCoverage {
  /** Ledger watches with a source, of all those a source can count (a lot share as its count). */
  tagged: number;
  total: number;
  /** Catalogue watches outside the ledger that have a source of their own. */
  outside: number;
}

export function sourceCoverage(store: LedgerStore): SourceCoverage {
  const ws = store.watches.filter(counted);
  const n = (xs: LedgerWatch[]) => xs.reduce((s, w) => s + (w.count ?? 1), 0);
  return {
    tagged: n(ws.filter((w) => w.source)),
    total: n(ws),
    outside: outsideEntries(store).length,
  };
}

/** One watch under a source, for the report's expandable rows. */
export interface SourceWatch {
  /** The ledger watch's id, or the modelFile of a catalogue watch outside the ledger. */
  key: string;
  label: string;
  modelFile: string | null;
  status: WatchStatus | "outside";
  /** Purchase date; null when unknown or outside the ledger. */
  acquired: string | null;
  /** A lot share stands for this many watches. */
  count: number;
  /** Its share of `purchase` lines; null outside the ledger. */
  paid: number | null;
}

/** The watches under each source (by id, or UNTAGGED), oldest purchase first, outside ones last. */
export function sourceWatches(store: LedgerStore): Record<string, SourceWatch[]> {
  const out: Record<string, SourceWatch[]> = {};
  const push = (source: string | undefined, w: SourceWatch) =>
    (out[source ?? UNTAGGED] ??= []).push(w);
  for (const w of store.watches) {
    if (!counted(w)) continue;
    const paid = purchasesOf(store, w.id).reduce(
      (s, { line, share }) => s + (line.direction === "out" ? 1 : -1) * line.amount * share,
      0,
    );
    push(w.source, {
      key: w.id,
      label: w.label,
      modelFile: w.modelFile,
      status: w.status,
      acquired: w.acquired ?? null,
      count: w.count ?? 1,
      paid: Math.round(paid * 100) / 100,
    });
  }
  for (const [modelFile, source] of outsideEntries(store))
    push(source, {
      key: modelFile,
      label: modelFile,
      modelFile,
      status: "outside",
      acquired: null,
      count: 1,
      paid: null,
    });
  // Dated purchases by date, then undated ledger watches, then those outside the ledger.
  const rank = (w: SourceWatch) => (w.status === "outside" ? "~2" : (w.acquired ?? "~1"));
  for (const list of Object.values(out))
    list.sort((a, b) => (rank(a) < rank(b) ? -1 : rank(a) > rank(b) ? 1 : 0));
  return out;
}

/** What the sales report's "Where they came from" section needs, from the ledger. */
export interface SourceReport {
  rows: SourceSummaryRow[];
  byModel: Record<string, string>;
  coverage: SourceCoverage;
  /** The watches under each row, keyed by source id or UNTAGGED. */
  watches: Record<string, SourceWatch[]>;
  /** Has any source been defined yet? */
  defined: boolean;
}

export const sourceReport = (store: LedgerStore): SourceReport => ({
  rows: sourceSummary(store),
  byModel: sourceByModel(store),
  coverage: sourceCoverage(store),
  watches: sourceWatches(store),
  defined: sourcesOf(store).length > 0,
});

const fold = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

/** The words that name a source in free text: its id ("custojusto") and its label's longer words. */
function cues(s: LedgerSource): string[] {
  const words = fold(s.label)
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length >= 4);
  return [...new Set([fold(s.id).replace(/_/g, " "), fold(s.label), ...words])];
}

/** The text of a watch's purchase lines: their description, note and channel. */
export function purchaseText(store: LedgerStore, w: LedgerWatch): string {
  return purchasesOf(store, w.id)
    .map(({ line }) => [line.text, line.note, line.channel].filter(Boolean).join(" · "))
    .join(" | ");
}

/**
 * The sources a watch's purchase text names ("Compra Ebay Lucerne" → eBay).
 * Only ever a suggestion: nothing is tagged without being asked.
 */
export function suggestSources(store: LedgerStore, w: LedgerWatch): LedgerSource[] {
  const text = fold(purchaseText(store, w));
  if (!text) return [];
  return sourcesOf(store).filter((s) =>
    cues(s).some((cue) =>
      new RegExp(`(^|[^a-z0-9])${cue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z0-9]|$)`).test(
        text,
      ),
    ),
  );
}

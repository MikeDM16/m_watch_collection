/**
 * Every change the back-office can make to the ledger, as a pure function:
 * the store and an action in, the new store (or why not) out. The API route
 * (src/app/api/admin/ledger) loads, applies, and saves with a version check.
 */

import { OVERHEAD_ID } from "./buildFinancials";
import type {
  LedgerLine,
  LedgerStore,
  LedgerWatch,
  LineKind,
  WatchStatus,
  WorkbookSnapshot,
} from "./ledger.types";

/** The holder id for money no watch holds: boxes, batteries, returned watches. */
export const OVERHEAD = OVERHEAD_ID;

export const LINE_KINDS: LineKind[] = [
  "purchase",
  "sale",
  "refund",
  "service",
  "parts",
  "strap",
  "box",
  "shipping",
  "fees",
  "other",
];

export const WATCH_STATUSES: WatchStatus[] = ["for-sale", "kept", "sold", "returned", "gone"];

export type LedgerAction =
  | { action: "save-line"; line: Omit<LedgerLine, "id"> & { id?: string } }
  | { action: "delete-line"; id: string }
  | { action: "save-watch"; watch: Omit<LedgerWatch, "id"> & { id?: string } }
  | { action: "delete-watch"; id: string }
  | { action: "split-watch"; id: string }
  | { action: "pull-line"; id: string }
  | {
      action: "record-sale";
      watchId: string;
      /** The payout: net, after fees, on the day it arrived. */
      sale: { date: string; amount: number; channel?: string; text: string };
      /** The day the watch left stock (the auction), when not the payout day. */
      soldOn?: string;
      /**
       * The public sale report (hammer, "DD/MM/YYYY", listing) for its model file.
       * Written by the API route after the ledger, only once saleReport.JPG exists.
       */
      publicReport?: { price: number; date: string; url?: string };
    }
  | {
      /** The public sale report alone, for a sale already in the ledger: the API route writes it. */
      action: "sale-report";
      modelFile: string;
      publicReport: { price: number; date: string; url?: string };
    }
  | {
      action: "record-purchase";
      /** One watch, or a lot: every watch it bought. */
      watches: { label: string; modelFile?: string | null }[];
      status: "for-sale" | "kept";
      purchase: { date: string; amount: number; channel?: string; text: string };
    };

export class ActionRefused extends Error {}

const ISO = /^\d{4}-\d{2}-\d{2}$/;

const newId = (prefix: string) =>
  `${prefix}-${Math.random().toString(16).slice(2, 8)}${Date.now().toString(16).slice(-4)}`;

function checkLine(line: LedgerLine, store: LedgerStore) {
  if (!ISO.test(line.date)) throw new ActionRefused("A line needs a date (YYYY-MM-DD).");
  if (line.direction !== "in" && line.direction !== "out")
    throw new ActionRefused("A line is money in or money out.");
  if (!Number.isFinite(line.amount) || line.amount === 0)
    throw new ActionRefused("A line needs an amount.");
  if (!LINE_KINDS.includes(line.kind)) throw new ActionRefused(`Unknown kind: ${line.kind}.`);
  if (line.kind === "sale" && line.direction !== "in")
    throw new ActionRefused("A sale is money in.");
  if (line.book !== "trade" && line.book !== "collection")
    throw new ActionRefused("A line belongs to trading or to the collection.");
  if (!line.text?.trim()) throw new ActionRefused("A line needs a description.");
  if (!line.holders.length)
    throw new ActionRefused("Say who holds this money: a watch, several, or overhead.");
  const ids = new Set(store.watches.map((w) => w.id));
  for (const h of line.holders) {
    if (h.id !== OVERHEAD && !ids.has(h.id)) throw new ActionRefused(`Unknown watch ${h.id}.`);
    if (!(h.share > 0)) throw new ActionRefused("Every holder needs a share above zero.");
  }
  const total = line.holders.reduce((s, h) => s + h.share, 0);
  if (Math.abs(total - 1) > 1e-6)
    throw new ActionRefused(`The holders' shares add up to ${Math.round(total * 1000) / 10}%.`);
  if (line.group && !store.groups.some((g) => g.id === line.group))
    throw new ActionRefused(`Unknown group ${line.group}.`);
}

function checkWatch(w: LedgerWatch, store: LedgerStore, models: Set<string>) {
  if (!w.label?.trim()) throw new ActionRefused("A watch needs a name.");
  if (!WATCH_STATUSES.includes(w.status)) throw new ActionRefused(`Unknown status: ${w.status}.`);
  if (w.modelFile !== null) {
    if (!models.has(w.modelFile)) throw new ActionRefused(`No catalogue model ${w.modelFile}.`);
    const other = store.watches.find((x) => x.id !== w.id && x.modelFile === w.modelFile);
    if (other) throw new ActionRefused(`${w.modelFile} is already "${other.label}".`);
  }
  if (w.acquired && !ISO.test(w.acquired)) throw new ActionRefused("Bought: YYYY-MM-DD.");
  if (w.sold && !ISO.test(w.sold)) throw new ActionRefused("Sold: YYYY-MM-DD.");
  if (w.count !== undefined && !(Number.isInteger(w.count) && w.count >= 1))
    throw new ActionRefused("A lot share stands for a whole number of watches.");
  if (w.group && !store.groups.some((g) => g.id === w.group))
    throw new ActionRefused(`Unknown group ${w.group}.`);
}

/**
 * Applies one action. `models` are the catalogue's modelFiles (a watch may only
 * link to one of them); `snapshot` is the workbook read as a ledger, for pull-line.
 */
export function applyAction(
  store: LedgerStore,
  a: LedgerAction,
  models: Set<string>,
  snapshot: WorkbookSnapshot | null,
): LedgerStore {
  const next: LedgerStore = {
    ...store,
    lines: [...store.lines],
    watches: [...store.watches],
    groups: [...store.groups],
  };

  switch (a.action) {
    case "save-line": {
      const line = { ...a.line, id: a.line.id ?? newId("l") } as LedgerLine;
      line.amount = Math.round(line.amount * 100) / 100;
      checkLine(line, next);
      const i = next.lines.findIndex((l) => l.id === line.id);
      if (a.line.id && i < 0) throw new ActionRefused("That line no longer exists.");
      if (i >= 0) next.lines[i] = line;
      else next.lines.push(line);
      return next;
    }
    case "delete-line": {
      if (!next.lines.some((l) => l.id === a.id)) throw new ActionRefused("No such line.");
      next.lines = next.lines.filter((l) => l.id !== a.id);
      return next;
    }
    case "save-watch": {
      const watch = { ...a.watch, id: a.watch.id ?? newId("w") } as LedgerWatch;
      for (const k of Object.keys(watch) as (keyof LedgerWatch)[])
        if (watch[k] === "" || watch[k] === undefined) delete watch[k];
      watch.modelFile = a.watch.modelFile || null;
      checkWatch(watch, next, models);
      const i = next.watches.findIndex((w) => w.id === watch.id);
      if (a.watch.id && i < 0) throw new ActionRefused("That watch no longer exists.");
      if (i >= 0) next.watches[i] = watch;
      else next.watches.push(watch);
      return next;
    }
    case "delete-watch": {
      const held = next.lines.filter((l) => l.holders.some((h) => h.id === a.id)).length;
      if (held)
        throw new ActionRefused(
          `${held} line(s) still hold money for this watch: move or delete them first.`,
        );
      next.watches = next.watches.filter((w) => w.id !== a.id);
      return next;
    }
    case "split-watch": {
      // One watch off a lot share standing for n: it takes 1/n of every line the
      // share holds, the share keeps the rest, so a sibling's sale never moves
      // another watch's cost.
      const parent = next.watches.find((w) => w.id === a.id);
      if (!parent?.count || parent.count < 2)
        throw new ActionRefused("Only a lot share standing for two or more watches can be split.");
      const n = parent.count;
      const child: LedgerWatch = {
        id: newId("w"),
        label: `${parent.label} (1 of ${n})`,
        modelFile: null,
        status: parent.status,
        group: parent.group,
        acquired: parent.acquired,
        origin: parent.origin,
      };
      next.watches = next.watches.map((w) =>
        w.id === parent.id ? { ...w, count: n - 1 > 1 ? n - 1 : undefined } : w,
      );
      next.watches.push(child);
      next.lines = next.lines.map((l) => {
        const h = l.holders.find((x) => x.id === parent.id);
        if (!h) return l;
        return {
          ...l,
          holders: [
            ...l.holders.map((x) =>
              x.id === parent.id ? { ...x, share: (x.share * (n - 1)) / n } : x,
            ),
            { id: child.id, share: h.share / n },
          ],
        };
      });
      return next;
    }
    case "record-sale": {
      // The payout as a sale line held by the watch, and the watch marked sold.
      const watch = next.watches.find((w) => w.id === a.watchId);
      if (!watch) throw new ActionRefused("No such watch.");
      if (watch.status === "sold") throw new ActionRefused(`"${watch.label}" is already sold.`);
      if (a.soldOn && !ISO.test(a.soldOn)) throw new ActionRefused("Sold on: YYYY-MM-DD.");
      const line: LedgerLine = {
        id: newId("l"),
        date: a.sale.date,
        direction: "in",
        amount: Math.round(a.sale.amount * 100) / 100,
        kind: "sale",
        text: a.sale.text.trim() || `Sale ${watch.label}`,
        channel: a.sale.channel?.trim() || undefined,
        book: "trade",
        // A lot watch's sale counts toward its lot: what the lot has earned back.
        ...(watch.group ? { group: watch.group } : {}),
        holders: [{ id: watch.id, share: 1 }],
      };
      checkLine(line, next);
      next.lines.push(line);
      next.watches = next.watches.map((w) =>
        w.id === watch.id
          ? {
              ...w,
              status: "sold",
              ...(a.soldOn && a.soldOn !== line.date ? { sold: a.soldOn } : {}),
            }
          : w,
      );
      return next;
    }
    case "record-purchase": {
      // New watches, the purchase split evenly between them, and a group when
      // they came together: a lot whose sales pay for what is kept out of it.
      const labels = a.watches.map((w) => w.label.trim()).filter(Boolean);
      if (!labels.length) throw new ActionRefused("Name the watch (or every watch of the lot).");
      if (!ISO.test(a.purchase.date))
        throw new ActionRefused("A purchase needs a date (YYYY-MM-DD).");
      let group: string | undefined;
      if (labels.length > 1) {
        group = newId("g");
        next.groups.push({
          id: group,
          label: a.purchase.text.trim() || `${labels.length} watches`,
          kind: "lot",
          size: labels.length,
        });
      }
      const created: LedgerWatch[] = a.watches
        .filter((w) => w.label.trim())
        .map((w) => ({
          id: newId("w"),
          label: w.label.trim(),
          modelFile: w.modelFile || null,
          status: a.status,
          acquired: a.purchase.date,
          ...(group ? { group } : {}),
        }));
      for (const w of created) {
        checkWatch(
          w,
          { ...next, watches: [...next.watches, ...created.filter((c) => c !== w)] },
          models,
        );
        next.watches.push(w);
      }
      const line: LedgerLine = {
        id: newId("l"),
        date: a.purchase.date,
        direction: "out",
        amount: Math.round(a.purchase.amount * 100) / 100,
        kind: "purchase",
        text: a.purchase.text.trim() || labels.join(" + "),
        channel: a.purchase.channel?.trim() || undefined,
        book: a.status === "kept" ? "collection" : "trade",
        ...(group ? { group } : {}),
        holders: created.map((w) => ({ id: w.id, share: 1 / created.length })),
      };
      checkLine(line, next);
      next.lines.push(line);
      return next;
    }
    case "sale-report":
      // Public only: nothing in the ledger changes.
      return store;
    case "pull-line": {
      // A workbook line the ledger lacks, already split between its watches.
      const line = snapshot?.lines.find((l) => l.id === a.id);
      if (!line) throw new ActionRefused("That workbook line is gone: re-sync and try again.");
      if (next.lines.some((l) => l.id === line.id))
        throw new ActionRefused("The ledger already has this line.");
      const byModel = new Map(next.watches.filter((w) => w.modelFile).map((w) => [w.modelFile, w]));
      const remap = new Map<string, string>();
      for (const h of line.holders) {
        if (h.id === OVERHEAD || next.watches.some((w) => w.id === h.id)) continue;
        const proposed = snapshot!.watches.find((w) => w.id === h.id);
        if (!proposed) throw new ActionRefused(`The workbook's watch ${h.id} is gone: re-sync.`);
        // A watch the back-office already has under the same model takes it.
        const existing = proposed.modelFile ? byModel.get(proposed.modelFile) : undefined;
        if (existing) remap.set(h.id, existing.id);
        else next.watches.push(proposed);
      }
      if (line.group && !next.groups.some((g) => g.id === line.group)) {
        const g = snapshot!.groups.find((x) => x.id === line.group);
        if (g) next.groups.push(g);
      }
      next.lines.push({
        ...line,
        holders: line.holders.map((h) => ({ ...h, id: remap.get(h.id) ?? h.id })),
      });
      return next;
    }
  }
}

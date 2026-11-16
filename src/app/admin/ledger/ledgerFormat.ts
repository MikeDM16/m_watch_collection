/** Labels and formatting shared by the ledger editor's views. */

import { formatMoney } from "../sales-report/salesStats";
import type { LedgerLine, LedgerWatch, LineKind, WatchStatus } from "./ledger.types";

export const KIND_LABEL: Record<LineKind, string> = {
  purchase: "Purchase",
  sale: "Sale",
  refund: "Refund",
  service: "Service",
  parts: "Parts",
  strap: "Strap",
  box: "Box",
  shipping: "Shipping",
  fees: "Fees",
  other: "Other",
};

export const STATUS_LABEL: Record<WatchStatus, string> = {
  "for-sale": "For sale",
  kept: "Kept",
  sold: "Sold",
  returned: "Returned",
  gone: "Gone",
};

/** "2024-02-14" → "14/02/2024", the catalogue's own order. */
export const dmy = (iso: string | null | undefined): string =>
  iso ? iso.split("-").reverse().join("/") : "—";

export const money = (n: number): string => formatMoney(n);

/** Cents, for amounts typed and shown in forms: "1 234,50" is not used; "1234.50" is. */
export const cents = (n: number): string => (Math.round(n * 100) / 100).toFixed(2);

/** A share as a short percentage: "100%", "33.3%". */
export const percent = (share: number): string =>
  `${Math.round(share * 1000) / 10}%`.replace(/\.0%$/, "%");

/** + in, − out. */
export const signedAmount = (l: LedgerLine): number =>
  l.direction === "in" ? l.amount : -l.amount;

export const watchLabel = (w: LedgerWatch | undefined, id: string): string =>
  id === "overhead" ? "Overhead" : (w?.label ?? id);

export const button =
  "rounded-sm border border-border px-2 py-0.5 text-xs transition-colors hover:border-brand hover:text-brand disabled:opacity-40";

const control =
  "h-8 rounded-md border border-input bg-transparent px-2 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring";

/** A form control filling its cell. */
export const field = `${control} w-full`;

/** A control in a row of filters, as wide as its content. */
export const inlineField = control;

export const todayIso = (): string => {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
};

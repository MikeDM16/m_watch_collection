"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { BrandProfitRow, formatMoney, formatPercent, MIN_BRAND_SALES } from "../salesStats";
import { AdminTable } from "./primitives";
import { sortRows, SortTh, useSort, type SortDir } from "./sortable";

type SortKey = "brand" | "profit" | "margin" | "roi" | "covered" | "meanDaysHeld";

const COLUMNS: { key: SortKey; label: string; firstDir?: SortDir }[] = [
  { key: "brand", label: "Brand", firstDir: "asc" },
  { key: "covered", label: "Sales" },
  { key: "profit", label: "Profit" },
  { key: "margin", label: "Margin" },
  { key: "roi", label: "Return" },
  // Fewer days held is better, so this one sorts shortest first.
  { key: "meanDaysHeld", label: "Avg days", firstDir: "asc" },
];

/**
 * Brands ranked by what they earned. The bar beside each profit is scaled to
 * the top row, so the ranking reads at a glance; the numbers carry the rest.
 * Margins over one or two sales are noise, so by default only brands with at
 * least MIN_BRAND_SALES sales with a P&L are listed.
 */
export function BrandProfitTable({ rows }: { rows: BrandProfitRow[] }) {
  const [sort, toggleSort] = useSort<SortKey>({ key: "profit", dir: "desc" });
  const [enoughOnly, setEnoughOnly] = useState(true);

  const shown = useMemo(() => {
    const base = enoughOnly ? rows.filter((r) => r.covered >= MIN_BRAND_SALES) : rows;
    // Missing values (no cost, no dates) always sink to the bottom.
    return sortRows(base, (r) => r[sort.key], sort.dir);
  }, [rows, sort, enoughOnly]);

  const scale = Math.max(1, ...shown.map((r) => Math.abs(r.profit)));
  const hidden = rows.length - rows.filter((r) => r.covered >= MIN_BRAND_SALES).length;

  return (
    <div>
      <label className="mb-3 flex w-fit cursor-pointer items-center gap-2 text-sm text-muted-foreground">
        <input
          type="checkbox"
          checked={enoughOnly}
          onChange={(e) => setEnoughOnly(e.target.checked)}
          className="accent-[hsl(var(--brand))]"
        />
        Only brands with {MIN_BRAND_SALES}+ sales
        {enoughOnly && hidden > 0 ? ` (${hidden} hidden)` : ""}
      </label>
      <AdminTable>
        <thead>
          <tr className="border-b border-border">
            {COLUMNS.map((c) => (
              <SortTh
                key={c.key}
                k={c.key}
                label={c.label}
                sort={sort}
                onSort={toggleSort}
                firstDir={c.firstDir}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {shown.map((r) => (
            <tr key={r.brand} className="border-b border-border/60">
              <td className="py-2 pr-4 font-medium">
                <Link
                  href={`/collection/${encodeURIComponent(r.brand)}`}
                  className="underline-offset-4 transition-colors hover:text-brand hover:underline"
                >
                  {r.brand}
                </Link>
              </td>
              <td className="num py-2 pr-4">
                {r.covered}
                {r.covered < r.count && <span className="text-muted-foreground">/{r.count}</span>}
              </td>
              <td className="py-2 pr-4">
                <div className="flex items-center gap-3">
                  <span className="num w-16 shrink-0 text-right">{formatMoney(r.profit)}</span>
                  <span className="hidden h-1.5 w-32 sm:block" aria-hidden>
                    <span
                      className="block h-full rounded-r"
                      style={{
                        width: `${(Math.abs(r.profit) / scale) * 100}%`,
                        background:
                          r.profit < 0 ? "hsl(var(--muted-foreground))" : "hsl(var(--chart-1))",
                      }}
                    />
                  </span>
                </div>
              </td>
              <td className="num py-2 pr-4">{formatPercent(r.margin)}</td>
              <td className="num py-2 pr-4">{formatPercent(r.roi)}</td>
              <td className="num py-2 pr-4">
                {r.meanDaysHeld === null ? "—" : Math.round(r.meanDaysHeld)}
              </td>
            </tr>
          ))}
        </tbody>
      </AdminTable>
    </div>
  );
}

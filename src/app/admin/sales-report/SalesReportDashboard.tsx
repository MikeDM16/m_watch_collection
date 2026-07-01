"use client";

import { CollectionIndexEntry } from "@/app/data/collectionIndex";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useMemo, useState } from "react";

import { SectionHeader, StatTile, WatchLink } from "./components/primitives";
import { SalesByBrandChart } from "./components/SalesByBrandChart";
import { SalesOverTimeChart } from "./components/SalesOverTimeChart";
import { WindowSelector } from "./components/WindowSelector";
import {
  brandBreakdown,
  bucketSalesOverTime,
  computeReport,
  DEFAULT_WINDOW_ID,
  entriesInWindow,
  findWindow,
  formatPrice,
  priceOf,
  TimeWindowId,
  TOP_BRANDS_LIMIT,
  WINDOW_OPTIONS,
  yearWindowOptions,
} from "./salesStats";

export default function SalesReportDashboard({ sold }: { sold: CollectionIndexEntry[] }) {
  const [windowId, setWindowId] = useState<TimeWindowId>(DEFAULT_WINDOW_ID);

  const years = useMemo(() => yearWindowOptions(sold), [sold]);
  const opt = useMemo(() => findWindow(windowId, sold), [windowId, sold]);
  const filtered = useMemo(() => entriesInWindow(sold, opt), [sold, opt]);
  const report = useMemo(() => computeReport(filtered), [filtered]);
  const timeData = useMemo(() => bucketSalesOverTime(filtered, opt), [filtered, opt]);
  const brandData = useMemo(() => brandBreakdown(filtered, { top: 10 }), [filtered]);

  const isEmpty = report.count === 0;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <h1 className="text-2xl font-bold">Sales Report</h1>
        <Link
          href="/"
          className="rounded-md border border-border px-3 py-1.5 text-sm hover:bg-muted"
        >
          Back to Site
        </Link>
      </div>

      <div className="mb-6 flex flex-col gap-3">
        <WindowSelector
          value={windowId}
          presets={WINDOW_OPTIONS}
          years={years}
          onChange={setWindowId}
        />
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{opt.label}</span> · {report.count}{" "}
          {report.count === 1 ? "sale" : "sales"}. Dev-only view.
        </p>
      </div>

      {isEmpty ? (
        <div className="rounded-md border border-dashed border-border p-10 text-center text-muted-foreground">
          No sales in this window.
        </div>
      ) : (
        <>
          {/* ───── Headline tiles ───── */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            <StatTile label="Total sold" value={report.count.toString()} />
            <StatTile label="Total revenue" value={formatPrice(report.total)} />
            <StatTile label="Mean" value={formatPrice(report.mean)} />
            <StatTile label="Median" value={formatPrice(report.median)} />
            {report.highest && (
              <StatTile
                label="Highest"
                value={formatPrice(priceOf(report.highest))}
                sub={<WatchLink entry={report.highest} />}
              />
            )}
          </div>

          {/* ───── Sales over time ───── */}
          <SectionHeader title="Sales over time" />
          <Card>
            <CardHeader className="pb-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Revenue (bars) &amp; sales count (line)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <SalesOverTimeChart data={timeData} />
            </CardContent>
          </Card>

          {/* ───── Top brands by revenue ───── */}
          <SectionHeader title="Top brands by revenue" />
          <Card>
            <CardContent className="pt-6">
              <SalesByBrandChart data={brandData} />
            </CardContent>
          </Card>

          {/* ───── Highest / Lowest detail cards ───── */}
          <SectionHeader title="Top & bottom sales" />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {report.highest && (
              <div className="rounded-md border border-border p-4">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">
                  Highest sale
                </div>
                <div className="mt-2 text-xl font-bold">{formatPrice(priceOf(report.highest))}</div>
                <div className="mt-1 text-sm">
                  <WatchLink entry={report.highest} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {report.highest.brand} · {report.highest.saleReport!.date}
                </div>
              </div>
            )}
            {report.lowest && (
              <div className="rounded-md border border-border p-4">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">
                  Lowest sale
                </div>
                <div className="mt-2 text-xl font-bold">{formatPrice(priceOf(report.lowest))}</div>
                <div className="mt-1 text-sm">
                  <WatchLink entry={report.lowest} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {report.lowest.brand} · {report.lowest.saleReport!.date}
                </div>
              </div>
            )}
          </div>

          {/* ───── Sales by year ───── */}
          <SectionHeader title="Sales by year" />
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
                <th className="py-2 pr-3">Year</th>
                <th className="py-2 pr-3">Sales</th>
                <th className="py-2 pr-3">Total</th>
                <th className="py-2 pr-3">Mean</th>
                <th className="py-2 pr-3">Min</th>
                <th className="py-2 pr-3">Max</th>
              </tr>
            </thead>
            <tbody>
              {report.yearRows.map((r) => (
                <tr key={r.year} className="border-b border-border">
                  <td className="py-2 pr-3 font-semibold">{r.year}</td>
                  <td className="py-2 pr-3">{r.count}</td>
                  <td className="py-2 pr-3">{formatPrice(r.total)}</td>
                  <td className="py-2 pr-3">{formatPrice(r.mean)}</td>
                  <td className="py-2 pr-3">
                    {formatPrice(priceOf(r.min))}{" "}
                    <span className="text-xs text-muted-foreground">
                      · <WatchLink entry={r.min} />
                    </span>
                  </td>
                  <td className="py-2 pr-3">
                    {formatPrice(priceOf(r.max))}{" "}
                    <span className="text-xs text-muted-foreground">
                      · <WatchLink entry={r.max} />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ───── Sales by brand ───── */}
          <SectionHeader title={`Sales by brand (top ${TOP_BRANDS_LIMIT})`} />
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
                <th className="py-2 pr-3">Brand</th>
                <th className="py-2 pr-3">Sales</th>
                <th className="py-2 pr-3">Total</th>
                <th className="py-2 pr-3">Mean</th>
                <th className="py-2 pr-3">Min</th>
                <th className="py-2 pr-3">Max</th>
              </tr>
            </thead>
            <tbody>
              {report.brandRows.map((r) => (
                <tr
                  key={r.label}
                  className={`border-b border-border ${r.isOther ? "text-muted-foreground" : ""}`}
                >
                  <td className="py-2 pr-3 font-semibold">
                    {r.isOther ? (
                      r.label
                    ) : (
                      <Link
                        href={`/collection/${encodeURIComponent(r.label)}`}
                        className="hover:underline"
                      >
                        {r.label}
                      </Link>
                    )}
                  </td>
                  <td className="py-2 pr-3">{r.count}</td>
                  <td className="py-2 pr-3">{formatPrice(r.total)}</td>
                  <td className="py-2 pr-3">{formatPrice(r.mean)}</td>
                  <td className="py-2 pr-3">
                    {formatPrice(priceOf(r.min))}
                    {!r.isOther && (
                      <span className="text-xs text-muted-foreground">
                        {" "}
                        · <WatchLink entry={r.min} />
                      </span>
                    )}
                  </td>
                  <td className="py-2 pr-3">
                    {formatPrice(priceOf(r.max))}
                    {!r.isOther && (
                      <span className="text-xs text-muted-foreground">
                        {" "}
                        · <WatchLink entry={r.max} />
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

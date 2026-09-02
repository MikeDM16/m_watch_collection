"use client";

import { CollectionIndexEntry } from "@/app/data/collectionIndex";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useMemo, useState } from "react";

import { AdminTable, SectionHeader, StatTile, Th, WatchLink } from "./components/primitives";
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
    <div className="pb-24">
      <div className="mb-8 border-b border-border pb-6">
        <p className="lab">Local tool</p>
        <h1 className="mt-2 font-display text-display-m font-medium">Sales Report</h1>
      </div>

      <div className="mb-6 flex flex-col gap-3">
        <WindowSelector
          value={windowId}
          presets={WINDOW_OPTIONS}
          years={years}
          onChange={setWindowId}
        />
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{opt.label}</span> ·{" "}
          <span className="num">{report.count}</span> {report.count === 1 ? "sale" : "sales"}.
        </p>
      </div>

      {isEmpty ? (
        <div className="border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
          No sales in this window.
        </div>
      ) : (
        <>
          {/* ───── Headline tiles ───── */}
          <div className="grid grid-cols-2 border-l border-t border-border md:grid-cols-5">
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
          <div className="grid grid-cols-1 border-l border-t border-border md:grid-cols-2">
            {report.highest && (
              <div className="border-b border-r border-border p-5">
                <div className="lab">Highest sale</div>
                <div className="num mt-2 text-xl font-medium text-brand">
                  {formatPrice(priceOf(report.highest))}
                </div>
                <div className="mt-1 text-sm">
                  <WatchLink entry={report.highest} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {report.highest.brand} · {report.highest.saleReport!.date}
                </div>
              </div>
            )}
            {report.lowest && (
              <div className="border-b border-r border-border p-5">
                <div className="lab">Lowest sale</div>
                <div className="num mt-2 text-xl font-medium">
                  {formatPrice(priceOf(report.lowest))}
                </div>
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
          <AdminTable>
            <thead>
              <tr className="border-b border-border">
                <Th>Year</Th>
                <Th>Sales</Th>
                <Th>Total</Th>
                <Th>Mean</Th>
                <Th>Min</Th>
                <Th>Max</Th>
              </tr>
            </thead>
            <tbody>
              {report.yearRows.map((r) => (
                <tr key={r.year} className="border-b border-border/60">
                  <td className="num py-2 pr-4 font-medium">{r.year}</td>
                  <td className="num py-2 pr-4">{r.count}</td>
                  <td className="num py-2 pr-4">{formatPrice(r.total)}</td>
                  <td className="num py-2 pr-4">{formatPrice(r.mean)}</td>
                  <td className="num py-2 pr-4">
                    {formatPrice(priceOf(r.min))}{" "}
                    <span className="text-xs text-muted-foreground">
                      · <WatchLink entry={r.min} />
                    </span>
                  </td>
                  <td className="num py-2 pr-4">
                    {formatPrice(priceOf(r.max))}{" "}
                    <span className="text-xs text-muted-foreground">
                      · <WatchLink entry={r.max} />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </AdminTable>

          {/* ───── Sales by brand ───── */}
          <SectionHeader title={`Sales by brand (top ${TOP_BRANDS_LIMIT})`} />
          <AdminTable>
            <thead>
              <tr className="border-b border-border">
                <Th>Brand</Th>
                <Th>Sales</Th>
                <Th>Total</Th>
                <Th>Mean</Th>
                <Th>Min</Th>
                <Th>Max</Th>
              </tr>
            </thead>
            <tbody>
              {report.brandRows.map((r) => (
                <tr
                  key={r.label}
                  className={`border-b border-border/60 ${r.isOther ? "text-muted-foreground" : ""}`}
                >
                  <td className="py-2 pr-4 font-medium">
                    {r.isOther ? (
                      r.label
                    ) : (
                      <Link
                        href={`/collection/${encodeURIComponent(r.label)}`}
                        className="underline-offset-4 transition-colors hover:text-brand hover:underline"
                      >
                        {r.label}
                      </Link>
                    )}
                  </td>
                  <td className="num py-2 pr-4">{r.count}</td>
                  <td className="num py-2 pr-4">{formatPrice(r.total)}</td>
                  <td className="num py-2 pr-4">{formatPrice(r.mean)}</td>
                  <td className="num py-2 pr-4">
                    {formatPrice(priceOf(r.min))}
                    {!r.isOther && (
                      <span className="text-xs text-muted-foreground">
                        {" "}
                        · <WatchLink entry={r.min} />
                      </span>
                    )}
                  </td>
                  <td className="num py-2 pr-4">
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
          </AdminTable>
        </>
      )}
    </div>
  );
}

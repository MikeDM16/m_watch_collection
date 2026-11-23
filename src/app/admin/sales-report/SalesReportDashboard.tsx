"use client";

import { CollectionIndexEntry } from "@/app/data/collectionIndex";
import { routeToCollectionBrandModelPage } from "@/app/services/commonFunctions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useMemo, useState } from "react";

import type { SourceReport } from "../ledger/ledgerSources";
import { MoneySection } from "./components/MoneySection";
import { AdminTable, SectionHeader, StatTile, Th, WatchLink } from "./components/primitives";
import { ProfitabilitySection } from "./components/ProfitabilitySection";
import { ReconciliationPanel } from "./components/ReconciliationPanel";
import { SalesByBrandChart } from "./components/SalesByBrandChart";
import { SalesOverTimeChart } from "./components/SalesOverTimeChart";
import { SourceSection, type SourceModels } from "./components/SourceSection";
import { WindowSelector } from "./components/WindowSelector";
import type { KeptWatchFinancials, SalesFinancials } from "./salesData.types";
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

/** Where the report's money figures come from. */
export type ReportSource = "workbook" | "ledger";

const SOURCES: { id: ReportSource; label: string; href: string }[] = [
  { id: "workbook", label: "Workbook", href: "/admin/sales-report" },
  { id: "ledger", label: "Back-office", href: "/admin/sales-report?source=ledger" },
];

export default function SalesReportDashboard({
  sold,
  financials,
  stale,
  keptModels = {},
  source = "workbook",
  hasLedger = false,
  ledgerIssues = [],
  sources = null,
  sourceModels = {},
}: {
  sold: CollectionIndexEntry[];
  /** The P&L from the active source, or null until it exists. */
  financials: SalesFinancials | null;
  stale: boolean;
  /** Catalogue brand and legend of each kept watch's model, by modelFile. */
  keptModels?: Record<string, { brand: string; legend: string }>;
  source?: ReportSource;
  /** Has the back-office ledger been seeded (`npm run ledger:import`)? */
  hasLedger?: boolean;
  /** Problems the ledger build found: a line not fully held, a sold watch with no sale. */
  ledgerIssues?: string[];
  /** Where the watches were bought, from the ledger; null before it exists. */
  sources?: SourceReport | null;
  /** Catalogue brand and legend of the watches under each source, by modelFile. */
  sourceModels?: SourceModels;
}) {
  const keptLink = (k: KeptWatchFinancials) => {
    const m = k.modelFile ? keptModels[k.modelFile] : undefined;
    if (!m) return k.label;
    return (
      <Link
        href={routeToCollectionBrandModelPage(m.brand, m.legend)}
        className="underline-offset-4 transition-colors hover:text-brand hover:underline"
        title={k.label === m.legend ? undefined : `Collection tab: ${k.label}`}
      >
        {m.legend}
      </Link>
    );
  };
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
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
        <div>
          <p className="lab">Local tool</p>
          <h1 className="mt-2 font-display text-display-m font-medium">Sales Report</h1>
        </div>
        <div className="flex flex-col items-end gap-3">
          {hasLedger && (
            <nav aria-label="Figures from" className="flex items-center gap-1 text-sm">
              <span className="lab mr-2">Figures from</span>
              {SOURCES.map((s) => (
                <Link
                  key={s.id}
                  href={s.href}
                  aria-current={source === s.id ? "page" : undefined}
                  className={`rounded-sm border px-2.5 py-1 text-xs transition-colors ${
                    source === s.id
                      ? "border-brand text-brand"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.label}
                </Link>
              ))}
            </nav>
          )}
          <div className="flex gap-4 text-sm">
            {hasLedger && (
              <Link
                href="/admin/ledger"
                className="text-muted-foreground underline-offset-4 transition-colors hover:text-brand hover:underline"
              >
                Back-office ledger →
              </Link>
            )}
            {financials && source === "workbook" && (
              <Link
                href="/admin/sales-report/review"
                className="text-muted-foreground underline-offset-4 transition-colors hover:text-brand hover:underline"
              >
                Review workbook matches →
              </Link>
            )}
          </div>
        </div>
      </div>

      {ledgerIssues.length > 0 && (
        <div className="mb-6 border border-brand/40 bg-brand/5 px-4 py-3 text-sm">
          The back-office ledger has {ledgerIssues.length}{" "}
          {ledgerIssues.length === 1 ? "problem" : "problems"}, so some figures may be off:
          <ul className="mt-2 list-disc pl-5 text-xs text-muted-foreground">
            {ledgerIssues.slice(0, 8).map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      )}

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

          {/* ───── Profitability (the sales ledger's P&L) ───── */}
          {financials ? (
            <ProfitabilitySection
              entries={filtered}
              fin={financials.byModel}
              opt={opt}
              stale={stale}
            />
          ) : (
            <p className="mt-12 border border-dashed border-border p-6 text-sm text-muted-foreground">
              No profit data yet. Run{" "}
              <code className="font-mono text-foreground">npm run sales:sync</code> to link each
              sale to the sales ledger and see real costs, profit and margin here.
            </p>
          )}
        </>
      )}

      {/* ───── Where they came from (the ledger's sources; bought and spent are all time) ───── */}
      {sources && (
        <SourceSection
          entries={filtered}
          fin={financials?.byModel ?? null}
          report={sources}
          models={sourceModels}
        />
      )}

      {/* ───── Money over time (the ledger day by day; shown even with no sales in the window) ───── */}
      {financials && (
        <MoneySection data={financials} opt={opt} keptLink={keptLink} source={source} />
      )}

      {!isEmpty && (
        <>
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

      {/* ───── Ledger reconciliation (all time, not windowed) ───── */}
      {financials && (
        <>
          <SectionHeader title="Where the ledger's money went · all time" />
          <ReconciliationPanel data={financials} />
        </>
      )}
    </div>
  );
}

import { CollectionIndexEntry } from "@/app/data/collectionIndex";
import collectionService from "@/app/services/collectionService";
import { routeToCollectionBrandModelPage } from "@/app/services/commonFunctions";
import Link from "next/link";

const priceOf = (e: CollectionIndexEntry): number => e.saleReport!.price;
const saleYearOf = (e: CollectionIndexEntry): number => Number(e.saleReport!.date.split("/")[2]);

const formatPrice = (n: number): string => "€" + Math.round(n).toLocaleString("de-DE");

function meanOf(entries: CollectionIndexEntry[]): number {
  if (entries.length === 0) return 0;
  return entries.reduce((sum, e) => sum + priceOf(e), 0) / entries.length;
}

function medianOf(entries: CollectionIndexEntry[]): number {
  if (entries.length === 0) return 0;
  const sorted = [...entries].map(priceOf).sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

function minBy(entries: CollectionIndexEntry[]): CollectionIndexEntry {
  return entries.reduce((best, e) => (priceOf(e) < priceOf(best) ? e : best));
}

function maxBy(entries: CollectionIndexEntry[]): CollectionIndexEntry {
  return entries.reduce((best, e) => (priceOf(e) > priceOf(best) ? e : best));
}

function totalOf(entries: CollectionIndexEntry[]): number {
  return entries.reduce((sum, e) => sum + priceOf(e), 0);
}

function groupBy<K>(
  entries: CollectionIndexEntry[],
  keyFn: (e: CollectionIndexEntry) => K,
): Map<K, CollectionIndexEntry[]> {
  const map = new Map<K, CollectionIndexEntry[]>();
  for (const e of entries) {
    const k = keyFn(e);
    const arr = map.get(k);
    if (arr) arr.push(e);
    else map.set(k, [e]);
  }
  return map;
}

function WatchLink({ entry }: { entry: CollectionIndexEntry }) {
  return (
    <Link
      href={routeToCollectionBrandModelPage(entry.brand, entry.legend)}
      className="underline hover:text-primary"
    >
      {entry.legend}
    </Link>
  );
}

function StatTile({ label, value, sub }: { label: string; value: string; sub?: React.ReactNode }) {
  return (
    <div className="rounded-md border border-border p-4">
      <div className="text-2xl font-bold">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
      {sub && <div className="mt-2 text-xs text-muted-foreground">{sub}</div>}
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return <h3 className="mb-3 mt-8 border-b border-border pb-1 text-lg font-semibold">{title}</h3>;
}

const TOP_BRANDS_LIMIT = 20;

export default function SalesReportPage() {
  if (process.env.NODE_ENV === "production") {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg text-muted-foreground">
          This page is only available in development mode.
        </p>
      </div>
    );
  }

  const sold = collectionService.getSoldModels();

  if (sold.length === 0) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-2xl font-bold">Sales Report</h1>
        <p className="mt-4 text-muted-foreground">No sold watches found.</p>
      </div>
    );
  }

  const total = totalOf(sold);
  const mean = meanOf(sold);
  const median = medianOf(sold);
  const highest = maxBy(sold);
  const lowest = minBy(sold);

  // ─── Group by sale year ──────────────────────────────────
  const byYear = groupBy(sold, saleYearOf);
  const yearRows = [...byYear.entries()]
    .sort(([a], [b]) => b - a)
    .map(([year, entries]) => ({
      year,
      count: entries.length,
      total: totalOf(entries),
      mean: meanOf(entries),
      min: minBy(entries),
      max: maxBy(entries),
    }));

  // ─── Group by brand: top N + Other ──────────────────────────────────
  const byBrand = groupBy(sold, (e) => e.brand);
  const brandGroups = [...byBrand.entries()].sort(([, a], [, b]) => b.length - a.length);
  const topBrands = brandGroups.slice(0, TOP_BRANDS_LIMIT);
  const otherBrands = brandGroups.slice(TOP_BRANDS_LIMIT);
  const brandRows = topBrands.map(([brand, entries]) => ({
    label: brand,
    count: entries.length,
    total: totalOf(entries),
    mean: meanOf(entries),
    min: minBy(entries),
    max: maxBy(entries),
    isOther: false,
  }));
  if (otherBrands.length > 0) {
    const otherEntries = otherBrands.flatMap(([, entries]) => entries);
    brandRows.push({
      label: `Other (${otherBrands.length} brands)`,
      count: otherEntries.length,
      total: totalOf(otherEntries),
      mean: meanOf(otherEntries),
      min: minBy(otherEntries),
      max: maxBy(otherEntries),
      isOther: true,
    });
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Sales Report</h1>
        <Link
          href="/"
          className="rounded-md border border-border px-3 py-1.5 text-sm hover:bg-muted"
        >
          Back to Site
        </Link>
      </div>

      <p className="mb-6 text-sm text-muted-foreground">
        Aggregate analytics across all watches with a sale report. Dev-only view.
      </p>

      {/* ───── Headline tiles ───── */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        <StatTile label="Total sold" value={sold.length.toString()} />
        <StatTile label="Total revenue" value={formatPrice(total)} />
        <StatTile label="Mean" value={formatPrice(mean)} />
        <StatTile label="Median" value={formatPrice(median)} />
        <StatTile
          label="Highest"
          value={formatPrice(priceOf(highest))}
          sub={<WatchLink entry={highest} />}
        />
      </div>

      {/* ───── Highest / Lowest detail cards ───── */}
      <SectionHeader title="Top & bottom sales" />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded-md border border-border p-4">
          <div className="text-xs uppercase tracking-wide text-muted-foreground">Highest sale</div>
          <div className="mt-2 text-xl font-bold">{formatPrice(priceOf(highest))}</div>
          <div className="mt-1 text-sm">
            <WatchLink entry={highest} />
          </div>
          <div className="mt-1 text-xs text-muted-foreground">
            {highest.brand} · {highest.saleReport!.date}
          </div>
        </div>
        <div className="rounded-md border border-border p-4">
          <div className="text-xs uppercase tracking-wide text-muted-foreground">Lowest sale</div>
          <div className="mt-2 text-xl font-bold">{formatPrice(priceOf(lowest))}</div>
          <div className="mt-1 text-sm">
            <WatchLink entry={lowest} />
          </div>
          <div className="mt-1 text-xs text-muted-foreground">
            {lowest.brand} · {lowest.saleReport!.date}
          </div>
        </div>
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
          {yearRows.map((r) => (
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
          {brandRows.map((r) => (
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
    </div>
  );
}

import collectionService from "@/app/services/collectionService";

import DevOnly from "../DevOnly";
import { sourceReport } from "../ledger/ledgerSources";
import { ledgerExists, ledgerFinancials, loadMarket, loadStore } from "../ledger/ledgerStore";
import { marketView } from "../ledger/valuation";
import { loadFinancials } from "./loadSalesData";
import SalesReportDashboard, { type ReportSource } from "./SalesReportDashboard";

/**
 * The sales report, from either source: the workbook (the pipeline's last
 * `npm run sales:sync`, the default) or the back-office ledger (`?source=ledger`,
 * built at request time). Both give the same figures' shape, so every section
 * reads the same; the compare view on /admin/ledger shows where they differ.
 */
export default async function SalesReportPage({
  searchParams,
}: {
  searchParams: Promise<{ source?: string }>;
}) {
  if (process.env.NODE_ENV === "production") return <DevOnly />;

  const { source: requested } = await searchParams;
  const sold = collectionService.getSoldModels();
  // After the gate, at request time: both sources are local-only data.
  const hasLedger = ledgerExists();
  const source: ReportSource = requested === "ledger" && hasLedger ? "ledger" : "workbook";
  const workbook = source === "workbook" ? loadFinancials() : null;
  const ledger =
    source === "ledger"
      ? ledgerFinancials(
          sold.map((e) => ({
            modelFile: e.modelFile,
            price: e.saleReport!.price,
            date: e.saleReport!.date,
          })),
        )
      : null;

  if (sold.length === 0) {
    return (
      <div className="pb-24">
        <div className="mb-8 border-b border-border pb-6">
          <p className="lab">Local tool</p>
          <h1 className="mt-2 font-display text-display-m font-medium">Sales Report</h1>
        </div>
        <p className="border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
          No sold watches found.
        </p>
      </div>
    );
  }

  // Where the watches were bought: from the ledger, whichever figures are shown.
  const store = hasLedger ? loadStore()?.store : undefined;
  const sources = store ? sourceReport(store) : null;
  // Names and links for the watches its rows open onto.
  const sourceFiles = new Set(
    Object.values(sources?.watches ?? {}).flatMap((ws) =>
      ws.flatMap((w) => (w.modelFile ? [w.modelFile] : [])),
    ),
  );
  const sourceModels = Object.fromEntries(
    Object.values(collectionService.getAllCollectionItems())
      .filter((e) => sourceFiles.has(e.modelFile))
      .map((e) => [e.modelFile, { brand: e.brand, legend: e.legend }]),
  );

  // The catalogue entries of the watches kept, so their names can link to their pages.
  const financials = (source === "ledger" ? ledger?.data : workbook?.data) ?? null;
  const keptFiles = new Set(
    (financials?.kept ?? []).flatMap((k) => (k.modelFile ? [k.modelFile] : [])),
  );
  const keptModels = Object.fromEntries(
    Object.values(collectionService.getAllCollectionItems())
      .filter((e) => keptFiles.has(e.modelFile))
      .map((e) => [e.modelFile, { brand: e.brand, legend: e.legend }]),
  );

  // What the kept watches are worth on Chrono24: always from the ledger and the
  // market store (`npm run chrono24:sync`), whichever figures the report shows.
  const marketStore = store ? loadMarket() : null;
  const market =
    store && marketStore
      ? marketView(
          store,
          marketStore,
          Object.values(collectionService.getAllCollectionItems()),
          new Date().toISOString().slice(0, 10),
        )
      : null;

  return (
    <SalesReportDashboard
      sold={sold}
      financials={financials}
      stale={workbook?.stale ?? false}
      keptModels={keptModels}
      source={source}
      hasLedger={hasLedger}
      ledgerIssues={ledger?.issues ?? []}
      sources={sources}
      sourceModels={sourceModels}
      market={market}
    />
  );
}

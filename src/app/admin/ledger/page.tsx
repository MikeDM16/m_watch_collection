import collectionService from "@/app/services/collectionService";
import Link from "next/link";

import DevOnly from "../DevOnly";
import { loadFinancials } from "../sales-report/loadSalesData";
import { buildFinancials, watchSummaries } from "./buildFinancials";
import { compareFinancials, pairLines } from "./compareLedger";
import type { CompareData, LedgerView } from "./editorTypes";
import LedgerEditor from "./LedgerEditor";
import { loadSnapshot, loadStore } from "./ledgerStore";

const VIEWS: LedgerView[] = ["lines", "watches", "compare", "issues"];

/**
 * The back-office ledger: every watch's money, entered here, beside the Excel
 * workbook (which stays, and syncs with `npm run sales:sync`). Lines, watches,
 * the comparison with the workbook, and what needs a look. Local only: the
 * ledger lives in the gitignored `.ledger/` and is read after the dev gate.
 */
export default async function LedgerPage({
  searchParams,
}: {
  searchParams: Promise<{ view?: string; watch?: string }>;
}) {
  if (process.env.NODE_ENV === "production") return <DevOnly />;

  const params = await searchParams;
  const view: LedgerView = VIEWS.includes(params.view as LedgerView)
    ? (params.view as LedgerView)
    : "lines";
  const loaded = loadStore();

  const header = (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
      <div>
        <p className="lab">Local tool</p>
        <h1 className="mt-2 font-display text-display-m font-medium">Ledger</h1>
        <p className="mt-3 max-w-[66ch] text-sm leading-relaxed text-muted-foreground">
          Every watch&apos;s money, entered here: purchases (one watch or a lot), extras, payouts,
          overhead, the watches kept. It stands beside the Excel workbook; <em>Compare</em> shows
          where the two disagree after a sync. Saved in <code className="num">.ledger/</code>, on
          this machine only.
        </p>
      </div>
      <Link
        href="/admin/sales-report?source=ledger"
        className="text-sm text-muted-foreground underline-offset-4 hover:text-brand hover:underline"
      >
        Sales report from the ledger →
      </Link>
    </div>
  );

  if (!loaded) {
    return (
      <div className="pb-24">
        {header}
        <div className="border border-dashed border-border p-8 text-sm leading-relaxed text-muted-foreground">
          No ledger yet. Seed it once from the workbook:
          <ol className="mt-3 list-decimal space-y-1 pl-5">
            <li>
              <code className="font-mono text-foreground">npm run sales:sync</code>
            </li>
            <li>
              copy <code className="font-mono text-foreground">.sales/financials.json</code> to{" "}
              <code className="font-mono text-foreground">.ledger/baseline/</code>
            </li>
            <li>
              <code className="font-mono text-foreground">npm run ledger:import</code>, then{" "}
              <code className="font-mono text-foreground">npm run ledger:verify</code>
            </li>
          </ol>
        </div>
      </div>
    );
  }

  const items = Object.values(collectionService.getAllCollectionItems());
  const models = items
    .map((e) => ({
      modelFile: e.modelFile,
      brand: e.brand,
      legend: e.legend,
      sold: !!e.saleReport,
    }))
    .sort((a, b) => a.legend.localeCompare(b.legend));
  const catalogue = items.flatMap((e) =>
    e.saleReport
      ? [{ modelFile: e.modelFile, price: e.saleReport.price, date: e.saleReport.date }]
      : [],
  );
  const built = buildFinancials(loaded.store, catalogue, new Date(), {
    file: ".ledger/ledger.json",
    mtime: loaded.mtime,
    sha256: loaded.version,
  });

  let compare: CompareData | null = null;
  if (view === "compare") {
    const workbook = loadFinancials();
    const snapshot = loadSnapshot();
    const pairing = snapshot
      ? pairLines(loaded.store.lines, snapshot.lines)
      : { paired: 0, workbookOnly: [], ledgerOnly: loaded.store.lines };
    compare = {
      syncedAt: workbook?.data.generatedAt ?? null,
      stale: workbook?.stale ?? false,
      figureDiffs: workbook ? compareFinancials(workbook.data, built.financials) : [],
      ...pairing,
      workbookWatches: Object.fromEntries(
        (snapshot?.watches ?? []).map((w) => [w.id, { label: w.label, modelFile: w.modelFile }]),
      ),
      problems: snapshot?.problems ?? ["No workbook snapshot yet: run `npm run sales:sync`."],
    };
  }

  return (
    <div className="pb-24">
      {header}
      <LedgerEditor
        data={{
          store: loaded.store,
          version: loaded.version,
          view,
          watchFilter: params.watch ?? null,
          models,
          summaries: watchSummaries(loaded.store),
          issues: built.issues,
          unmatched: built.financials.unmatched,
          compare,
        }}
      />
    </div>
  );
}

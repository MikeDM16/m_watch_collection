import collectionService from "@/app/services/collectionService";

import DevOnly from "../DevOnly";
import { loadFinancials } from "./loadSalesData";
import SalesReportDashboard from "./SalesReportDashboard";

export default function SalesReportPage() {
  if (process.env.NODE_ENV === "production") return <DevOnly />;

  const sold = collectionService.getSoldModels();
  // After the gate, at request time: the sales ledger's P&L is local-only data.
  const financials = loadFinancials();

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

  return (
    <SalesReportDashboard
      sold={sold}
      financials={financials?.data ?? null}
      stale={financials?.stale ?? false}
    />
  );
}

import collectionService from "@/app/services/collectionService";

import SalesReportDashboard from "./SalesReportDashboard";

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

  return <SalesReportDashboard sold={sold} />;
}

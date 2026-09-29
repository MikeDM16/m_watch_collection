import DevOnly from "../../DevOnly";
import { loadMatches } from "../loadSalesData";
import MatchReview from "./MatchReview";

export default function SalesMatchReviewPage() {
  if (process.env.NODE_ENV === "production") return <DevOnly />;

  // After the gate, at request time: the matches hold ledger payouts and costs.
  const matches = loadMatches();

  if (!matches) {
    return (
      <div className="pb-24">
        <div className="mb-8 border-b border-border pb-6">
          <p className="lab">Local tool</p>
          <h1 className="mt-2 font-display text-display-m font-medium">Ledger matches</h1>
        </div>
        <p className="border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
          No matches yet. Run <code className="font-mono text-foreground">npm run sales:sync</code>{" "}
          first.
        </p>
      </div>
    );
  }

  return <MatchReview matches={matches} />;
}

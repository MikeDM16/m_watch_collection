"use client";

import { useState } from "react";

import type { SalesFinancials } from "../salesData.types";
import { formatMoney } from "../salesStats";
import { AdminTable, StatTile, Th } from "./primitives";

/**
 * Where every euro of the ledger went, all time: the catalogue sales with a P&L,
 * payouts no catalogue sale claimed, overhead, and money still sitting in
 * watches not sold yet. The five figures add up to the ledger's own total, and
 * every ledger section is checked against its own total when the P&L is built.
 */
export function ReconciliationPanel({ data }: { data: SalesFinancials }) {
  const [showUnlinked, setShowUnlinked] = useState(false);
  const { totals, reconciliation } = data;
  const allOk = reconciliation.ok === reconciliation.blocks;

  return (
    <div>
      <div className="grid grid-cols-2 border-l border-t border-border md:grid-cols-5">
        <StatTile
          label="Ledger total"
          value={formatMoney(totals.ledgerNet)}
          sub="profit across all tabs"
        />
        <StatTile
          label="Catalogue sales"
          value={formatMoney(totals.attributed)}
          sub="profit with a P&L above"
        />
        <StatTile
          label="Unlinked sales"
          value={formatMoney(totals.unlinked)}
          sub={`${totals.unlinkedSales.length} payouts no catalogue sale claimed`}
        />
        <StatTile
          label="Overhead"
          value={formatMoney(totals.overhead)}
          sub="boxes, straps in stock, batteries"
        />
        <StatTile
          label="In stock"
          value={formatMoney(totals.stock)}
          sub="spent on watches not sold yet"
        />
      </div>

      <p className="mt-3 text-sm text-muted-foreground">
        {allOk
          ? `All ${reconciliation.blocks} ledger sections add up to their own totals, to the cent.`
          : `${reconciliation.blocks - reconciliation.ok} of ${reconciliation.blocks} ledger sections do not add up — re-run the sync and check the build output.`}{" "}
        {/* Sliced, not locale-formatted, so the server and the browser render the same text. */}
        Synced {data.generatedAt.slice(0, 16).replace("T", " ")} UTC from {data.source.file}.
      </p>

      {totals.unlinkedSales.length > 0 && (
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setShowUnlinked(!showUnlinked)}
            aria-expanded={showUnlinked}
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            {showUnlinked ? "Hide" : "Show"} the {totals.unlinkedSales.length} unlinked sales
          </button>
          {showUnlinked && (
            <div className="mt-3">
              <AdminTable>
                <thead>
                  <tr className="border-b border-border">
                    <Th>Ledger name</Th>
                    <Th>Row</Th>
                    <Th>Received</Th>
                    <Th>Profit</Th>
                  </tr>
                </thead>
                <tbody>
                  {totals.unlinkedSales.map((s) => (
                    <tr key={s.ref} className="border-b border-border/60">
                      <td className="py-2 pr-4">{s.label}</td>
                      <td className="num py-2 pr-4 text-muted-foreground">{s.ref}</td>
                      <td className="num py-2 pr-4">{formatMoney(s.received)}</td>
                      <td className="num py-2 pr-4">{formatMoney(s.profit)}</td>
                    </tr>
                  ))}
                </tbody>
              </AdminTable>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

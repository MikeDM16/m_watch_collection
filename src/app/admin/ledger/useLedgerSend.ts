"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import type { LedgerAction } from "./ledgerActions";

export interface SendStatus {
  text: string;
  error?: boolean;
}

/**
 * Sends one change to /api/admin/ledger against the ledger version the page
 * loaded, then reloads the page's data. A refused or stale change shows why.
 */
export function useLedgerSend(version: string) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<SendStatus | null>(null);

  async function send(action: LedgerAction): Promise<boolean> {
    setBusy(true);
    setStatus(null);
    try {
      const res = await fetch("/api/admin/ledger", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...action, version }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error([json.error, json.detail].filter(Boolean).join(" "));
      setStatus({
        text: json.publicReport ? `Saved. Public sale report: ${json.publicReport}` : "Saved.",
      });
      router.refresh();
      return true;
    } catch (e) {
      setStatus({ text: e instanceof Error ? e.message : String(e), error: true });
      return false;
    } finally {
      setBusy(false);
    }
  }

  return { busy, setBusy, status, setStatus, send };
}

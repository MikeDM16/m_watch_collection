import { ActionRefused, applyAction, type LedgerAction } from "@/app/admin/ledger/ledgerActions";
import {
  loadSnapshot,
  loadStore,
  readCatalogue,
  saveStore,
  StoreConflict,
} from "@/app/admin/ledger/ledgerStore";
import { saleImageExists, saveSaleReport } from "@/app/admin/models/modelSource";
import { serial } from "@/app/admin/runScript";
import { EditInvalid } from "@/app/admin/sourceEdit";
import { NextResponse } from "next/server";

import { devOnly } from "../guard";

/**
 * The back-office ledger's write path (/admin/ledger): one change per request
 * (a line, a watch, a split, a workbook line pulled in), applied by
 * ledgerActions.ts and saved only if the ledger is still the version the page
 * loaded. Everything it touches is the gitignored, local-only `.ledger/`.
 */

const ACTIONS: LedgerAction["action"][] = [
  "save-line",
  "delete-line",
  "save-watch",
  "delete-watch",
  "split-watch",
  "pull-line",
  "record-sale",
  "record-purchase",
  "sale-report",
];

/** The public sale report for a model, once its screenshot is in the resources checkout. */
async function writePublicReport(
  modelFile: string | null,
  report: { price: number; date: string; url?: string },
  items: { modelFile: string; srcImage: string }[],
): Promise<string> {
  const entry = modelFile ? items.find((e) => e.modelFile === modelFile) : undefined;
  if (!entry) return "Not written: this watch has no catalogue model.";
  if (!saleImageExists(entry.srcImage))
    return "Not written yet: saleReport.JPG is not beside the photos in the resources checkout. Add the screenshot, then write the report from the model's Ledger panel.";
  const { changed, warnings } = await saveSaleReport(entry.modelFile, report);
  return changed
    ? `Written to the model file; the collection index was regenerated.${warnings.length ? ` ${warnings.join(" ")}` : ""}`
    : "Already in the model file.";
}

export async function POST(request: Request) {
  const blocked = devOnly();
  if (blocked) return blocked;

  let body: LedgerAction & { version?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (!ACTIONS.includes(body?.action)) {
    return NextResponse.json({ error: `Unknown action: ${String(body?.action)}` }, { status: 400 });
  }
  if (!body.version) {
    return NextResponse.json(
      { error: "Missing the ledger version the page loaded." },
      { status: 400 },
    );
  }

  try {
    const items = readCatalogue();
    if (body.action === "sale-report") {
      const publicReport = await writePublicReport(body.modelFile, body.publicReport, items);
      return NextResponse.json({ ok: true, version: body.version, publicReport });
    }

    const saved = await serial(async () => {
      const loaded = loadStore();
      if (!loaded) throw new ActionRefused("No ledger yet: run `npm run ledger:import`.");
      const models = new Set(items.map((e) => e.modelFile));
      const next = applyAction(loaded.store, body, models, loadSnapshot());
      const soldModel =
        body.action === "record-sale"
          ? (next.watches.find((w) => w.id === body.watchId)?.modelFile ?? null)
          : null;
      return { version: saveStore(next, body.version!), soldModel };
    });

    // A sale: the private side is saved; now the public sale report, which the
    // model page shows with its screenshot, so only once that screenshot exists.
    // Outside the queue above: writing the model regenerates the index through it.
    const publicReport =
      body.action === "record-sale" && body.publicReport
        ? await writePublicReport(saved.soldModel, body.publicReport, items)
        : undefined;
    return NextResponse.json({ ok: true, version: saved.version, publicReport });
  } catch (err) {
    if (err instanceof StoreConflict)
      return NextResponse.json({ error: err.message }, { status: 409 });
    if (err instanceof ActionRefused || err instanceof EditInvalid)
      return NextResponse.json({ error: err.message }, { status: 400 });
    return NextResponse.json(
      {
        error: "Saving the ledger failed.",
        detail: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    );
  }
}

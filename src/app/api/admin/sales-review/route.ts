import { execFile } from "child_process";
import fs from "fs";
import path from "path";
import { promisify } from "util";
import type {
  MatchesFile,
  MatchOverride,
  OverridesFile,
} from "@/app/admin/sales-report/salesData.types";
import { NextResponse } from "next/server";

import { devOnly } from "../guard";

/**
 * The review panel's write path (/admin/sales-report/review). Saves one match
 * decision into .sales/overrides.json, then re-runs the sales pipeline's match
 * and build steps (scripts/sales) so the page can refresh with new figures.
 * `resync` re-reads the workbook first, for when the ledger itself changed.
 *
 * Local-only like every admin route, and everything it touches lives in the
 * gitignored .sales/ folder. The scripts do the work: this route never
 * duplicates their logic, it only records the decision and runs them.
 */

const run = promisify(execFile);
const ROOT = process.cwd();
const WORK_DIR = path.join(ROOT, ".sales");
const OVERRIDES = path.join(WORK_DIR, "overrides.json");
const MATCHES = path.join(WORK_DIR, "matches.json");
const TSX_CLI = path.join(ROOT, "node_modules", "tsx", "dist", "cli.mjs");
const PYTHON = process.env.SALES_PYTHON ?? (process.platform === "win32" ? "python" : "python3");

const ACTIONS = ["confirm", "confirm-many", "assign", "none", "reset", "resync"] as const;
type Action = (typeof ACTIONS)[number];

interface ReviewRequest {
  action: Action;
  modelFile?: string;
  unit?: string;
  /** confirm-many: every sale to confirm, each with the match the page showed. */
  items?: { modelFile: string; unit: string }[];
}

// One pipeline run at a time: two quick clicks must not interleave their writes.
let chain: Promise<unknown> = Promise.resolve();
function serial<T>(task: () => Promise<T>): Promise<T> {
  const next = chain.then(task, task);
  chain = next.catch(() => undefined);
  return next;
}

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf-8")) as T;
  } catch {
    return null;
  }
}

function writeAtomic(file: string, data: unknown) {
  const tmp = `${file}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(data, null, 1));
  fs.renameSync(tmp, file);
}

async function runPipeline(reparse: boolean) {
  const steps: [string, string[]][] = [
    ...(reparse ? [[PYTHON, ["scripts/sales/1_parse_ledger.py"]] as [string, string[]]] : []),
    [process.execPath, [TSX_CLI, "scripts/sales/2_match.ts"]],
    [process.execPath, [TSX_CLI, "scripts/sales/3_build.ts"]],
  ];
  for (const [cmd, args] of steps) {
    await run(cmd, args, {
      cwd: ROOT,
      timeout: 300_000,
      maxBuffer: 16 * 1024 * 1024,
      windowsHide: true,
    });
  }
}

export async function POST(request: Request) {
  const blocked = devOnly();
  if (blocked) return blocked;

  let body: ReviewRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const { action, modelFile, unit } = body;
  if (!ACTIONS.includes(action)) {
    return NextResponse.json({ error: `Unknown action: ${String(action)}` }, { status: 400 });
  }

  const matches = readJson<MatchesFile>(MATCHES);
  if (!matches) {
    return NextResponse.json(
      { error: "No matches yet: run `npm run sales:sync` first." },
      { status: 409 },
    );
  }

  // Every change this request makes, as (sale, decision) — null decision = reset.
  const confirms =
    action === "confirm-many"
      ? (body.items ?? [])
      : action === "confirm"
        ? [{ modelFile: modelFile!, unit: unit! }]
        : [];
  if (action === "confirm-many" && (confirms.length === 0 || confirms.length > 500)) {
    return NextResponse.json({ error: "Send 1–500 sales to confirm" }, { status: 400 });
  }
  for (const c of confirms) {
    if (!c?.modelFile || !matches.byModel[c.modelFile] || !c.unit || !matches.units[c.unit]) {
      return NextResponse.json(
        { error: "Unknown catalogue sale or ledger entry" },
        { status: 400 },
      );
    }
  }
  // Confirming means "the match you showed me is right". If the matcher has
  // moved a sale since the page loaded, confirming the old entry would be a
  // decision nobody saw, so refuse and let the page refresh.
  const moved = confirms.filter((c) => matches.byModel[c.modelFile].unit !== c.unit);
  if (moved.length) {
    return NextResponse.json(
      {
        error: "Some matches changed since the page loaded. Refresh and review them again.",
        detail: moved.map((c) => matches.byModel[c.modelFile].legend).join("\n"),
      },
      { status: 409 },
    );
  }
  if (!["resync", "confirm", "confirm-many"].includes(action)) {
    if (!modelFile || !matches.byModel[modelFile]) {
      return NextResponse.json({ error: "Unknown catalogue sale" }, { status: 400 });
    }
    if (action === "assign" && (!unit || !matches.units[unit])) {
      return NextResponse.json({ error: "Unknown ledger entry" }, { status: 400 });
    }
  }

  try {
    await serial(async () => {
      if (action !== "resync") {
        const ov = readJson<OverridesFile>(OVERRIDES) ?? { version: 1, matches: {} };
        ov.matches ??= {};
        const at = new Date().toISOString();
        if (action === "reset") delete ov.matches[modelFile!];
        else if (action === "assign" || action === "none") {
          ov.matches[modelFile!] = { unit: action === "none" ? null : unit!, by: "user", at };
        } else {
          for (const c of confirms) {
            const previous = ov.matches[c.modelFile];
            const decision: MatchOverride = { unit: c.unit, by: "user", at };
            // Confirming keeps an explicit share (a payout split between two models).
            if (previous?.unit === c.unit && previous.share) decision.share = previous.share;
            ov.matches[c.modelFile] = decision;
          }
        }
        writeAtomic(OVERRIDES, ov);
      }
      // One pipeline run per request, however many sales it confirms.
      await runPipeline(action === "resync");
    });
  } catch (err) {
    const e = err as { stdout?: string; stderr?: string; message?: string };
    const tail = `${e.stdout ?? ""}\n${e.stderr ?? ""}`.trim().split("\n").slice(-12).join("\n");
    return NextResponse.json(
      { error: "The sales pipeline failed.", detail: tail || e.message },
      { status: 500 },
    );
  }

  const after = readJson<MatchesFile>(MATCHES);
  const statuses: Record<string, number> = {};
  for (const m of Object.values(after?.byModel ?? {}))
    statuses[m.status] = (statuses[m.status] ?? 0) + 1;
  return NextResponse.json({ ok: true, statuses });
}

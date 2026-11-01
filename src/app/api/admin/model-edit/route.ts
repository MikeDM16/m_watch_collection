import { saveModel, type SaveRequest } from "@/app/admin/models/modelSource";
import { EditConflict, EditInvalid } from "@/app/admin/sourceEdit";
import { NextResponse } from "next/server";

import { devOnly } from "../guard";

/** Saves the model editor's state into the model file and its collection entry. */
export async function POST(request: Request) {
  const blocked = devOnly();
  if (blocked) return blocked;

  try {
    const wanted: SaveRequest = await request.json();
    return NextResponse.json(await saveModel(wanted));
  } catch (error) {
    const e = error as { message?: string; stderr?: string };
    const message = e.stderr?.trim().split("\n").slice(-6).join("\n") || e.message || String(error);
    // 409: a file moved under the editor, reload. 400: a bad value, fix it.
    const status = error instanceof EditConflict ? 409 : error instanceof EditInvalid ? 400 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}

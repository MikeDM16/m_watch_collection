import { EditConflict, EditInvalid, type EditorEntry } from "@/app/admin/journal/journalEdit";
import { saveEntry } from "@/app/admin/journal/journalSource";
import { NextResponse } from "next/server";

import { devOnly } from "../guard";

/** Saves the caption editor's state into the entry file. */
export async function POST(request: Request) {
  const blocked = devOnly();
  if (blocked) return blocked;

  try {
    const wanted: EditorEntry = await request.json();
    return NextResponse.json(await saveEntry(wanted));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    // 409: the file moved under the editor, reload. 400: a bad value, fix it.
    const status = error instanceof EditConflict ? 409 : error instanceof EditInvalid ? 400 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}

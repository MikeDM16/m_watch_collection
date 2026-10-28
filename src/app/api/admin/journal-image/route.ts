import fs from "fs";
import path from "path";
import { RESOURCES_DIR } from "@/app/admin/journal/journalSource";
import { getImgURLForSizeType, SizeType } from "@/app/services/commonFunctions";

import { devOnly } from "../guard";

const TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

/**
 * A photo straight from the local MWatchCollectionResources checkout, for the
 * caption editor's thumbnails. The site proper reads photos from GitHub, which
 * has nothing to show until the resources repo is pushed; captioning comes
 * before that push.
 *
 * Serves the 500px variant when it exists, else the original. Only paths
 * under public/assets/Images/ that resolve inside the checkout are served.
 */
export async function GET(request: Request) {
  const blocked = devOnly();
  if (blocked) return blocked;

  const wanted = new URL(request.url).searchParams.get("path") ?? "";
  if (!wanted.startsWith("public/assets/Images/")) return new Response(null, { status: 404 });

  for (const candidate of [getImgURLForSizeType(wanted, SizeType.SLIDER), wanted]) {
    // Dev only, so nothing for the build to trace (see RESOURCES_DIR).
    const file = path.resolve(/*turbopackIgnore: true*/ RESOURCES_DIR, candidate);
    const type = TYPES[path.extname(file).toLowerCase()];
    if (!type || !file.startsWith(RESOURCES_DIR + path.sep) || !fs.existsSync(file)) continue;
    return new Response(fs.readFileSync(file), {
      headers: { "Content-Type": type, "Cache-Control": "no-store" },
    });
  }
  return new Response(null, { status: 404 });
}

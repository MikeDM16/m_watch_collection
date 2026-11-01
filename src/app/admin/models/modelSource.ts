import fs from "fs";
import path from "path";
import { getImgURLForSizeType, SizeType } from "@/app/services/commonFunctions";

import { RESOURCES_DIR } from "../resourcesDir";
import { runTsx, serial } from "../runScript";
import { EditInvalid } from "../sourceEdit";
import { brandSeries, enumKeys, listMovements, MODELS_DIR } from "./catalogue";
import {
  applyEntryEdits,
  readEntry,
  type EditorCollection,
  type EntryStatus,
} from "./collectionEntryEdit";
import {
  applyModelEdits,
  photoProblem,
  readModel,
  type EditorModel,
  type ModelCounts,
} from "./modelEdit";

/**
 * The model editor's file access. Local authoring only: every caller sits
 * behind the dev gate, and Vercel's filesystem is read-only anyway.
 *
 * Files are read with fs, never imported: an import would put them in the
 * page's module graph, and every save would recompile it.
 */

const COLLECTION_FILE = path.join(
  process.cwd(),
  "src",
  "app",
  "data",
  "admin",
  "collectionData.tsx",
);

export interface ModelSummary {
  /** `<Brand>/<File>`, as collectionData requires it and the editor addresses it. */
  file: string;
  brand: string;
  title: string;
  status: EntryStatus;
}

/** Every model file, with whether its watch is on the site. Also the list of files the editor may open. */
export function listModels(): ModelSummary[] {
  const collection = fs.readFileSync(COLLECTION_FILE, "utf-8");
  const visible = new Set(
    [...collection.matchAll(/^\s*href:\s*require\("\.\.\/watchModels\/([^"]+)"\)/gm)].map(
      (m) => m[1],
    ),
  );
  return fs
    .readdirSync(MODELS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .flatMap((d) =>
      fs
        .readdirSync(path.join(MODELS_DIR, d.name))
        .filter((f) => f.endsWith(".tsx") && !f.includes("BrandSeries"))
        .map((f) => {
          const file = `${d.name}/${f.replace(/\.tsx$/, "")}`;
          const text = fs.readFileSync(path.join(MODELS_DIR, d.name, f), "utf-8");
          const title = /\btitle:\s*("(?:[^"\\]|\\.)*")/.exec(text);
          return {
            file,
            brand: d.name,
            title: title ? (JSON.parse(title[1]) as string) : file,
            status: visible.has(file) ? "visible" : readEntry(collection, file).status,
          } satisfies ModelSummary;
        }),
    );
}

/** `<Brand>/<File>` → its path, for a model file and nothing else under the data folder. */
function modelPath(file: string): string {
  const parts = file.split("/");
  const full = path.join(MODELS_DIR, `${file}.tsx`);
  const ok =
    parts.length === 2 &&
    parts.every((p) => /^[\p{L}\p{N}_ .'()-]+$/u.test(p) && p !== "." && p !== "..") &&
    !parts[1].includes("BrandSeries") &&
    full.startsWith(MODELS_DIR + path.sep) &&
    fs.existsSync(full);
  if (!ok) throw new EditInvalid(`Not a model file: "${file}"`);
  return full;
}

/** A path under the resources checkout, or null if it would leave it. */
function local(src: string): string | null {
  const file = path.resolve(/*turbopackIgnore: true*/ RESOURCES_DIR, src);
  return file.startsWith(RESOURCES_DIR + path.sep) ? file : null;
}

const exists = (src: string) => {
  const file = local(src);
  return !!file && fs.existsSync(file);
};

export interface PhotoInfo {
  /** In the local resources checkout. */
  exists: boolean;
  /** Its size variants are made (the site shows nothing without them). */
  variants: boolean;
}

export interface LoadedModel {
  model: EditorModel;
  collection: EditorCollection;
  brand: string;
  /** The watch's photo folder, `public/assets/Images/<Brand>/<Folder>`, if one is known. */
  folder: string | null;
  /** Whether that folder is in the resources checkout. */
  folderFound: boolean;
  /** Photos in the folder that are not in the gallery. */
  unlisted: { src: string; commented: boolean }[];
  photos: Record<string, PhotoInfo>;
}

/** The folder the watch's own photos live in. */
function photoFolder(model: EditorModel, collection: EditorCollection): string | null {
  const dir = (src: string) => src.split("/").slice(0, -1).join("/");
  const own = (src: string) =>
    src.startsWith("public/assets/Images/") && !src.includes("/Journals/");
  if (own(collection.cover)) return dir(collection.cover);
  if (collection.noteFolder?.includes("Images/")) {
    return `public/assets/Images/${collection.noteFolder.split("Images/").slice(1).join("Images/")}`;
  }
  const counts = new Map<string, number>();
  for (const p of model.photos.filter((p) => own(p.src))) {
    counts.set(dir(p.src), (counts.get(dir(p.src)) ?? 0) + 1);
  }
  return [...counts].sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
}

export function loadModel(file: string): LoadedModel {
  const model: EditorModel = {
    ...readModel(fs.readFileSync(modelPath(file), "utf-8")),
    file,
  };
  const collection = readEntry(fs.readFileSync(COLLECTION_FILE, "utf-8"), file);
  const folder = photoFolder(model, collection);
  const folderDir = folder && local(folder);
  const folderFound = !!folderDir && fs.existsSync(folderDir);

  const listed = new Set(model.photos.map((p) => p.src));
  const unlisted = folderFound
    ? fs
        .readdirSync(folderDir!)
        .map((name) => `${folder}/${name}`)
        .filter((src) => !listed.has(src) && !photoProblem(src))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        .map((src) => ({ src, commented: model.commented.includes(src) }))
    : [];

  const photos: Record<string, PhotoInfo> = {};
  for (const src of [
    ...listed,
    ...unlisted.map((u) => u.src),
    collection.cover,
    collection.hover,
  ]) {
    if (!src || photos[src]) continue;
    photos[src] = {
      exists: exists(src),
      variants: exists(getImgURLForSizeType(src, SizeType.GALLERY)),
    };
  }

  return { model, collection, brand: file.split("/")[0], folder, folderFound, unlisted, photos };
}

export interface SaveRequest {
  model: EditorModel;
  collection: EditorCollection;
}

export interface SaveResult {
  counts: ModelCounts;
  /** Collection entry fields changed. */
  entry: number;
  published: boolean;
  regenerated: boolean;
  /** What generate-index warned about, if anything. */
  warnings: string[];
  /** Photos kept in the gallery that have no size variants yet. */
  noVariants: number;
  loaded: LoadedModel;
}

export async function saveModel(wanted: SaveRequest): Promise<SaveResult> {
  const file = wanted.model.file;
  if (!file) throw new EditInvalid("Which model file? Reload the page.");
  const filepath = modelPath(file);
  const brand = file.split("/")[0];
  const series = brandSeries(brand);

  const movements: Record<string, string> = {};
  for (const m of listMovements()) movements[m.path] = m.keys[0];

  // Both files are worked out before either is written, so a refused entry
  // edit leaves the model file as it was too.
  const modelBefore = fs.readFileSync(filepath, "utf-8");
  const model = await applyModelEdits(
    modelBefore,
    wanted.model,
    {
      enumKeys: enumKeys(),
      series: series && { name: series.name, refs: series.options.map((o) => o.value) },
      movements,
    },
    filepath,
  );

  const kept = wanted.model.photos.filter((p) => !p.removed).map((p) => p.src);
  const removed = wanted.model.photos.filter((p) => p.removed).map((p) => p.src);
  const collectionBefore = fs.readFileSync(COLLECTION_FILE, "utf-8");
  const entry = await applyEntryEdits(
    collectionBefore,
    file,
    wanted.collection,
    { typeKeys: enumKeys().WatchTypeEnum, kept, removed, exists },
    COLLECTION_FILE,
  );

  if (model.text !== modelBefore) fs.writeFileSync(filepath, model.text, "utf-8");
  if (entry.text !== collectionBefore) fs.writeFileSync(COLLECTION_FILE, entry.text, "utf-8");

  // The index copies the series, the movement title and everything in the
  // collection entry; the model page reads the rest from the model file.
  const regenerate =
    entry.text !== collectionBefore || (model.indexed && model.text !== modelBefore);
  let warnings: string[] = [];
  if (regenerate) {
    const { stdout, stderr } = await serial(() => runTsx("scripts/generate-collection-index.ts"));
    warnings = `${stderr}\n${stdout}`
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => /warn|different|No modelFile/i.test(l));
  }

  const loaded = loadModel(file);
  return {
    counts: model.counts,
    entry: entry.changed,
    published: entry.published,
    regenerated: regenerate,
    warnings,
    noVariants: loaded.model.photos.filter((p) => !loaded.photos[p.src]?.variants).length,
    loaded,
  };
}

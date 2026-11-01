import ts from "typescript";

import {
  applyTextEdits,
  EditConflict,
  EditInvalid,
  parse,
  prop,
  setFields,
  type FieldValue,
  type Obj,
} from "../sourceEdit";

/**
 * A watch's entry in src/app/data/admin/collectionData.tsx: what puts it on the
 * site (its legend, year, type, tile photos and flags). Edited like the model
 * file, in place, through ../sourceEdit.
 *
 * A watch added before its photos has its entry commented out behind a
 * `// Hidden until photos are added (…)` note (the add-watches template).
 * Publishing it uncomments that block.
 */

export type EntryStatus = "visible" | "hidden" | "unregistered";

export interface EditorCollection {
  status: EntryStatus;
  legend: string;
  year: number;
  /** A WatchTypeEnum key. */
  type: string;
  special: boolean;
  /** collectionSet: shown, not edited. */
  set: boolean;
  /** srcImage: the hero on the model page, and the tile. */
  cover: string;
  /** hoverSrc: the tile's second photo. */
  hover: string;
  /** The entry's source as loaded: a save against another version is refused. */
  source: string;
  /** A hidden entry's photo folder, from its note. */
  noteFolder?: string;
  /** Show a hidden watch on the site with this save. */
  publish?: boolean;
}

const ORDER = [
  "brand",
  "legend",
  "year",
  "type",
  "srcImage",
  "hoverSrc",
  "href",
  "specialCollectionItem",
  "collectionSet",
];

const HIDDEN_NOTE = /^\s*\/\/\s*Hidden until photos are added \((.*)\)\s*$/;

/** The entry object whose `href` requires this model file. */
function visibleEntry(source: ts.SourceFile, db: Obj, file: string) {
  const wanted = `../watchModels/${file}`;
  return db.properties.find((p): p is ts.PropertyAssignment => {
    if (!ts.isPropertyAssignment(p) || !ts.isObjectLiteralExpression(p.initializer)) return false;
    const href = prop(p.initializer, "href")?.initializer;
    return (
      !!href &&
      ts.isCallExpression(href) &&
      href.arguments.length === 1 &&
      ts.isStringLiteralLike(href.arguments[0]) &&
      href.arguments[0].text === wanted
    );
  });
}

/**
 * A hidden block, by line: the note (if any), `// "<legend>": {` and the first
 * `// },` after it, around a commented `require` of this model file.
 */
function hiddenBlock(text: string, file: string) {
  const lines = text.split("\n");
  const at = lines.findIndex(
    (l) => /^\s*\/\//.test(l) && l.includes(`require("../watchModels/${file}")`),
  );
  if (at < 0) return null;
  let start = at;
  while (start > 0 && !/^\s*\/\/\s*"[^"]+":\s*\{\s*$/.test(lines[start])) start--;
  let end = at;
  while (end < lines.length - 1 && !/^\s*\/\/\s*\},?\s*$/.test(lines[end])) end++;
  if (
    !/^\s*\/\/\s*"[^"]+":\s*\{\s*$/.test(lines[start]) ||
    !/^\s*\/\/\s*\},?\s*$/.test(lines[end])
  ) {
    return null;
  }
  for (let i = start; i <= end; i++) if (!/^\s*\/\//.test(lines[i])) return null;
  const note = start > 0 && HIDDEN_NOTE.test(lines[start - 1]) ? start - 1 : null;
  return { lines, note, start, end };
}

const uncomment = (line: string) => line.replace(/^(\s*)\/\/ ?/, "$1");

function readObject(obj: Obj, source: ts.SourceFile) {
  const s = (name: string) => {
    const init = prop(obj, name)?.initializer;
    return init && ts.isStringLiteralLike(init) ? init.text : "";
  };
  const flag = (name: string) => prop(obj, name)?.initializer.kind === ts.SyntaxKind.TrueKeyword;
  const year = prop(obj, "year")?.initializer;
  const type = prop(obj, "type")?.initializer;
  return {
    legend: s("legend"),
    year: year && ts.isNumericLiteral(year) ? Number(year.text) : 0,
    type:
      type && ts.isPropertyAccessExpression(type) ? type.name.text : (type?.getText(source) ?? ""),
    special: flag("specialCollectionItem"),
    set: flag("collectionSet"),
    cover: s("srcImage"),
    hover: s("hoverSrc"),
  };
}

/** The model's entry, as the editor shows it. */
export function readEntry(text: string, file: string): EditorCollection {
  const { source, obj: db } = parse(text, "CollectionItemsDB");
  const found = visibleEntry(source, db, file);
  if (found) {
    return {
      status: "visible",
      ...readObject(found.initializer as Obj, source),
      source: found.getText(source),
    };
  }
  const block = hiddenBlock(text, file);
  if (block) {
    const body = block.lines
      .slice(block.start, block.end + 1)
      .map(uncomment)
      .join("\n");
    const { source: s, obj } = parse(`const entry = {\n${body}\n};`, "entry");
    const inner = obj.properties[0];
    if (
      inner &&
      ts.isPropertyAssignment(inner) &&
      ts.isObjectLiteralExpression(inner.initializer)
    ) {
      const from = block.note ?? block.start;
      return {
        status: "hidden",
        ...readObject(inner.initializer, s),
        source: block.lines.slice(from, block.end + 1).join("\n"),
        noteFolder: block.note === null ? undefined : HIDDEN_NOTE.exec(block.lines[block.note])![1],
      };
    }
  }
  return {
    status: "unregistered",
    legend: "",
    year: 0,
    type: "",
    special: false,
    set: false,
    cover: "",
    hover: "",
    source: "",
  };
}

export interface EntryContext {
  /** WatchTypeEnum keys. */
  typeKeys: string[];
  /** The gallery as it will be saved, and the photos this save takes out of it. */
  kept: string[];
  removed: string[];
  /** Whether a photo is in the local resources checkout. */
  exists: (src: string) => boolean;
}

/**
 * Applies the editor's state to collectionData.tsx. Returns the new source,
 * formatted, and how many fields changed (0: the file is returned untouched).
 */
export async function applyEntryEdits(
  text: string,
  file: string,
  wanted: EditorCollection,
  ctx: EntryContext,
  filepath: string,
): Promise<{ text: string; changed: number; published: boolean }> {
  const before = readEntry(text, file);
  if (before.source !== wanted.source || before.status !== wanted.status) {
    throw new EditConflict(
      "This watch's collection entry changed since this page loaded. Reload it.",
    );
  }

  const fields = (["year", "type", "special", "cover", "hover"] as const).filter(
    (k) => wanted[k] !== before[k],
  );
  const publish = before.status === "hidden" && !!wanted.publish;
  if (before.status === "unregistered" || (before.status === "hidden" && !publish)) {
    if (fields.length) {
      throw new EditInvalid(
        before.status === "hidden"
          ? "Show the watch on the site to change its collection entry."
          : "This model has no collection entry to change.",
      );
    }
    return { text, changed: 0, published: false };
  }

  // The tile photos must be photos the watch keeps.
  const gone = (src: string) => ctx.removed.includes(src) && !ctx.kept.includes(src);
  if (gone(wanted.cover))
    throw new EditInvalid("The cover is marked for removal. Pick another cover first.");
  if (wanted.hover && gone(wanted.hover)) {
    throw new EditInvalid("The hover photo is marked for removal. Pick another one first.");
  }
  for (const [name, src, changed] of [
    ["cover", wanted.cover, fields.includes("cover")],
    ["hover photo", wanted.hover, fields.includes("hover")],
  ] as const) {
    if ((changed || publish) && !ctx.kept.includes(src)) {
      throw new EditInvalid(`Pick a ${name} from the watch's photographs.`);
    }
    if (publish && !ctx.exists(src)) {
      throw new EditInvalid(
        `The ${name} ${src.split("/").pop()} is not in the resources checkout.`,
      );
    }
  }
  if (!Number.isInteger(wanted.year) || wanted.year < 1800 || wanted.year > 2100) {
    throw new EditInvalid(`Not a year: ${wanted.year}`);
  }
  if (!ctx.typeKeys.includes(wanted.type))
    throw new EditInvalid(`Not in WatchTypeEnum: ${wanted.type}`);
  if (!fields.length && !publish) return { text, changed: 0, published: false };

  // Publishing: uncomment the block as text first, then edit it like any other.
  let current = text;
  if (publish) {
    const block = hiddenBlock(text, file)!;
    const lines = [...block.lines];
    for (let i = block.start; i <= block.end; i++) lines[i] = uncomment(lines[i]);
    if (block.note !== null) lines.splice(block.note, 1);
    current = lines.join("\n");
  }

  const { source, obj: db } = parse(current, "CollectionItemsDB");
  const entry = visibleEntry(source, db, file);
  if (!entry)
    throw new EditInvalid("The collection entry could not be found after uncommenting it.");
  const values: Record<string, FieldValue> = {};
  if (fields.includes("year")) values.year = { raw: String(wanted.year) };
  if (fields.includes("type")) values.type = { raw: `WatchTypeEnum.${wanted.type}` };
  if (fields.includes("cover")) values.srcImage = wanted.cover;
  if (fields.includes("hover")) values.hoverSrc = wanted.hover || undefined;
  if (fields.includes("special")) values.specialCollectionItem = { raw: String(wanted.special) };
  const edits = setFields(source, entry.initializer as Obj, ORDER, values);

  return {
    text: await applyTextEdits(current, edits, filepath),
    changed: fields.length,
    published: publish,
  };
}

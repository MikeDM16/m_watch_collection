import { createHash } from "crypto";
import ts from "typescript";

import {
  applyTextEdits,
  EditConflict,
  EditInvalid,
  objectAt,
  parse,
  prop,
  rebuildArray,
  type ArrayItem,
  type Edit,
  type Obj,
} from "../sourceEdit";
import { enumModule, FIELDS } from "./fieldSchema";

export { EditConflict, EditInvalid };

/**
 * Reads and edits a watch model file (src/app/data/watchModels/<Brand>/*.tsx)
 * as source, through ../sourceEdit: every value is changed in place, so an
 * untouched field, and an untouched file, come back byte for byte.
 */

/** A field as the file has it. `raw` is anything else, kept and shown as is. */
export type FieldValue =
  | { kind: "enum"; keys: string[] }
  | { kind: "text"; text: string }
  | { kind: "raw"; source: string };

/** The series: a key path into the brand's `*BrandSeries` (`SPEEDMASTER.RACING`), or text. */
export type SeriesValue =
  | { kind: "series"; ref: string }
  | { kind: "text"; text: string }
  | { kind: "raw"; source: string };

/** The movement, by the path of the file it is imported from (`Omega/OMEGA_3220_47J`). */
export type MovementValue = { kind: "import"; path: string } | { kind: "inline"; title: string };

export type FeatureValue = { enum: string } | { text: string } | { raw: string };

export interface ModelFeature {
  /** Its place in the file as loaded; null for one added in the editor. */
  at: number | null;
  value: FeatureValue;
}

export interface ModelPhoto {
  /** The editor's handle on the photo: `#<at>` as loaded, `+<src>` once added. */
  id: string;
  /** Its place in `sliderImages` as loaded (paths repeat, so this is the identity); null when added. */
  at: number | null;
  src: string;
  removed?: boolean;
}

/** The editable state of a model file, as the editor shows it and sends it back. */
export interface EditorModel {
  /** `<Brand>/<File>`, set by the loader; saves go there. */
  file?: string;
  /** The file's text hash when loaded: a save against another version is refused. */
  version: string;
  title: string;
  series: SeriesValue;
  /** By FIELDS path. */
  fields: Record<string, FieldValue>;
  features: ModelFeature[];
  movement: MovementValue;
  photos: ModelPhoto[];
  /** Photo paths that sit in comments inside `sliderImages`. */
  commented: string[];
  saleReport: { price: number; date: string; url?: string } | null;
}

export interface ModelCounts {
  fields: number;
  features: number;
  moved: number;
  removed: number;
  added: number;
}

/** What a save needs to know beyond the file: the valid choices. */
export interface ModelContext {
  /** Enum name → its keys, in declaration order. */
  enumKeys: Record<string, string[]>;
  /** The brand's series object (`OmegaBrandSeries`) and its key paths, if it has one. */
  series: { name: string; refs: string[] } | null;
  /** Movement file path (`Omega/OMEGA_3220_47J`) → its MovementsDataDB key. */
  movements: Record<string, string>;
}

const hash = (text: string) => createHash("sha1").update(text).digest("hex");

/** `A.B.C` → ["A", "B", "C"], else null. */
function chain(node: ts.Expression): string[] | null {
  if (ts.isIdentifier(node)) return [node.text];
  if (ts.isPropertyAccessExpression(node) && ts.isIdentifier(node.name)) {
    const head = chain(node.expression);
    return head && [...head, node.name.text];
  }
  return null;
}

/** `X.A + X.B` → its terms, else [node]. */
function terms(node: ts.Expression): ts.Expression[] {
  if (ts.isParenthesizedExpression(node)) return terms(node.expression);
  if (ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.PlusToken) {
    return [...terms(node.left), ...terms(node.right)];
  }
  return [node];
}

function readField(source: ts.SourceFile, init: ts.Expression, enumName?: string): FieldValue {
  if (ts.isStringLiteralLike(init)) return { kind: "text", text: init.text };
  if (enumName) {
    const keys = terms(init).map((t) => chain(t));
    if (keys.every((k) => k?.length === 2 && k[0] === enumName)) {
      return { kind: "enum", keys: keys.map((k) => k![1]) };
    }
  }
  return { kind: "raw", source: init.getText(source) };
}

function readFeature(source: ts.SourceFile, el: ts.Expression): FeatureValue {
  if (ts.isStringLiteralLike(el)) return { text: el.text };
  const ref = chain(el);
  if (ref?.length === 2 && ref[0] === "featuresEnum") return { enum: ref[1] };
  return { raw: el.getText(source) };
}

const sameValue = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

interface Imports {
  /** Local name → its declaration and the module it imports. */
  byName: Map<string, { decl: ts.ImportDeclaration; from: string }>;
  last?: ts.ImportDeclaration;
}

function readImports(source: ts.SourceFile): Imports {
  const byName = new Map<string, { decl: ts.ImportDeclaration; from: string }>();
  let last: ts.ImportDeclaration | undefined;
  for (const st of source.statements) {
    if (!ts.isImportDeclaration(st)) continue;
    last = st;
    const from = (st.moduleSpecifier as ts.StringLiteral).text;
    const clause = st.importClause;
    if (clause?.name) byName.set(clause.name.text, { decl: st, from });
    const named = clause?.namedBindings;
    if (named && ts.isNamedImports(named)) {
      for (const el of named.elements) byName.set(el.name.text, { decl: st, from });
    }
  }
  return { byName, last };
}

/** Where the model's parts are, or why the file is not one the editor can work on. */
function locate(text: string) {
  const { source, obj: details } = parse(text, "details");
  const tech = objectAt(details, "technicalData");
  if (!tech) throw new EditInvalid("No `technicalData` in this model file.");
  const photos = prop(details, "sliderImages")?.initializer;
  if (!photos || !ts.isArrayLiteralExpression(photos)) {
    throw new EditInvalid("No `sliderImages: [ … ]` in this model file.");
  }
  const features = prop(tech, "features")?.initializer;
  return {
    source,
    details,
    tech,
    photos,
    features: features && ts.isArrayLiteralExpression(features) ? features : undefined,
    imports: readImports(source),
  };
}

function fieldNode(tech: Obj, path: string) {
  const [group, name] = path.split(".");
  const owner = objectAt(tech, group);
  return { owner, node: owner && prop(owner, name) };
}

/** The model as the editor needs it: plain values, photos tagged with their place. */
export function readModel(text: string): EditorModel {
  const { source, details, tech, photos, features, imports } = locate(text);

  const fields: Record<string, FieldValue> = {};
  for (const f of FIELDS) {
    const { node } = fieldNode(tech, f.path);
    fields[f.path] = node
      ? readField(source, node.initializer, f.enumName)
      : { kind: "text", text: "" };
  }

  const seriesInit = fieldNode(tech, "information.series").node?.initializer;
  const seriesRef = seriesInit && chain(seriesInit);
  const series: SeriesValue = !seriesInit
    ? { kind: "text", text: "" }
    : ts.isStringLiteralLike(seriesInit)
      ? { kind: "text", text: seriesInit.text }
      : seriesRef && seriesRef.length > 1 && seriesRef[0].endsWith("BrandSeries")
        ? { kind: "series", ref: seriesRef.slice(1).join(".") }
        : { kind: "raw", source: seriesInit.getText(source) };

  const movementInit = prop(tech, "movement")?.initializer;
  const movementName = movementInit && ts.isIdentifier(movementInit) ? movementInit.text : null;
  const movementModule = movementName && imports.byName.get(movementName)?.from;
  const movement: MovementValue =
    movementModule && movementModule.startsWith("../../movements/")
      ? { kind: "import", path: movementModule.slice("../../movements/".length) }
      : {
          kind: "inline",
          title:
            movementInit && ts.isObjectLiteralExpression(movementInit)
              ? ((prop(movementInit, "title")?.initializer as ts.StringLiteral | undefined)?.text ??
                "")
              : (movementInit?.getText(source) ?? ""),
        };

  // Paths in comments between the photos: commented-out ones, so the folder
  // listing can tell them apart from photos never listed.
  let between = text.slice(photos.getStart(source), photos.end);
  for (const el of [...photos.elements].reverse()) {
    const from = el.getStart(source) - photos.getStart(source);
    between = between.slice(0, from) + between.slice(from + el.getWidth(source));
  }
  const commented = [...between.matchAll(/public\/assets\/Images\/[^"'\s*]+/g)].map((m) => m[0]);

  const sale = objectAt(details, "saleReport");
  const saleText = (name: string) => {
    const init = sale && prop(sale, name)?.initializer;
    return init && ts.isStringLiteralLike(init) ? init.text : undefined;
  };
  const price = sale && prop(sale, "price")?.initializer;

  return {
    version: hash(text),
    title: (() => {
      const init = prop(details, "title")?.initializer;
      return init && ts.isStringLiteralLike(init) ? init.text : "";
    })(),
    series,
    fields,
    features: (features?.elements ?? []).map((el, at) => ({ at, value: readFeature(source, el) })),
    movement,
    photos: photos.elements.map((el, at) => ({
      id: `#${at}`,
      at,
      src: ts.isStringLiteralLike(el) ? el.text : el.getText(source),
    })),
    commented,
    saleReport: sale
      ? {
          price: price && ts.isNumericLiteral(price) ? Number(price.text) : 0,
          date: saleText("date") ?? "",
          url: saleText("url"),
        }
      : null,
  };
}

/** The rules 3_list_images.py lists photos by: an original, under Images/, one dot, upper-case type. */
export function photoProblem(src: string): string | null {
  if (!src.startsWith("public/assets/Images/")) return "is not under public/assets/Images/";
  const name = src.split("/").pop() ?? "";
  if (name.split(".").length !== 2) return "has more than one dot in its name";
  if (!/\.(JPG|JPEG|PNG)$/.test(name)) return "is not a .JPG, .JPEG or .PNG";
  if (/_\d+x\d+\./.test(name)) return "is a size variant, not the original";
  if (/^saleReport\./i.test(name)) return "is the sale report image";
  return null;
}

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;

/** The save message's account of what changed. */
export function describeModel(counts: ModelCounts): string[] {
  return [
    counts.moved && `${plural(counts.moved, "photo")} moved`,
    counts.removed && `${counts.removed} removed`,
    counts.added && `${counts.added} added`,
    counts.features && plural(counts.features, "feature change"),
    counts.fields && plural(counts.fields, "field"),
  ].filter((p): p is string => Boolean(p));
}

/**
 * Applies the editor's state to the model's source and returns the new source,
 * formatted, with what changed and whether the collection index reads any of
 * it (the series and the movement are copied into it).
 */
export async function applyModelEdits(
  text: string,
  wanted: EditorModel,
  ctx: ModelContext,
  filepath: string,
): Promise<{ text: string; counts: ModelCounts; indexed: boolean }> {
  if (wanted.version !== hash(text)) {
    throw new EditConflict("The model file changed since this page loaded. Reload it.");
  }
  const { source, details, tech, photos, features, imports } = locate(text);
  const before = readModel(text);
  const counts: ModelCounts = { fields: 0, features: 0, moved: 0, removed: 0, added: 0 };
  const edits: Edit[] = [];
  const needs = new Map<string, string>(); // import name → its module, when missing
  let indexed = false;

  const replace = (node: ts.Node, value: string) =>
    edits.push({ start: node.getStart(source), end: node.end, text: value });

  const enumText = (name: string, keys: string[], multi?: boolean) => {
    const known = ctx.enumKeys[name] ?? [];
    const unknown = keys.filter((k) => !known.includes(k));
    if (unknown.length) throw new EditInvalid(`Not in ${name}: ${unknown.join(", ")}`);
    if (!keys.length || (!multi && keys.length > 1)) {
      throw new EditInvalid(`${name} needs ${multi ? "at least one value" : "one value"}.`);
    }
    if (!imports.byName.has(name)) needs.set(name, enumModule(name));
    // The second value of a join is a suffix of the first: declaration order.
    return [...new Set(keys)]
      .sort((a, b) => known.indexOf(a) - known.indexOf(b))
      .map((k) => `${name}.${k}`)
      .join(" + ");
  };

  // ── Title and the spec fields ──
  const title = wanted.title.trim();
  if (!title) throw new EditInvalid("The model needs a title.");
  if (title !== before.title) {
    replace(prop(details, "title")!.initializer, JSON.stringify(title));
    counts.fields++;
  }

  for (const f of FIELDS) {
    const known = ctx.enumKeys[f.enumName ?? ""] ?? [];
    const asWritten = (v: FieldValue | undefined): FieldValue | undefined =>
      v?.kind === "enum"
        ? { kind: "enum", keys: [...v.keys].sort((a, b) => known.indexOf(a) - known.indexOf(b)) }
        : v;
    // Picked in another order is the same value: a join is written in declaration order.
    const want = asWritten(wanted.fields[f.path]);
    const was = before.fields[f.path];
    if (!want || sameValue(want, asWritten(was))) continue;
    if (f.readOnly || want.kind === "raw" || was.kind === "raw") {
      throw new EditInvalid(`${f.label} can't be changed here.`);
    }
    const node = fieldNode(tech, f.path).node;
    if (!node) throw new EditInvalid(`${f.label} is missing from this model file.`);
    if (want.kind === "enum") replace(node.initializer, enumText(f.enumName!, want.keys, f.multi));
    else {
      if (!want.text.trim()) throw new EditInvalid(`${f.label} can't be empty.`);
      replace(node.initializer, JSON.stringify(want.text.trim()));
    }
    counts.fields++;
  }

  // ── Series ──
  if (!sameValue(wanted.series, before.series)) {
    const node = fieldNode(tech, "information.series").node;
    if (!node || wanted.series.kind === "raw" || before.series.kind === "raw") {
      throw new EditInvalid("The series can't be changed here.");
    }
    if (wanted.series.kind === "series") {
      if (!ctx.series || !ctx.series.refs.includes(wanted.series.ref)) {
        throw new EditInvalid(`Not a series of this brand: ${wanted.series.ref}`);
      }
      if (!imports.byName.has(ctx.series.name)) needs.set(ctx.series.name, `./${ctx.series.name}`);
      replace(node.initializer, `${ctx.series.name}.${wanted.series.ref}`);
    } else {
      if (!wanted.series.text.trim()) throw new EditInvalid("The series can't be empty.");
      replace(node.initializer, JSON.stringify(wanted.series.text.trim()));
    }
    counts.fields++;
    indexed = true;
  }

  // ── Movement: the import and the field, together ──
  if (!sameValue(wanted.movement, before.movement)) {
    if (wanted.movement.kind !== "import" || before.movement.kind !== "import") {
      throw new EditInvalid("This model's movement is written into the file; edit it there.");
    }
    const key = ctx.movements[wanted.movement.path];
    if (!key) throw new EditInvalid(`Not in the movement database: ${wanted.movement.path}`);
    const ident = `movement_${key}`;
    const init = prop(tech, "movement")!.initializer as ts.Identifier;
    const decl = imports.byName.get(init.text)!.decl;
    replace(decl, `import ${ident} from "../../movements/${wanted.movement.path}";`);
    replace(init, ident);
    counts.fields++;
    indexed = true;
  }

  // ── Features ──
  const fNow = wanted.features;
  const fChanged =
    fNow.length !== before.features.length || fNow.some((f, i) => f.at !== i || f.at === null);
  if (fChanged) {
    if (!features) throw new EditInvalid("No `features: [ … ]` in this model file.");
    const items: ArrayItem[] = fNow.map((f) => {
      if (f.at !== null) {
        const node = features.elements[f.at];
        if (!node || !sameValue(before.features[f.at]?.value, f.value)) {
          throw new EditConflict("The model file changed since this page loaded. Reload it.");
        }
        return { node };
      }
      if ("enum" in f.value) {
        if (!ctx.enumKeys.featuresEnum?.includes(f.value.enum)) {
          throw new EditInvalid(`Not in featuresEnum: ${f.value.enum}`);
        }
        return { body: `featuresEnum.${f.value.enum}` };
      }
      if ("text" in f.value && f.value.text.trim())
        return { body: JSON.stringify(f.value.text.trim()) };
      throw new EditInvalid("A feature can't be empty.");
    });
    if (
      fNow.some((f) => f.at === null && "enum" in f.value) &&
      !imports.byName.has("featuresEnum")
    ) {
      needs.set("featuresEnum", enumModule("featuresEnum"));
    }
    edits.push(rebuildArray(text, source, features, items));
    // Added, dropped, and kept ones now out of their old relative order.
    const kept = fNow.filter((f) => f.at !== null).map((f) => f.at!);
    const inOrder = [...kept].sort((x, y) => x - y);
    counts.features =
      fNow.length -
      kept.length +
      (before.features.length - kept.length) +
      kept.filter((at, i) => at !== inOrder[i]).length;
  }

  // ── Photos ──
  const loaded = wanted.photos.filter((p) => p.at !== null).map((p) => p.at!);
  const complete =
    loaded.length === photos.elements.length &&
    new Set(loaded).size === loaded.length &&
    loaded.every((at) => before.photos[at]?.src === wanted.photos.find((p) => p.at === at)!.src);
  if (!complete)
    throw new EditConflict("The model file changed since this page loaded. Reload it.");
  const keep = wanted.photos.filter((p) => !p.removed);
  if (!keep.length) throw new EditInvalid("That would leave the watch with no photographs.");
  for (const p of keep.filter((p) => p.at === null)) {
    const problem = photoProblem(p.src);
    if (problem) throw new EditInvalid(`${p.src.split("/").pop()} ${problem}.`);
  }
  const order = keep.filter((p) => p.at !== null).map((p) => p.at!);
  const sorted = [...order].sort((a, b) => a - b);
  counts.moved = order.filter((at, i) => at !== sorted[i]).length;
  counts.removed = loaded.length - order.length;
  counts.added = keep.length - order.length;
  if (counts.moved || counts.removed || counts.added) {
    const items = keep.map((p) =>
      p.at !== null ? { node: photos.elements[p.at] } : { body: JSON.stringify(p.src) },
    );
    edits.push(rebuildArray(text, source, photos, items));
  }

  if (!edits.length) return { text, counts, indexed };

  // Missing imports go after the last one; prettier's import sorting puts them in place.
  if (needs.size) {
    const at = imports.last ? imports.last.end : 0;
    const lines = [...needs].map(([name, from]) => `import { ${name} } from "${from}";`);
    edits.push({
      start: at,
      end: at,
      text: lines
        .map(
          (l) => `
${l}`,
        )
        .join(""),
    });
  }

  let out = await applyTextEdits(text, edits, filepath);
  // A series written as text no longer needs the brand's series import.
  if (ctx.series && before.series.kind === "series" && wanted.series.kind === "text") {
    out = await applyTextEdits(out, unusedImport(out, ctx.series.name), filepath);
  }
  return { text: out, counts, indexed };
}

/** The edit that drops `name`'s import, when nothing else in the file uses it. */
function unusedImport(text: string, name: string): Edit[] {
  const source = ts.createSourceFile(
    "data.ts",
    text,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  const { byName } = readImports(source);
  const found = byName.get(name);
  if (!found) return [];
  let uses = 0;
  source.forEachChild(function visit(node) {
    if (ts.isImportDeclaration(node)) return;
    if (ts.isIdentifier(node) && node.text === name) uses++;
    node.forEachChild(visit);
  });
  if (uses) return [];
  const { decl } = found;
  const named = decl.importClause?.namedBindings;
  const alone =
    !decl.importClause?.name && named && ts.isNamedImports(named) && named.elements.length === 1;
  if (!alone) return [];
  let end = decl.end;
  if (text[end] === "\r") end++;
  if (text[end] === "\n") end++;
  return [{ start: decl.getStart(source), end, text: "" }];
}

import prettier from "prettier";
import ts from "typescript";

/**
 * Editing a data file as source, through the TypeScript AST, for the local
 * authoring tools (the Journal caption editor and the watch model editor).
 *
 * The tools change a handful of fields; everything else in the file (enum
 * references, comments, the order of fields) must come back byte for byte.
 * So nothing is regenerated: each change is a text edit at the exact range of
 * what it touches, and prettier tidies the result.
 *
 * Kept free of Next and of the filesystem, so it can be exercised from a
 * script against a scratch copy.
 */

export class EditConflict extends Error {}
export class EditInvalid extends Error {}

export type Obj = ts.ObjectLiteralExpression;

export interface Edit {
  start: number;
  end: number;
  text: string;
}

/** The file, and the object literal assigned to `const <name>`. */
export function parse(text: string, name: string) {
  const source = ts.createSourceFile(
    "data.ts",
    text,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  let obj: Obj | undefined;
  source.forEachChild(function visit(node) {
    if (
      ts.isVariableDeclaration(node) &&
      node.name.getText(source) === name &&
      node.initializer &&
      ts.isObjectLiteralExpression(node.initializer)
    ) {
      obj = node.initializer;
    }
    node.forEachChild(visit);
  });
  if (!obj) throw new EditInvalid(`No \`const ${name} = { … }\` in this file.`);
  return { source, obj };
}

const nameOf = (p: ts.ObjectLiteralElementLike) =>
  p.name && (ts.isIdentifier(p.name) || ts.isStringLiteral(p.name)) ? p.name.text : undefined;

export function prop(obj: Obj, name: string): ts.PropertyAssignment | undefined {
  return obj.properties.find(
    (p): p is ts.PropertyAssignment => ts.isPropertyAssignment(p) && nameOf(p) === name,
  );
}

/** A nested object by its path, e.g. `technicalData.case`. */
export function objectAt(obj: Obj, path: string): Obj | undefined {
  let at: Obj | undefined = obj;
  for (const name of path.split(".")) {
    const init: ts.Expression | undefined = at && prop(at, name)?.initializer;
    at = init && ts.isObjectLiteralExpression(init) ? init : undefined;
  }
  return at;
}

export function str(obj: Obj, name: string): string {
  const init = prop(obj, name)?.initializer;
  return init && ts.isStringLiteralLike(init) ? init.text : "";
}

export function strs(obj: Obj, name: string): string[] {
  const init = prop(obj, name)?.initializer;
  if (!init || !ts.isArrayLiteralExpression(init)) return [];
  return init.elements.filter(ts.isStringLiteralLike).map((e) => e.text);
}

export function num(obj: Obj, name: string): number {
  const init = prop(obj, name)?.initializer;
  return init && ts.isNumericLiteral(init) ? Number(init.text) : 0;
}

export function objects(obj: Obj, name: string): Obj[] {
  const init = prop(obj, name)?.initializer;
  if (!init || !ts.isArrayLiteralExpression(init)) return [];
  return init.elements.filter(ts.isObjectLiteralExpression);
}

export const literal = (value: string | string[]) =>
  Array.isArray(value)
    ? `[${value.map((v) => JSON.stringify(v)).join(", ")}]`
    : JSON.stringify(value);

/**
 * A field value for setFields: a string or a list of strings, written as
 * literals, or `{ raw }`, written as is (an enum reference, a number, a
 * boolean). `undefined` removes the field.
 */
export type FieldValue = string | string[] | { raw: string } | undefined;

/**
 * The edits that give `obj` these field values. A value equal to what is
 * already there produces no edit, so an untouched object saves to an untouched
 * file. `order` is where each field normally sits, so an added field lands in
 * its usual place.
 */
export function setFields(
  source: ts.SourceFile,
  obj: Obj,
  order: string[],
  fields: Record<string, FieldValue>,
): Edit[] {
  const text = source.getFullText();
  const edits: Edit[] = [];
  const inserts = new Map<number, string[]>();

  const plan = Object.entries(fields).map(([name, value]) => {
    const existing = prop(obj, name);
    const raw = typeof value === "object" && !Array.isArray(value);
    const current = !existing
      ? undefined
      : raw
        ? existing.initializer.getText(source)
        : ts.isArrayLiteralExpression(existing.initializer)
          ? literal(existing.initializer.elements.filter(ts.isStringLiteralLike).map((e) => e.text))
          : ts.isStringLiteralLike(existing.initializer)
            ? literal(existing.initializer.text)
            : existing.initializer.getText(source);
    const wanted =
      value === undefined
        ? undefined
        : raw
          ? (value as { raw: string }).raw
          : literal(value as string);
    return { name, existing, current, wanted };
  });

  // An inserted field is anchored on a neighbour, and that neighbour must not
  // be one this same call deletes, or the two edits would overlap.
  const removed = new Set(
    plan.filter((f) => f.existing && f.wanted === undefined).map((f) => f.name),
  );
  const kept = obj.properties.filter((p) => !removed.has(nameOf(p) ?? ""));

  for (const { name, existing, current, wanted } of plan) {
    if (current === wanted) continue;

    if (existing && wanted !== undefined) {
      edits.push({
        start: existing.initializer.getStart(source),
        end: existing.initializer.end,
        text: wanted,
      });
    } else if (existing) {
      // The property, its comma and the line break before it. Leaving that
      // break behind reads to prettier as a deliberate blank line, so a field
      // added and then cleared would not come back to the original bytes.
      let end = existing.end;
      while (/\s/.test(text[end])) end++;
      if (text[end] === ",") end++;
      edits.push({ start: existing.getFullStart(), end, text: "" });
    } else if (wanted !== undefined) {
      // Before the first field that normally follows it, else after the last.
      const next = order
        .slice(order.indexOf(name) + 1)
        .filter((n) => !removed.has(n))
        .map((n) => prop(obj, n))
        .find(Boolean);
      const at = next ? next.getStart(source) : kept[kept.length - 1].end;
      const piece = next ? `${name}: ${wanted}, ` : `, ${name}: ${wanted}`;
      inserts.set(at, [...(inserts.get(at) ?? []), piece]);
    }
  }

  for (const [at, pieces] of inserts) edits.push({ start: at, end: at, text: pieces.join("") });
  return edits;
}

/**
 * One element of a rebuilt array: an element of the file kept as it is or with
 * a new `body`, or a new element (`body` alone).
 */
export interface ArrayItem {
  node?: ts.Expression;
  body?: string;
}

/**
 * The edit that rewrites an array literal as `items`, in their order. Elements
 * not listed are dropped.
 *
 * Each kept element carries the exact text in front of it (a comment, a blank
 * line, a commented-out entry) and the commas between them are the ones the
 * file had, so a reorder moved back gives back the original bytes. A dropped
 * element's comment is handed to the next element kept after it in the file,
 * or to the end of the array, so a label over a group outlives the group's
 * first photograph.
 */
export function rebuildArray(
  text: string,
  source: ts.SourceFile,
  array: ts.ArrayLiteralExpression,
  items: ArrayItem[],
): Edit {
  const elements = [...array.elements];
  const lead = (el: ts.Node) => text.slice(el.getFullStart(), el.getStart(source));
  const kept = new Set(items.map((i) => i.node).filter(Boolean));

  // What each kept element inherits from the dropped ones just before it: their
  // text up to, not including, the line they sat on.
  const inherited = new Map<ts.Node | undefined, string>();
  let carry = "";
  for (const el of elements) {
    if (kept.has(el)) {
      if (carry) inherited.set(el, carry);
      carry = "";
    } else carry += lead(el).replace(/\n[ \t]*$/, "");
  }

  const pieces = items.map(({ node, body }) =>
    node
      ? `${inherited.get(node) ?? ""}${lead(node)}${body ?? text.slice(node.getStart(source), node.end)}`
      : `\n${body}`,
  );

  const last = elements[elements.length - 1];
  const after = last
    ? text.slice(last.end, array.end - 1)
    : text.slice(array.getStart(source) + 1, array.end - 1);
  const comma = after.startsWith(",") && pieces.length ? "," : "";
  const tail = carry + (after.startsWith(",") ? after.slice(1) : after);

  return {
    start: array.getStart(source),
    end: array.end,
    text: `[${pieces.join(",")}${comma}${tail}]`,
  };
}

/** The edits applied to `text`, then prettier with the file's own config. */
export async function applyTextEdits(text: string, edits: Edit[], filepath: string) {
  let out = text;
  for (const e of [...edits].sort((a, b) => b.start - a.start)) {
    out = out.slice(0, e.start) + e.text + out.slice(e.end);
  }
  const options = await prettier.resolveConfig(filepath);
  return prettier.format(out, { ...options, filepath });
}

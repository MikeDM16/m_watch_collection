"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MultiSelect, SearchableSelect, type SelectOption } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { DropMark, Thumbnail, usePhotoSelection } from "../components/photoOrder";
import type { EditorCollection } from "./collectionEntryEdit";
import { FIELDS, type FieldGroup } from "./fieldSchema";
import type { EditorModel, FieldValue, ModelPhoto } from "./modelEdit";
import type { LoadedModel, SaveResult } from "./modelSource";

export interface EditorOptions {
  /** Enum name → its values, in declaration order. */
  enums: Record<string, SelectOption[]>;
  /** The brand's series, by key path, if it has a series file. */
  series: { name: string; options: SelectOption[] } | null;
  /** Movement files, by path. */
  movements: SelectOption[];
}

interface Draft {
  model: EditorModel;
  collection: EditorCollection;
}

const CUSTOM = "__custom__";
const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;
const nameOf = (src: string) => src.split("/").pop() ?? src;

/** Two field values are the same if they say the same thing (a join's order aside). */
function sameField(a?: FieldValue, b?: FieldValue) {
  const norm = (v?: FieldValue) =>
    v?.kind === "enum" ? { kind: "enum", keys: [...v.keys].sort() } : v;
  return JSON.stringify(norm(a)) === JSON.stringify(norm(b));
}

/** Loaded photos now out of their file order. */
function countMoved(photos: ModelPhoto[]) {
  const order = photos.filter((p) => p.at !== null && !p.removed).map((p) => p.at!);
  const sorted = [...order].sort((a, b) => a - b);
  return order.filter((at, i) => at !== sorted[i]).length;
}

/** How many things differ between what the files hold and what is on screen. */
function countChanges(base: LoadedModel, draft: Draft): number {
  const m = draft.model;
  const b = base.model;
  let n =
    Number(m.title !== b.title) +
    Number(JSON.stringify(m.series) !== JSON.stringify(b.series)) +
    Number(JSON.stringify(m.movement) !== JSON.stringify(b.movement)) +
    Number(JSON.stringify(m.features) !== JSON.stringify(b.features)) +
    FIELDS.filter((f) => !sameField(m.fields[f.path], b.fields[f.path])).length +
    countMoved(m.photos) +
    m.photos.filter((p) => p.removed || p.at === null).length;
  const c = draft.collection;
  for (const k of ["year", "type", "special", "cover", "hover"] as const) {
    if (c[k] !== base.collection[k]) n++;
  }
  return n + Number(!!c.publish);
}

function describe(result: SaveResult, folder: string | null): string {
  const c = result.counts;
  const parts = [
    c.moved && `${plural(c.moved, "photo")} moved`,
    c.removed && `${c.removed} removed`,
    c.added && `${c.added} added`,
    c.features && plural(c.features, "feature change"),
    c.fields && plural(c.fields, "field"),
    result.entry && plural(result.entry, "collection field"),
  ].filter(Boolean);
  const notes = [
    result.published && "The watch is now on the site.",
    result.regenerated && "Index regenerated.",
    ...result.warnings,
    result.noVariants > 0 &&
      `${plural(result.noVariants, "photo")} have no size variants yet: run python scripts/images/2_make_variants.py "${folder ?? "<folder>"}", and push MWatchCollectionResources before committing.`,
  ].filter(Boolean);
  return [parts.length ? `Saved: ${parts.join(", ")}.` : "Nothing to save.", ...notes].join(" ");
}

function SectionHeader({
  title,
  aside,
  first,
}: {
  title: string;
  aside?: React.ReactNode;
  /** Right under the page header, whose rule it shares. */
  first?: boolean;
}) {
  return (
    <div
      className={cn(
        "mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-1",
        !first && "mt-14 border-t border-border pt-6",
      )}
    >
      <h2 className="font-display text-title font-medium">{title}</h2>
      {aside}
    </div>
  );
}

/** A label and its control, in the page's ledger: label left, value right, no boxes. */
function FieldRow({
  label,
  changed,
  children,
}: {
  label: string;
  changed?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid items-start gap-1.5 py-1.5 sm:grid-cols-[11rem_1fr] sm:gap-3">
      <span className="lab flex items-center gap-1.5 sm:pt-2.5">
        <span
          aria-hidden
          className={cn(
            "h-1.5 w-1.5 shrink-0 rounded-full",
            changed ? "bg-brand" : "bg-transparent",
          )}
        />
        {label}
        {changed && <span className="sr-only">(changed)</span>}
      </span>
      <div className="min-w-0 max-w-md">{children}</div>
    </div>
  );
}

const READ_ONLY = "pt-2 text-sm text-muted-foreground";

export default function ModelEditor({
  loaded,
  options,
}: {
  loaded: LoadedModel;
  options: EditorOptions;
}) {
  const router = useRouter();
  const [draft, setDraft] = useState<Draft>({ model: loaded.model, collection: loaded.collection });
  const [status, setStatus] = useState<{ text: string; error?: boolean } | null>(null);
  const [saving, setSaving] = useState(false);
  const [featureText, setFeatureText] = useState("");

  const photos = usePhotoSelection({
    items: draft.model.photos,
    setItems: (update) =>
      setDraft((d) => ({ ...d, model: { ...d.model, photos: update(d.model.photos) } })),
    idOf: (p) => p.id,
    blockOf: () => null,
  });

  // The files as last read or written: what the draft is compared against.
  const [base, setBase] = useState(loaded);
  const adopt = (next: LoadedModel) => {
    setBase(next);
    setDraft({ model: next.model, collection: next.collection });
    // Identities are file positions, and a saved reorder renumbers them.
    photos.clear();
  };

  // A save adopts what it wrote from its answer. The refresh after it hands the
  // same files back later, when there may be newer changes on screen: only
  // files that differ from the baseline replace the draft.
  const [seen, setSeen] = useState(loaded);
  if (seen !== loaded) {
    setSeen(loaded);
    const content = (l: LoadedModel) => JSON.stringify([l.model, l.collection]);
    if (content(loaded) !== content(base)) adopt(loaded);
  }

  const changes = useMemo(() => countChanges(base, draft), [base, draft]);
  useEffect(() => {
    if (!changes) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [changes]);

  const model = draft.model;
  const collection = draft.collection;
  const setModel = (patch: Partial<EditorModel>) =>
    setDraft((d) => ({ ...d, model: { ...d.model, ...patch } }));
  const setField = (path: string, value: FieldValue) =>
    setDraft((d) => ({
      ...d,
      model: { ...d.model, fields: { ...d.model.fields, [path]: value } },
    }));
  const setCollection = (patch: Partial<EditorCollection>) =>
    setDraft((d) => ({ ...d, collection: { ...d.collection, ...patch } }));

  // The collection entry is edited on the site's own watches, or on a hidden
  // one being put on the site with this save.
  const entryEditable =
    collection.status === "visible" || (collection.status === "hidden" && !!collection.publish);

  // ── Photos ──
  const info = (src: string) => base.photos[src] ?? { exists: false, variants: false };
  // The cover and hover photo are held while the entry is being edited; on a
  // hidden watch they are placeholders in a commented-out block, free to go.
  const tile = (src: string) =>
    entryEditable && (src === collection.cover || src === collection.hover);
  const kept = model.photos.filter((p) => !p.removed);
  const unlisted = base.unlisted.filter((u) => !model.photos.some((p) => p.src === u.src));

  // Removing marks a photo, and the save takes it out of the gallery; one added
  // here goes straight back to the folder. The cover and hover photo stay.
  const toggleRemove = (targets: ModelPhoto[], remove: boolean) =>
    setModel({
      photos: model.photos.flatMap((p) => {
        if (!targets.some((t) => t.id === p.id)) return [p];
        if (p.at === null) return remove ? [] : [p];
        return [{ ...p, removed: remove }];
      }),
    });
  const add = (srcs: string[]) =>
    setModel({
      photos: [...model.photos, ...srcs.map((src) => ({ id: `+${src}`, at: null, src }))],
    });

  const selectedPhotos = model.photos.filter((p) => photos.selected.has(p.id));
  const removable = selectedPhotos.filter((p) => !tile(p.src));
  const restoring = removable.length > 0 && removable.every((p) => p.removed);
  const removeSelected = () => {
    toggleRemove(removable, !restoring);
    if (removable.length < selectedPhotos.length) {
      setStatus({
        text: "The cover and hover photo stay selected but are not removed. Pick others first.",
      });
    }
  };

  const missing = kept.filter((p) => !info(p.src).exists).length;
  const noVariants = kept.filter((p) => info(p.src).exists && !info(p.src).variants).length;

  // ── Fields ──
  const fieldControl = (path: string, enumName?: string, multi?: boolean, readOnly?: boolean) => {
    const value = model.fields[path];
    const opts = (enumName && options.enums[enumName]) || [];
    if (!value || value.kind === "raw") {
      return <code className="num block pt-2 text-xs text-muted-foreground">{value?.source}</code>;
    }
    if (readOnly) {
      return (
        <p className={READ_ONLY}>
          {value.kind === "enum"
            ? value.keys.map((k) => opts.find((o) => o.value === k)?.label ?? k).join(" + ")
            : value.text}
        </p>
      );
    }
    if (!enumName) {
      return (
        <Input
          value={value.kind === "text" ? value.text : ""}
          onChange={(e) => setField(path, { kind: "text", text: e.target.value })}
        />
      );
    }
    if (multi) {
      return (
        <MultiSelect
          options={opts}
          values={value.kind === "enum" ? value.keys : []}
          onChange={(keys) => setField(path, { kind: "enum", keys })}
        />
      );
    }
    // A value written as text where the enum is expected shows as such until replaced.
    const custom = value.kind === "text" ? [{ value: CUSTOM, label: `Custom: ${value.text}` }] : [];
    return (
      <SearchableSelect
        options={[...custom, ...opts]}
        value={value.kind === "enum" ? value.keys[0] : CUSTOM}
        onChange={(key) => key !== CUSTOM && setField(path, { kind: "enum", keys: [key] })}
      />
    );
  };

  const changed = (path: string) => !sameField(model.fields[path], base.model.fields[path]);
  const groups: FieldGroup[] = ["Model", "Case", "Dial", "Bracelet"];

  const seriesControl = () => {
    const s = model.series;
    if (s.kind === "raw") return <code className="num block pt-2 text-xs">{s.source}</code>;
    if (!options.series) {
      return (
        <Input
          value={s.kind === "text" ? s.text : ""}
          onChange={(e) => setModel({ series: { kind: "text", text: e.target.value } })}
        />
      );
    }
    const custom = s.kind === "text" ? [{ value: CUSTOM, label: `Custom: ${s.text}` }] : [];
    return (
      <SearchableSelect
        options={[...custom, ...options.series.options]}
        value={s.kind === "series" ? s.ref : CUSTOM}
        onChange={(ref) => ref !== CUSTOM && setModel({ series: { kind: "series", ref } })}
      />
    );
  };

  // ── Features ──
  const featureOptions = options.enums.featuresEnum ?? [];
  const featureLabel = (f: EditorModel["features"][number]) =>
    "enum" in f.value
      ? (featureOptions.find((o) => o.value === (f.value as { enum: string }).enum)?.label ??
        f.value.enum)
      : "text" in f.value
        ? f.value.text
        : f.value.raw;
  const usedFeatures = new Set(
    model.features.flatMap((f) => ("enum" in f.value ? [f.value.enum] : [])),
  );

  // ── Save ──
  const save = async () => {
    setSaving(true);
    setStatus(null);
    try {
      const res = await fetch("/api/admin/model-edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(draft),
      });
      const body = await res.json();
      if (!res.ok) {
        setStatus({ text: body.error ?? `Save failed (${res.status}).`, error: true });
        return;
      }
      const result = body as SaveResult;
      setStatus({ text: describe(result, result.loaded.folder) });
      adopt(result.loaded);
      router.refresh();
    } catch (error) {
      setStatus({ text: `Save failed: ${String(error)}`, error: true });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      {collection.status !== "visible" && (
        <p className="mb-8 border border-dashed border-border p-4 text-sm text-muted-foreground">
          <span className="lab mr-2 text-foreground">
            {collection.status === "hidden"
              ? "Hidden until photos are added"
              : "Not in the collection"}
          </span>
          {collection.status === "hidden"
            ? "Its collectionData entry is commented out. Add its photos, pick a cover and a hover photo, then show it on the site from the Collection section."
            : "No collectionData entry requires this model file, so it is not on the site. Its fields and photos still save."}
        </p>
      )}

      {/* ───── Photographs ───── */}
      <SectionHeader
        title="Photographs"
        first={collection.status === "visible"}
        aside={
          <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="num text-xs text-muted-foreground">{kept.length}</span>
            {base.folder && (
              <span className="num break-all text-xs text-muted-foreground">{base.folder}</span>
            )}
            {missing > 0 && <span className="lab text-brand">{missing} not found</span>}
            {noVariants > 0 && (
              <span className="lab text-brand">{noVariants} without variants</span>
            )}
          </span>
        }
      />

      <div
        className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        {...photos.gridProps(null)}
      >
        {model.photos.map((photo) => {
          const id = photo.id;
          const isSelected = photos.selected.has(id);
          const protectedTile = tile(photo.src);
          const { exists, variants } = info(photo.src);
          return (
            // Keyed by id: `#<file position>` for loaded photos (paths can
            // repeat), `+<path>` for added ones. A save renumbers positions,
            // and the editor then starts over from the file it wrote.
            <div key={id} className="relative min-w-0" {...photos.slotProps(photo)}>
              {photos.dropAt?.id === id && <DropMark side={photos.dropAt.side} />}
              <div
                {...photos.handleProps(photo)}
                className={cn(
                  "cursor-grab active:cursor-grabbing",
                  isSelected && "ring-2 ring-brand ring-offset-4 ring-offset-background",
                  (photos.carried?.has(id) || photo.removed) && "opacity-40",
                )}
              >
                <Thumbnail key={photo.src} src={photo.src} className="aspect-square" />
              </div>
              <div className="mt-2 flex items-center gap-2">
                <label className="flex min-w-0 cursor-pointer items-center gap-1.5">
                  {/* readOnly: the click handler toggles it, and has the Shift key. */}
                  <input
                    type="checkbox"
                    className="accent-brand"
                    checked={isSelected}
                    readOnly
                    onClick={(e) => photos.select(photo, e.shiftKey)}
                    aria-label={`Select ${nameOf(photo.src)}`}
                  />
                  <span
                    className={cn(
                      "num truncate text-xs text-muted-foreground",
                      photo.removed && "line-through",
                    )}
                    title={photo.src}
                  >
                    {nameOf(photo.src)}
                  </span>
                </label>
                <button
                  type="button"
                  className="lab ml-auto shrink-0 text-muted-foreground transition-colors hover:text-brand disabled:pointer-events-none disabled:opacity-40"
                  disabled={!photo.removed && protectedTile}
                  title={
                    !photo.removed && protectedTile
                      ? "The cover and hover photo can't be removed. Pick others first."
                      : photo.at === null
                        ? "Put this photo back in the folder list"
                        : photo.removed
                          ? "Keep this photo in the gallery"
                          : "Take this photo out of the gallery on save. The image file stays in the resources repo."
                  }
                  onClick={() => toggleRemove([photo], !photo.removed)}
                >
                  {photo.removed ? "Undo" : "Remove"}
                </button>
              </div>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                {photo.removed ? (
                  <span className="lab text-brand">Removed on save</span>
                ) : (
                  entryEditable &&
                  (["cover", "hover"] as const).map((role) => (
                    <label
                      key={role}
                      className={cn(
                        "lab flex cursor-pointer items-center gap-1",
                        collection[role] === photo.src && "text-brand",
                      )}
                    >
                      <input
                        type="radio"
                        className="accent-brand"
                        name={role}
                        checked={collection[role] === photo.src}
                        onChange={() => setCollection({ [role]: photo.src })}
                      />
                      {role === "cover" ? "Cover" : "Hover"}
                    </label>
                  ))
                )}
                {photo.at === null && <span className="lab text-brand">Added</span>}
                {!exists && <span className="lab text-brand">Not found</span>}
                {exists && !variants && <span className="lab">No variants</span>}
              </div>
            </div>
          );
        })}
      </div>

      {(unlisted.length > 0 || !base.folderFound) && (
        <div className="mt-12">
          <div className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-2 border-t border-dashed border-border pt-4">
            <h3 className="lab text-foreground">In the folder, not listed</h3>
            <span className="num text-xs text-muted-foreground">{unlisted.length}</span>
            {!base.folderFound && (
              <span className="text-xs text-muted-foreground">
                {base.folder
                  ? `${base.folder} is not in the resources checkout.`
                  : "No photo folder is known for this watch."}
              </span>
            )}
            {unlisted.length > 1 && (
              <Button
                variant="outline"
                size="sm"
                className="ml-auto"
                onClick={() => add(unlisted.map((u) => u.src))}
              >
                Add all
              </Button>
            )}
          </div>
          <div className="grid grid-cols-3 gap-x-6 gap-y-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {unlisted.map((u) => (
              <div key={u.src} className="min-w-0">
                <div className="opacity-60 transition-opacity hover:opacity-100">
                  <Thumbnail src={u.src} className="aspect-square" />
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="num truncate text-xs text-muted-foreground" title={u.src}>
                    {nameOf(u.src)}
                  </span>
                  <button
                    type="button"
                    className="lab ml-auto shrink-0 text-muted-foreground transition-colors hover:text-brand"
                    onClick={() => add([u.src])}
                  >
                    Add
                  </button>
                </div>
                {u.commented && <span className="lab mt-1 block">Commented out</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ───── Specification ───── */}
      {groups.map((group) => (
        <section key={group}>
          <SectionHeader title={group} />
          {group === "Model" && (
            <>
              <FieldRow label="Title" changed={model.title !== base.model.title}>
                <Input value={model.title} onChange={(e) => setModel({ title: e.target.value })} />
              </FieldRow>
              <FieldRow
                label="Series"
                changed={JSON.stringify(model.series) !== JSON.stringify(base.model.series)}
              >
                {seriesControl()}
              </FieldRow>
            </>
          )}
          {FIELDS.filter((f) => f.group === group).map((f) => (
            <FieldRow key={f.path} label={f.label} changed={changed(f.path)}>
              {fieldControl(f.path, f.enumName, f.multi, f.readOnly)}
            </FieldRow>
          ))}
        </section>
      ))}

      {/* ───── Movement ───── */}
      <SectionHeader title="Movement" />
      <FieldRow
        label="Calibre"
        changed={JSON.stringify(model.movement) !== JSON.stringify(base.model.movement)}
      >
        {model.movement.kind === "import" ? (
          <SearchableSelect
            options={options.movements}
            value={model.movement.path}
            onChange={(path) => setModel({ movement: { kind: "import", path } })}
            placeholder="Search movements..."
          />
        ) : (
          <p className={READ_ONLY}>
            {model.movement.title}: written into the model file, so it is edited there.
          </p>
        )}
      </FieldRow>

      {/* ───── Features ───── */}
      <SectionHeader
        title="Features"
        aside={<span className="num text-xs text-muted-foreground">{model.features.length}</span>}
      />
      <ul className="max-w-2xl list-none p-0">
        {model.features.map((f, i) => (
          <li
            key={`${f.at ?? "new"}-${i}`}
            className="flex items-baseline gap-4 border-b border-border py-2"
          >
            <span className={cn("min-w-0 flex-1 text-sm", "text" in f.value && "italic")}>
              {featureLabel(f)}
            </span>
            {f.at === null && <span className="lab text-brand">Added</span>}
            <button
              type="button"
              className="lab shrink-0 text-muted-foreground transition-colors hover:text-brand"
              onClick={() => setModel({ features: model.features.filter((_, j) => j !== i) })}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 grid max-w-2xl gap-3 sm:grid-cols-2">
        <SearchableSelect
          options={featureOptions.filter((o) => !usedFeatures.has(o.value))}
          value=""
          onChange={(key) =>
            setModel({ features: [...model.features, { at: null, value: { enum: key } }] })
          }
          placeholder="Add a feature..."
        />
        <div className="flex gap-2">
          <Input
            value={featureText}
            onChange={(e) => setFeatureText(e.target.value)}
            placeholder="Or write one"
            onKeyDown={(e) => {
              if (e.key !== "Enter" || !featureText.trim()) return;
              setModel({
                features: [...model.features, { at: null, value: { text: featureText.trim() } }],
              });
              setFeatureText("");
            }}
          />
          <Button
            variant="outline"
            disabled={!featureText.trim()}
            onClick={() => {
              setModel({
                features: [...model.features, { at: null, value: { text: featureText.trim() } }],
              });
              setFeatureText("");
            }}
          >
            Add
          </Button>
        </div>
      </div>

      {/* ───── Collection ───── */}
      <SectionHeader title="Collection" />
      {collection.status === "hidden" && (
        <label className="mb-4 flex max-w-2xl cursor-pointer items-start gap-3 text-sm">
          <input
            type="checkbox"
            className="mt-1 accent-brand"
            checked={!!collection.publish}
            onChange={(e) => setCollection({ publish: e.target.checked })}
          />
          <span>
            <span className="font-medium">Show on the site with this save.</span>{" "}
            <span className="text-muted-foreground">
              Uncomments its collectionData entry. Pick the cover and hover photo in the grid first.
            </span>
          </span>
        </label>
      )}
      {collection.status === "unregistered" ? (
        <p className={READ_ONLY}>This model file has no collection entry.</p>
      ) : (
        <>
          <FieldRow label="Legend">
            <p className={READ_ONLY}>{collection.legend}</p>
          </FieldRow>
          <FieldRow label="Year" changed={collection.year !== base.collection.year}>
            <Input
              type="number"
              className="max-w-32"
              disabled={!entryEditable}
              value={collection.year || ""}
              onChange={(e) => setCollection({ year: Number(e.target.value) })}
            />
          </FieldRow>
          <FieldRow label="Type" changed={collection.type !== base.collection.type}>
            <SearchableSelect
              className={cn(!entryEditable && "pointer-events-none opacity-50")}
              options={options.enums.WatchTypeEnum ?? []}
              value={collection.type}
              onChange={(type) => setCollection({ type })}
            />
          </FieldRow>
          <FieldRow label="Special" changed={collection.special !== base.collection.special}>
            <label className="flex cursor-pointer items-center gap-2 pt-2 text-sm">
              <input
                type="checkbox"
                className="accent-brand"
                disabled={!entryEditable}
                checked={collection.special}
                onChange={(e) => setCollection({ special: e.target.checked })}
              />
              Special collection item
            </label>
          </FieldRow>
          {collection.set && (
            <FieldRow label="Set">
              <p className={READ_ONLY}>Part of a collection set</p>
            </FieldRow>
          )}
          {(["cover", "hover"] as const).map((role) => (
            <FieldRow
              key={role}
              label={role === "cover" ? "Cover" : "Hover photo"}
              changed={collection[role] !== base.collection[role]}
            >
              <div className="flex items-center gap-3 pt-1">
                <div className="w-20 shrink-0">
                  {collection[role] && (
                    <Thumbnail
                      key={collection[role]}
                      src={collection[role]}
                      className="aspect-square"
                    />
                  )}
                </div>
                <span className="num min-w-0 truncate text-xs text-muted-foreground">
                  {collection[role] ? nameOf(collection[role]) : "None"}
                  {collection[role] && !info(collection[role]).exists && " · not found"}
                </span>
              </div>
            </FieldRow>
          ))}
        </>
      )}
      {model.saleReport && (
        <FieldRow label="Sale report">
          <p className={READ_ONLY}>
            €{model.saleReport.price.toLocaleString("en-GB")} · {model.saleReport.date} · written by
            the sales scripts
          </p>
        </FieldRow>
      )}

      {/* ───── Save bar ───── */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-shell flex-wrap items-center gap-x-4 gap-y-2 px-[clamp(1rem,4vw,3.5rem)] py-3">
          <span
            className={cn(
              "min-w-0 text-sm",
              status?.error ? "text-brand" : "text-muted-foreground",
            )}
            role="status"
          >
            {status?.error
              ? status.text
              : changes
                ? `${plural(changes, "unsaved change")}`
                : (status?.text ?? "No changes")}
          </span>
          {photos.selected.size > 0 && (
            <div className="flex flex-wrap items-center gap-2 border-l border-border pl-4">
              <span className="num text-xs text-muted-foreground">
                {photos.selected.size} selected
              </span>
              <Button
                variant="outline"
                size="sm"
                title="Move the selected photos to the start of the gallery"
                onClick={() => photos.moveSelected("before")}
              >
                To start
              </Button>
              <Button
                variant="outline"
                size="sm"
                title="Move the selected photos to the end of the gallery"
                onClick={() => photos.moveSelected("after")}
              >
                To end
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={!removable.length}
                title={
                  restoring
                    ? "Keep the selected photos in the gallery"
                    : "Take the selected photos out of the gallery on save"
                }
                onClick={removeSelected}
              >
                {restoring ? "Undo remove" : "Remove"}
              </Button>
              <Button variant="ghost" size="sm" onClick={photos.clear}>
                Clear
              </Button>
            </div>
          )}
          <div className="ml-auto flex items-center gap-2">
            <Button
              variant="ghost"
              disabled={!changes || saving}
              onClick={() => {
                adopt(base);
                setStatus(null);
              }}
            >
              Discard
            </Button>
            <Button disabled={!changes || saving} onClick={save}>
              {saving ? "Saving…" : "Save"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import {
  getExternalResource,
  getImgURLForSizeType,
  SizeType,
} from "@/app/services/commonFunctions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MultiSelect, type SelectOption } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import type { EditorEntry, EditorPhoto, SaveCounts } from "./journalEdit";

const TEXTAREA =
  "flex min-h-28 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm";

const sameAt = (a: EditorPhoto, b: EditorPhoto) =>
  a.at.section === b.at.section && a.at.index === b.at.index;

/** A photo's identity on this page: where it sat in the file when loaded. */
const idOf = (p: EditorPhoto) => `${p.at.section}-${p.at.index}`;

/** Photos now at a different place in their block than in the file. */
function countMoved(photos: EditorPhoto[]): number {
  const next = new Map<number | null, number>();
  return photos.filter((p) => {
    const i = next.get(p.at.section) ?? 0;
    next.set(p.at.section, i + 1);
    return p.at.index !== i;
  }).length;
}

type Side = "before" | "after";

/**
 * `ids` moved, keeping their order, to one side of `target` in their block.
 * A null target is the block's start ("before") or its end ("after"). Photos
 * only move within their block; the other blocks keep their places.
 */
function moveWithin(
  photos: EditorPhoto[],
  section: number | null,
  ids: Set<string>,
  target: string | null,
  side: Side,
): EditorPhoto[] {
  const block = photos.filter((p) => p.at.section === section);
  const moving = block.filter((p) => ids.has(idOf(p)));
  const rest = block.filter((p) => !ids.has(idOf(p)));
  const at =
    target === null
      ? side === "before"
        ? 0
        : rest.length
      : rest.findIndex((p) => idOf(p) === target) + (side === "after" ? 1 : 0);
  const next = [...rest.slice(0, at), ...moving, ...rest.slice(at)];
  let i = 0;
  return photos.map((p) => (p.at.section === section ? next[i++] : p));
}

/** How many fields differ between what the file holds and what is on screen. */
function countChanges(base: EditorEntry, draft: EditorEntry): number {
  let n = countMoved(draft.photos) + draft.photos.filter((p) => p.removed).length;
  draft.photos.forEach((p) => {
    const was = base.photos.find((b) => sameAt(b, p));
    if (was?.caption !== p.caption) n++;
    if (was?.watches.join() !== p.watches.join()) n++;
  });
  draft.sections.forEach((s, i) => {
    const was = base.sections[i];
    if (was.title !== s.title || was.note !== s.note) n++;
    if (was.watches.join() !== s.watches.join()) n++;
  });
  for (const key of ["dek", "quote", "cover"] as const) if (base[key] !== draft[key]) n++;
  if (base.intro.join("\n") !== draft.intro.join("\n")) n++;
  return n;
}

function describe(counts: SaveCounts): string {
  const parts = [
    counts.captions && `${counts.captions} caption${counts.captions === 1 ? "" : "s"}`,
    counts.watches && `${counts.watches} watch link${counts.watches === 1 ? "" : "s"}`,
    counts.sections && `${counts.sections} section${counts.sections === 1 ? "" : "s"}`,
    counts.text && `${counts.text} text field${counts.text === 1 ? "" : "s"}`,
    counts.moved && `${counts.moved} photo${counts.moved === 1 ? "" : "s"} moved`,
    counts.removed && `${counts.removed} photo${counts.removed === 1 ? "" : "s"} removed`,
  ].filter(Boolean);
  return parts.length ? `Saved: ${parts.join(", ")}.` : "Nothing to save.";
}

function Thumbnail({ photo }: { photo: EditorPhoto }) {
  // The local checkout first, so photos not yet pushed still show; GitHub if
  // the file is not on this machine.
  const [src, setSrc] = useState(`/api/admin/journal-image?path=${encodeURIComponent(photo.src)}`);
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
      {/* Not draggable itself: the tile around it is what gets dragged. */}
      <Image
        src={src}
        alt=""
        fill
        unoptimized
        draggable={false}
        sizes="(max-width: 640px) 100vw, 400px"
        className="object-contain"
        onError={() =>
          setSrc(getExternalResource(getImgURLForSizeType(photo.src, SizeType.SLIDER)))
        }
      />
    </div>
  );
}

export default function JournalCaptionEditor({
  entry,
  published,
  watchOptions,
}: {
  entry: EditorEntry;
  published: boolean;
  watchOptions: SelectOption[];
}) {
  const router = useRouter();
  const [draft, setDraft] = useState(entry);
  const [status, setStatus] = useState<{ text: string; error?: boolean } | null>(null);
  const [saving, setSaving] = useState(false);
  // Selection, for moving several photos at once. Photos only move within
  // their block, so a drag or a "To start" acts on each block's share of it.
  const [selected, setSelected] = useState<Set<string>>(() => new Set());

  // The file as last read or written: what the draft is compared against.
  const [base, setBase] = useState(entry);
  const adopt = (file: EditorEntry) => {
    setBase(file);
    setDraft(file);
    // Identities are file positions, and a saved reorder renumbers them.
    setSelected(new Set());
  };

  // A save adopts the file it wrote straight from its answer. The refresh
  // after it, and the dev server's own reload when the file changes, hand the
  // same file back later, by which time there may be newer changes on screen:
  // only a file that differs from the baseline replaces the draft.
  const [seen, setSeen] = useState(entry);
  if (seen !== entry) {
    setSeen(entry);
    if (JSON.stringify(entry) !== JSON.stringify(base)) adopt(entry);
  }

  // Click toggles a photo; Shift-click selects the run from the last one clicked.
  const anchor = useRef<EditorPhoto | null>(null);
  const select = (photo: EditorPhoto, run: boolean) => {
    const from = anchor.current;
    setSelected((current) => {
      const next = new Set(current);
      if (run && from && from.at.section === photo.at.section) {
        const block = draft.photos.filter((p) => p.at.section === photo.at.section);
        const ends = [
          block.findIndex((p) => sameAt(p, from)),
          block.findIndex((p) => sameAt(p, photo)),
        ];
        const [a, b] = ends.sort((x, y) => x - y);
        block.slice(a, b + 1).forEach((p) => next.add(idOf(p)));
      } else if (next.has(idOf(photo))) next.delete(idOf(photo));
      else next.add(idOf(photo));
      return next;
    });
    anchor.current = photo;
  };

  useEffect(() => {
    if (!selected.size) return;
    const clear = (e: KeyboardEvent) => e.key === "Escape" && setSelected(new Set());
    window.addEventListener("keydown", clear);
    return () => window.removeEventListener("keydown", clear);
  }, [selected.size]);

  const moveSelected = (side: Side) =>
    setDraft((d) => {
      const sections = new Set(
        d.photos.filter((p) => selected.has(idOf(p))).map((p) => p.at.section),
      );
      let photos = d.photos;
      for (const s of sections) photos = moveWithin(photos, s, selected, null, side);
      return { ...d, photos };
    });

  // Removing marks a photo, and the save takes it out of the file. The cover
  // cannot go; another cover has to be picked first.
  const selectedPhotos = draft.photos.filter((p) => selected.has(idOf(p)));
  const removable = selectedPhotos.filter((p) => p.src !== draft.cover);
  const restoring = removable.length > 0 && removable.every((p) => p.removed);
  const removeSelected = () => {
    setDraft((d) => ({
      ...d,
      photos: d.photos.map((p) =>
        removable.some((r) => sameAt(r, p)) ? { ...p, removed: !restoring } : p,
      ),
    }));
    if (removable.length < selectedPhotos.length) {
      setStatus({ text: "The cover stays selected but is not removed. Pick another cover first." });
    }
  };

  // Dragging: the ref is read by the drop handlers, the state only dims the
  // photos being carried.
  const drag = useRef<{ section: number | null; ids: Set<string> } | null>(null);
  const [carried, setCarried] = useState<Set<string> | null>(null);
  const [dropAt, setDropAt] = useState<{ id: string; side: Side } | null>(null);

  const startDrag = (e: React.DragEvent, photo: EditorPhoto) => {
    // The selection in this block when the photo is part of it, else the photo alone.
    const ids = selected.has(idOf(photo))
      ? new Set(
          draft.photos
            .filter((p) => p.at.section === photo.at.section && selected.has(idOf(p)))
            .map(idOf),
        )
      : new Set([idOf(photo)]);
    if (!selected.has(idOf(photo))) {
      setSelected(new Set([idOf(photo)]));
      anchor.current = photo;
    }
    drag.current = { section: photo.at.section, ids };
    setCarried(ids);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("application/x-journal-photos", String(ids.size));
    if (ids.size > 1) {
      const label = document.createElement("div");
      label.textContent = `${ids.size} photos`;
      label.className = "lab border border-border bg-background px-3 py-2 text-foreground";
      label.style.cssText = "position: fixed; top: -100px; left: 0;";
      document.body.append(label);
      e.dataTransfer.setDragImage(label, 0, 0);
      requestAnimationFrame(() => label.remove());
    }
  };

  const endDrag = () => {
    drag.current = null;
    setCarried(null);
    setDropAt(null);
  };

  const overPhoto = (e: React.DragEvent<HTMLElement>, photo: EditorPhoto) => {
    const d = drag.current;
    if (!d || d.section !== photo.at.section) return;
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "move";
    if (d.ids.has(idOf(photo))) return setDropAt(null);
    // Left half: before it. Right half: after it. The grid reads left to right.
    const box = e.currentTarget.getBoundingClientRect();
    const side: Side = e.clientX < box.left + box.width / 2 ? "before" : "after";
    setDropAt((at) =>
      at?.id === idOf(photo) && at.side === side ? at : { id: idOf(photo), side },
    );
  };

  const drop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const d = drag.current;
    if (d && dropAt) {
      setDraft((cur) => ({
        ...cur,
        photos: moveWithin(cur.photos, d.section, d.ids, dropAt.id, dropAt.side),
      }));
    }
    endDrag();
  };

  const changes = useMemo(() => countChanges(base, draft), [base, draft]);

  useEffect(() => {
    if (!changes) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [changes]);

  // Enter in a caption moves to the next one, so a whole event can be typed
  // straight through without reaching for the mouse.
  const captions = useRef<(HTMLInputElement | null)[]>([]);

  const setPhoto = (photo: EditorPhoto, patch: Partial<EditorPhoto>) =>
    setDraft((d) => ({
      ...d,
      photos: d.photos.map((p) => (sameAt(p, photo) ? { ...p, ...patch } : p)),
    }));

  const setSection = (index: number, patch: Partial<EditorEntry["sections"][number]>) =>
    setDraft((d) => ({
      ...d,
      sections: d.sections.map((s) => (s.index === index ? { ...s, ...patch } : s)),
    }));

  const save = async () => {
    setSaving(true);
    setStatus(null);
    try {
      const res = await fetch("/api/admin/journal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(draft),
      });
      const body = await res.json();
      if (!res.ok) {
        setStatus({ text: body.error ?? `Save failed (${res.status}).`, error: true });
        return;
      }
      setStatus({ text: describe(body.counts) });
      adopt(body.entry);
      router.refresh();
    } finally {
      setSaving(false);
    }
  };

  type Block = {
    key: string;
    section?: EditorEntry["sections"][number];
    photos: EditorPhoto[];
  };
  const highlights: Block = {
    key: "highlights",
    photos: draft.photos.filter((p) => p.at.section === null),
  };
  const blocks: Block[] = [
    // A sections-only entry has no highlights to show, not an empty block.
    ...(highlights.photos.length ? [highlights] : []),
    ...draft.sections.map((s) => ({
      key: `section-${s.index}`,
      section: s,
      photos: draft.photos.filter((p) => p.at.section === s.index),
    })),
  ];
  let captionIndex = 0;

  return (
    <div>
      {!published && (
        <p className="mb-8 border border-dashed border-border p-4 text-sm text-muted-foreground">
          <span className="lab mr-2 text-foreground">Hidden until pushed</span>
          This entry is commented out in <code className="num">data/journal/index.ts</code>.
          Captions still save; the page goes live once its photos are pushed and the entry is
          uncommented.
        </p>
      )}

      <section className="border-t border-border pt-6">
        <h2 className="font-display text-title font-medium">{draft.title}</h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <label className="block">
            <span className="lab">Dek, the line under the title</span>
            <Input
              className="mt-1.5"
              value={draft.dek}
              onChange={(e) => setDraft({ ...draft, dek: e.target.value })}
            />
          </label>
          <label className="block">
            <span className="lab">Pull-quote</span>
            <Input
              className="mt-1.5"
              value={draft.quote}
              onChange={(e) => setDraft({ ...draft, quote: e.target.value })}
            />
          </label>
          <label className="block lg:col-span-2">
            <span className="lab">Intro, a blank line between paragraphs</span>
            <textarea
              className={`mt-1.5 ${TEXTAREA}`}
              value={draft.intro.join("\n\n")}
              onChange={(e) => setDraft({ ...draft, intro: e.target.value.split(/\n\s*\n/) })}
            />
          </label>
        </div>
      </section>

      {blocks.map(({ key, section, photos }) => (
        <section key={key} className="mt-14 border-t border-border pt-6">
          {section ? (
            <div className="grid gap-4 lg:grid-cols-[auto_1fr_1fr_1fr] lg:items-end">
              <span className="num pb-2 text-xs text-muted-foreground">
                {String(section.index + 1).padStart(2, "0")}
              </span>
              <label className="block">
                <span className="lab">Section title</span>
                <Input
                  className="mt-1.5"
                  value={section.title}
                  onChange={(e) => setSection(section.index, { title: e.target.value })}
                />
              </label>
              <label className="block">
                <span className="lab">Note</span>
                <Input
                  className="mt-1.5"
                  value={section.note}
                  onChange={(e) => setSection(section.index, { note: e.target.value })}
                />
              </label>
              <div>
                <span className="lab">Photographed with</span>
                <MultiSelect
                  className="mt-1.5"
                  options={watchOptions}
                  values={section.watches}
                  onChange={(watches) => setSection(section.index, { watches })}
                />
              </div>
            </div>
          ) : (
            <div className="flex items-baseline gap-3">
              <h2 className="font-display text-title font-medium">
                {draft.sections.length ? "Highlights" : "Photographs"}
              </h2>
              <span className="num ml-auto text-xs text-muted-foreground">{photos.length}</span>
            </div>
          )}

          {/* The grid takes a drop in a gap or below the last row, at the
              place last marked; each photo marks a side of itself. */}
          <div
            className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3"
            onDragOver={(e) => {
              if (drag.current?.section === (section?.index ?? null)) e.preventDefault();
            }}
            onDrop={drop}
          >
            {photos.map((photo, i) => {
              const position = captionIndex++;
              const id = idOf(photo);
              const name = photo.src.split("/").pop();
              const isSelected = selected.has(id);
              // Keyed by the photo, not by `id`: a saved reorder renumbers the
              // file positions, and a tile keyed by position would keep the
              // old photo's image while its label moved on. The same file
              // twice in one block is told apart by its place.
              const repeat = photos.slice(0, i).filter((p) => p.src === photo.src).length;
              return (
                <div
                  key={`${photo.src}#${repeat}`}
                  className="relative"
                  onDragOver={(e) => overPhoto(e, photo)}
                  onDrop={drop}
                >
                  {dropAt?.id === id && (
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-y-0 w-0.5 bg-brand",
                        dropAt.side === "before" ? "-left-3" : "-right-3",
                      )}
                    />
                  )}
                  <div
                    draggable
                    onDragStart={(e) => startDrag(e, photo)}
                    onDragEnd={endDrag}
                    onClick={(e) => select(photo, e.shiftKey)}
                    className={cn(
                      "cursor-grab active:cursor-grabbing",
                      isSelected && "ring-2 ring-brand ring-offset-4 ring-offset-background",
                      (carried?.has(id) || photo.removed) && "opacity-40",
                    )}
                  >
                    {/* Its fallback to GitHub is state, so it starts over for another file. */}
                    <Thumbnail key={photo.src} photo={photo} />
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <label className="flex cursor-pointer items-center gap-1.5">
                      {/* readOnly: the click handler toggles it, and has the Shift key. */}
                      <input
                        type="checkbox"
                        checked={isSelected}
                        readOnly
                        onClick={(e) => select(photo, e.shiftKey)}
                        aria-label={`Select ${name}`}
                      />
                      <span
                        className={cn(
                          "num text-xs text-muted-foreground",
                          photo.removed && "line-through",
                        )}
                      >
                        {name}
                      </span>
                    </label>
                    {photo.removed ? (
                      <span className="lab ml-auto text-brand">Removed on save</span>
                    ) : (
                      <label className="lab ml-auto flex cursor-pointer items-center gap-1.5">
                        <input
                          type="radio"
                          name="cover"
                          checked={draft.cover === photo.src}
                          onChange={() => setDraft({ ...draft, cover: photo.src })}
                        />
                        Cover
                      </label>
                    )}
                    <button
                      type="button"
                      className="lab text-muted-foreground transition-colors hover:text-brand disabled:pointer-events-none disabled:opacity-40"
                      disabled={!photo.removed && draft.cover === photo.src}
                      title={
                        !photo.removed && draft.cover === photo.src
                          ? "The cover can't be removed. Pick another cover first."
                          : photo.removed
                            ? "Keep this photo in the entry"
                            : "Take this photo out of the entry on save. The image file stays in the resources repo."
                      }
                      onClick={() => setPhoto(photo, { removed: !photo.removed })}
                    >
                      {photo.removed ? "Undo" : "Remove"}
                    </button>
                  </div>
                  <Input
                    disabled={photo.removed}
                    ref={(el) => {
                      captions.current[position] = el;
                    }}
                    className="mt-2"
                    placeholder="Caption"
                    aria-label={`Caption for ${photo.src.split("/").pop()}`}
                    value={photo.caption}
                    onChange={(e) => setPhoto(photo, { caption: e.target.value })}
                    onKeyDown={(e) => {
                      if (e.key !== "Enter") return;
                      e.preventDefault();
                      captions.current[position + 1]?.focus();
                    }}
                  />
                  <MultiSelect
                    className={cn("mt-2", photo.removed && "pointer-events-none opacity-40")}
                    label="Watches in this photo"
                    options={watchOptions}
                    values={photo.watches}
                    onChange={(watches) => setPhoto(photo, { watches })}
                  />
                </div>
              );
            })}
          </div>
        </section>
      ))}

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-shell items-center gap-4 px-[clamp(1rem,4vw,3.5rem)] py-3">
          <span
            className={`text-sm ${status?.error ? "text-brand" : "text-muted-foreground"}`}
            role="status"
          >
            {status?.error
              ? status.text
              : changes
                ? `${changes} unsaved change${changes === 1 ? "" : "s"}`
                : (status?.text ?? "No changes")}
          </span>
          {selected.size > 0 && (
            <div className="flex items-center gap-2 border-l border-border pl-4">
              <span className="num text-xs text-muted-foreground">{selected.size} selected</span>
              <Button
                variant="outline"
                size="sm"
                title="Move the selected photos to the start of their block"
                onClick={() => moveSelected("before")}
              >
                To start
              </Button>
              <Button
                variant="outline"
                size="sm"
                title="Move the selected photos to the end of their block"
                onClick={() => moveSelected("after")}
              >
                To end
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={!removable.length}
                title={
                  restoring
                    ? "Keep the selected photos in the entry"
                    : "Take the selected photos out of the entry on save"
                }
                onClick={removeSelected}
              >
                {restoring ? "Undo remove" : "Remove"}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setSelected(new Set())}>
                Clear
              </Button>
            </div>
          )}
          <Button className="ml-auto" disabled={!changes || saving} onClick={save}>
            {saving ? "Saving…" : "Save to entry file"}
          </Button>
        </div>
      </div>
    </div>
  );
}

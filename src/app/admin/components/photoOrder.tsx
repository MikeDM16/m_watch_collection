"use client";

import {
  getExternalResource,
  getImgURLForSizeType,
  SizeType,
} from "@/app/services/commonFunctions";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Ordering photographs by hand, shared by the local editors (Journal captions,
 * watch models): click to select, Shift-click for a run, drag one or the
 * selection to a new place, or send the selection to the start or the end.
 *
 * Photos move only within their block (a Journal section; a model has one),
 * so every action works on each block's share of the selection. What a photo
 * is, and what removing one means, stays with each editor.
 */

export type Side = "before" | "after";
type Block = string | number | null;

/**
 * `ids` moved, keeping their order, to one side of `target` in their block.
 * A null target is the block's start ("before") or its end ("after"). The
 * other blocks keep their places.
 */
export function moveWithin<T>(
  items: T[],
  idOf: (item: T) => string,
  blockOf: (item: T) => Block,
  block: Block,
  ids: Set<string>,
  target: string | null,
  side: Side,
): T[] {
  const mine = items.filter((p) => blockOf(p) === block);
  const moving = mine.filter((p) => ids.has(idOf(p)));
  const rest = mine.filter((p) => !ids.has(idOf(p)));
  const at =
    target === null
      ? side === "before"
        ? 0
        : rest.length
      : rest.findIndex((p) => idOf(p) === target) + (side === "after" ? 1 : 0);
  const next = [...rest.slice(0, at), ...moving, ...rest.slice(at)];
  let i = 0;
  return items.map((p) => (blockOf(p) === block ? next[i++] : p));
}

/**
 * A photo from the local resources checkout, so photos not yet pushed still
 * show, else from GitHub, else an empty tile (a placeholder such as
 * IMG_XXXX.JPG). The fallback is state: key it by `src`.
 */
export function Thumbnail({ src, className }: { src: string; className?: string }) {
  const [url, setUrl] = useState<string | null>(
    `/api/admin/journal-image?path=${encodeURIComponent(src)}`,
  );
  const github = getExternalResource(getImgURLForSizeType(src, SizeType.SLIDER));
  return (
    <div className={cn("relative aspect-[4/3] overflow-hidden bg-muted", className)}>
      {/* Not draggable itself: the tile around it is what gets dragged. */}
      {url && (
        <Image
          src={url}
          alt=""
          fill
          unoptimized
          draggable={false}
          sizes="(max-width: 640px) 100vw, 400px"
          className="object-contain"
          onError={() => setUrl(url === github ? null : github)}
        />
      )}
    </div>
  );
}

/** Where a drop will land: a rule beside the photo, in the gap of a gap-x-6 grid. */
export function DropMark({ side, className }: { side: Side; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute inset-y-0 w-0.5 bg-brand",
        side === "before" ? "-left-3" : "-right-3",
        className,
      )}
    />
  );
}

export function usePhotoSelection<T>({
  items,
  setItems,
  idOf,
  blockOf,
}: {
  items: T[];
  setItems: (update: (items: T[]) => T[]) => void;
  idOf: (item: T) => string;
  blockOf: (item: T) => Block;
}) {
  const [selected, setSelected] = useState<Set<string>>(() => new Set());
  const clear = () => setSelected(new Set());

  // Click toggles a photo; Shift-click selects the run from the last one clicked.
  const anchor = useRef<{ id: string; block: Block } | null>(null);
  const select = (item: T, run: boolean) => {
    const from = anchor.current;
    const id = idOf(item);
    setSelected((current) => {
      const next = new Set(current);
      if (run && from && from.block === blockOf(item)) {
        const block = items.filter((p) => blockOf(p) === blockOf(item));
        const ends = [
          block.findIndex((p) => idOf(p) === from.id),
          block.findIndex((p) => idOf(p) === id),
        ];
        const [a, b] = ends.sort((x, y) => x - y);
        if (a >= 0) block.slice(a, b + 1).forEach((p) => next.add(idOf(p)));
        else next.add(id);
      } else if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    anchor.current = { id, block: blockOf(item) };
  };

  useEffect(() => {
    if (!selected.size) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(new Set());
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected.size]);

  const moveSelected = (side: Side) =>
    setItems((current) => {
      const blocks = new Set(current.filter((p) => selected.has(idOf(p))).map(blockOf));
      let next = current;
      for (const b of blocks) next = moveWithin(next, idOf, blockOf, b, selected, null, side);
      return next;
    });

  // Dragging: the ref is read by the drop handlers, the state only dims the
  // photos being carried and draws the drop mark.
  const drag = useRef<{ block: Block; ids: Set<string> } | null>(null);
  const [carried, setCarried] = useState<Set<string> | null>(null);
  const [dropAt, setDropAt] = useState<{ id: string; side: Side } | null>(null);

  const startDrag = (e: React.DragEvent, item: T) => {
    const id = idOf(item);
    // The selection in this block when the photo is part of it, else the photo alone.
    const ids = selected.has(id)
      ? new Set(
          items.filter((p) => blockOf(p) === blockOf(item) && selected.has(idOf(p))).map(idOf),
        )
      : new Set([id]);
    if (!selected.has(id)) {
      setSelected(new Set([id]));
      anchor.current = { id, block: blockOf(item) };
    }
    drag.current = { block: blockOf(item), ids };
    setCarried(ids);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("application/x-admin-photos", String(ids.size));
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

  const over = (e: React.DragEvent<HTMLElement>, item: T) => {
    const d = drag.current;
    if (!d || d.block !== blockOf(item)) return;
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "move";
    const id = idOf(item);
    if (d.ids.has(id)) return setDropAt(null);
    // Left half: before it. Right half: after it. The grid reads left to right.
    const box = e.currentTarget.getBoundingClientRect();
    const side: Side = e.clientX < box.left + box.width / 2 ? "before" : "after";
    setDropAt((at) => (at?.id === id && at.side === side ? at : { id, side }));
  };

  const drop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const d = drag.current;
    if (d && dropAt) {
      setItems((current) =>
        moveWithin(current, idOf, blockOf, d.block, d.ids, dropAt.id, dropAt.side),
      );
    }
    endDrag();
  };

  return {
    selected,
    setSelected,
    select,
    clear,
    moveSelected,
    carried,
    dropAt,
    /** The grid of a block: takes a drop in a gap, or below the last row, at the place last marked. */
    gridProps: (block: Block) => ({
      onDragOver: (e: React.DragEvent) => {
        if (drag.current?.block === block) e.preventDefault();
      },
      onDrop: drop,
    }),
    /** A photo's slot in the grid: marks a side of itself as the drop place. */
    slotProps: (item: T) => ({
      onDragOver: (e: React.DragEvent<HTMLElement>) => over(e, item),
      onDrop: drop,
    }),
    /** The photo itself: what gets clicked and dragged. */
    handleProps: (item: T) => ({
      draggable: true,
      onDragStart: (e: React.DragEvent) => startDrag(e, item),
      onDragEnd: endDrag,
      onClick: (e: React.MouseEvent) => select(item, e.shiftKey),
    }),
  };
}

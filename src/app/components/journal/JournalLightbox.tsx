"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

import type { LightboxImage } from "../common/LightboxViewer";

const LightboxViewer = dynamic(() => import("../common/LightboxViewer"), { ssr: false });

/**
 * One lightbox for the whole entry. It is handed every photograph in page
 * order, highlights then sections, so paging past the end of one section runs
 * on into the next.
 *
 * The photo rows inside are plain server-rendered markup, with no client
 * component per photograph: every photo is rendered twice (desktop and phone
 * rows), and on a 233-photo event hydrating a button and an image for each copy
 * was most of the page's main-thread work. Two listeners here stand in for
 * them. A click on any `[data-photo]` button opens the lightbox at that index,
 * and an image that finishes loading gets `data-loaded`, which fades it in.
 */
export function JournalLightbox({
  photos,
  children,
}: {
  photos: LightboxImage[];
  children: React.ReactNode;
}) {
  const [index, setIndex] = useState(-1);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = root.current;
    if (!node) return;

    const open = (event: MouseEvent) => {
      const button = (event.target as Element).closest<HTMLElement>("[data-photo]");
      if (button) setIndex(Number(button.dataset.photo));
    };
    // load does not bubble, but it still passes every ancestor while capturing.
    const reveal = (event: Event) => {
      if (event.target instanceof HTMLImageElement) event.target.dataset.loaded = "";
    };

    node.addEventListener("click", open);
    node.addEventListener("load", reveal, true);
    // Images that finished before this ran (warm cache, back navigation) fired
    // their load with nobody listening. Swept after the listener is in place,
    // so one that finishes in between is not missed.
    node.querySelectorAll("img").forEach((img) => {
      if (img.complete && img.naturalWidth > 0) img.dataset.loaded = "";
    });

    return () => {
      node.removeEventListener("click", open);
      node.removeEventListener("load", reveal, true);
    };
  }, []);

  return (
    <>
      <div ref={root}>{children}</div>
      {index >= 0 && <LightboxViewer images={photos} index={index} onClose={() => setIndex(-1)} />}
    </>
  );
}

/**
 * The rows past a block's first few, rendered but hidden until asked for. The
 * images inside are lazy, and a hidden lazy image is never fetched, so a
 * 118-photo set downloads what its opening rows do until someone wants the
 * rest. The rows are plain markup, so they cost no hydration either.
 */
export function ShowAllPhotos({ total, children }: { total: number; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div hidden={!open}>{children}</div>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="lab mt-6 w-full border border-border py-3 transition-colors hover:border-brand hover:text-brand"
        >
          Show all {total} photographs
        </button>
      )}
    </>
  );
}

"use client";

import dynamic from "next/dynamic";
import { createContext, useContext, useState } from "react";

import type { LightboxImage } from "../common/LightboxViewer";

const LightboxViewer = dynamic(() => import("../common/LightboxViewer"), { ssr: false });

const OpenAt = createContext<(index: number) => void>(() => {});

/**
 * One lightbox for the whole entry. It is handed every photograph in page
 * order, highlights then sections, so paging past the end of one section runs
 * on into the next. The grids around it stay server-rendered: only the buttons
 * below need the client.
 */
export function JournalLightbox({
  photos,
  children,
}: {
  photos: LightboxImage[];
  children: React.ReactNode;
}) {
  const [index, setIndex] = useState(-1);

  return (
    <OpenAt.Provider value={setIndex}>
      {children}
      {index >= 0 && <LightboxViewer images={photos} index={index} onClose={() => setIndex(-1)} />}
    </OpenAt.Provider>
  );
}

export function PhotoButton({
  index,
  label,
  ratio,
  children,
}: {
  index: number;
  label: string;
  /** CSS aspect-ratio, "4032 / 3024": the box holds its shape before the image lands. */
  ratio: string;
  children: React.ReactNode;
}) {
  const open = useContext(OpenAt);

  return (
    <button
      type="button"
      onClick={() => open(index)}
      aria-label={label}
      className="group relative block w-full cursor-zoom-in overflow-hidden bg-muted"
      style={{ aspectRatio: ratio }}
    >
      {children}
    </button>
  );
}

/**
 * The rows past a block's first few, rendered but hidden until asked for. The
 * images inside are lazy, and a hidden lazy image is never fetched, so a
 * 118-photo set costs what its opening rows do until someone wants the rest.
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

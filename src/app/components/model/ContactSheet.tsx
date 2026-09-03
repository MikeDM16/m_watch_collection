"use client";

import {
  getExternalResource,
  getImgURLForSizeType,
  SizeType,
} from "@/app/services/commonFunctions";
import dynamic from "next/dynamic";
import { useState } from "react";

import PlateImage from "../common/PlateImage";

const LightboxViewer = dynamic(() => import("../common/LightboxViewer"), { ssr: false });

const INITIAL = 24;

/**
 * The complete photographic record, as a contact sheet.
 *
 * Every size variant is square and the album declared all photos 2500x2500, so
 * the old justified-rows layout divided every row evenly anyway. A CSS grid
 * does the same with no layout JS.
 *
 * Tiles pull the 200x200 variant with 500x500 for 2x screens. The old gallery
 * fetched 500x500 for every tile at a 250px row height, and with a median of 37
 * photos (max 132) that was the bulk of a 3-5MB model page.
 */
export default function ContactSheet({ images }: { images: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const [index, setIndex] = useState(-1);

  if (!images.length) return null;

  const hidden = images.length - INITIAL;
  const visible = expanded ? images : images.slice(0, INITIAL);

  return (
    <section className="mt-14 border-t border-border pt-8">
      <div className="mb-4 flex flex-wrap items-baseline gap-3">
        <h2 className="font-display text-title">Photographs</h2>
        <span className="num ml-auto text-sm text-muted-foreground">{images.length}</span>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(84px,1fr))] gap-px border border-border bg-border">
        {visible.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Open photograph ${i + 1} of ${images.length}`}
            className="group relative aspect-square overflow-hidden bg-muted"
          >
            <PlateImage
              src={getExternalResource(getImgURLForSizeType(src, SizeType.THUMBNAIL))}
              alt=""
              width={200}
              height={200}
              sizes="(max-width: 640px) 25vw, 120px"
              loading={i < 12 ? undefined : "lazy"}
              priority={false}
              className="size-full object-contain group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {!expanded && hidden > 0 && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="lab w-full border border-t-0 border-border bg-background py-3 transition-colors hover:border-brand hover:text-brand"
        >
          Show all {images.length} photographs
        </button>
      )}

      <p className="mt-3 text-[0.7rem] text-muted-foreground">
        Shown in the order they were catalogued.
      </p>

      {/* The lightbox always receives the full set, so it pages through every
          photograph whether or not the sheet is expanded. */}
      {index >= 0 && <LightboxViewer images={images} index={index} onClose={() => setIndex(-1)} />}
    </section>
  );
}

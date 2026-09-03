"use client";

import collectionImageLoader from "@/app/services/imageLoader";
import { cn } from "@/lib/utils";
import Image, { type ImageProps } from "next/image";
import { useCallback, useState } from "react";

/**
 * A catalogue photograph that fades in instead of appearing.
 *
 * Every shot is a watch `object-contain` on a `bg-muted` plate, so an image
 * that pops in swaps the plate's grey for the photo's white in one frame. On a
 * 72-tile brand page that happens 72 times, independently. This is the single
 * cheapest-looking moment on the site and it costs one transition to fix.
 *
 * Deliberately not `placeholder="blur"`. A blurDataURL would have to be
 * generated offline into collection-index.json, which is 205KB for 321 entries
 * and would grow ~47%; the photographs live in a separate repo, so the
 * prebuild step that writes that index cannot compute them anyway. And a 4x4
 * blur of a watch on white is a pale square with a dark blob in it, which buys
 * nothing over the plate that is already there. The prop is accepted so an
 * LQIP step can be added later without touching a single call site.
 */
export default function PlateImage({
  className = "",
  priority,
  onLoad,
  show = true,
  // Destructured rather than left in the spread purely so jsx-a11y can see it.
  // ImageProps already makes it required at every call site.
  alt,
  ...rest
}: ImageProps & {
  blurDataURL?: string;
  /**
   * The caller's own visibility, for the two-frame hover crossfade. It has to
   * be a prop rather than an `opacity-0` class from the caller, because this
   * component merges classNames with tailwind-merge and its own opacity would
   * win over the caller's.
   */
  show?: boolean;
}) {
  // priority images are never faded: an element at opacity 0 is not an LCP
  // candidate, so fading the hero or the first row of a grid would push LCP by
  // the length of the transition. They render opaque from the first frame.
  const [loaded, setLoaded] = useState(Boolean(priority));

  /**
   * React does not fire onLoad for an <img> that was already complete when it
   * hydrated — a warm cache, a bfcache restore, a back-navigation. Without
   * this check those images keep `opacity: 0` forever and the grid renders
   * blank. The ref callback runs on mount, when `complete` is already true.
   */
  const measure = useCallback((node: HTMLImageElement | null) => {
    if (node?.complete) setLoaded(true);
  }, []);

  return (
    <Image
      loader={collectionImageLoader}
      alt={alt}
      priority={priority}
      ref={measure}
      onLoad={(event) => {
        setLoaded(true);
        onLoad?.(event);
      }}
      // transition-[opacity,transform], not transition-opacity: several callers
      // add a group-hover scale, and a bare transition-opacity here would win
      // through tailwind-merge and leave their transform snapping.
      className={cn(
        className,
        "transition-[opacity,transform] duration-500 ease-[cubic-bezier(.16,1,.3,1)]",
        loaded && show ? "opacity-100" : "opacity-0",
      )}
      {...rest}
    />
  );
}

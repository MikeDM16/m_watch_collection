"use client";

import collectionImageLoader from "@/app/services/imageLoader";
import { cn } from "@/lib/utils";
import Image, { type ImageProps } from "next/image";
import { useCallback, useState } from "react";

/** A catalogue photograph on a `bg-muted` plate, faded in rather than popped in. */
export default function PlateImage({
  className = "",
  priority,
  onLoad,
  show = true,
  // Destructured out of the spread so jsx-a11y can see it.
  alt,
  ...rest
}: ImageProps & {
  blurDataURL?: string;
  /**
   * The caller's own visibility, for the two-frame hover crossfade. Must be a
   * prop rather than an `opacity-0` class: classNames merge with tailwind-merge
   * and this component's own opacity would win over the caller's.
   */
  show?: boolean;
}) {
  // An element at opacity 0 is not an LCP candidate, so priority images never
  // fade — they render opaque from the first frame.
  const [loaded, setLoaded] = useState(Boolean(priority));

  // React does not fire onLoad for an <img> already complete at hydration (warm
  // cache, bfcache, back-navigation), which would leave it at opacity 0 forever.
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
      // transition-[opacity,transform] so a caller's group-hover scale still
      // animates; a bare transition-opacity would win through tailwind-merge.
      className={cn(
        className,
        "transition-[opacity,transform] duration-500 ease-[cubic-bezier(.16,1,.3,1)]",
        loaded && show ? "opacity-100" : "opacity-0",
      )}
      {...rest}
    />
  );
}

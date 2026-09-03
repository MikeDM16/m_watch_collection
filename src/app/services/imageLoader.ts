"use client";

import type { ImageLoaderProps } from "next/image";

/**
 * The square variants scripts/images/2_make_variants.py writes beside every source
 * photo, ascending. Anything wider than the largest is served by the largest.
 */
const VARIANTS = [200, 500, 800, 1200] as const;

/**
 * The `_800x800` that getImgURLForSizeType baked into the filename. Enumerated
 * rather than `_(\d+)x\1` so an unrelated filename can never be mistaken for a
 * variant and rewritten into a 404.
 */
const VARIANT_SUFFIX = /_(200|500|800|1200)x\1(\.[^./]+)$/;

/**
 * Resolves a catalogue photo to its nearest pregenerated variant instead of
 * routing it through /_next/image.
 *
 * Every photo in MWatchCollectionResources already exists at 200/500/800/1200px,
 * written at q70 by scripts/images/2_make_variants.py.
 * Paying Vercel to resize an 800x800 q70 JPEG down to 640px is work we already
 * did offline, and it is billed per (url, w, q, Accept) cache key — so a single
 * 200x200 thumbnail could bill twenty transformations against a 5,000/month
 * quota that a 13,678-image catalogue overruns on its own.
 *
 * This does not shorten the srcSet: generateImgAttrs builds the width ladder
 * before the loader runs, so several rungs resolve to the same URL. That is
 * valid, browsers dedupe it to one fetch, and images.deviceSizes/imageSizes in
 * next.config.ts keep the ladder short enough that the markup stays small.
 *
 * URLs with no variant suffix — brand logos, saleReport.JPG — pass through
 * untouched; there is nothing to pick between.
 */
export default function collectionImageLoader({ src, width }: ImageLoaderProps): string {
  if (!VARIANT_SUFFIX.test(src)) return src;

  const target = VARIANTS.find((v) => v >= width) ?? VARIANTS[VARIANTS.length - 1];
  return src.replace(VARIANT_SUFFIX, `_${target}x${target}$2`);
}

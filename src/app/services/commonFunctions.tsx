import type { LucideIcon } from "lucide-react";

import { brandsDB } from "../data/brands";

/**
 * The single CDN URL builder. Everything that shows a resources-repo image goes
 * through here: next/image call sites, the HeroBand and SiteFooter CSS
 * backgrounds, and the PinnedSpecViewer raw <img> frames.
 *
 * raw.githubusercontent.com, not a general-purpose CDN in front of it. jsDelivr
 * was tried here — same warm latency, longer browser-cache TTL on paper — but
 * a burst of concurrent first-time requests (exactly what a photo-heavy page
 * produces) reproducibly dropped 2.5-4.5% of them with 403/404/timeout, and
 * jsDelivr cached some of those failures and kept serving them on retry. Raw
 * had zero failures on the identical burst. That is a correctness regression,
 * not a tuning tradeoff, so it stays reverted.
 *
 * Changing this host means changing images.remotePatterns in next.config.ts in
 * the same commit, or every image still on Vercel's optimiser 400s.
 */
export function getExternalResource(image_url: string) {
  const base_url = "https://raw.githubusercontent.com/MikeDM16/MWatchCollectionResources/master";
  const proxy_url = `${encodeURI(base_url)}/${encodeURI(image_url)}`;
  return proxy_url;
}

/**
 * Gets the local file path for an image from the MWatchCollectionResources repository
 * Only works in Node.js development mode.
 * @param imagePath - Path from JSON (e.g., "public/assets/Images/Omega/...")
 * @returns Absolute local file path
 */
export function getLocalImagePath(imagePath: string): string {
  // TODO
  return imagePath;
}

/**
 * Reads a local image file and converts it to a data URI for @react-pdf/renderer
 * Only works in Node.js development mode.
 * @param imagePath - Path from JSON (e.g., "public/assets/Images/Omega/...")
 * @returns Data URI string (e.g., "data:image/jpeg;base64,...")
 */
export function getLocalImageAsDataUri(imagePath: string): string {
  // TODO
  return imagePath;
}

export function getSaleReportImage(baseImgSrc: string): string {
  const imagePath = baseImgSrc.split("/");
  imagePath.pop();
  return imagePath.join("/") + "/saleReport.JPG";
}

export const SizeType = {
  FULL_HD: "1200x1200",
  GALLERY: "800x800",
  SLIDER: "500x500",
  THUMBNAIL: "200x200",
  DEFAULT: "Default",
};

export function getImgURLForSizeType(imageUrl: string, type: string) {
  if (type == SizeType.DEFAULT) {
    return imageUrl;
  }

  return `${imageUrl.split(".")[0]}_${type}.${imageUrl.split(".")[1]}`;
}

/**
 * Icon plus label. A real component rather than a plain function call, so it
 * gets its own fiber and key. One icon family across the site (lucide), one
 * stroke weight.
 */
export function IconLabel({
  icon: Icon,
  text,
  className = "",
}: {
  icon: LucideIcon;
  text: string;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Icon aria-hidden strokeWidth={1.5} className="size-4 shrink-0" />
      <span>{text}</span>
    </span>
  );
}

export function getPathParameter(value: string): string {
  return decodeURIComponent(value);
}

export function setPathParameter(value: string): string {
  return encodeURIComponent(value);
}

export function routeToMainPageHeader() {
  return "/#";
}

export function routeToMainPageAllBrandListing() {
  return "/#AllBrandsItems";
}

export function routeToCollectionBrandPage(brandName: string): string {
  return `/collection/${setPathParameter(brandName)}`;
}

export function routeToCollectionBrandModelPage(brandName: string, modelName: string): string {
  return `/collection/${setPathParameter(brandName)}/${setPathParameter(modelName)}`;
}

export function selectMultipleBackgroundImages(count: number): string[] {
  const allImages = brandsDB.flatMap((b) => b.backgrounImages || []);

  if (allImages.length === 0) return background_images_paths.slice(0, count);

  const shuffled = [...allImages].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

/**
 * Fallback hero backgrounds, used when a brand carries no `backgrounImages`.
 * TagHeuer_BG3.JPG and macro_mov_bg.JPG were listed here but both 404 on the
 * resources CDN, so roughly half of those heroes rendered a broken band.
 * Re-add them here once they exist in MWatchCollectionResources.
 */
export const background_images_paths = [
  "public/assets/Backgrouds/Tissot_BG1.jpg",
  "public/assets/Backgrouds/Tissot_BG3.jpg",
];

/**
 * Deterministic pick from a list, so the choice is stable across builds and
 * identical on server and client. Replaces the old useEffect randomiser that
 * made the hero and footer visibly swap after hydration.
 */
export function pickBackground(images: string[] | undefined, seed: string, fallback?: string) {
  const pool = images?.length ? images : [fallback ?? background_images_paths[0]];
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  return pool[hash % pool.length];
}

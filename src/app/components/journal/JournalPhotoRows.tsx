import {
  getExternalResource,
  getImgURLForSizeType,
  SizeType,
} from "@/app/services/commonFunctions";
import collectionImageLoader from "@/app/services/imageLoader";
import { getImageProps } from "next/image";
import Link from "next/link";

import { ShowAllPhotos } from "./JournalLightbox";
import { DESKTOP, justify, PHONE } from "./justify";

export interface PlacedPhoto {
  src: string;
  w: number;
  h: number;
  caption?: string;
  /** Position in the entry's lightbox sequence. */
  index: number;
  watches: { legend: string; href: string }[];
}

/**
 * Rows shown at desktop width before the rest of a block folds behind a "Show
 * all". Two rows introduce a block; the rest is a click away.
 */
const OPEN_ROWS = 2;

/**
 * next/image writes a six-width ladder (128, 200, 500, 640, 800, 1200), but
 * imageLoader has four files, so 128w and 200w name the same one, as do 640w
 * and 800w. Keeping the widest width per file picks the same file at every
 * size, and the ladder is written for every photograph twice over: desktop and
 * phone rows, then again in the page's RSC data.
 */
function widestPerFile(srcSet = ""): string {
  const byFile = new Map<string, string>();
  for (const candidate of srcSet.split(", ")) {
    byFile.set(candidate.slice(0, candidate.lastIndexOf(" ")), candidate);
  }
  return [...byFile.values()].join(", ");
}

function Figure({
  photo,
  sizes,
  fallbackAlt,
}: {
  photo: PlacedPhoto;
  sizes: string;
  fallbackAlt: string;
}) {
  const alt = photo.caption || photo.watches[0]?.legend || fallbackAlt;

  // The <img> next/image would render, without its client component: these
  // rows can hold hundreds of photographs. JournalLightbox opens the button and
  // sets data-loaded, which fades the image in as PlateImage does elsewhere.
  const { props: image } = getImageProps({
    src: getExternalResource(getImgURLForSizeType(photo.src, SizeType.GALLERY)),
    alt,
    fill: true,
    sizes,
    loading: "lazy",
    loader: collectionImageLoader,
  });

  // Growing in proportion to the aspect ratio gives every photo in the row the
  // same height, whatever width the row ends up at.
  return (
    <figure className="m-0 min-w-0" style={{ flex: `${(photo.w / photo.h).toFixed(4)} 1 0px` }}>
      <button
        type="button"
        data-photo={photo.index}
        aria-label={`Open photograph ${photo.index + 1}`}
        className="group relative block w-full cursor-zoom-in overflow-hidden bg-muted"
        // The box holds the photo's shape before the image lands.
        style={{ aspectRatio: `${photo.w} / ${photo.h}` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          {...image}
          srcSet={widestPerFile(image.srcSet)}
          // fill's inline position style, as the classes below: it was repeated
          // for every photograph.
          style={undefined}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover text-transparent opacity-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.02] data-[loaded]:opacity-100"
        />
      </button>
      {(photo.caption || photo.watches.length > 0) && (
        <figcaption className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          {photo.caption && (
            <span className="text-[0.8rem] leading-snug text-muted-foreground">
              {photo.caption}
            </span>
          )}
          {photo.watches.map((w) => (
            <Link
              key={w.href}
              href={w.href}
              className="lab text-brand no-underline underline-offset-4 hover:underline"
            >
              {w.legend}
            </Link>
          ))}
        </figcaption>
      )}
    </figure>
  );
}

function Rows({
  rows,
  phone,
  fallbackAlt,
}: {
  rows: PlacedPhoto[][];
  phone: boolean;
  fallbackAlt: (photo: PlacedPhoto) => string;
}) {
  return rows.map((row) => {
    const total = row.reduce((n, p) => n + p.w / p.h, 0);
    return (
      <div key={row[0].index} className="flex items-start gap-2">
        {row.map((photo) => {
          // Each photo's share of its row's width, which is what `sizes` needs
          // to fetch the variant that fits rather than the largest one.
          const share = photo.w / photo.h / total;
          const sizes = phone
            ? `${Math.max(1, Math.round(share * 100))}vw`
            : `(min-width: 1440px) ${Math.round(share * DESKTOP.width)}px, ${Math.max(1, Math.round(share * 100))}vw`;
          return (
            <Figure
              key={photo.index}
              photo={photo}
              sizes={sizes}
              fallbackAlt={fallbackAlt(photo)}
            />
          );
        })}
      </div>
    );
  });
}

/** Rows from the start up to the first that reaches `count` photographs. */
function splitAt(rows: PlacedPhoto[][], count: number): [PlacedPhoto[][], PlacedPhoto[][]] {
  let seen = 0;
  const i = rows.findIndex((row) => (seen += row.length) >= count);
  return i < 0 ? [rows, []] : [rows.slice(0, i + 1), rows.slice(i + 1)];
}

/**
 * A block of photographs as justified rows (see justify.ts).
 *
 * Rendered twice, grouped for a desktop width and for a phone, and swapped at
 * the sm breakpoint. Regrouping on the client instead would shift the whole
 * layout after hydration, and the copy that is not displayed costs no image
 * requests: its images are lazy, and a hidden lazy image is never fetched. Nor
 * does it cost hydration, since the photos are plain markup (see Figure).
 */
export default function JournalPhotoRows({
  photos,
  altPrefix,
}: {
  photos: PlacedPhoto[];
  altPrefix: string;
}) {
  const desktop = justify(photos, DESKTOP);
  const phone = justify(photos, PHONE);
  const fallbackAlt = (p: PlacedPhoto) => `${altPrefix}, photograph ${p.index + 1}`;

  // Folded by desktop rows, so the cut never leaves a row half filled; the
  // phone copy then shows the same photographs.
  const collapse = desktop.length > OPEN_ROWS;
  const [desktopTop, desktopRest] = collapse
    ? [desktop.slice(0, OPEN_ROWS), desktop.slice(OPEN_ROWS)]
    : [desktop, []];
  const shown = desktopTop.reduce((n, row) => n + row.length, 0);
  const [phoneTop, phoneRest] = collapse ? splitAt(phone, shown) : [phone, []];

  return (
    <>
      <div className="hidden flex-col gap-6 sm:flex">
        <Rows rows={desktopTop} phone={false} fallbackAlt={fallbackAlt} />
      </div>
      <div className="flex flex-col gap-6 sm:hidden">
        <Rows rows={phoneTop} phone fallbackAlt={fallbackAlt} />
      </div>
      {collapse && (
        <ShowAllPhotos total={photos.length}>
          <div className="mt-6 hidden flex-col gap-6 sm:flex">
            <Rows rows={desktopRest} phone={false} fallbackAlt={fallbackAlt} />
          </div>
          <div className="mt-6 flex flex-col gap-6 sm:hidden">
            <Rows rows={phoneRest} phone fallbackAlt={fallbackAlt} />
          </div>
        </ShowAllPhotos>
      )}
    </>
  );
}

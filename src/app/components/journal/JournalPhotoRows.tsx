import {
  getExternalResource,
  getImgURLForSizeType,
  SizeType,
} from "@/app/services/commonFunctions";
import Link from "next/link";

import PlateImage from "../common/PlateImage";
import { PhotoButton, ShowAllPhotos } from "./JournalLightbox";
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

  // Growing in proportion to the aspect ratio gives every photo in the row the
  // same height, whatever width the row ends up at.
  return (
    <figure className="m-0 min-w-0" style={{ flex: `${(photo.w / photo.h).toFixed(4)} 1 0px` }}>
      <PhotoButton
        index={photo.index}
        label={`Open photograph ${photo.index + 1}`}
        ratio={`${photo.w} / ${photo.h}`}
      >
        <PlateImage
          src={getExternalResource(getImgURLForSizeType(photo.src, SizeType.GALLERY))}
          alt={alt}
          fill
          sizes={sizes}
          loading="lazy"
          className="object-cover group-hover:scale-[1.02]"
        />
      </PhotoButton>
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
 * requests: its images are lazy, and a hidden lazy image is never fetched.
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

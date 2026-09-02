import collectionService from "@/app/services/collectionService";
import {
  getExternalResource,
  getImgURLForSizeType,
  getPathParameter,
  SizeType,
} from "@/app/services/commonFunctions";
import { ImageResponse } from "next/og";

/**
 * The social card for a model.
 *
 * The photographs are square (1200x1200) and were being handed to crawlers as
 * the OG image directly, so every card cropped the watch badly. This composes
 * the same photograph into the 1200x630 that cards actually want, letterboxed
 * rather than cropped, with the piece named alongside.
 *
 * Deliberately **no generateStaticParams**: prerendering would render 321
 * images on every build for a route that crawlers hit rarely and the CDN
 * caches. It renders on demand instead, and the build stays flat.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "A timepiece from the M Watch Collection archive";

const PAPER = "#f7f7f6";
const INK = "#16161a";
const MUTED = "#6b6b73";
const BRAND = "#c40d2e";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ brand: string; model: string }>;
}) {
  const { brand: rawBrand, model: rawModel } = await params;
  const entry = collectionService.getIndexEntry(getPathParameter(rawModel));
  const brand = getPathParameter(rawBrand);

  const photo = entry
    ? getExternalResource(getImgURLForSizeType(entry.srcImage, SizeType.GALLERY))
    : null;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: PAPER,
        color: INK,
        fontFamily: "sans-serif",
      }}
    >
      {photo && (
        <div
          style={{
            width: 540,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 40,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse
                renders through satori, which has no next/image. */}
          <img src={photo} alt="" width={460} height={460} style={{ objectFit: "contain" }} />
        </div>
      )}

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 72px 0 24px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: BRAND,
          }}
        >
          {entry ? `${entry.year} · ${entry.brand}` : brand}
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: entry && entry.legend.length > 34 ? 52 : 68,
            lineHeight: 1.1,
            fontWeight: 600,
            letterSpacing: -1.5,
          }}
        >
          {entry?.legend ?? brand}
        </div>

        {entry?.movementTitle && (
          <div style={{ marginTop: 20, fontSize: 26, color: MUTED }}>{entry.movementTitle}</div>
        )}

        <div
          style={{
            marginTop: 44,
            paddingTop: 22,
            borderTop: `1px solid #dcdcd8`,
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: MUTED,
          }}
        >
          M Watch Collection
        </div>
      </div>
    </div>,
    size,
  );
}

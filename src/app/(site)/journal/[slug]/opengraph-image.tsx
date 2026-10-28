import {
  getExternalResource,
  getImgURLForSizeType,
  SizeType,
} from "@/app/services/commonFunctions";
import journalService from "@/app/services/journalService";
import { ImageResponse } from "next/og";

/**
 * The social card for a Journal entry: the cover beside the title, in the same
 * frame as the model cards. The cover is cropped to fill its half, unlike a
 * model photograph, because an event photo is a scene rather than an object.
 *
 * Deliberately no generateStaticParams, as with the model card: it renders on
 * demand and the CDN caches it.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "An entry from the M Watch Collection Journal";

const PAPER = "#f7f7f6";
const INK = "#16161a";
const MUTED = "#6b6b73";
const BRAND = "#c40d2e";

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const entry = journalService.getBySlug((await params).slug);
  const cover = entry
    ? getExternalResource(getImgURLForSizeType(entry.cover, SizeType.GALLERY))
    : null;

  const kicker = entry
    ? [
        journalService.kindLabel(entry),
        entry.kind === "event" ? journalService.formatDate(entry.date) : entry.brand,
      ]
        .filter(Boolean)
        .join(" · ")
    : "Journal";

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
      {/* ImageResponse renders through satori, which has no next/image. */}
      {cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={cover} alt="" width={560} height={630} style={{ objectFit: "cover" }} />
      )}

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 64px",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: BRAND }}>
          {kicker}
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: entry && entry.title.length > 28 ? 52 : 68,
            lineHeight: 1.1,
            fontWeight: 600,
            letterSpacing: -1.5,
          }}
        >
          {entry?.title ?? "Journal"}
        </div>

        {(entry?.place || entry?.dek) && (
          <div style={{ marginTop: 20, fontSize: 26, color: MUTED }}>
            {entry.place ?? entry.dek}
          </div>
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
          M Watch Collection · Journal
        </div>
      </div>
    </div>,
    size,
  );
}

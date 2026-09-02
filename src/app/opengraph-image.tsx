import { ImageResponse } from "next/og";

import collectionService from "./services/collectionService";

/**
 * The default social card, used by every route that does not supply its own.
 * Static — nothing here depends on a route param, so it is rendered once at
 * build time.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "M Watch Collection";

export default function OpengraphImage() {
  const stats = collectionService.getCollectionStatistic();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#f7f7f6",
        color: "#16161a",
        fontFamily: "sans-serif",
        padding: "0 88px",
      }}
    >
      <div style={{ fontSize: 24, letterSpacing: 5, textTransform: "uppercase", color: "#c40d2e" }}>
        Since 2015
      </div>

      <div
        style={{ marginTop: 24, fontSize: 92, fontWeight: 600, letterSpacing: -3, lineHeight: 1 }}
      >
        M Watch Collection
      </div>

      <div style={{ marginTop: 28, fontSize: 30, color: "#6b6b73", maxWidth: 820 }}>
        Collecting, restoring and documenting watches.
      </div>

      <div
        style={{
          marginTop: 56,
          paddingTop: 26,
          borderTop: "1px solid #dcdcd8",
          display: "flex",
          gap: 64,
          fontSize: 24,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#6b6b73",
        }}
      >
        {/* Template literals, not `{value} label`: satori treats an
              expression and its adjacent text as two child nodes and rejects
              any div with more than one unless it declares a display mode. */}
        <div>{`${stats.Models} Timepieces`}</div>
        <div>{`${stats.Brands} Brands`}</div>
      </div>
    </div>,
    size,
  );
}

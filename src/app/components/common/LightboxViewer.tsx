"use client";

import {
  getExternalResource,
  getImgURLForSizeType,
  SizeType,
} from "@/app/services/commonFunctions";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

/**
 * A photograph for the lightbox. A bare path is a catalogue photo, which is
 * always square; a Journal photo brings its real pixel size.
 */
export type LightboxImage = string | { src: string; w: number; h: number };

/**
 * The lightbox half of the old ImageGalleryComponent, extracted verbatim so the
 * contact sheet and the movement strip can share one configuration.
 *
 * Five tiers. Each variant is fitted inside its box rather than cropped to it,
 * so a 4032x3024 photograph's "_1200x1200" file is really 1200x900: the tiers
 * declare that fitted size, or the lightbox would letterbox and mis-pick them.
 */
export function buildSlides(images: LightboxImage[]) {
  return images.map((entry) => {
    const { src, w, h } = typeof entry === "string" ? { src: entry, w: 1, h: 1 } : entry;
    const fit = (url: string, box: number) => {
      const scale = box / Math.max(w, h);
      return { src: url, width: Math.round(w * scale), height: Math.round(h * scale) };
    };
    const variant = (type: string) => getExternalResource(getImgURLForSizeType(src, type));

    return {
      ...fit(getExternalResource(src), 2500),
      srcSet: [
        fit(getExternalResource(src), 2000),
        fit(variant(SizeType.FULL_HD), 1200),
        fit(variant(SizeType.GALLERY), 800),
        fit(variant(SizeType.SLIDER), 500),
        fit(variant(SizeType.THUMBNAIL), 200),
      ],
    };
  });
}

export default function LightboxViewer({
  images,
  index,
  onClose,
}: {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
}) {
  return (
    <Lightbox
      index={index}
      slides={buildSlides(images)}
      open={index >= 0}
      close={onClose}
      plugins={[Fullscreen, Slideshow, Thumbnails, Counter, Zoom]}
      thumbnails={{
        showToggle: true,
        position: "bottom",
        border: 1,
        borderRadius: 1,
        padding: 1,
        gap: 10,
        imageFit: "contain",
        vignette: true,
      }}
      slideshow={{ autoplay: true, delay: 5000 }}
      zoom={{ maxZoomPixelRatio: 1, doubleClickMaxStops: 1, scrollToZoom: true }}
      counter={{ separator: "/", container: {} }}
      styles={{ container: { backgroundColor: "rgba(0, 0, 0, .82)" } }}
    />
  );
}

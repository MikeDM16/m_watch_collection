"use client";

import {
  getExternalResource,
  getImgURLForSizeType,
  SizeType,
} from "@/app/services/commonFunctions";
import { useMemo } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import {
  Ambient,
  SlideFrame,
  SLIDESHOW_DELAY,
  useMedia,
  ViewerHeader,
  viewerIcons,
} from "./lightboxParts";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./lightbox.css";

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
 *
 * `thumbnail` is the 200px variant. The filmstrip, the ambient glow and the
 * blur-up under a loading slide all use it, and it is usually cached already.
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
      thumbnail: variant(SizeType.THUMBNAIL),
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

// Module-level, so the plugin list is the same array on every render.
// The library prepends each plugin's toolbar button, so this order reads back
// as zoom, filmstrip, slideshow, fullscreen, then close.
const PLUGINS = [Fullscreen, Slideshow, Thumbnails, Zoom, Ambient];

// The site's one curve: tile cues, scroll reveals, and now the viewer.
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

/**
 * The photo viewer. Always dark, whatever the site theme, because it sits on
 * photography; lightbox.css carries the look under the `lb` class, which the
 * library puts on its portal.
 */
export default function LightboxViewer({
  images,
  index,
  onClose,
}: {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
}) {
  const slides = useMemo(() => buildSlides(images), [images]);

  // A mouse or trackpad gets the arrows, the zoom buttons and the idle fade.
  // Touch swipes and pinches instead, and gets the room back.
  const fine = useMedia("(hover: hover) and (pointer: fine)");
  const compact = useMedia("(max-width: 639px)");
  const thumb = compact ? 48 : 64;

  return (
    <Lightbox
      index={index}
      slides={slides}
      open={index >= 0}
      close={onClose}
      className="lb"
      plugins={PLUGINS}
      render={{
        ...viewerIcons,
        controls: () => <ViewerHeader idle={fine} />,
        slideContainer: SlideFrame,
        ...(fine
          ? null
          : { buttonPrev: () => null, buttonNext: () => null, buttonZoom: () => null }),
      }}
      // The filmstrip shows 2 * preload + 1 photographs, and the carousel
      // fetches as many. Three either side on a desktop, two on a phone.
      carousel={{ preload: fine ? 3 : 2, padding: compact ? "8px" : "24px" }}
      animation={{
        fade: 320,
        swipe: 480,
        navigation: 420,
        easing: { fade: EASE, swipe: EASE, navigation: EASE },
      }}
      controller={{ closeOnBackdropClick: true, closeOnPullDown: true }}
      thumbnails={{
        showToggle: true,
        position: "bottom",
        // Sizes go through the props, not CSS: the filmstrip's slide animation
        // is computed from them.
        width: thumb,
        height: thumb,
        border: 0,
        borderRadius: 2,
        padding: 0,
        gap: compact ? 6 : 8,
        imageFit: "cover",
        vignette: false,
      }}
      slideshow={{ autoplay: false, delay: SLIDESHOW_DELAY }}
      zoom={{ maxZoomPixelRatio: 1, doubleClickMaxStops: 1, scrollToZoom: true }}
    />
  );
}

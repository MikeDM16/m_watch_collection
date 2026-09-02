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
 * The lightbox half of the old ImageGalleryComponent, extracted verbatim so the
 * contact sheet and the movement strip can share one configuration.
 * The five-tier srcSet is unchanged.
 */
export function buildSlides(images: string[]) {
  return images.map((entry) => ({
    src: getExternalResource(entry),
    width: 2500,
    height: 2500,
    srcSet: [
      { src: getExternalResource(entry), width: 2000, height: 2000 },
      {
        src: getExternalResource(getImgURLForSizeType(entry, SizeType.FULL_HD)),
        width: 1200,
        height: 1200,
      },
      {
        src: getExternalResource(getImgURLForSizeType(entry, SizeType.GALLERY)),
        width: 800,
        height: 800,
      },
      {
        src: getExternalResource(getImgURLForSizeType(entry, SizeType.SLIDER)),
        width: 500,
        height: 500,
      },
      {
        src: getExternalResource(getImgURLForSizeType(entry, SizeType.THUMBNAIL)),
        width: 200,
        height: 200,
      },
    ],
  }));
}

export default function LightboxViewer({
  images,
  index,
  onClose,
}: {
  images: string[];
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

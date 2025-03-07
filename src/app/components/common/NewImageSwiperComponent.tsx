import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
// import optional lightbox plugins
import Counter from "yet-another-react-lightbox/plugins/counter";

import "yet-another-react-lightbox/plugins/counter.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/plugins/thumbnails.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";

import {
  getExternalResource,
  getImgURLForSizeType,
  SizeType,
} from "@/app/services/commonFunctions";
import { RowsPhotoAlbum } from "react-photo-album";

export default function ImageSwiperComponent(galleryImages: string[]) {
  const [, setOpen] = React.useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const items = galleryImages.map((entry) => {
    const srcImg = getExternalResource(entry);
    const carouselImageUrl = getExternalResource(getImgURLForSizeType(entry, SizeType.GALLERY));
    const sliderImageUrl = getExternalResource(getImgURLForSizeType(entry, SizeType.SLIDER));
    const thumbnailImageUrl = getExternalResource(getImgURLForSizeType(entry, SizeType.THUMBNAIL));
    return {
      src: srcImg,
      width: 1500,
      height: 1500,
      srcSet: [
        { src: srcImg, width: 2000, height: 2000 },
        { src: carouselImageUrl, width: 800, height: 800 },
        { src: sliderImageUrl, width: 500, height: 500 },
        { src: thumbnailImageUrl, width: 200, height: 200 },
      ],
    };
  });

  return (
    <div>
      <RowsPhotoAlbum
        photos={items}
        targetRowHeight={150}
        onClick={({ index: current }) => openLightbox(current)}
      />

      <Lightbox
        index={index}
        slides={items}
        open={true}
        close={() => setOpen(false)}
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
        slideshow={{ autoplay: false, delay: 3500 }}
        zoom={{
          maxZoomPixelRatio: 3,
          doubleClickMaxStops: 1,
          scrollToZoom: true,
        }}
        counter={{ separator: "/", container: {} }}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .6)" } }}
      />
    </div>
  );
}

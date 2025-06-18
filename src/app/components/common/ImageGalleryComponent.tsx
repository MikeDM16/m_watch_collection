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

export default function ImageGalleryComponent(galleryImages: string[]) {
  const [index, setIndex] = useState(-1);

  const items = galleryImages.map((entry) => {
    const srcImg = getExternalResource(entry);
    const fullhdImageUrl = getExternalResource(getImgURLForSizeType(entry, SizeType.FULL_HD));
    //const galleryImageUrl = getExternalResource(getImgURLForSizeType(entry, SizeType.GALLERY));
    //const sliderImageUrl = getExternalResource(getImgURLForSizeType(entry, SizeType.SLIDER));
    const thumbnailImageUrl = getExternalResource(getImgURLForSizeType(entry, SizeType.THUMBNAIL));
    return {
      src: srcImg,
      width: 2500, // size when opening the ligthbox modal
      height: 2500,
      srcSet: [
        { src: srcImg, width: 2000, height: 2000 },
        { src: fullhdImageUrl, width: 1200, height: 1200 },
        //{ src: galleryImageUrl, width: 800, height: 800 },
        //{ src: sliderImageUrl, width: 500, height: 500 },
        { src: thumbnailImageUrl, width: 200, height: 200 },
      ],
    };
  });

  return (
    <div>
      <RowsPhotoAlbum
        photos={items}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={items}
        open={index >= 0}
        close={() => setIndex(-1)}
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
        zoom={{
          maxZoomPixelRatio: 1,
          doubleClickMaxStops: 1,
          scrollToZoom: true,
        }}
        counter={{ separator: "/", container: {} }}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .6)" } }}
      />
    </div>
  );
}

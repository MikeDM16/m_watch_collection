import {
  getExternalResource,
  getImgURLForSizeType,
  SizeType,
} from "@/app/services/commonFunctions";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import React, { useEffect, useRef, useState } from "react";

export default function ImageGalleryComponent(galleryImages: string[]) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [, setGalleryContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      setGalleryContainer(containerRef.current);
    }
  }, []);

  const items = galleryImages.map((entry) => {
    const srcImg = getExternalResource(entry);
    const galleryImageUrl = getExternalResource(getImgURLForSizeType(entry, SizeType.GALLERY));
    const sliderImageUrl = getExternalResource(getImgURLForSizeType(entry, SizeType.SLIDER));
    const thumbnailImageUrl = getExternalResource(getImgURLForSizeType(entry, SizeType.THUMBNAIL));
    return {
      src: srcImg, // The original high-res image for the zoom
      responsive: [`${sliderImageUrl} 550`, `${galleryImageUrl} 840`].join(", "), // Responsive image options
      thumb: thumbnailImageUrl, // Thumbnail for preview
    };
  });

  console.log(containerRef.current);
  return (
    <div className="">
      <div
        style={{
          height: "600px",
        }}
        ref={containerRef}
      ></div>
      <div>
        <LightGallery
          container={containerRef.current}
          plugins={[lgZoom, lgThumbnail]}
          closable={false}
          showMaximizeIcon={true}
          slideDelay={400}
          thumbWidth={130}
          thumbHeight={"100px"}
          thumbMargin={6}
          appendSubHtmlTo={".lg-item"}
          dynamic={true}
          dynamicEl={items}
          hash={false}
          download={false}
          counter={true}
          elementClassNames={"inline-gallery-container"}
        ></LightGallery>
      </div>
    </div>
  );
}

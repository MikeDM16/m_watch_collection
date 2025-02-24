import {
  getExternalResource,
  getImgURLForSizeType,
  SizeType,
} from "@/app/services/commonFunctions";
import {
  Autoplay,
  EffectFade,
  FreeMode,
  Keyboard,
  Navigation,
  Pagination,
  Thumbs,
  Zoom,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/zoom";
import "swiper/css/thumbs";

import { useState } from "react";
import { Swiper as SwiperInstance } from "swiper/types"; // Import Swiper type

// import required modules
import ImageComponent from "./ImageComponent";

export interface ImageSwiperComponentProps {
  images: string[];
}

export default function ImageSwiperComponent(props: ImageSwiperComponentProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);

  const swiperSettings = {
    modules: [
      Navigation,
      Autoplay,
      Keyboard,
      Zoom,
      Thumbs,
      EffectFade,
      Pagination,
      EffectFade,
      FreeMode,
      Thumbs,
    ],

    // effect: "fade",

    // navigation
    // Arrows over the sides for nav
    navigation: true,

    /**
        breakpoints: {
          1920: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
          },
          720: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
        },*/

    /* Pagination
        pagination: {
          type: 'bullets',
          clickable: true,
          dynamicBullets: false,
        },*/

    // Scrollbar
    scrollbar: false,

    // AutoPlay
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },

    zoom: true,

    lazy: "true",
    // className: "swiper-transition", //add CSS class
    // Keyboard
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    // Center slides with equal side spacing
    centerInsufficientSlides: true,
    // cssMode: true,
    speed: 500,
    parallax: { enabled: true },
  };

  return (
    <div className="flex items-start">
      {/* Left-side Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        direction="vertical"
        slidesPerView={4}
        spaceBetween={10}
        modules={[Thumbs]}
        className="h-[300px] w-32 sm:h-[400px] md:h-[500px] lg:h-[600px]" // Responsive height
      >
        {props.images.map((src, index) => (
          <SwiperSlide key={index}>
            <ImageComponent
              src={getExternalResource(getImgURLForSizeType(src, SizeType.THUMBNAIL))}
              alt={`Thumbnail ${index + 1}`}
              className="h-auto w-full cursor-pointer object-cover"
              loading="eager"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Main Image Swiper */}
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        {...swiperSettings}
        pagination={{
          type: "fraction", // Use fraction style like "1/10"
          clickable: true,
        }}
        className="max-h-[800px] w-[600px] overflow-hidden"
      >
        {props.images.map((src, index) => (
          <SwiperSlide key={index} className="swiper-zoom-target">
            <div className="swiper-zoom-container">
              <ImageComponent
                src={getExternalResource(getImgURLForSizeType(src, SizeType.FULL_HD))}
                alt={`Thumbnail ${index + 1}`}
                className="h-full w-full cursor-pointer object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

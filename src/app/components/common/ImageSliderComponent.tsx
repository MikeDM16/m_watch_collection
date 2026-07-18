"use client";

import Link from "next/link";
import { Autoplay, Keyboard, Navigation, Scrollbar, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ImageComponent from "./ImageComponent";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/virtual";

import { ReactElement } from "react";

export interface ImageSliderEntry {
  imageSrc: string;
  href?: string;
  hoverSrc?: string;
  hreftext?: string;
  target?: string;
  alt?: string | ReactElement;
}

export default function ImageSliderComponent(props: ImageSliderEntry[]) {
  const swiper_settings = {
    modules: [Navigation, Scrollbar, Autoplay, Keyboard, Virtual],

    // Virtualize slides: only the visible window (plus buffer) is kept in the
    // DOM. Without this, mounting every entry's remote image at once overwhelms
    // iOS Safari's per-tab memory budget and forces a full-page reload.
    virtual: true,

    // navigation
    // Arrows over the sides for nav
    navigation: true,

    breakpoints: {
      1280: {
        slidesPerView: 5,
        slidesPerGroup: 5,
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
    },

    /* Pagination
        pagination: {
          type: 'bullets',
          clickable: true,
          dynamicBullets: false,
        },*/

    // Scrollbar
    scrollbar: {
      enabled: true,
      draggable: true,
      hide: false,
    },

    // AutoPlay
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },

    // className: "swiper-transition", //add CSS class
    // Keyboard
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    // Center slides with equal side spacing
    centerInsufficientSlides: true,
    // cssMode: true,
    speed: 1500,
    //parallax: { enabled: true },
  };

  return (
    <Swiper {...swiper_settings}>
      {props.map((entry, idx) => {
        return (
          <SwiperSlide
            key={`swiper_slide${idx}`}
            virtualIndex={idx}
            className="hover-animation bottom-margin-m"
          >
            <Link
              className="info-text link"
              href={entry.href || ""}
              target={entry.target || undefined}
            >
              <ImageComponent src={entry.imageSrc} hoverSrc={entry.hoverSrc || undefined} />
              <br />
              <em key={`swiper_slide_legend_${idx}`}>
                {/** Use href text hs main alt legend */}
                {entry.hreftext || undefined}
                <br />
                {/** Only render a alt text if it difers from the url text */}
                {entry.alt != entry.hreftext ? entry.alt : undefined}
              </em>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

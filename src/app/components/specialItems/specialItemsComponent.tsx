"use client";

import {
  getExternalResource,
  getImgURLForSizeType,
  routeToCollectionBrandModelPage,
  SizeType,
} from "@/app/services/commonFunctions";

import ImageSliderComponent, { ImageSliderEntry } from "../common/ImageSliderComponent";
import SearchBarComponent from "../searchBar/searchBarComponent";

export interface SpecialItemEntry {
  srcImage: string;
  hoverSrc?: string;
  brand: string;
  legend: string;
  year: number;
}

interface SpecialItemsProps {
  specialItems: SpecialItemEntry[];
}

export default function SpecialItemsComponent({ specialItems }: SpecialItemsProps) {
  const swiperItems: ImageSliderEntry[] = specialItems.map((entry) => {
    return {
      imageSrc: getExternalResource(getImgURLForSizeType(entry.srcImage, SizeType.GALLERY)),
      hoverSrc: getExternalResource(
        getImgURLForSizeType(entry.hoverSrc ? entry.hoverSrc : entry.srcImage, SizeType.SLIDER),
      ),
      href: routeToCollectionBrandModelPage(entry.brand, entry.legend),
      hreftext: `${entry.year} ${entry.legend}`,
      alt: undefined,
    };
  });

  return (
    <div className="centered-text">
      <div className="section-container">
        <div className="container-title centered-container">Special Timepieces</div>
        <div className="centered-text">
          <span>
            Here we can find the details about the watches that I&apos;ve come across since I
            started building my collection.
          </span>
          <br />
          <span>Either </span>
          <b>search</b>
          <span> or </span>
          <b>click</b> <span>over the slideshow entries to open their detail page.</span>
        </div>
        <SearchBarComponent />
      </div>
      <div className="section-container">{ImageSliderComponent(swiperItems)}</div>
    </div>
  );
}

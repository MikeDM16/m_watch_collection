"use client";

import collectionService from "@/app/services/collectionService";
import {
  getExternalResource,
  getImgURLForSizeType,
  routeToCollectionBrandModelPage,
  SizeType,
} from "@/app/services/commonFunctions";

import ImageSliderComponent, { ImageSliderEntry } from "../common/ImageSliderComponent";
import SearchBarComponent from "../searchBar/searchBarComponent";

export default function SpecialItemsComponent() {
  const specialCollectionItems = collectionService.getSpecialCollectionItems();

  const swiperItems: ImageSliderEntry[] = Object.values(specialCollectionItems).map((entry) => {
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

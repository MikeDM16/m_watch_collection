import collectionService from "@/app/services/collectionService";
import {
  getExternalResource,
  getImgURLForSizeType,
  routeToCollectionBrandModelPage,
  SizeType,
} from "@/app/services/commonFunctions";
import { Container } from "react-bootstrap";

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
      <Container>
        <div className="container-title centered-container">Special Timepieces</div>
        <div className="centered-text">
          <a>
            {
              "Here we can find the details about the watches that I've come across since I started building my collection."
            }
          </a>
          <br />
          <a>Either </a>
          <b>search</b>
          <a> or </a>
          <b>click</b> <a> over the slideshow entries to open their detail page.</a>
        </div>
        <SearchBarComponent />
      </Container>
      <Container>{ImageSliderComponent(swiperItems)}</Container>
    </div>
  );
}

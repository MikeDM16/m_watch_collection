import collectionService from "@/app/services/collectionService";
import {
  getExternalResource,
  getImgURLForSizeType,
  routeToCollectionBrandModelPage,
  SizeType,
} from "@/app/services/commonFunctions";
import { Container } from "react-bootstrap";

import ImageSliderComponent, { ImageSliderEntry } from "../common/ImageSliderComponent";

export default function SpecialItemsComponent() {
  const specialCollectionItems = collectionService.getSpecialCollectionItems();

  const swiperItems: ImageSliderEntry[] = Object.values(specialCollectionItems).map((entry) => {
    return {
      image_src: getExternalResource(getImgURLForSizeType(entry.srcImage, SizeType.GALLERY)),
      href: routeToCollectionBrandModelPage(entry.brand, entry.legend),
      href_text: `${entry.year} ${entry.legend}`,
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
          <a>{"Click over the slideshow names to open their detail page."}</a>
        </div>
      </Container>
      <Container>{ImageSliderComponent(swiperItems)}</Container>
    </div>
  );
}

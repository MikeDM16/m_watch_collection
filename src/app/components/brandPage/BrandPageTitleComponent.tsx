import { Brand } from "@/app/data/brands";
import {
  routeToMainPageAllBrandListing,
  routeToMainPageHeader,
  selectBackgroundImage,
} from "@/app/services/commonFunctions";

import BrandTitleDivisionComponent from "./BrandTitleDivisionComponent";

export default function BrandPageTitleComponent(brandDetails: Brand) {
  const brandName = brandDetails.name;

  const getBrandFoundedText = (): string => {
    let brandfoundedText = "";
    if (brandDetails.foundedInformation) {
      brandfoundedText = `${brandDetails.foundedInformation.year}`;

      if (brandDetails.foundedInformation.details) {
        brandfoundedText = `${brandfoundedText}, ${brandDetails.foundedInformation.details}`;
      }
    }
    return brandfoundedText;
  };

  return (
    <div>
      {BrandTitleDivisionComponent({
        title: `${brandName}`,
        textAlignement: "left",
        description: brandDetails.description,
        founded: getBrandFoundedText(),
        website: brandDetails.website,
        srcImage: selectBackgroundImage(brandDetails.backgrounImages),
        navigationPath: {
          MWatchCollection: routeToMainPageHeader(),
          "All Brands": routeToMainPageAllBrandListing(),
        },
      })}
    </div>
  );
}

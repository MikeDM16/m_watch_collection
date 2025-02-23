import { BrandsEnum } from "@/app/enums/brandsEnum";
import { WatchTypeEnum } from "@/app/enums/watchTypeEnum";

import { CollectionCatalogue } from "../../collectionCatalogue";

const details: CollectionCatalogue = {
  title: "Omega Olympics Collection",
  sliderImages: [
    "public/assets/Images/Omega/Omega_Olympics_Collection/IMG_8402.JPG",
    "public/assets/Images/Omega/Omega_Olympics_Collection/IMG_8405.JPG",
    "public/assets/Images/Omega/Omega_Olympics_Collection/IMG_8409.JPG",
    "public/assets/Images/Omega/Omega_Olympics_Collection/IMG_8411.JPG",
  ],

  modelsList: {
    "Albertville Winter Olympics, France 1992": {
      "1992 Omega Olympia Winter Olympics Albertville Ltd. 305/499": {
        brand: BrandsEnum.OMEGA,
        legend: "1992 Omega Olympia Winter Olympics Albertville Ltd. 305/499",
        year: 1992,
        type: WatchTypeEnum.SPORTS,
        srcImage: "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8770.JPG",
        href: require("./Omega_Olympia_Albertville_500_386_1031_1992"),
        specialCollectionItem: true,
      },
      "1992 Omega Olympia Winter Olympics Albertville Ltd. 820/3000": {
        brand: BrandsEnum.OMEGA,
        legend: "1992 Omega Olympia Winter Olympics Albertville Ltd. 820/3000",
        year: 1992,
        type: WatchTypeEnum.SPORTS,
        srcImage: "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8710.JPG",
        href: require("./Omega_Olympia_Albertville_3000_386_1031_1992"),
        specialCollectionItem: true,
      },
    },

    "Calgary And Seoul Olympics 1988": {
      "1988 Omega Olympia Winter Olympics Calgary And Seoul Limited 457/1000": {
        brand: BrandsEnum.OMEGA,
        legend: "1988 Omega Olympia Winter Olympics Calgary And Seoul Limited 457/1000",
        year: 1988,
        type: WatchTypeEnum.SPORTS,
        srcImage:
          "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8702.JPG",
        href: require("./Omega_Olympia_Calgary_Seoul_1988"),
        specialCollectionItem: true,
      },
    },
  },
};

export default details;

import { BrandsEnum } from "@/app/enums/brandsEnum";
import { WatchTypeEnum } from "@/app/enums/watchTypeEnum";

import { CollectionCatalogue } from "../../collectionCatalogue";

const details: CollectionCatalogue = {
  title: "Breitling Collection",
  sliderImages: [
    "public/assets/Images/Breitling/Chronomat_Collection/IMG_6328.JPG",
    "public/assets/Images/Breitling/Chronomat_Collection/IMG_6329.JPG",
    "public/assets/Images/Breitling/Chronomat_Collection/IMG_6323.JPG",
    "public/assets/Images/Breitling/Chronomat_Collection/IMG_6324.JPG",
    "public/assets/Images/Breitling/Chronomat_Collection/IMG_6325.JPG",
    "public/assets/Images/Breitling/Chronomat_Collection/IMG_6326.JPG",
    "public/assets/Images/Breitling/Chronomat_Collection/IMG_6327.JPG",
    "public/assets/Images/Breitling/Chronomat_Collection/IMG_6332.JPG",
    "public/assets/Images/Breitling/Chronomat_Collection/IMG_6333.JPG",

    "public/assets/Images/Breitling/Chronomat_Collection/IMG_7652.JPG",
    "public/assets/Images/Breitling/Chronomat_Collection/IMG_7653.JPG",
    "public/assets/Images/Breitling/Chronomat_Collection/IMG_7654.JPG",
    "public/assets/Images/Breitling/Chronomat_Collection/IMG_7655.JPG",
    "public/assets/Images/Breitling/Chronomat_Collection/IMG_7657.JPG",
    "public/assets/Images/Breitling/Chronomat_Collection/IMG_7660.JPG",
    "public/assets/Images/Breitling/Chronomat_Collection/IMG_7661.JPG",
    "public/assets/Images/Breitling/Chronomat_Collection/IMG_7662.JPG",
    "public/assets/Images/Breitling/Chronomat_Collection/IMG_7663.JPG",
    "public/assets/Images/Breitling/Chronomat_Collection/IMG_7664.JPG",
  ],

  modelsList: {
    Chronomat: {
      "2008 Breitling Chronomat Evolution A13356 COSC": {
        brand: BrandsEnum.BREITLING,
        legend: "2008 Breitling Chronomat Evolution A13356 COSC",
        year: 2008,
        type: WatchTypeEnum.SPORTS,
        srcImage:
          "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7166.JPG",
        href: require("./Breitling_Chronomat_Evolution_A13356_2008"),
        specialCollectionItem: true,
      },

      "2002 Breitling Chronomat B13050.1": {
        brand: BrandsEnum.BREITLING,
        legend: "2002 Breitling Chronomat B13050.1",
        year: 2002,
        type: WatchTypeEnum.SPORTS,
        srcImage: "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5090.JPG",
        href: require("./Breitling_Chronomat_B13050_2002"),
        specialCollectionItem: true,
      },

      "1998 Breitling Chronomat Vitesse B13050": {
        brand: BrandsEnum.BREITLING,
        legend: "1998 Breitling Chronomat Vitesse B13050",
        year: 1998,
        type: WatchTypeEnum.SPORTS,
        srcImage:
          "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3632.JPG",
        href: require("./Breitling_Chronomat_B13050_Vitesse_1998"),
        specialCollectionItem: true,
      },

      "1994 Breitling Chronomat 10th Anniversary COSC Limited Edition": {
        brand: BrandsEnum.BREITLING,
        legend: "1994 Breitling Chronomat 10th Anniversary COSC Limited Edition",
        year: 1994,
        type: WatchTypeEnum.SPORTS,
        srcImage:
          "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3597.JPG",
        href: require("./Breitling_Chronomat_A13050_10th_Anniversary_1994"),
        specialCollectionItem: true,
      },
    },

    Colt: {
      "1998 Breitling Colt A53035 Chronograph": {
        brand: BrandsEnum.BREITLING,
        legend: "1998 Breitling Colt A53035 Chronograph",
        year: 1998,
        type: WatchTypeEnum.SPORTS,
        srcImage:
          "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6294.JPG",
        href: require("./Breitling_Colt_A53035_1998"),
        specialCollectionItem: false,
      },
    },
  },
};

export default details;

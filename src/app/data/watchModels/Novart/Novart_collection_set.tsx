import { BrandsEnum } from "@/app/enums/brandsEnum";
import { WatchTypeEnum } from "@/app/enums/watchTypeEnum";

import { CollectionCatalogue } from "../../collectionCatalogue";

const details: CollectionCatalogue = {
  title: "1974 Novart Watch Collection",
  sliderImages: [
    "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_5987.JPG",
    "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_5988.JPG",
    "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_5989.JPG",
    "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_5990.JPG",
    "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_5991.JPG",
    "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_5992.JPG",
    "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_5993.JPG",
    "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_5994.JPG",

    "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_5673.JPG",
    "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_5674.JPG",
    "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_5675.JPG",
    "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_5676.JPG",
    "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_6256.JPG",
    "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_6257.JPG",
    "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_6258.JPG",
    "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_6259.JPG",
    "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_6260.JPG",
  ],

  modelsList: {
    "Novart Collection": {
      "1976 Novart Incabloc 17 Jewels": {
        brand: BrandsEnum.NOVART,
        legend: "1976 Novart Incabloc 17 Jewels",
        year: 1976,
        type: WatchTypeEnum.CASUAL,
        srcImage: "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3959.JPG",
        href: require("./Novart_Incabloc_white_17Jewels_1976"),
        specialCollectionItem: false,
      },

      "1974 Novart Blue Borealis 17 Jewels": {
        brand: BrandsEnum.NOVART,
        legend: "1974 Novart Blue Borealis 17 Jewels",
        year: 1974,
        type: WatchTypeEnum.CASUAL,
        srcImage: "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0623.JPG",
        href: require("./Novart_Tides_Blue_Borealis_17Jewels_1974"),
        specialCollectionItem: false,
      },
      "1974 Novart Tides Blue": {
        brand: BrandsEnum.NOVART,
        legend: "1974 Novart Tides Blue",
        year: 1974,
        type: WatchTypeEnum.CASUAL,
        srcImage: "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5889.JPG",
        href: require("./Novart_Tides_Blue_17Jewels_1974"),
        specialCollectionItem: false,
      },
      "1974 Novart Tide Blue": {
        brand: BrandsEnum.NOVART,
        legend: "1974 Novart Tide Blue",
        year: 1974,
        type: WatchTypeEnum.CASUAL,
        srcImage: "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6228.JPG",
        href: require("./Novart_Tides_Blue_17_Jewels_1974"),
        specialCollectionItem: false,
      },
      "1974 Novart Golden Linen 17 Jewels": {
        brand: BrandsEnum.NOVART,
        legend: "1974 Novart Golden Linen 17 Jewels",
        year: 1974,
        type: WatchTypeEnum.CASUAL,
        srcImage: "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5933.JPG",
        href: require("./Novart_Tides_Golden_Linen_17Jewels_1974"),
        specialCollectionItem: false,
      },
    },

    " ": {
      "1974 Novart Vitesse 17 Jewels": {
        brand: BrandsEnum.NOVART,
        legend: "1974 Novart Vitesse 17 Jewels",
        year: 1974,
        type: WatchTypeEnum.CASUAL,
        srcImage: "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6266.JPG",
        href: require("./Novart_Vitesse_Red_17Jewels_1974"),
        specialCollectionItem: false,
      },
      "1974 Novart Vitesse Blue Date 17 Jewels": {
        brand: BrandsEnum.NOVART,
        legend: "1974 Novart Vitesse Blue Date 17 Jewels",
        year: 1974,
        type: WatchTypeEnum.CASUAL,
        srcImage: "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5989.JPG",
        href: require("./Novart_Vitesse_Blue_17Jewels_1974"),
        specialCollectionItem: false,
      },

      "1974 Novart Monza Red 17 Jewels": {
        brand: BrandsEnum.NOVART,
        legend: "1974 Novart Monza Red 17 Jewels",
        year: 1974,
        type: WatchTypeEnum.CASUAL,
        srcImage: "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6018.JPG",
        href: require("./Novart_Monza_Red_17Jewels_1974"),
        specialCollectionItem: false,
      },

      "1974 Novart Monza Ligth Blue Date 17 Jewels": {
        brand: BrandsEnum.NOVART,
        legend: "1974 Novart Monza Ligth Blue Date 17 Jewels",
        year: 1974,
        type: WatchTypeEnum.CASUAL,
        srcImage: "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5643.JPG",
        href: require("./Novart_Monza_Ligth_Blue_17Jewels_1974"),
        specialCollectionItem: false,
      },
      "1974 Novart Green Borealis 17 Jewels": {
        brand: BrandsEnum.NOVART,
        legend: "1974 Novart Green Borealis 17 Jewels",
        year: 1974,
        type: WatchTypeEnum.CASUAL,
        srcImage: "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4839.JPG",
        href: require("./Novart_Monza_Green_Borealis_17Jewels_1974"),
        specialCollectionItem: false,
      },

      "1974 Novart Desert Sand 17 Jewels": {
        brand: BrandsEnum.NOVART,
        legend: "1974 Novart Desert Sand 17 Jewels",
        year: 1974,
        type: WatchTypeEnum.CASUAL,
        srcImage: "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5816.JPG",
        href: require("./Novart_Monza_Desert_Sand_17Jewels_197"),
        specialCollectionItem: false,
      },
    },
  },
};

export default details;

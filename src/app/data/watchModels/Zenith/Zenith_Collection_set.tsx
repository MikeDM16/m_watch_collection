import { BrandsEnum } from "@/app/enums/brandsEnum";
import { WatchTypeEnum } from "@/app/enums/watchTypeEnum";

import { CollectionCatalogue } from "../../collectionCatalogue";

const details: CollectionCatalogue = {
  title: "Zenith Collection",
  sliderImages: [
    "public/assets/Images/Zenith/Zenith_Collection/IMG_3751.JPG",
    "public/assets/Images/Zenith/Zenith_Collection/IMG_3752.JPG",
    "public/assets/Images/Zenith/Zenith_Collection/IMG_3753.JPG",
    "public/assets/Images/Zenith/Zenith_Collection/IMG_3754.JPG",
    "public/assets/Images/Zenith/Zenith_Collection/IMG_3755.JPG",
    "public/assets/Images/Zenith/Zenith_Collection/IMG_3756.JPG",
    "public/assets/Images/Zenith/Zenith_Collection/IMG_3757.JPG",
    "public/assets/Images/Zenith/Zenith_Collection/IMG_3758.JPG",
    "public/assets/Images/Zenith/Zenith_Collection/IMG_3760.JPG",
    "public/assets/Images/Zenith/Zenith_Collection/IMG_3761.JPG",
    "public/assets/Images/Zenith/Zenith_Collection/IMG_3762.JPG",
  ],

  modelsList: {
    "El Primero Chronograph": {
      "2010 Zenith El Primero ChronoMaster": {
        brand: BrandsEnum.ZENITH,
        legend: "2010 Zenith El Primero ChronoMaster",
        year: 2010,
        type: WatchTypeEnum.DIVE,
        srcImage: "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3466.JPG",
        href: require("./Zenith_El_Primero_ChronoMaster_2010"),
        specialCollectionItem: true,
      },
      "2005 Zenith El Primero Port Royal V": {
        brand: BrandsEnum.ZENITH,
        legend: "2005 Zenith El Primero Port Royal V",
        year: 2005,
        type: WatchTypeEnum.DRESS,
        srcImage: "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4614.JPG",
        href: require("./Zenith_El_Primero_Port_Royal_V_2005"),
        specialCollectionItem: true,
      },
    },

    "Vintage Models": {
      "1945 Zenith Pilot P12": {
        brand: BrandsEnum.ZENITH,
        legend: "1945 Zenith Pilot P12",
        year: 1945,
        type: WatchTypeEnum.DRESS,
        srcImage: "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4676.JPG",
        href: require("./Zenith_Pilot_P12_1945"),
        specialCollectionItem: true,
      },
    },
  },
};

export default details;

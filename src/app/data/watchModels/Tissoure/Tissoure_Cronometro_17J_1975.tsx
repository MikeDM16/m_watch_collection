import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrownWatchTypeEnum } from "@/app/enums/crownWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { featuresEnum } from "@/app/enums/featuresEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1975 Tissoure Cronometro 17 Rubis",

  sliderImages: [
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1833.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1834.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1835.JPG",

    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1810.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1811.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1813.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1814.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1815.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1816.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1817.JPG",

    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1802.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1803.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1804.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1805.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1807.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1808.JPG",

    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1818.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1819.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1820.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1821.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1822.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1823.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1824.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1825.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1826.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1827.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1828.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1829.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1830.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_1831.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.TISSOURE,
      series: "Calendar",
      catalogueReference: "17 rubis",
      productionYear: "1975",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "36 mm",
      thickness: "10 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Brushed",
      bezel: "without Bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Black",
    },

    movement: MovementsDataDB.VOSTOK_2605_17J,
  },
};

export default details;

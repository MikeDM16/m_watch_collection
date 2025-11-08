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
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7110.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7107.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7109.JPG",

    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7083.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7084.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7085.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7086.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7087.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7088.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7089.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7090.JPG",

    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7114.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7115.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7116.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7117.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7118.JPG",

    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7091.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7092.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7093.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7094.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7095.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7096.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7097.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7098.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7099.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7100.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7103.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7104.JPG",
    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7106.JPG",

    "public/assets/Images/Tissoure/1975_Tissoure_Cronometro_17J/IMG_7113.JPG",
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
      color: "Brown",
    },

    movement: MovementsDataDB.VOSTOK_2605_17J,
  },
};

export default details;

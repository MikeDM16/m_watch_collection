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
import { RaymondWeilBrandSeries } from "./RaymondWeilBrandSeries";

const details: WatchDetails = {
  title: "2008 Raymond Weil Maestro Automatic",

  sliderImages: [
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8043.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8045.JPG",

    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8034.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8036.JPG",

    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8006.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8007.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8008.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8009.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8010.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8011.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8012.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8013.JPG",

    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8030.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8031.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8032.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8033.JPG",

    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8014.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8015.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8016.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8017.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8018.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8019.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8020.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8021.JPG",

    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8038.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8039.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8040.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8041.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8042.JPG",

    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8022.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8023.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8024.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8025.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8026.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8027.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8028.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_ETA_2834/IMG_8029.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC],

    information: {
      brand: BrandsEnum.RAYMOND_WEIL,
      series: RaymondWeilBrandSeries.MAESTRO,
      catalogueReference: "2834 (X485010)",
      productionYear: "2008",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "39 mm",
      thickness: "9 mm",
      material: "Stainless Steel - Gold Plated 10 \u339B",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Coin detailed bezel edge",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "19 mm",
      color: "Black",
    },

    movement: MovementsDataDB.ETA_2834,
  },
};

export default details;

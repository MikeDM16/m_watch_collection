import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
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
import { TagHeuerBrandSeries } from "./TagHeuerBrandSeries";

const details: WatchDetails = {
  title: "2005 Tag Heuer Aquaracer Exclusive CN2111",

  sliderImages: [
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_4389.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_4386.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_4391.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_4393.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_4395.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_4394.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0155.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0156.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0157.JPG",

    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0117.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0118.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0120.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0122.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0123.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0124.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0125.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0126.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0127.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0129.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0130.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0131.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0132.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0133.JPG",

    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0103.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0104.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0106.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0107.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0108.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0110.JPG",

    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0145.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0146.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0147.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0148.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0149.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0150.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0151.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0152.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0153.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0154.JPG",

    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0158.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0159.JPG",

    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0468.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0469.JPG",

    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0134.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0135.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0136.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0138.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0139.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0140.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0141.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0142.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0143.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0144.JPG",
  ],

  saleReport: {
    price: 951,
    date: "07/11/2024",
    url: "https://www.catawiki.com/en/l/90081043-tag-heuer-aquaracer-professional-2000-clous-de-paris-chronograph-caliber-16-valjoux-7750-25-jewels-cn2111-men-2010-2020",
  },

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.SCREWED_IN_CROWN,
      featuresEnum.WR_200_METERS,
      featuresEnum.UNI_DIRECTIONAL_BEZEL,
    ],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: TagHeuerBrandSeries.AQUARACER,
      catalogueReference: "Exclusive CN2111",
      productionYear: "2005",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "40 mm",
      thickness: "15 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: "Brushed",
      bezel: "Uni-directional, 10-minute graduated",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.CLOUD_DE_PARIS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Grey metal",
    },

    movement: MovementsDataDB.ETA_Valjoux_7750_25J,
  },
};

export default details;

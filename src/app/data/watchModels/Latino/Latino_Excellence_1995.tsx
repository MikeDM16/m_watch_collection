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

import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1995 Latino Excellence",
  sliderImages: [
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6038.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6039.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6040.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6041.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6042.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6043.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6044.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6045.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6046.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6047.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6048.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6049.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6059.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6060.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6061.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6062.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6063.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6064.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6050.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6051.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6052.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6053.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6054.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6055.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6056.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6057.JPG",
    "public/assets/Images/Latino/1995_Latino_ETA/IMG_6058.JPG",
  ],
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.WR_30_METERS],

    information: {
      brand: BrandsEnum.LATINO,
      series: "Excellence",
      catalogueReference: "HC-1144",
      productionYear: "1995",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "36 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Bronze plated",
      bezel: "Uni-directional, 10-minute graduated",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.ARROW,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Shark Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Dark Grey",
    },

    movement: {
      title: "ETA 805.114",
      description:
        "Very basic Quartz movement from ETA's fashion line series. \n" +
        "These calibers represent the entry line from the ETA range of movements. ",
      usefullLinks: {
        "Technical Information from ETA": "../Files//3584_ETA 805.111,114,121,124,144,161.pdf",
      },
      sliderImages: [
        "public/assets/Images/Latino/1995_Latino_ETA/ETA_805-114-1.JPG",
        "public/assets/Images/Latino/1995_Latino_ETA/ETA_805-114-2.JPG",
        "public/assets/Images/Latino/1995_Latino_ETA/ETA_805-114-3.JPG",
      ],

      details: {
        manufacturer: "ETA",
        modelReference: "805.114",
        type: "Quartz",
        battery: "377 / SR726W",
        jewels: "0 Jewels (None)",
        functions: "Date, Hours, Minutes, Seconds",
      },
    },
  },
};

export default details;

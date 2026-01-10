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
  title: "1988 Raymond Weil Tango 5563 Diver",
  sliderImages: [
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0465.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0466.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0467.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0492.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0493.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0494.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0495.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0496.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0497.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0498.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0499.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0500.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0501.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0502.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0503.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0504.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0505.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0506.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0480.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0481.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0507.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0508.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0509.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0510.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0511.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0512.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0513.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0514.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0515.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0482.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0484.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0485.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0486.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0487.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0488.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0517.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0518.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0519.JPG",
    "public/assets/Images/Raymond_Weil/2007_Raymond_Weil_Tango_5563_Diver/IMG_0520.JPG",
  ],
  saleReport: {
    price: 200,
    date: "10/11/2020",
    url: "https://www.catawiki.com/l/42269249",
  },

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.WR_100_METERS,
      featuresEnum.UNI_DIRECTIONAL_BEZEL,
      featuresEnum.SCREWED_IN_CROWN,
    ],

    information: {
      brand: BrandsEnum.RAYMOND_WEIL,
      series: RaymondWeilBrandSeries.VINTAGE_SERIES,
      catalogueReference: "Tango Diver - 5563",
      productionYear: "1988",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DIVE,
    },

    case: {
      diameter: "34 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Uni-directional, 10-minute graduated",
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Red",
      dialMarkers: DialMarketsEnum.ROUND,
      finishingDetails: FinishingDetailsEnum.TRITIUM_MARKERS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links Bracelet",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "18 mm",
      color: "Silver",
    },

    movement: MovementsDataDB.ETA_955_112,
  },
};

export default details;

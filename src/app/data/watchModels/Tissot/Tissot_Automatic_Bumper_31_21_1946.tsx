import { BezelTypeEnum } from "@/app/enums/bezelTypeEnum";
import { BraceletMaterialEnum } from "@/app/enums/braceletMaterialEnum";
import { BraceletWidthEnum } from "@/app/enums/braceletWidthEnum";
import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CaseDiameterEnum } from "@/app/enums/caseDiameterEnum";
import { CaseFinishingEnum } from "@/app/enums/caseFinishingEnum";
import { CaseMaterialEnum } from "@/app/enums/caseMaterialEnum";
import { CaseThicknessEnum } from "@/app/enums/caseThicknessEnum";
import { ColorEnum } from "@/app/enums/colorEnum";
import { CrownWatchTypeEnum } from "@/app/enums/crownWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { featuresEnum } from "@/app/enums/featuresEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import movement_TISSOT_31_21_17J from "../../movements/Tissot/31_21_17J";
import { WatchDetails } from "../../watchDetails";
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "1946 Tissot Automatic Bumper 31-21",

  sliderImages: [
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2699.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2700.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2701.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2702.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2703.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2705.JPG",

    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2735.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2736.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2737.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2738.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2739.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2740.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2741.JPG",

    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2707.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2708.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2709.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2710.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2711.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2712.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2713.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2714.JPG",

    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2717.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2718.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2719.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2720.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2721.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2722.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2723.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2724.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2725.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2726.JPG",

    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2715.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2716.JPG",

    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2727.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2728.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2729.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2730.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2731.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2732.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2733.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Automatic_Bumper/IMG_2734.JPG",
  ],

  saleReport: {
    price: 320,
    date: "28/07/2026",
    url: "https://www.catawiki.com/l/105493052",
  },

  technicalData: {
    features: [
      featuresEnum.AUTOMATIC,
      "Movement with production number 1733194, dating the watch back to 1946",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.ANTIMAGNETIC,
      catalogueReference: "6541-1 (Bumper)",
      productionYear: "1946",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: CaseDiameterEnum.D_35,
      thickness: CaseThicknessEnum.T_12,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LIZARD_LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BROWN,
    },

    movement: movement_TISSOT_31_21_17J,
  },
};

export default details;

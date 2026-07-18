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

import movement_TAG_HEUER_CALIBER_6 from "../../movements/Tag_Heuer/Tag_Heuer_Caliber_6_27J";
import { WatchDetails } from "../../watchDetails";
import { TagHeuerBrandSeries } from "./TagHeuerBrandSeries";

const details: WatchDetails = {
  title: "2005 Tag Heuer Monza Automatic Cal. 6",

  sliderImages: [
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2571.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2572.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2575.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2576.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2577.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2578.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2579.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2580.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2581.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2582.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2583.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2584.JPG",

    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2555.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2556.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2557.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2559.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2560.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2561.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2562.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2563.JPG",

    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2564.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2565.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2566.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2567.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2568.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2569.JPG",

    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2590.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2591.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2592.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2593.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2594.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2595.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2596.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2597.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2598.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2599.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2600.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2601.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2602.JPG",

    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2585.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2587.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2588.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2589.JPG",

    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2603.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2604.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2605.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2606.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2607.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2608.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2609.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Monza_WR2110_cal6/IMG_2610.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: TagHeuerBrandSeries.MONZA,
      catalogueReference: "Automatic (WR2110)",
      productionYear: "2005",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_38,
      thickness: CaseThicknessEnum.T_10,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.VERTICAL_BRUSHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.BLACK,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.TEXTURED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.BLACK_RED,
    },

    movement: movement_TAG_HEUER_CALIBER_6,
  },
};

export default details;

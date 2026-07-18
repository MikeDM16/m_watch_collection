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
  title: "1942 Tissot Antimagnetic Tuxedo Cal. 27-2",

  sliderImages: [
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2656.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2657.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2658.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2659.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2660.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2661.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2662.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2664.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2666.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2667.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2668.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2669.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2671.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2672.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2673.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2674.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2675.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2676.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2677.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2678.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2679.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2681.JPG",

    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2697.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2698.JPG",

    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2682.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2683.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2684.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2685.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2686.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2687.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2688.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2689.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2690.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2691.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2692.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2693.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2694.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2695.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_Tuxedo_27_2/IMG_2696.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.MECHANICAL,
      "Movement with production number 1246276, dating the watch back to 1942",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.ANTIMAGNETIC,
      catalogueReference: "1234606",
      productionYear: "1942",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: CaseDiameterEnum.D_35,
      thickness: CaseThicknessEnum.T_10,
      material: CaseMaterialEnum.SS_CHROMED,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.BEIGE,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.TUXEDO,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.NYLON_FIXED_LUGS,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BLACK,
    },

    movement: movement_TISSOT_31_21_17J,
  },
};

export default details;

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

import movement_OMEGA_1022_23J from "../../movements/Omega/Omega_1022";
import { WatchDetails } from "../../watchDetails";
import { OmegaBrandSeries } from "./OmegaBrandSeries";

const details: WatchDetails = {
  title: "1973 Omega Geneve Automatic Cal. 1022",

  sliderImages: [
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2611.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2612.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2614.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2615.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2616.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2617.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2618.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2619.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2620.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2621.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2622.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2623.JPG",

    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2624.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2625.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2626.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2627.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2628.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2629.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2630.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2631.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2632.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2633.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2634.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2635.JPG",

    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2653.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2654.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2655.JPG",

    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2636.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2637.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2638.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2639.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2640.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2641.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2642.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2643.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2644.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2645.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2646.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2647.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2648.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2649.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2650.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2651.JPG",
    "public/assets/Images/Omega/1973_Omega_Geneve_1022/IMG_2652.JPG",
  ],

  saleReport: {
    price: 650,
    date: "30/07/2026",
    url: "https://www.catawiki.com/l/105492929",
  },

  technicalData: {
    features: [
      featuresEnum.AUTOMATIC,
      "Movement with production number 37385821, dating the watch back to 1973",
    ],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.GENEVE_COLLECTION,
      catalogueReference: "166.0169 (Caliber 37385821)",
      productionYear: "1973",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_35,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.BLUE,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS,
      calendar: CalendarWatchTypeEnum.DAY_DATE_AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BLACK,
    },

    movement: movement_OMEGA_1022_23J,
  },
};

export default details;

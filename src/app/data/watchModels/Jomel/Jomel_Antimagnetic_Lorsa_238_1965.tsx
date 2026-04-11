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

import movement_Lorsa_238 from "../../movements/Lorsa/Lorsa_238";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1965 Jomel Antimagnetic Lorsa 238",

  sliderImages: [
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2681.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2683.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2684.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2685.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2686.JPG",

    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2642.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2643.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2644.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2645.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2646.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2648.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2649.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2650.JPG",

    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2687.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2688.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2689.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2690.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2691.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2692.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2693.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2694.JPG",

    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2678.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2680.JPG",

    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2695.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2696.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2697.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2698.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2699.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2700.JPG",

    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2669.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2670.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2671.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2672.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2673.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2674.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2675.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2676.JPG",
    "public/assets/Images/Jomel/1965_Jomel_Lorsa_238_17J/IMG_2677.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.GOLD_PLATED_10M],

    information: {
      brand: BrandsEnum.JOMEL,
      series: "Antimagnetic",
      catalogueReference: "-",
      productionYear: "1965",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_28,
      thickness: CaseThicknessEnum.T_8,
      material: CaseMaterialEnum.GP_10_SS_BACK,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.CHAMPAGNE,
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.RED,
    },

    movement: movement_Lorsa_238,
  },
};

export default details;

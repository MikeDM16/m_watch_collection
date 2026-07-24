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

import movement_VENUS_175_17J from "../../movements/Venus/Venus_175_17J";
import { WatchDetails } from "../../watchDetails";
import { BreitlingBrandSeries } from "./BreitlingBrandSeries";

const details: WatchDetails = {
  title: "1948 Breitling Premier Chronograph Venus 175",

  sliderImages: [
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2742.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2744.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2745.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2746.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2747.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2748.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2749.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2750.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2751.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2752.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2753.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2754.JPG",

    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2764.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2765.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2766.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2767.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2768.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2769.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2770.JPG",

    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2755.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2756.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2757.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2758.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2759.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2760.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2761.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2762.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2763.JPG",

    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2771.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2772.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2773.JPG",

    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2783.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2784.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2785.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2786.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2787.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2788.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2789.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2790.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2791.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2792.JPG",
    "public/assets/Images/Breitling/1950_Breitling_Premier_Venus_178/IMG_2793.JPG",
  ],

  technicalData: {
    features: [featuresEnum.TACHYMETER, featuresEnum.MECHANIQUE_CHRONOGRAPH],

    information: {
      brand: BrandsEnum.BREITLING,
      series: BreitlingBrandSeries.PREMIER,
      catalogueReference: "Premier Chronograph",
      productionYear: "1948",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_36,
      thickness: CaseThicknessEnum.T_11,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.TACHYMETER_INNER,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LIZARD_LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BLUE,
    },

    movement: movement_VENUS_175_17J,
  },
};

export default details;

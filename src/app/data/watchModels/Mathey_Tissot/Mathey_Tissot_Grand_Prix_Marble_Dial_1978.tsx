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

import movement_AS_1861 from "../../movements/AS/AS_1861_17J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1978 Mathey-Tissot Grand Prix - Red Marble Dial",

  sliderImages: [
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7924.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7925.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7926.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7927.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7928.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7929.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7930.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7931.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7932.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7933.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7934.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7935.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7936.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7937.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7938.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7939.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7941.JPG",

    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7586.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7587.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7607.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7608.JPG",

    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7942.JPG",

    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7961.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7963.JPG",

    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7943.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7944.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7945.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7946.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7947.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7948.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7949.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7950.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7952.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7953.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7955.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7956.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7957.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7958.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7959.JPG",
    "public/assets/Images/Mathey_Tissot/1978_Mathey_Tissot_Grand_Prix/IMG_7960.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.DATE],

    information: {
      brand: BrandsEnum.MATHEY_TISSOT,
      series: "Grand Prix",
      catalogueReference: "-",
      productionYear: "1978",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_34,
      thickness: CaseThicknessEnum.T_7,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.RED,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.MARBLE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LIZARD_LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BORDEAUX,
    },

    movement: movement_AS_1861,
  },
};

export default details;

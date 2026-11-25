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

import movement_BIFORA_115_1 from "../../movements/Bifora/Bifora_115_1_17J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1978 Almery Dynamic 17 Jewels",

  sliderImages: [
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7878.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7879.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7882.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7884.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7885.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7886.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7887.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7888.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7889.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7890.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7891.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7892.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7894.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7895.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7896.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7897.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7898.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7899.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7918.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7919.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7921.JPG",

    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7900.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7901.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7902.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7903.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7904.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7905.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7906.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7907.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7908.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7909.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7910.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7911.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7912.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7913.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7914.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7915.JPG",
    "public/assets/Images/Almery/1978_Almery_Dynamic_17_Jewels/IMG_7916.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.ALMERY,
      series: "Dynamic",
      catalogueReference: "-",
      productionYear: "1978",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_35,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.RADIAL_BRUSHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.LIGHT_GREY,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER_DOUBLE_RIDGE,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BROWN,
    },

    movement: movement_BIFORA_115_1,
  },
};

export default details;

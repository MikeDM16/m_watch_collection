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

import movement_AS_980 from "../../movements/AS/AS_980_17J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1965 Sergines Incabloc 17 Rubis",

  sliderImages: [
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5884.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5885.JPG",

    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5845.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5846.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5847.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5848.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5849.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5850.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5851.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5852.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5854.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5856.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5857.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5858.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5859.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5860.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5861.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5862.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5863.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5864.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5865.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5866.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5867.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5868.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5869.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5870.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5871.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5872.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5873.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5874.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5876.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5877.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5878.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5879.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5880.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5881.JPG",
    "public/assets/Images/Sergines/1965_Sergines_Incabloc_17_Rubis_980/IMG_5882.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.SMALL_SECONDS, featuresEnum.INCABLOC],

    information: {
      brand: BrandsEnum.SERGINES,
      series: "Incabloc 17 Rubis",
      catalogueReference: "-",
      productionYear: "1965",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_34,
      thickness: CaseThicknessEnum.T_6,
      material: CaseMaterialEnum.GP,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.NYLON_FIXED_LUGS,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BLACK,
    },

    movement: movement_AS_980,
  },
};

export default details;

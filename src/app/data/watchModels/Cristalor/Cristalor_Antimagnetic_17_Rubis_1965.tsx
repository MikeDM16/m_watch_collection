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

import movement_AS_1130 from "../../movements/AS/AS_1130_17J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1965 Cristalor Antimagnetic 17 Rubis",

  sliderImages: [
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3470.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3471.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3472.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3473.JPG",

    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3498.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3499.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3500.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3501.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3503.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3504.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3506.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3507.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3508.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3509.JPG",

    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3474.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3475.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3476.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3477.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3478.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3479.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3480.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3481.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3482.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3483.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3484.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3485.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3486.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3487.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3488.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3489.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3490.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3491.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3492.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3493.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3494.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3495.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3496.JPG",
    "public/assets/Images/Cristalor/1965_Cristalor_Antimagnetic_AS1130/IMG_3497.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.SMALL_SECONDS],

    information: {
      brand: BrandsEnum.CRISTALOR,
      series: "Antimagnetic 17 Rubis",
      catalogueReference: "2028161",
      productionYear: "1965",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: CaseDiameterEnum.D_35,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.SS_GOLD_PLATED_10,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LIZARD_LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.DARK_GREEN,
    },

    movement: movement_AS_1130,
  },
};

export default details;

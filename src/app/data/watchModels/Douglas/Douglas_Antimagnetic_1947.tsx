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
  title: "1947 Douglas Antimagnetic Jumbo",

  sliderImages: [
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3378.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3379.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3380.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3381_1.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3382_1.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3383.JPG",

    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3412.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3414.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3415.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3416.JPG",

    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3384.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3385.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3386.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3387.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3389_1.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3390_1.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3391_1.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3392_1.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3393_1.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3394_1.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3395.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3396_1.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3397.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3398_1.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3399_1.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3400_1.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3401_1.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3402_1.JPG",

    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3410.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3411.JPG",

    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3403_1.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3404_1.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3405.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3406.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3407.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3408.JPG",
    "public/assets/Images/Douglas/1947_Douglas_Antimagnetic_AS1130/IMG_3409.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.SMALL_SECONDS],

    information: {
      brand: BrandsEnum.DOUGLAS,
      series: "Antimagnetic",
      catalogueReference: "15620",
      productionYear: "1947",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_37,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.SS_GOLD_PLATED_12,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.CREAM_YELLOW,
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.LIGHT_BROWN,
    },

    movement: movement_AS_1130,
  },
};

export default details;

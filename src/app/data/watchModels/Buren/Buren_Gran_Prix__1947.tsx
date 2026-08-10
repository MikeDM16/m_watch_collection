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
  title: "1947 Buren Gran Prix",

  sliderImages: [
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3512.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3513.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3514.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3515.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3516.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3517.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3518.JPG",

    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3549.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3550.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3551.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3553.JPG",

    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3519.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3520.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3521.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3522.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3523.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3524.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3525.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3526.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3527.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3528.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3529.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3530.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3531.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3532.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3533.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3534.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3535.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3536.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3537.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3538.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3540.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3541.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3542.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3543.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3545.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3546.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3547.JPG",
    "public/assets/Images/Buren/1947_Buren_Grand_Prix_AS1130/IMG_3548.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.SMALL_SECONDS],

    information: {
      brand: BrandsEnum.BUREN,
      series: "Gran Prix",
      catalogueReference: "20511",
      productionYear: "1947",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
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
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BLACK,
    },

    movement: movement_AS_1130,
  },
};

export default details;

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

import movement_K1014 from "../../movements/Vacheron_Constantin/K1014_17J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1978 Vacheron Constantin Patrimony K1014",

  sliderImages: [
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3837.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3838.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3840.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3841.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3842.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3844.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3845.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3846.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3847.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3848.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3849.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3850.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3851.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3852.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3853.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3855.JPG",

    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3877.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3878.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_4023.JPG",

    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3821.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3823.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_4026.JPG",

    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_4032.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_4033.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_4034.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_4035.JPG",

    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3834.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3835.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3836.JPG",

    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3856.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3857.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3858.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3859.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3860.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3861.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3862.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3863.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3864.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3865.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3866.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3867.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3868.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3869.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3870.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3871.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3873.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3874.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3875.JPG",
    "public/assets/Images/Vacheron_Constantin/1978_Vacheron_Constantin_Patrimony_K1014/IMG_3876.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.VACHERON_CONSTANTIN,
      series: "Patrimony",
      catalogueReference: "Patrimony",
      productionYear: "1978",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: CaseDiameterEnum.D_34,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.SS_GOLD_PLATED,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.GOLD,
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.VERTICAL_BRUSHED,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_19,
      color: ColorEnum.RED,
    },

    movement: movement_K1014,
  },
};

export default details;

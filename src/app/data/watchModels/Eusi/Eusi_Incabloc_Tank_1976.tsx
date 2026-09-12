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

import movement_FHF_69N from "../../movements/FHF/FHF_69N_17J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1976 Eusi Incabloc Tank",

  sliderImages: [
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4184.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4185.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4186.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4187.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4188.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4189.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4190.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4191.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4192.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4193.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4194.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4195.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4196.JPG",

    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4215.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4216.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4218.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4219.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4220.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4221.JPG",

    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4197.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4198.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4199.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4200.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4201.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4202.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4203.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4204.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4205.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4206.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4207.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4208.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4209.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4210.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4211.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4212.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4213.JPG",
    "public/assets/Images/Eusi/1976_Eusi_Tank_FHF_69N/IMG_4214.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.EUSI,
      series: "Incabloc",
      catalogueReference: "237",
      productionYear: "1976",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_23,
      thickness: CaseThicknessEnum.T_8,
      material: CaseMaterialEnum.SS_GOLD_PLATED,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.GOLD,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.BLACK,
    },

    movement: movement_FHF_69N,
  },
};

export default details;

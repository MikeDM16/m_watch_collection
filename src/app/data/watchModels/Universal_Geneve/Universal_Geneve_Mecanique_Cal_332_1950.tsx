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

import movement_UNIVERSAL_GENEVE_332 from "../../movements/Universal_Geneve/UG_Cal_332_17J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1950 Universal Genève Mécanique Cal. 332",

  sliderImages: [
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7463.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7464.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7465.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7466.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7469.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7470.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7471.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7472.JPG",

    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7477.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7479.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7480.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7482.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7483.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7485.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7486.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7487.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7488.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7489.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7490.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7491.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7492.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7493.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7495.JPG",

    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7514.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7515.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7521.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7522.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7512.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7612.JPG",

    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7496.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7497.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7498.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7499.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7500.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7501.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7502.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7503.JPG",

    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7473.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7474.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7475.JPG",

    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7504.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7505.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7506.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7507.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7508.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7509.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7510.JPG",
    "public/assets/Images/Universal_Geneve/1950_Universal_Geneve_Cal_332/IMG_7511.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.GOLD_PLATED_30M],

    information: {
      brand: BrandsEnum.UNIVERSAL_GENEVE,
      series: "Mécanique",
      catalogueReference: "-",
      productionYear: "1950",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_34,
      thickness: CaseThicknessEnum.T_8,
      material: CaseMaterialEnum.GP_18K_30,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.BEIGE,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.CROCODILE_LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BLACK,
    },

    movement: movement_UNIVERSAL_GENEVE_332,
  },
};

export default details;

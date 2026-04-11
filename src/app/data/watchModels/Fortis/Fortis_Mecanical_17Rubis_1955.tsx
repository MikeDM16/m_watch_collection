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

import movement_FORTIS_AV_21J from "../../movements/Fortis/Fortis_AV_21_jewels";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1957 Fortis 18K Gold 21 Jewels",

  sliderImages: [
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2554.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2555.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2556.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2557.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2558.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2559.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2560.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2561.JPG",

    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2544.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2545.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2546.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2547.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2548.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2550.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2551.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2552.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2553.JPG",

    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2562.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2563.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2564.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2565.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2566.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2567.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2568.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2569.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2570.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2572.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2573.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2574.JPG",
  ],
  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.SOLID_GOLD],

    information: {
      brand: BrandsEnum.FORTIS,
      series: "Mecanical",
      catalogueReference: "-",
      productionYear: "1957",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_35,
      thickness: CaseThicknessEnum.T_8,
      material: CaseMaterialEnum.SOLID_GOLD_18K,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
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
      color: ColorEnum.BROWN,
    },

    movement: movement_FORTIS_AV_21J,
  },
};

export default details;

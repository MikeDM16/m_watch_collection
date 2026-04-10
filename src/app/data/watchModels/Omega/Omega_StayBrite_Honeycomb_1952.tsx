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

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";
import { OmegaBrandSeries } from "./OmegaBrandSeries";

const details: WatchDetails = {
  title: "1952 Omega StayBrite Honeycomb",
  sliderImages: [
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0028.JPG",
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0031.JPG",
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0032.JPG",
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0033.JPG",
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0034.JPG",
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0035.JPG",

    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0046.JPG",
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0047.JPG",
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0048.JPG",
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0049.JPG",

    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0021.JPG",
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0022.JPG",
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0023.JPG",
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0024.JPG",
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0025.JPG",
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0027.JPG",

    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0037.JPG",
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0038.JPG",
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0039.JPG",
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0040.JPG",
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0041.JPG",
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0042.JPG",
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0043.JPG",
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0044.JPG",
    "public/assets/Images/Omega/1952_Omega_Staybrite_410/IMG_0045.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.SMALL_SECONDS],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.STAYBRITE,
      catalogueReference: "2666-1",
      productionYear: "1952",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_33,
      thickness: CaseThicknessEnum.T_8,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.ARROW,
      finishingDetails: FinishingDetailsEnum.HONEYCOMB,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LIZARD_LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_16,
      color: ColorEnum.BLACK,
    },

    movement: MovementsDataDB.OMEGA_410,
  },
};

export default details;

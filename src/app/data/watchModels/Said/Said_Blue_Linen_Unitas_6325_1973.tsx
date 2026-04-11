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

import movement_UNITAS_6325 from "../../movements/Unitas/Unitas_6325";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1973 Said Blue Linen Unitas 6325",

  sliderImages: [
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2784.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2785.JPG",

    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2615.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2616.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2617.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2613.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2614.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2612.JPG",

    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2607.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2608.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2609.JPG",

    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2619.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2620.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2621.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2622.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2623.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2624.JPG",

    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2634.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2635.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2636.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2637.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2638.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2639.JPG",

    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2640.JPG",

    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2625.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2626.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2627.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2628.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2629.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2630.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2631.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2632.JPG",
    "public/assets/Images/Said/1973_Said_Blue_Linen_U6325_17J/IMG_2633.JPG",
  ],

  technicalData: {
    features: [featuresEnum.SMALL_SECONDS, featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.SAID,
      series: "Blue Linen",
      catalogueReference: "827066",
      productionYear: "1973",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_34,
      thickness: CaseThicknessEnum.T_8,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.BLUE,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.VERTICAL_BRUSHED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BORDEAUX,
    },

    movement: movement_UNITAS_6325,
  },
};

export default details;

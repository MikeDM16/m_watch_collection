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

import movement_Duromat_7522 from "../../movements/Duromat/Duromat_7522";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1972 Tecnal Green Abyss Duromat 7522",

  sliderImages: [
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2744.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2746.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2747.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2748.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2750.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2751.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2753.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2754.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2755.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2756.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2757.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2758.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2759.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2760.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2762.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2764.JPG",

    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2783.JPG",

    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2765.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2766.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2767.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2768.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2769.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2770.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2771.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2772.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2773.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2775.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2776.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2777.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2778.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2779.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2780.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2781.JPG",
    "public/assets/Images/Tecnal/1972_Tecnal_Green_abyss_7522_25J/IMG_2782.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC],

    information: {
      brand: BrandsEnum.TECNAL,
      series: "Green Abyss",
      catalogueReference: "-",
      productionYear: "1972",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_34,
      thickness: CaseThicknessEnum.T_12,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.DARK_GREEN,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.DARK_GREEN,
    },

    movement: movement_Duromat_7522,
  },
};

export default details;

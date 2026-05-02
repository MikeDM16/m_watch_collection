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
  title: "1974 Arauto Silver Tuxedo Unitas 6325",

  sliderImages: [
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2743.JPG",

    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2701.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2703.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2706.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2708.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2704.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2705.JPG",

    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2716.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2717.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2718.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2719.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2721.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2723.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2724.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2725.JPG",

    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2710.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2711.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2713.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2714.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2715.JPG",

    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2726.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2727.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2728.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2729.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2730.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2731.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2732.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2733.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2734.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2735.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2736.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2737.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2738.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2739.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2740.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2741.JPG",
    "public/assets/Images/Arauto/1974_Arauto_Silver_Tuxedo_U6325_17J/IMG_2742.JPG",
  ],

  saleReport: {
    price: 133,
    date: "28/04/2026",
    url: "https://www.catawiki.com/en/l/103288884",
  },

  technicalData: {
    features: [featuresEnum.SMALL_SECONDS, featuresEnum.MECHANICAL, featuresEnum.GOLD_PLATED_10M],

    information: {
      brand: BrandsEnum.ARAUTO,
      series: "Silver Tuxedo",
      catalogueReference: "-",
      productionYear: "1974",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_34,
      thickness: CaseThicknessEnum.T_8,
      material: CaseMaterialEnum.SS_GOLD_PLATED_10,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.TUXEDO,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BROWN,
    },

    movement: movement_UNITAS_6325,
  },
};

export default details;

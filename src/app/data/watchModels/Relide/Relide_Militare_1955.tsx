import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
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

const details: WatchDetails = {
  title: "1955 Relide Militare 17 Jewels",
  sliderImages: [
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1026.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1027.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1028.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1029.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1030.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1031.JPG",

    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1039.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1041.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1042.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1043.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1045.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1047.JPG",

    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1032.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1033.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1034.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1035.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1036.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1037.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1038.JPG",

    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1048.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1049.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1051.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1052.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1053.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1054.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1055.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1056.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1057.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1058.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1059.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1060.JPG",
    "public/assets/Images/Relide/1955_Relide_Militare/IMG_1061.JPG",
  ],

  technicalData: {
    features: [featuresEnum.SMALL_SECONDS, featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.RELIDE,
      series: "Militare",
      catalogueReference: "-",
      productionYear: "1955",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "33 mm",
      thickness: "7 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black",
    },

    movement: MovementsDataDB.ETA_900,
  },
};

export default details;

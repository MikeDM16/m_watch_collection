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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "1963 Tissot Nuevo Horizonte",
  sliderImages: [
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1104.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1105.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1062.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1063.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1064.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1065.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1066.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1067.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1068.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1069.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1070.JPG",

    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1087.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1088.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1082.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1083.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1089.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1090.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1092.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1094.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1096.JPG",

    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1071.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1072.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1073.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1074.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1075.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1076.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1077.JPG",

    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1084.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1085.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1086.JPG",

    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1099.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1100.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1101.JPG",
    "public/assets/Images/Tissot/1960_Tissot_Nuevo_Horizonte/IMG_1102.JPG",
  ],

  saleReport: {
    price: 345,
    date: "30/07/2025",
    url: "https://www.catawiki.com/en/l/96842809",
  },

  technicalData: {
    features: [
      featuresEnum.MECHANICAL,
      "Movement with production number 4454557, dating the watch back to 1960",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.NUEVO_HORIZONTE,
      catalogueReference: "76005-1",
      productionYear: "1960",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "7 mm",
      material: "Stainless Steel - Gold Plated 20 \u339B",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Beige",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Lizzard Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Green",
    },

    movement: MovementsDataDB.TISSOT_26_9_261,
  },
};

export default details;

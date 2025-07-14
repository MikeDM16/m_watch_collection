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
  title: "1943 Tissot Antimagnetic Tuxedo",
  sliderImages: [
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1158.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1159.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1160.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1161.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1162.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1163.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1164.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1165.JPG",

    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1174.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1176.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1177.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1178.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1180.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1182.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1183.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1184.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1185.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1186.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1188.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1189.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1190.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1191.JPG",

    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1166.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1167.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1168.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1169.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1170.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1171.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1172.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1173.JPG",

    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/tissot_manufacturing_dates.JPG",

    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1193.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1195.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1196.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1197.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1198.JPG",

    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1199.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1201.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1202.JPG",
    "public/assets/Images/Tissot/1943_Tissot_Tuxedo_27B1/IMG_1203.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.MECHANICAL,
      "Movement with production number 1217448, dating the watch back to 1943",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.ANTIMAGNETIC,
      catalogueReference: "1140306",
      productionYear: "1943",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "35 mm",
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
      color: "Brown",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.TUXEDO,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.TISSOT_27B_1,
  },
};

export default details;

import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "2007 Raymond Weil Saxo 9520",
  sliderImages: [
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1541.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1542.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1543.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1544.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1545.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1546.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1547.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1548.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1549.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1550.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1551.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1552.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1554.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1555.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1556.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1557.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1558.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1559.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1560.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1561.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1562.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1563.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1565.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1566.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1567.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1568.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1569.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1570.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1571.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1572.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1573.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1574.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1575.JPG",
    "public/assets/Images/Raymond_Weil/2007_Reymond_Weil_Saxo_9520/IMG_1576.JPG",
  ],
  sellReport: {
    price: 190,
    date: "19/04/2024",
    url: "https://www.catawiki.com/en/l/82735777",
  },

  technicalData: {
    features: ["Date", "10 meters", "Screw-in crown"],

    information: {
      brand: BrandsEnum.RAYMOND_WEIL,
      series: "Saxo",
      catalogueReference: "9520",
      productionYear: "2007",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "35 mm",
      thickness: "7 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_10M,
      finishingDetails: "Polished",
      bezel: "Without Bezel",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links Bracelet",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "18 mm",
      color: "Silver",
    },

    movement: MovementsDataDB.ETA_955_112,
  },
};

export default details;

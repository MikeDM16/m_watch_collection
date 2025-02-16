import { MovementsDataDB } from "../../movementsData";
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
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1992 Seiko 8M25 Dancing Hands - Age of Discoveries",

  sliderImages: [
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6671.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6672.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6673.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6674.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6676.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6677.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6678.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6679.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6680.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6681.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6682.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6683.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6684.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6685.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6686.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6687.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6688.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6689.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6690.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6691.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6692.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6693.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6694.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6695.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6696.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6697.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6698.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6699.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6700.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6701.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6702.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6704.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6706.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6707.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6708.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6709.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6710.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6711.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6712.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6713.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6714.JPG",
    "public/assets/Images/Seiko/1992_Seiko_8M25_Age_Of_Discoveries/IMG_6716.JPG",
  ],
  sellReport: {
    price: 412,
    date: "18/03/2024",
    url: "https://www.catawiki.com/en/l/81653557",
  },

  technicalData: {
    features: ["Date", "Perpetual Calendar", "Alarm", "30 meters"],

    information: {
      brand: BrandsEnum.SEIKO,
      series: "Age of Discoveries",
      catalogueReference: "8M25-7100 (400001)",
      productionYear: "1992",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "38 mm",
      thickness: "9 mm",
      material: "Stainless Steel - Gold Plated",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Detailed",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.HARDLEX,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.GOLD_DETAILS,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.SEIKO_8M25,
  },
};

export default details;

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
  title: "1976 Seiko 6306-7001",
  sliderImages: [
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6475.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6476.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6477.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6478.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6479.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6480.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6481.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6482.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6483.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6484.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6493.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6494.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6495.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6496.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6497.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6498.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6499.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6500.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6501.JPG",

    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6461.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6462.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6463.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6464.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6466.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6467.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6468.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6469.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6470.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6472.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6473.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6474.JPG",

    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6485.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6486.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6487.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6488.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6489.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6490.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6491.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6503.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6504.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6505.JPG",

    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6446.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6449.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6450.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6451.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6452.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6453.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6454.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6455.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6456.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6457.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6458.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6459.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6460.JPG",
    "public/assets/Images/Seiko/1976_Seiko_6306_7001/IMG_6461.JPG",
  ],
  technicalData: {
    features: ["Date", "Automatic", "150 meters", "Bi-directional rotating bezel"],

    information: {
      brand: BrandsEnum.SEIKO,
      series: "Automatic 150m Dive",
      catalogueReference: "6306-7001 683364",
      productionYear: "1976",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DIVE,
    },

    case: {
      diameter: "43 mm",
      thickness: "14 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_150M,
      finishingDetails: "Subtle Radial Polished",
      bezel: "bi-directional bezel, 10-minute graduated",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.ARROW,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.DAY_DATE_AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "22 mm",
      color: "Red",
    },

    movement: MovementsDataDB.SEIKO_6306A,
  },
};

export default details;

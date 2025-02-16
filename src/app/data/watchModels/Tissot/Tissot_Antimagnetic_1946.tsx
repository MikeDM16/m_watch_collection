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
  title: "1946 Tissot Antimagnetic",
  sliderImages: [
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1003.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1004.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1005.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1003.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1006.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1007.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1008.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1009.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1010.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1011.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1012.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1013.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1014.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1015.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1016.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1017.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1018.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1019.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1020.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1021.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1022.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1023.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1024.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1025.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1026.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1027.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1028.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1029.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1030.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1032.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1034.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1035.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1036.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1037.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1038.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1039.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1040.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/IMG_1041.JPG",
    "public/assets/Images/Tissot/1946_Tissot_Antimagnetic/tissot_manufacturing_dates.JPG",
  ],

  sellReport: {
    price: 402,
    date: "22/01/2025",
    url: "https://www.catawiki.com/en/l/92578955-tissot-antimagnetic-tuxedo-dial-bullseye-no-reserve-price-cal-tissot-27-3-15-jewels-men-1946",
  },

  technicalData: {
    features: ["Date", "Mechanical"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: "Antimagnetic",
      catalogueReference: "1267365",
      productionYear: "1946",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "35 mm",
      thickness: "8 mm",
      material: "Stainless Steel - Chromed",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.TUXEDO,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Crocodile leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.TISSOT_27_3,
  },
};

export default details;

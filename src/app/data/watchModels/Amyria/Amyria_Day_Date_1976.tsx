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
  title: "1976 Amyria Day Date",

  sliderImages: [
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0924.JPG",

    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0889.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0890.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0891.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0892.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0893.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0894.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0895.JPG",

    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0906.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0907.JPG",

    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0910.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0911.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0912.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0913.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0915.JPG",

    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0896.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0897.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0898.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0899.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0900.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0901.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0902.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0903.JPG",

    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0916.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0917.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0918.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0919.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0920.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0921.JPG",

    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0908.JPG",
    "public/assets/Images/Amyria/1976_Amyria_Day_Date/IMG_0909.JPG",
  ],
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.AMYRIA,
      series: "Day Date",
      catalogueReference: "-",
      productionYear: "1976",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Brown",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.DAY_DATE_AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Dark Green",
    },

    movement: MovementsDataDB.FE_140,
  },
};

export default details;

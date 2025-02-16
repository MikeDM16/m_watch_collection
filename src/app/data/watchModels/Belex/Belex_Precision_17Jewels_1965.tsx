import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";
import { WatchDetails } from "../../watchDetails";
import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { MovementsDataDB } from "../../movementsData";

const details: WatchDetails = {
  title: "1965 Belex Precision 17 Jewels",
  sliderImages: [
    "public/assets/Images/Belex/1965_Belex_17_Jewels/IMG_2436.JPG",
    "public/assets/Images/Belex/1965_Belex_17_Jewels/IMG_2437.JPG",
    "public/assets/Images/Belex/1965_Belex_17_Jewels/IMG_2438.JPG",
    "public/assets/Images/Belex/1965_Belex_17_Jewels/IMG_2439.JPG",
    "public/assets/Images/Belex/1965_Belex_17_Jewels/IMG_2440.JPG",
    "public/assets/Images/Belex/1965_Belex_17_Jewels/IMG_2441.JPG",
    "public/assets/Images/Belex/1965_Belex_17_Jewels/IMG_2442.JPG",
    "public/assets/Images/Belex/1965_Belex_17_Jewels/IMG_2443.JPG",
    "public/assets/Images/Belex/1965_Belex_17_Jewels/IMG_2444.JPG",
    "public/assets/Images/Belex/1965_Belex_17_Jewels/IMG_2445.JPG",
    "public/assets/Images/Belex/1965_Belex_17_Jewels/IMG_2446.JPG",
    "public/assets/Images/Belex/1965_Belex_17_Jewels/IMG_2447.JPG",
    "public/assets/Images/Belex/1965_Belex_17_Jewels/IMG_2448.JPG",
    "public/assets/Images/Belex/1965_Belex_17_Jewels/IMG_2449.JPG",
    "public/assets/Images/Belex/1965_Belex_17_Jewels/IMG_2450.JPG",
    "public/assets/Images/Belex/1965_Belex_17_Jewels/IMG_2451.JPG",
    "public/assets/Images/Belex/1965_Belex_17_Jewels/IMG_2452.JPG",
  ],
  sellReport: {
    price: 130,
    date: "22/04/2019",
    url: "https://www.catawiki.pt/l/26122123-belex-precision-17-jewels-homem-1950-1959",
  },
  technicalData: {
    features: ["Mechanical"],

    information: {
      brand: BrandsEnum.BELEX,
      series: "17 Jewels",
      catalogueReference: "-",
      productionYear: "1965",
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
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.UNITAS_6380,
  },
};

export default details;

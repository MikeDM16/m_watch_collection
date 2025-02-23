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
  title: "1976 Romar Incabloc Green 17 Jewels",
  sliderImages: [
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5643.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5644.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5645.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5646.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5648.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5649.JPG",

    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5666.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5667.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5668.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5669.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5670.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5671.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5672.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5673.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5674.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5675.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5676.JPG",

    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5632.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5633.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5634.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5635.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5636.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5639.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5641.JPG",

    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5677.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5680.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5683.JPG",

    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5651.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5652.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5653.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5654.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5655.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5656.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5657.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5658.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5660.JPG",

    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5684.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5685.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5686.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_Green_U6380/IMG_5687.JPG",
  ],

  saleReport: {
    price: 173,
    date: "26/11/2024",
    url: "https://www.catawiki.com/en/l/90879065-romar-vitesse-green-shades-nos-no-reserve-price-unitas-6380-17-jewels-men-1976",
  },

  technicalData: {
    features: ["Mechanical"],

    information: {
      brand: BrandsEnum.ROMAR,
      series: "Incabloc",
      catalogueReference: "-",
      productionYear: "1976",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "9 mm",
      material: "Gold Plated (10 \u339B) - SS case back",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Green Shades",
      dialMarkers: DialMarketsEnum.BREGUET,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Lizard Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Dark Green",
    },

    movement: MovementsDataDB.UNITAS_6380,
  },
};

export default details;

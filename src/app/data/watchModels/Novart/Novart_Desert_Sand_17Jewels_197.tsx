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
  title: "1974 Novart Desert Sand 17 Jewels",
  sliderImages: [
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5841.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5842.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5843.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5844.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5845.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5812.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5813.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5815.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5816.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5817.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5818.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5819.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5820.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5821.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5822.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5823.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5824.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5829.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5830.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5831.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5833.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5834.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5835.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5836.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5837.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_6092.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_6093.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_6094.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_6095.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_6096.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_6097.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5825.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5826.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5827.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Desert_Sand/IMG_5828.JPG",
  ],

  saleReport: {
    price: 200,
    date: "27/06/2024",
    url: "https://www.catawiki.com/en/l/85478331-novart-desert-sand-nos-no-reserve-price-unitas-6389-17-jewels-men-1974",
  },

  technicalData: {
    features: ["Mechanical"],

    information: {
      brand: BrandsEnum.NOVART,
      series: "Incabloc",
      catalogueReference: "(Desert Sand)",
      productionYear: "1974",
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
      color: "Yellow",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
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

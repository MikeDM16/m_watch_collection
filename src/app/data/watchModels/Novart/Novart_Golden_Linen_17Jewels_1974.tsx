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
  title: "1974 Novart Golden Linen 17 Jewels",
  sliderImages: [
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5959.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5960.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5925.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5926.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5928.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5929.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5930.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5933.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5934.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5935.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5936.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5937.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5938.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5939.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5940.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5947.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5949.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5950.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5951.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5952.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5953.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5954.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5956.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5957.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_6080.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_6081.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_6082.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_6083.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_6084.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5942.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5943.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5944.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5945.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5946.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5961.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5962.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5964.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5965.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5966.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Golden_Linen/IMG_5967.JPG",
  ],

  sellReport: {
    price: 190,
    date: "18/07/2024",
    url: "https://www.catawiki.com/en/l/85906777-novart-golden-linen-nos-no-reserve-price-unitas-6389-17-jewels-men-1974",
  },

  technicalData: {
    features: ["Mechanical"],

    information: {
      brand: BrandsEnum.NOVART,
      series: "Incabloc",
      catalogueReference: "(Golden Linen Dial)",
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
      color: "Golden Linen",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Lizard Skin Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Dark Green",
    },

    movement: MovementsDataDB.UNITAS_6380,
  },
};

export default details;

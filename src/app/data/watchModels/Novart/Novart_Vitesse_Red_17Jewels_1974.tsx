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
import { NovartBrandSeries } from "./NovartBrandSeries";

const details: WatchDetails = {
  title: "1974 Novart Vitesse Red 17 Jewels",

  sliderImages: [
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6291.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6292.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6294.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6296.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6261.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6262.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6263.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6264.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6265.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6266.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6267.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6268.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6269.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6270.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6271.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6273.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6274.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6275.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6276.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6277.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6278.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6279.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6280.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6281.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6282.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6283.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6285.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_5703.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_5704.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_5705.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_5706.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6286.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6289.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Red/IMG_6290.JPG",
    "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_6259.JPG",
  ],

  saleReport: {
    price: 160,
    date: "15/02/2024",
    url: "https://www.catawiki.com/en/l/80221757",
  },

  technicalData: {
    features: [featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.NOVART,
      series: NovartBrandSeries.VITESSE,
      catalogueReference: "(Red Dial)",
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
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Red",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black / Red",
    },

    movement: MovementsDataDB.UNITAS_6380,
  },
};

export default details;

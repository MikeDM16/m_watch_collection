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
  title: "1974 Novart Monza Green Borealis 17 Jewels",
  sliderImages: [
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4862.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4863.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4864.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4865.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4866.JPG",

    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4833.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4834.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4835.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4836.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4837.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4838.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4839.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4840.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4841.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4842.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4843.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4844.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4845.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4846.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4847.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4848.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4849.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4850.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4851.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4852.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4853.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4854.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4855.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4856.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4857.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4858.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4859.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4860.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Green_Borealis/IMG_4861.JPG",
  ],

  saleReport: {
    price: 390,
    date: "27/05/2024",
    url: "https://www.catawiki.com/en/l/84215391",
  },

  technicalData: {
    features: [featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.NOVART,
      series: NovartBrandSeries.MONZA,
      catalogueReference: "(Green Borealis Dial)",
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
      color: "Green",
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

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
  title: "1974 Novart Monza Red 17 Jewels",
  sliderImages: [
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_5846.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_5848.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_5849.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_5851.JPG",

    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6010.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6011.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6012.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6013.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6014.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6015.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6016.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6017.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6018.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6019.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6020.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6021.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6022.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6023.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6024.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6025.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6026.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6027.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6028.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6029.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6030.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6031.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6032.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6033.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6034.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6035.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6036.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6037.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6038.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6039.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6040.JPG",

    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_5852.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_5854.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_5855.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_5856.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_5857.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_5858.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_5859.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_5860.JPG",

    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6085.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6086.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6087.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6088.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6089.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6090.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Red/IMG_6091.JPG",
    "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_5987.JPG",
  ],

  saleReport: {
    price: 370,
    date: "08/12/2024",
    url: "https://www.catawiki.com/en/l/91546529",
  },

  technicalData: {
    features: [featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.NOVART,
      series: NovartBrandSeries.MONZA,
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
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Lizard Skin Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Red",
    },

    movement: MovementsDataDB.UNITAS_6380,
  },
};

export default details;

import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
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
  title: "1974 Novart Tides Blue 17 Jewels",
  sliderImages: [
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5910.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5912.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5913.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5915.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5884.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5885.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5886.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5887.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5888.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5889.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5890.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5891.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5892.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5893.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5894.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5895.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5896.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5902.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5903.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5904.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5905.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5906.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5907.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5908.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5909.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_6075.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_6076.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_6077.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_6078.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_6079.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5897.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5898.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5899.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5900.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5901.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5917.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5919.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5923.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Tides_Blue/IMG_5924.JPG",
  ],
  saleReport: {
    price: 224,
    date: "12/06/2024",
    url: "https://www.catawiki.com/en/l/84925243",
  },

  technicalData: {
    features: [featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.NOVART,
      series: "Tides",
      catalogueReference: "(Blue Dial)",
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
      color: "Blue",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Lizard Skin eather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Blue",
    },

    movement: MovementsDataDB.UNITAS_6380,
  },
};

export default details;

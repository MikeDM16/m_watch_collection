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
  title: "1955 Hermes Landerom 51 Chronograph",
  sliderImages: [
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1926.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1927.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1928.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1929.JPG",

    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1904.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1905.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1906.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1907.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1908.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1909.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1910.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1911.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1912.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1913.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1915.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1916.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1917.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1918.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1919.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1920.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1921.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1922.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1923.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1924.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1925.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1891.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1892.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1893.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1894.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1895.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1896.JPG",
  ],

  technicalData: {
    features: ["Date", "Mechanical Chronograph", "10 meters", "Tachymeter"],

    information: {
      brand: BrandsEnum.HERMES,
      series: "Chronograph",
      catalogueReference: "-",
      productionYear: "1955",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "41 mm",
      thickness: "14 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Tachymeter bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.LANDERON_51_17J,
  },
};

export default details;

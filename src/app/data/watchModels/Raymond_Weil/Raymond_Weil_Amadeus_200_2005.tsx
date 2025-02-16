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
  title: "2005 Raymond Weil Amadeus 200 7750",
  sliderImages: [
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1475.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1476.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1477.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1478.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1480.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1481.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1482.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1483.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1484.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1485.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1486.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1949.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1950.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1951.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1952.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1953.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1954.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1955.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1956.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1957.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1958.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1959.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1960.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1961.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1962.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1963.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1964.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1965.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1966.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1967.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1970.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1971.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1972.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1973.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1974.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1975.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1976.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1580.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1977.JPG",
  ],
  sellReport: {
    price: 425,
    date: "21/10/2023",
    url: "https://www.catawiki.com/en/l/75616609",
  },
  technicalData: {
    features: [
      "Date",
      "Automatic Chronograph",
      "18K Gold Bezel and Pushers",
      "50 meters",
      "Tachymeter",
    ],

    information: {
      brand: BrandsEnum.RAYMOND_WEIL,
      series: "Amadeus 200",
      catalogueReference: "7713",
      productionYear: "2005",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "36 mm",
      thickness: "12 mm",
      material: "18K Gold Detail and Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Beige",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.GOLD_DETAILS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.ETA_Valjoux_7750_25J,
  },
};

export default details;

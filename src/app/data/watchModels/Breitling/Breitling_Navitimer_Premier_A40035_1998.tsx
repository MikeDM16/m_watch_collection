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
import { BreitlingBrandSeries } from "./BreitlingBrandSeries";

const details: WatchDetails = {
  title: "1999 Breitling Navitimer Premier A40035",

  sliderImages: [
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2064.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2065.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2066.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2067.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2068.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2069.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2070.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2071.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2072.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2073.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2074.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2075.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2076.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2077.JPG",

    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2056.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2058.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2059.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2060.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2061.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2063.JPG",

    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_1949.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_1950.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_1986.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_1987.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_1988.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_1989.JPG",

    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2078.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2079.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2080.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2081.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2082.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2083.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2084.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2085.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2086.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2087.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2088.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2089.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2090.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2091.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2092.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2093.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2094.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2095.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2096.JPG",
    "public/assets/Images/Breitling/1999_Breitling_Navitimer_Premier_A40035/IMG_2097.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.CHRONOGRAPH,
      featuresEnum.AUTOMATIC,
      "The Re edition Premier was released in 1997, also available with date window in 1999, using caliber B42",
      "Breitling produced around 5000 units in stainless steel (A40035) and 1000 in solid gold (H40035 reference). ",
    ],

    information: {
      brand: BrandsEnum.BREITLING,
      series: BreitlingBrandSeries.NAVITIMER,
      catalogueReference: "Navitimer Premier (A40035)",
      productionYear: "1999",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "37 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Without Bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.ENAMEL,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Ligth Brown",
    },

    movement: MovementsDataDB.BREITLING_B40_38J,
  },
};

export default details;

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

import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1950 Omodox Precision 17 Rubis",
  description: {
    text:
      "	After some deep research in the most common watch forums, like WatchUSeek or TimeZone, no solid information \
        can be found regarding the origins and history of the Omodox watch brand. \n \n" +
      "Omodox seems to be a Swiss-based watch brand, assembling watches between the mid-1940s until mid-1970s.\n " +
      "By searching for the company name owners, the brand was officially registered in 1946 by his founder Uhrwerke Lengnau and, in 1986, \
        the brand was sold to Delma Watch Ltd, ceasing to exist. \n \n" +
      "As other brands, Omodox models were mostly entry-level watches and mostly sold in France, Spain and Portugal as affordable timepieces. ",

    sliderImages: [
      "public/assets/Images/Omodox/1950_Omodox_Precision/Omodox Models/m1 (1).JPG",
      "public/assets/Images/Omodox/1950_Omodox_Precision/Omodox Models/m1 (3).JPG",
      "public/assets/Images/Omodox/1950_Omodox_Precision/Omodox Models/m6 (1).JPG",
      "public/assets/Images/Omodox/1950_Omodox_Precision/Omodox Models/m6 (4).JPG",
      "public/assets/Images/Omodox/1950_Omodox_Precision/Omodox Models/m2 (1).JPG",
      "public/assets/Images/Omodox/1950_Omodox_Precision/Omodox Models/m2 (2).JPG",
      "public/assets/Images/Omodox/1950_Omodox_Precision/Omodox Models/m3 (1).JPG",
      "public/assets/Images/Omodox/1950_Omodox_Precision/Omodox Models/m3 (2).JPG",
      "public/assets/Images/Omodox/1950_Omodox_Precision/Omodox Models/m3 (3).JPG",
      "public/assets/Images/Omodox/1950_Omodox_Precision/Omodox Models/m5 (1).JPG",
      "public/assets/Images/Omodox/1950_Omodox_Precision/Omodox Models/m5 (2).JPG",
      "public/assets/Images/Omodox/1950_Omodox_Precision/Omodox Models/m6 (2).JPG",
      "public/assets/Images/Omodox/1950_Omodox_Precision/Omodox Models/m6 (3).JPG",
    ],
  },

  sliderImages: [
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2378.JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2379.JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2382.JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2384.JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2385.JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2386.JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2387.JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2388.JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2389.JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2390.JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2394.JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2415.JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2416.JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2417.JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2418.JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2419.JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2420.JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2423.JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2424.JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2428.JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2429 (1).JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2429 (2).JPG",
    "public/assets/Images/Omodox/1950_Omodox_Precision/IMG_2365.JPG",
  ],
  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.GOLD_PLATED_10M],

    information: {
      brand: BrandsEnum.OMODOX,
      series: "Precision DeLuxe",
      catalogueReference: "3365",
      productionYear: "1950",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "8 mm",
      material: "Gold Plated (10 \u339B) - Stainless Steel backcase",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Beige",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.TEXTURED,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: {
      title: "Aragno 151",
      description: "",
      usefullLinks: {
        "Ranfft Aragno 151":
          "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&&2uswk&Arogno_151",
      },
      sliderImages: [
        "public/assets/Images/Omodox/1950_Omodox_Precision/mov (3).JPG",
        "public/assets/Images/Omodox/1950_Omodox_Precision/mov (1).PNG",
        "public/assets/Images/Omodox/1950_Omodox_Precision/mov (3).PNG",
        "public/assets/Images/Omodox/1950_Omodox_Precision/mov (4).PNG",
        "public/assets/Images/Omodox/1950_Omodox_Precision/mov (1).JPG",
        "public/assets/Images/Tourist/1950_Tourist/mov1.PNG",
        "public/assets/Images/Tourist/1950_Tourist/mov2.PNG",
      ],
      details: {
        manufacturer: "Aragno",
        modelReference: "151",
        type: "Mechanical",
        frequency: "18000 A/h",
        jewels: "17 (Seventeen) Jewels ",
        reserve: "44 Hours",
        functions: "Hours, Minutes, Sweep Seconds at 6 o'clock position, Incabloc",
      },
    },
  },
};

export default details;

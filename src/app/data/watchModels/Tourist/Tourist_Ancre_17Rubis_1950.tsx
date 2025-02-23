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

import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1950 Tourist Ancre 17 Rubis",
  description: {
    text:
      "After some deep research in the most common watch forums, like WatchUSeek or TimeZone, no solid information can be found regarding the origins and history of the Tourist watch brand.\n \n" +
      "Tourist seems to be a private lable Swiss-based watch brand. Based on the style of the found watches, the brand assembled watches between the 1950s late-1970s. \n \n" +
      "As other brands, Tourist models were mostly entry-level watches and sold in France, Spain and Portugal as affordable timepieces.",

    sliderImages: [
      "public/assets/Images/Tourist/1950_Tourist/TouristModels/m1 (2).JPG",
      "public/assets/Images/Tourist/1950_Tourist/TouristModels/m1 (3).JPG",
      "public/assets/Images/Tourist/1950_Tourist/TouristModels/m1 (1).JPG",
      "public/assets/Images/Tourist/1950_Tourist/TouristModels/m1 (4).JPG",
      "public/assets/Images/Tourist/1950_Tourist/TouristModels/m2 (1).JPG",
      "public/assets/Images/Tourist/1950_Tourist/TouristModels/m2 (2).JPG",
      "public/assets/Images/Tourist/1950_Tourist/TouristModels/m3 (2).JPG",
      "public/assets/Images/Tourist/1950_Tourist/TouristModels/m3 (1).JPG",
      "public/assets/Images/Tourist/1950_Tourist/TouristModels/m4 (2).JPG",
      "public/assets/Images/Tourist/1950_Tourist/TouristModels/m4 (1).JPG",
      "public/assets/Images/Tourist/1950_Tourist/TouristModels/m4.JPG",
      "public/assets/Images/Tourist/1950_Tourist/TouristModels/m5 (1).JPG",
      "public/assets/Images/Tourist/1950_Tourist/TouristModels/m5 (4).JPG",
      "public/assets/Images/Tourist/1950_Tourist/TouristModels/m5 (3).JPG",
      "public/assets/Images/Tourist/1950_Tourist/TouristModels/m6 (1).JPG",
      "public/assets/Images/Tourist/1950_Tourist/TouristModels/m6 (4).JPG",
      "public/assets/Images/Tourist/1950_Tourist/TouristModels/m6 (3).JPG",
      "public/assets/Images/Tourist/1950_Tourist/TouristModels/m7.JPG",
      "public/assets/Images/Tourist/1950_Tourist/TouristModels/m8 (1).JPG",
      "public/assets/Images/Tourist/1950_Tourist/TouristModels/m8.JPG",
    ],
  },

  sliderImages: [
    "public/assets/Images/Tourist/1950_Tourist/IMG_2538.JPG",
    "public/assets/Images/Tourist/1950_Tourist/IMG_2539.JPG",
    "public/assets/Images/Tourist/1950_Tourist/IMG_2540.JPG",
    "public/assets/Images/Tourist/1950_Tourist/IMG_2541.JPG",
    "public/assets/Images/Tourist/1950_Tourist/IMG_2542.JPG",
    "public/assets/Images/Tourist/1950_Tourist/IMG_2543.JPG",
    "public/assets/Images/Tourist/1950_Tourist/IMG_2544.JPG",
    "public/assets/Images/Tourist/1950_Tourist/IMG_2545.JPG",
    "public/assets/Images/Tourist/1950_Tourist/IMG_2546.JPG",
    "public/assets/Images/Tourist/1950_Tourist/IMG_2547.JPG",
    "public/assets/Images/Tourist/1950_Tourist/IMG_2532.JPG",
    "public/assets/Images/Tourist/1950_Tourist/IMG_2533.JPG",
    "public/assets/Images/Tourist/1950_Tourist/IMG_2534.JPG",
  ],
  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.GOLD_PLATED_10M],

    information: {
      brand: BrandsEnum.TOURIST,
      series: "17 Rubis",
      catalogueReference: "4316",
      productionYear: "1950",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "34 mm",
      thickness: "8 mm",
      material: "Gold Plated (10 \u339B) - SS case back",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.TEXTURED,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "16 mm",
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
        "public/assets/Images/Tourist/1950_Tourist/mov1.PNG",
        "public/assets/Images/Tourist/1950_Tourist/mov2.PNG",
        "public/assets/Images/Omodox/1950_Omodox_Precision/mov (1).JPG",
        "public/assets/Images/Omodox/1950_Omodox_Precision/mov (3).JPG",
        "public/assets/Images/Omodox/1950_Omodox_Precision/mov (1).PNG",
        "public/assets/Images/Omodox/1950_Omodox_Precision/mov (3).PNG",
        "public/assets/Images/Omodox/1950_Omodox_Precision/mov (4).PNG",
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

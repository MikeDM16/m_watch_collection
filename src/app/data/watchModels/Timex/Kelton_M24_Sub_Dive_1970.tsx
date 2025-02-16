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
  title: "1970 Kelton M24 Sub-Dive",
  description: {
    text:
      "Kelton is today still an existing watch company, keeping its productions and sells mainly in France, \
        where the company first appear and grow. The company was acquired by Timex during the 60s and since then it's a \
        sub-brand that Timex uses to sell their watches over France and Europe. (More about Kelton beginning and history here) \n \n" +
      "Focusing on their vintage models, Kelton produced but also used pieces from various parts of the world and just assemble them together. \
        For instance, the movements could be from USA or the United Kingdom and the case could be made in France or also imported from other \
         countries involved whit Timex production. Most of Kelton vintage models are a mix of cases and dials that Timex also used in their watches. \
         To know a bit more about Timex, how they built their movements and how they made their impact in the wristwatch industry, please read the information provided here.\n \n" +
      "After some research, I investigated tricks to date either Timex or Kelton watches. This can be a tough task since different countries or \
        production lines could use different codes in the watches. After 1963, Timex and its subsidiaries like Kelton began recording an 8-digit code in \
        front of the clock in the 6 o'clock zone. But this model does not contain that. Pre-1963 models have an ink-stamped code inside the back case of the watch. \n \n" +
      "This sub-diver model has an '8F70' stamped inside its back case. I read in a forum that this code could be interpreted as follows: \
        The 8 stands for the year 1959, the F could correspond to the month or the production line, and the 70 identified the movement. \
        However there is no Timex movement whose calibre is named M70 or manual winded. Another interpretation would be that 70 represents the year of production \
         (1970) and in this case, I do not know the meaning of '8F'. 1970 does justify the style of the watch. \n \n" +
      "The movement is mechanical and resembles a modified Timex M24. Timex M24 was the base men's watch movement and, like other Timex movements from \
        these decades, contained no jewels and could only be serviced from the dial side. They were made to 'eat dust and pass through well'. \
        Needing few calibrations or maintenance, these movements are still ticking strong after more than three decades. \
        (It's just me or Timex Movement are like Swiss Cheese? The more recent the moment the more holes they crave in the back) \n \n" +
      "Timex M24 was produced around 1969 to 1976, mainly in Great Britain. \n" +
      "This model crystal is acrylic and the bezel is a countdown, turning both ways. The back case only says 'Stainless Steel back' and \
        'waterproof tested to the depth of 25 meters'. The hands and markers were restored and probably used Tritium based paint as original Lume material.",

    sliderImages: [],
  },

  sliderImages: [
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_1942.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_1943.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_1944.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_1945.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_1946.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_1947.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_1948.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_1949.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_1950.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_1951.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_1952.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_1953.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_1954.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_1955.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_1956.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_0273.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_0274.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_0276.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_0277.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_1764.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_2040.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_2042.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_2043.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/IMG_2600.JPG",
    "public/assets/Images/Kelton/1970_Kelton_M24/dial.JPG",
  ],
  sellReport: {
    price: 100,
    date: "02/08/2019",
    url: "https://www.catawiki.pt/l/28387083-kelton-m24-sub-dive-countdown-homem-1960-1969",
  },
  technicalData: {
    features: ["Date", "Mechanical", "Bi-directional count-down bezel"],

    information: {
      brand: BrandsEnum.KELTON,
      series: "M24",
      catalogueReference: "8F32",
      productionYear: "1970",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DIVE,
    },

    case: {
      diameter: "36 mm",
      thickness: "8 mm",
      material: "Stainless Steel - Chromed",
      waterResistance: WaterResistanceEnum.WATERPROOF_25M,
      finishingDetails: "Polished",
      bezel: "Count-down bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_4_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "19 mm",
      color: "Grey",
    },

    movement: {
      title: "Timex M24",
      description: "",
      usefullLinks: {
        "Ranfft M24": "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&0&2uswk&Timex_M24",
      },
      sliderImages: [
        "public/assets/Images/Kelton/1970_Kelton_M24/mov.JPG",
        "public/assets/Images/Kelton/1970_Kelton_M24/Timex_M24-1.JPG",
      ],
      details: {
        manufacturer: "Timex (France)",
        modelReference: "M24",
        type: "Mechanical",
        frequency: "18000 A/h",
        jewels: "0 Jewels (None)",
        reserve: "42 Hours",
        functions: "Date, Hours, Minutes, Sweep Seconds",
      },
    },
  },
};

export default details;

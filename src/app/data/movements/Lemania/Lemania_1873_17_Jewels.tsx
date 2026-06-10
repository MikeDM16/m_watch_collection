import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const LEMANIA_1873_17J: Caliber = {
  // Title
  title: "Lemania 1873",

  //Description
  description:
    "Calibre 1873 is a manual winding chronograph movement from Lemania.\n\
    Running at 21,600 A/h, it's 27.5 mm in diameter and 6.87 mm high, has 17 or 18 jewels, and a 40 hour power reserve.\n\
    The cam switching chronograph has a central seconds hand and three subdials: 30 minute chronograph at 3:00, 12 hour counter at 6:00, and 60 second timekeeping at 9:00.\n\
    - Famously known as Omega Cal. 861, featured in the original Moonwatch Speedmaster\n\
    - Universal Genève Cal. 84\n\
    - Breitling Cal. 12",

  // UsefullLinks
  usefullLinks: {
    "EmmyWatch Lemania 1873": "https://www.emmywatch.com/db/movement/lemania--1873/",
  },

  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Lemania/Lemania_1873/Lemania_1873_1.JPG",
    "public/assets/Images/Movements/Lemania/Lemania_1873/Lemania_1873_3.JPG",
    "public/assets/Images/Movements/Lemania/Lemania_1873/Lemania_1873_4.JPG",
    "public/assets/Images/Movements/Lemania/Lemania_1873/Lemania_1873_5.JPG",
    "public/assets/Images/Movements/Lemania/Lemania_1873/Lemania_1873_6.JPG",
  ],

  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.LEMANIA,
    // ModelReference
    modelReference: "1873",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_21600,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_40,
    // Functions
    functions: "Minutes, Sub Seconds at 9 o'clock, 12h Chronograph",
    // Battery
    battery: undefined,
  },
};

export default LEMANIA_1873_17J;

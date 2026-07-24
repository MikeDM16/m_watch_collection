import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const VENUS_175_17J: Caliber = {
  // Title
  title: "Venus Cal. 175",
  //Description
  description:
    "The Venus 175 is the base model of a family of column wheel chronograph movements. Lauched in 1942, was substantially modified in 1949 and retired at about 1960.\n\
    Cal. 175 can feature a 30 or 45 minute chronograph counter at 3:00.",

  // UsefullLinks
  usefullLinks: {
    "Emmy Watch Venus 175": "https://www.emmywatch.com/db/movement/venus--178/",
    "Grail Watch Venus 175": "https://reference.grail-watch.com/movement/venus-178/",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Landeron/Landeron_48_17J/Landeron_48_17J_3.JPG",
    "public/assets/Images/Movements/Venus/Venus_175/Venus_178_1.JPG",
    "public/assets/Images/Movements/Venus/Venus_175/Venus_178_2.JPG",
    "public/assets/Images/Movements/Venus/Venus_175/Venus_178_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.VENUS,
    // ModelReference
    modelReference: "178",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_45,
    // Functions
    functions:
      "Hours, Minutes, Sub Seconds at 6 o'clock, Up/Down Chronograph with Central Seconds Hand and 12 o'clock 45min counter",
    // Battery
    battery: undefined,
  },
};

export default VENUS_175_17J;

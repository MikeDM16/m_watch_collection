import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const VENUS_170_17J: Caliber = {
  // Title
  title: "Venus Cal. 170",
  //Description
  description:
    "The Venus 170 is primarily designed for chronograph functionality, based on Edouard Heuer's patent from 1886.",
  // UsefullLinks
  usefullLinks: {
    "Emmy Watch Venus 170": "https://www.emmywatch.com/db/movement/venus--170/",
    "Grail Watch Venus 170": "https://reference.grail-watch.com/movement/venus-170/",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Venus/Venus_170/Venus_170_0.JPG",
    "public/assets/Images/Movements/Venus/Venus_170/Venus_170_2.JPG",
    "public/assets/Images/Movements/Venus/Venus_170/Venus_170_1.JPG",
    "public/assets/Images/Movements/Venus/Venus_170/Venus_170_3.JPG",
    "public/assets/Images/Movements/Venus/Venus_170/Venus_170_4.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.VENUS,
    // ModelReference
    modelReference: "170",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_40,
    // Functions
    functions:
      "Hours, Minutes, Sub Seconds at 6 o'clock, Up/Down Chronograph with Central Seconds Hand and 12 o'clock 30min counter",
    // Battery
    battery: undefined,
  },
};

export default VENUS_170_17J;

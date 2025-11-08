import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const VOSTOK_2605_17J: Caliber = {
  // Title
  title: "Vostok Cal. 2605",
  //Description
  description:
    "The Vostok 2605 watch movement, introduced in 1957, is a manual wind movement with several functions, including sub seconds, date display, shock protection, and a calendar feature. \n\
  The caliber also features a Breguet hairspring.\n\
  \n\
  Catalogue references:\n\
  - 2602: sub second, without shock protection\n\
  - 2603: sub second\n\
  - 2605: sub second, date\n",

  // UsefullLinks
  usefullLinks: {
    "Emmy Watch Vostok 2605": "https://www.emmywatch.com/db/movement/vostok--2605/",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Vostok/Vostok_2605/Vostok_2605_1.JPG",
    "public/assets/Images/Movements/Vostok/Vostok_2605/Vostok_2605_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.VOSTOK,
    // ModelReference
    modelReference: "2605",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_38,
    // Functions
    functions: "Hours, Minutes, Sub Seconds at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default VOSTOK_2605_17J;

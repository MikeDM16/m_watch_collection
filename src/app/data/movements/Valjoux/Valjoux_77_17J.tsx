import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const VALJOUX_77_17J: Caliber = {
  // Title
  title: "Valjoux Cal. 77",
  //Description
  description:
    "The Valjoux 77 is a manual-wind chronograph with a 60-second counter and 30/45-minute counters, driven by a pillar wheel. Additionally, it includes a sub-second function.",
  // UsefullLinks
  usefullLinks: {
    "Emmy Watch Valjoux 77": "https://www.emmywatch.com/db/movement/valjoux--77--1/",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Valjoux/Valjoux_77/Valjoux_77_2.JPG",
    "public/assets/Images/Movements/Valjoux/Valjoux_77/Valjoux_77_1.JPG",
    "public/assets/Images/Movements/Valjoux/Valjoux_77/Valjoux_77_3.JPG",
    "public/assets/Images/Movements/Valjoux/Valjoux_77/Valjoux_77_4.JPG",
    "public/assets/Images/Movements/Valjoux/Valjoux_77/Valjoux_77_5.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.VALJOUX,
    // ModelReference
    modelReference: "77",
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

export default VALJOUX_77_17J;

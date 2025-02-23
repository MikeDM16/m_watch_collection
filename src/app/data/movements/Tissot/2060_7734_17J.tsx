import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const TISSOT_2060_7734_17J: Caliber = {
  // Title
  title: "Tissot 2060 (Valjoux 7734 - Date)",
  //Description
  description:
    "Chronograph based on the Valjoux 7734. Similar to the 7733, but adds a date complication at 6 0'clock. \n\n \
  Produced from 1970 until around 1974.",
  // UsefullLinks
  usefullLinks: {},

  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Tissot/2060/7734_1.JPG",
    "public/assets/Images/Movements/Tissot/2060/7734_2.JPG",
    "public/assets/Images/Movements/Tissot/2060/2060_7734_1.JPG",
    "public/assets/Images/Movements/Tissot/2060/2060_7734_2.JPG",
    "public/assets/Images/Movements/Tissot/2060/2060_7734_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.TISSOT,
    // ModelReference
    modelReference: "2060",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_44,
    // Functions
    functions:
      "Hours, Minutes, Central Chronograph seconds, 9 o'clock seconds subdial, 3 o'clock 30 minutes subdial, date at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default TISSOT_2060_7734_17J;

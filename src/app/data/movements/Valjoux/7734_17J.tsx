import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const VALJOIX_7734_17J: Caliber = {
  // Title
  title: "Valjoux 7734",
  //Description
  description:
    "Chronograph based on the Valjoux 7733, but adds a date complication at 6 0'clock. Some variations also include a central moon phase display. \n\n \
  Produced from 1970 until around 1974.",
  // UsefullLinks
  usefullLinks: {},

  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Valjoux/Valjoux_7734/7734_2.JPG",
    "public/assets/Images/Movements/Valjoux/Valjoux_7734/7734_1.JPG",
    "public/assets/Images/Movements/Valjoux/Valjoux_7734/2060_7734_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.VALJOUX,
    // ModelReference
    modelReference: "7734",
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
      "Hours, Minutes, Central Chronograph seconds, 9 o'clock sweep seconds subdial, 3 o'clock 30 minutes counter, date at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default VALJOIX_7734_17J;

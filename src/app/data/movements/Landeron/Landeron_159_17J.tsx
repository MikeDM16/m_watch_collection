import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const LANDERON_159_17J: Caliber = {
  // Title
  title: "Landeron 159",
  //Description
  description:
    "The Landeron Cal. 159 is one of a family of chronograph movements produced by Landeron from 1937 through the 1970s. \n\
  Unlike many 2-button chronograph movements, the stop function is activated by the reset button rather than the start button. \n\
  Therefore, on many Cal. 159 family movements from Landeron, the buttons function as follows:\n\
  \t - 2:00 Start Chronograph\n\
  \t - 4:00 Stop/Reset Chronograph\n",
  // UsefullLinks
  usefullLinks: {
    "Emmy Watch Landeron 159": "https://www.emmywatch.com/db/movement/landeron--159/",
  },

  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Landeron/Landeron_159_17J/Landeron_159_17J_3.JPG",
    "public/assets/Images/Movements/Landeron/Landeron_159_17J/Landeron_159_17J_2.JPG",
    "public/assets/Images/Movements/Landeron/Landeron_159_17J/Landeron_159_17J_1.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.LANDERON,
    // ModelReference
    modelReference: "159",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_41,
    // Functions
    functions:
      "Minutes, Sub Seconds at 9 o'clock, Central Chronograph hand with 12 o'clock 30 minutes Chronograph, Calendar at 6 0'clock position",
    // Battery
    battery: undefined,
  },
};

export default LANDERON_159_17J;

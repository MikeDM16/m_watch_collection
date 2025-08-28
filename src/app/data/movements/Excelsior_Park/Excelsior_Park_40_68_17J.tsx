import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const EXCELSIOR_PARK_40_68_17J: Caliber = {
  // Title
  title: "Excelsior Park 40-68",
  //Description
  description:
    "Excelsior Park Cal. JB4 family movements are recognizable due to the distinctive U-shaped cock that supports the chronograph wheels.\
    Nearly every other chronograph uses a Y- or wishbone shaped cock or bridge.\n\
    The overall design of the movement is also “reversed” from many other chronographs, with the rabbit-shaped hammer falling on the crown side and a counter-clockwise balance cock.\n\
    Includes several quality specifications such as a Breguet spiral hairspring, screwed balance and machined springs. The chronograph minutes recorder is equipped with a “sautoir” (jumping mechanism).\n\n\
    Excelsior Park chronograph movements were used by Gallet, Zenith, and Girard-Perregaux as well as in-house by Excelsior Park and Moeris watches.",
  // UsefullLinks
  usefullLinks: {
    "EmmyWatch EP 40": "https://www.emmywatch.com/db/movement/excelsior_park--40/",
  },

  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Excelsior_Park/Excelsior_Park_40_68/Excelsior_Park_40_68_0.JPG",
    "public/assets/Images/Movements/Excelsior_Park/Excelsior_Park_40_68/Excelsior_Park_40_68_1.JPG",
    "public/assets/Images/Movements/Excelsior_Park/Excelsior_Park_40_68/Excelsior_Park_40_68_2.JPG",
    "public/assets/Images/Movements/Excelsior_Park/Excelsior_Park_40_68/Excelsior_Park_40_68_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.EXCELSIOR_PARK,
    // ModelReference
    modelReference: "40-68",
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
      "Breguet hairspring, Hours, Minutes, Sub Seconds at 9 o'clock, 30 minutes Chronograph",
    // Battery
    battery: undefined,
  },
};

export default EXCELSIOR_PARK_40_68_17J;

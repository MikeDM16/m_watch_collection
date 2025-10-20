import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const LEMANIA_1281_17J: Caliber = {
  // Title
  title: "Lemania 1281",

  //Description
  description:
    "Tissot, Omega and Lemania were parter companies along the 1960s. \
  This partnership lead to many Lemania movements beeing used and rebranded by Tissot and Omega. \n\n\
  The Lemania 1281 is used by Tissot under the reference Cal. Tissot 871. \n\
  This reference 1281 is also the predecessor of the Lemania 1873, more famously known as Omega Cal. 861, featured in the original Moonwatch Speedmaster.",

  // UsefullLinks
  usefullLinks: {
    "EmmyWatch Lemania 1281": "https://www.emmywatch.com/db/movement/lemania--1281/",
  },

  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Lemania/Lemania_1281/Lemania_1281_1.JPG",
    "public/assets/Images/Movements/Lemania/Lemania_1281/Lemania_1281_2.JPG",
    "public/assets/Images/Movements/Lemania/Lemania_1281/Lemania_1281_3.JPG",
    "public/assets/Images/Movements/Lemania/Lemania_1281/Lemania_1281_4.JPG",
  ],

  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.LEMANIA,
    // ModelReference
    modelReference: "1281",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
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

export default LEMANIA_1281_17J;

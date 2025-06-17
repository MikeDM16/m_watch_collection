import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ETA_2895_1_30J: Caliber = {
  // Title
  title: "ETA 2895",
  //Description
  description:
    "ETA caliber 2895-1 is a Swiss made automatic watch movement with 30 jewels and a frequency of 4 Hz (28,800 beats per hour).\n\
  The notable features of the 2895-1 are its small seconds subdial at 6:00 with a date.\n\n\
  \
  The 2895-1 is available in 3 grades depending on the requirements of the watch it is being used in: Elabore, Top, or COSC Chronometer.",

  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_2895_1/ETA_2895_1_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_2895_1/ETA_2895_1_4.JPG",
    "public/assets/Images/Movements/ETA/ETA_2895_1/ETA_2895_1_5.JPG",
    "public/assets/Images/Movements/ETA/ETA_2895_1/ETA_2895_1_2.JPG",
    "public/assets/Images/Movements/ETA/ETA_2895_1/ETA_2895_1_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "2895-1",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_28800,
    // Jewels
    jewels: JewelsNumberEnum.J_30,
    // Reserve
    reserve: ReserveHoursEnum.R_44,
    // Functions
    functions: "Day, Hours, Minutes, Sub Seconds at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default ETA_2895_1_30J;

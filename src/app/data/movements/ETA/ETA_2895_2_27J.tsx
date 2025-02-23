import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ETA_2895_2_27J: Caliber = {
  // Title
  title: "ETA 2895",
  //Description
  description:
    "ETA caliber 2895-2 is a Swiss made automatic watch movement with 27 jewels and a frequency of 4 Hz (28,800 beats per hour).\n\
  The notable features of the 2895-2 are its small seconds subdial at 6:00 with a date.\n\n\
  \
  The 2895-2 is available in 3 grades depending on the requirements of the watch it is being used in: Elabore, Top, or COSC Chronometer.",

  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_2895_2/ETA_2895_2_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_2895_2/ETA_2895_2_2.JPG",
    "public/assets/Images/Movements/ETA/ETA_2895_2/ETA_2895_2_3.JPG",
    "public/assets/Images/Movements/ETA/ETA_2895_2/ETA_2895_2_5.JPG",
    "public/assets/Images/Movements/ETA/ETA_2895_2/ETA_2895_2_4.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "2895-2",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_28800,
    // Jewels
    jewels: JewelsNumberEnum.J_27,
    // Reserve
    reserve: ReserveHoursEnum.R_44,
    // Functions
    functions: "Day, Hours, Minutes, Sweep Seconds at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default ETA_2895_2_27J;

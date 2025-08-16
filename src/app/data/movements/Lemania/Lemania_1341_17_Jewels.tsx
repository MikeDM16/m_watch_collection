import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const LEMANIA_1341: Caliber = {
  // Title
  title: "Lemania 1341",
  //Description
  description:
    "Caliber references: \n\
  - 1340: hour counter, 24h display\n\
  - 1341: hour counter\n\
  - 1343: -\n\
  - 1345: countdown for regatta start\n\
  ",
  // UsefullLinks
  usefullLinks: {},

  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Lemania/Lemania_1341/Lemania_1341_1.JPG",
    "public/assets/Images/Movements/Lemania/Lemania_1341/Lemania_1341_2.JPG",
    "public/assets/Images/Movements/Lemania/Lemania_1341/Lemania_1341_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.LEMANIA,
    // ModelReference
    modelReference: "1341",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_28800,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_44,
    // Functions
    functions:
      "Hour, Minutes, Sub Seconds at 9 o'clock, 12h Chronograph with dedicated hands for minutes and seconds.",
    // Battery
    battery: undefined,
  },
};

export default LEMANIA_1341;

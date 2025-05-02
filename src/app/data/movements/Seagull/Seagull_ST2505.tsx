import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const SEAGULL_ST2505: Caliber = {
  // Title
  title: "Seagull ST2505",
  //Description
  description: "",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Seagull/Seagull_ST2505/Seagull_ST2505_2.JPG",
    "public/assets/Images/Movements/Seagull/Seagull_ST2505/Seagull_ST2505_1.JPG",
    "public/assets/Images/Movements/Seagull/Seagull_ST2505/Seagull_ST2505_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.SEAGULL,
    // ModelReference
    modelReference: "Cal. 2505 (ST2505, TY2505)",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_21600,
    // Jewels
    jewels: JewelsNumberEnum.J_25,
    // Reserve
    reserve: ReserveHoursEnum.R_45,
    // Functions
    functions:
      "Central seconds, retrograde date at 9:30, power reserve at 2:30, open balance at 6:00",
    // Battery
    battery: undefined,
  },
};

export default SEAGULL_ST2505;

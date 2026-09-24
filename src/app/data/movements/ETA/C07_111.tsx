import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const ETA_C07_111: Caliber = {
  // Title
  title: "ETA C07.111",
  //Description
  description:
    "ETA automatic movement known as the Powermatic 80. \n \n" +
    "Based on the ETA 2824-2 date movement. Reduced frequency from 28800 A/h to 21600 A/h to achieve a higher power reserve of 80 hours.",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: ["public/assets/Images/Movements/ETA/C07_111/C07_111.JPG"],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "C07.111",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_21600,
    // Jewels
    jewels: JewelsNumberEnum.J_23,
    // Reserve
    reserve: ReserveHoursEnum.R_80,
    // Functions
    functions: "Date, Hours, Minutes, Sweep Seconds, Quick date set and bi-directional winding",
    // Battery
    battery: undefined,
  },
};

export default ETA_C07_111;

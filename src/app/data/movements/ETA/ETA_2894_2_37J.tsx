import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ETA_2894_2_37J: Caliber = {
  // Title
  title: "ETA 2894",
  //Description
  description:
    "The ETA caliber 2894-2 is a Swiss made automatic movement based on the ETA 2892, but with a chronograph module (made by ETA, not Dubois Depraz)",

  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_2894/ETA_2894_2_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_2894/ETA_2894_2_2.JPG",
    "public/assets/Images/Movements/ETA/ETA_2894/ETA_2894_2_3.JPG",
    "public/assets/Images/Movements/ETA/ETA_2894/ETA_2894_2_4.JPG",
    "public/assets/Images/Movements/ETA/ETA_2894/ETA_2894_2_5.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "2894-2",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_28800,
    // Jewels
    jewels: JewelsNumberEnum.J_37,
    // Reserve
    reserve: ReserveHoursEnum.R_42,
    // Functions
    functions: "Day, Chronograph, Hours, Minutes, Sweep Seconds at 3 o'clock",
    // Battery
    battery: undefined,
  },
};

export default ETA_2894_2_37J;

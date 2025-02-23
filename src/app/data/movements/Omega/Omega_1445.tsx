import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const OMEGA_1445: Caliber = {
  // Title
  title: "Omega Cal. 1445",
  //Description
  description:
    "Omega quartz caliber with day and date sub dial calendar, based on the ETA 255.471. \n\
    First crown position allows for a quick month day set up (3 o'clock subdial) \
    The week day sub dial at 9 o'clock is adjusted with the crown in the second position and by moving forward the hours.",

  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Omega/cal_1445/cal_1445_1.JPG",
    "public/assets/Images/Movements/Omega/cal_1445/cal_1445_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.OMEGA,
    // ModelReference
    modelReference: "1445",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_6,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "Day and Date Sub dials, Hours, Minutes, Seconds",
    // Battery
    battery: "373",
  },
};

export default OMEGA_1445;

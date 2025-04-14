import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const OMEGA_1430: Caliber = {
  // Title
  title: "Omega Cal. 1430",
  //Description
  description:
    "Omega quartz caliber, based on the ETA 255.411. Calendar with quick set adjustment.",

  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Omega/cal_1430/cal_1430_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_255_411/ETA_255_411_2.JPG",
    "public/assets/Images/Movements/ETA/ETA_255_411/ETA_255_411_3.JPG",
    "public/assets/Images/Movements/ETA/ETA_255_411/ETA_255_411_1.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.OMEGA,
    // ModelReference
    modelReference: "1430",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_6,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "Date, Hours, Minutes, Seconds",
    // Battery
    battery: "373",
  },
};

export default OMEGA_1430;

import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const OMEGA_1441: Caliber = {
  // Title
  title: "Omega Cal. 1441",
  //Description
  description:
    "Omega quartz caliber, based on the ETA 255.461/462/561.\n\
  Quick hour setting using the 1st crown position with 1h jumps. Normal hands settings can be done with the 2nd crown position.",

  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Omega/cal_1441/cal_1441_2.JPG",
    "public/assets/Images/Movements/Omega/cal_1441/cal_1441_3.JPG",
    "public/assets/Images/Movements/Omega/cal_1441/cal_1441_5.JPG",
    "public/assets/Images/Movements/ETA/ETA_255_462/ETA_255_462_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_255_462/ETA_255_462_2.JPG",
    "public/assets/Images/Movements/Omega/cal_1441/cal_1441_1.JPG",
    "public/assets/Images/Movements/Omega/cal_1441/cal_1441_4.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.OMEGA,
    // ModelReference
    modelReference: "1441",
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
    battery: "371",
  },
};

export default OMEGA_1441;

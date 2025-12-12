import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const OMEGA_1670: Caliber = {
  // Title
  title: "Omega Cal. 1670",
  //Description
  description:
    "Omega superquartz chronograph based on the ETA 255.251. Very rare caliber with 1/100th measuraments. \
    Caliber with small seconds subdial at 6 o'clock. \n\
    Chronograph with 1/100 rattrapante seconds using a central chronograph hands. 12 hours subdial at 10 o'clock and split seconds chronograph function up to several laps with memory.\n\
    The month day is displayed on the right LCD screen. The month is displayed on the left LCD screen when the crown is in the second position.",

  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_251_251/ETA_251_251_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_251_251/ETA_251_251_2.JPG",
    "public/assets/Images/Movements/Omega/cal_1670/cal_1670_1.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.OMEGA,
    // ModelReference
    modelReference: "1670",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_27,
    // Reserve
    reserve: undefined,
    // Functions
    functions:
      "Hours, Minutes, 1/100th Chronograph up to 12 hours with split time, Month and date display on the LCD screens.",
    // Battery
    battery: "394",
  },
};

export default OMEGA_1670;

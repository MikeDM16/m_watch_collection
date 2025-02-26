import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ETA_A05_H31_27: Caliber = {
  // Title
  title: "A05.H31",
  //Description
  description: "High quality automatic chronograph based on the Valjoux 7753.",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_A05_H31/ETA_A05_H31_0.JPG",
    "public/assets/Images/Movements/ETA/ETA_A05_H31/ETA_A05_H31_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_A05_H31/ETA_A05_H31_3.JPG",
    "public/assets/Images/Movements/ETA/ETA_A05_H31/ETA_A05_H31_4.JPG",
    "public/assets/Images/Movements/ETA/ETA_A05_H31/ETA_A05_H31_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "A05.H31 (7753)",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_28800,
    // Jewels
    jewels: JewelsNumberEnum.J_27,
    // Reserve
    reserve: ReserveHoursEnum.R_60,
    // Functions
    functions:
      "Hours, Minutes, Sweep Seconds at 9 o'clock, 30M Chronograph, date adjusted with pusher at 10 o'clock",
    // Battery
    battery: undefined,
  },
};

export default ETA_A05_H31_27;

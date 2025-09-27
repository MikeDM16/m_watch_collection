import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const MIYOTA_OS60: Caliber = {
  // Title
  title: "Miyota OS60 (Citizen 0560)",
  //Description
  description: "",
  // UsefullLinks
  usefullLinks: {
    "Instruction Manual from Miyota": "../Files/0s60.pdf",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Miyota/OS60/OS60_1.JPG",
    "public/assets/Images/Movements/Miyota/OS60/OS60_2.JPG",
    "public/assets/Images/Movements/Miyota/OS60/OS60_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.MIYOTA,
    // ModelReference
    modelReference: "OS60",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_0,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "Chrono up to 12 hours 60min, Date, Hours, Minutes, Seconds at 6 o'clock",
    // Battery
    battery: "399 / SR927SW",
  },
};

export default MIYOTA_OS60;

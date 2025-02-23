import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../movementsData";

const ETA_G10_211: Caliber = {
  // Title
  title: "",
  //Description
  description: " ",

  // UsefullLinks
  usefullLinks: {
    "Instruction Manual from ETA": "Instructions.pdf",
    "Technical Information from ETA": "21A.pdf",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/movements/ETA/ETA_G10_211/eta-caliber-g10-211.JPG",
    "public/assets/Images/movements/ETA/ETA_G10_211/eta-caliber-g10-211-2.JPG",
    "public/assets/Images/movements/ETA/ETA_G10_211/G10_211_1.JPG",
    "public/assets/Images/movements/ETA/ETA_G10_211/G10_211_2.JPG",
    "public/assets/Images/movements/ETA/ETA_G10_211/G10_211_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "asasas",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_4,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "Chrono up to 1/10 seconds, Date, Hours, Minutes, Seconds at 6 o'clock",
    // Battery
    battery: "394",
  },
};

export default ETA_G10_211;

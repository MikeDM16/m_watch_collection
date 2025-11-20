import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ETA_Valjoux_7753_27: Caliber = {
  // Title
  title: "Valjoux 7753",
  //Description
  description:
    "High quality automatic chronograph from Valjoux. \n\
  Based on the original caliber 7750, with improvements for 27 jewels and COSC Certification.",
  // UsefullLinks
  usefullLinks: {
    "Calibercorner 7753 Caliber": "https://calibercorner.com/eta-caliber-7753/",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_7753/ETA_7753_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_7753/ETA_7753_2.JPG",
    "public/assets/Images/Movements/ETA/ETA_7753/ETA_7753_3.JPG",
    "public/assets/Images/Movements/ETA/ETA_7753/ETA_7753_4.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.VALJOUX,
    // ModelReference
    modelReference: "7753",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_28800,
    // Jewels
    jewels: JewelsNumberEnum.J_27,
    // Reserve
    reserve: ReserveHoursEnum.R_42,
    // Functions
    functions: "Day, Date, Hours, Minutes, Sub Seconds at 9 o'clock, 30 minute Chronograph",
    // Battery
    battery: undefined,
  },
};

export default ETA_Valjoux_7753_27;

import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ETA_Valjoux_7750_17: Caliber = {
  // Title
  title: "Valjoux 7750",
  //Description
  description:
    "High quality automatic chronograph from Valjoux. \n\
  Based on the original Pré-ETA caliber with 17 jewels.",
  // UsefullLinks
  usefullLinks: {
    "Ranfft 7750 Caliber":
      "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&&2uswk&Valjoux_7750",
    "Caliber corner 7750 Caliber": "https://calibercorner.com/eta-valjoux-caliber-7750/",
    "Instruction Manual from ETA": "../Files/3660_Valjoux7750operatinginstructions.pdf",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_Valjoux_7750/7750_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_Valjoux_7750/7750_2.JPG",
    "public/assets/Images/Movements/ETA/ETA_Valjoux_7750/7750_17_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_Valjoux_7750/7750_17_2.JPG",
    "public/assets/Images/Movements/ETA/ETA_Valjoux_7750/7750_17_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.VALJOUX,
    // ModelReference
    modelReference: "7750",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_28800,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_44,
    // Functions
    functions: "Day, Date, Hours, Minutes, Sweep Seconds at 9 o'clock, 12h 30M 60s Chronograph",
    // Battery
    battery: undefined,
  },
};

export default ETA_Valjoux_7750_17;

import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ETA_Valjoux_7760_17: Caliber = {
  // Title
  title: "Valjoux 7760",
  //Description
  description:
    "High quality automatic chronograph from Valjoux. \n\
  Based on the original Pré-ETA caliber with 17 jewels.\n\
  Automaric Valjoux references:\n\
    - 7750: day, date\n\
    - 7751: day, date, month, moon phase\n\
    - 7753: date. minute counter at 3h instead 12h\n\
    - 7754: date, dual time 24h\n\
    - 7758: date, moon phase\n\
    - 7770: automatic, split second, date hand at 3h\n\n\
  Mechanical (Manual-winding) Valjoux references:\n\
    - 7760: manual wind, day, date\n\
    - 7761: manual wind, day, date, month, moon phase\n\
    - 7765: manual wind, date, no hour counter\n\
    - 7768: manual wind, date, moon phase",
  // UsefullLinks
  usefullLinks: {
    "Ranfft 7760 Caliber": "https://ranfft.org/caliber/10532-Valjoux-7760",
    "Caliber corner 7760 Caliber": "https://calibercorner.com/eta-valjoux-caliber-7760/",
    "Instruction Manual from ETA": "../Files/3660_Valjoux7760operatinginstructions.pdf",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_7760/ETA_7760_3.JPG",
    "public/assets/Images/Movements/ETA/ETA_7760/ETA_7760_4.JPG",
    "public/assets/Images/Movements/ETA/ETA_7760/ETA_7760_5.JPG",
    "public/assets/Images/Movements/ETA/ETA_7760/ETA_7760_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_7760/ETA_7760_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.VALJOUX,
    // ModelReference
    modelReference: "7760",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_28800,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_50,
    // Functions
    functions: "Day, Date, Hours, Minutes, Sub Seconds at 9 o'clock, 12h 30M 60s Chronograph",
    // Battery
    battery: undefined,
  },
};

export default ETA_Valjoux_7760_17;

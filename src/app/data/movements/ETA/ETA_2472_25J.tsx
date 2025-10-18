import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ETA_2472: Caliber = {
  // Title
  title: "ETA 2472",
  //Description
  description:
    'High quality ETA automatic movement with gold plated finishing, shockabsorver and bi-diretional winding.\n\n\
    Caliber References:\n\
    - 2390: manual wind, 10.5"\n\
    - 2391: manual wind\n\
    - 2406: manual wind, date\n\
    - 2408: manual, new date mechanism\n\
    - 2450: automatic, 10.5"\n\
    - 2451: automatic\n\
    - 2452: automatic, date\n\
    - 2453: like 2451, but single-material rotor\n\
    - 2454: like 2452, but single-material rotor\n\
    - 2456: automatic, date, 10.5"\n\
    - 2471: automatic, prepared for new date\n\
    - 2472: automatic, new date mechanism',
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_2472/ETA_2472_5.JPG",
    "public/assets/Images/Movements/ETA/ETA_2472/ETA_2472_3.JPG",
    "public/assets/Images/Movements/ETA/ETA_2472/ETA_2472_4.JPG",
    "public/assets/Images/Movements/ETA/ETA_2472/ETA_2472_2.JPG",
    "public/assets/Images/Movements/ETA/ETA_2472/ETA_2472_1.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "2472",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_42,
    // Functions
    functions: "Day, Hours, Minutes, Sweep Seconds, Quick date set and bi-directional winding",
    // Battery
    battery: undefined,
  },
};

export default ETA_2472;

import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ETA_2452: Caliber = {
  // Title
  title: "ETA 2452",
  //Description
  description: "High quality ETA automatic movement with gold plated finishing, shockabsorver and bi-diretional winding.",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_2452/ETA_2452_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_2452/ETA_2452_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "2452",
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

export default ETA_2452;

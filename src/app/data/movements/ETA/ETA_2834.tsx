import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ETA_2834: Caliber = {
  // Title
  title: "ETA 2834",
  //Description
  description:
    "High quality ETA automatic movement with detailled finishing, adjusted and bi-diretional winding. Part of the Mecaline collection. \n \n" +
    "Based on the ETA 2824-2 date movement, but with a added ate complication.",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_2836/ETA_2836_3.JPG",
    "public/assets/Images/Movements/ETA/ETA_2836/ETA_2836_2.JPG",
    "public/assets/Images/Movements/ETA/ETA_2836/ETA_2836_1.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "2834",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_28800,
    // Jewels
    jewels: JewelsNumberEnum.J_25,
    // Reserve
    reserve: ReserveHoursEnum.R_40,
    // Functions
    functions: "Date, Hours, Minutes, Sweep Seconds, Quick date set and bi-directional winding",
    // Battery
    battery: undefined,
  },
};

export default ETA_2834;

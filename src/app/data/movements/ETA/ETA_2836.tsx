import { Caliber } from "../../movementsData";
import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const ETA_2836: Caliber = {
  // Title
  title: "ETA 2836",
  //Description
  description:
    "High quality ETA automatic movement with gold plated finishing, adjusted and bi-diretional winding. \n \n" +
    "Based on the ETA 2824-2 date movement, but with a added day-date complication. ",
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
    modelReference: "2836-2",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_28800,
    // Jewels
    jewels: JewelsNumberEnum.J_25,
    // Reserve
    reserve: ReserveHoursEnum.R_41,
    // Functions
    functions:
      "Day - Date, Hours, Minutes, Sweep Seconds, Quick date set and bi-directional winding",
    // Battery
    battery: undefined,
  },
};

export default ETA_2836;

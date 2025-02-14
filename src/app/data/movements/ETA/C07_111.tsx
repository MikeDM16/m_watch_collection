import { Caliber } from "../../movementsData";
import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const ETA_C07_111: Caliber = {
  // Title
  title: "ETA C07.111",
  //Description
  description:
    "ETA automatic movement known has the Powermatic 80. \n \n" +
    "Based on the ETA 2824-2 date movement. Reducend frequency of 28800A/h to 21600A/h to achived higher power reserve of 80 hours. ",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: ["public/assets/Images/Movements/ETA/C07_111/C07_111.JPG"],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "C07.111",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_21600,
    // Jewels
    jewels: JewelsNumberEnum.J_23,
    // Reserve
    reserve: ReserveHoursEnum.R_80,
    // Functions
    functions: "Date, Hours, Minutes, Sweep Seconds, Quick date set and bi-directional winding",
    // Battery
    battery: undefined,
  },
};

export default ETA_C07_111;

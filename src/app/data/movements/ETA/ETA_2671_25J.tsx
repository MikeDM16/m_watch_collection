import { Caliber } from "../../movementsData";
import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const ETA_2671: Caliber = {
  // Title
  title: "ETA 2671",
  //Description
  description:
    "High quality ETA automatic movement with gold plated finishing, adjusted and bi-diretional winding. \n \n" +
    "Launched in the 1970s was used in mostly every swiss made autometic ladies watch due to his smaller dimensions.\n\n" +
    "Older versions can also be found with 21 and 17 Jewels ",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_2671/ETA_2671_0.JPG",
    "public/assets/Images/Movements/ETA/ETA_2671/ETA_2671.JPG",
    "public/assets/Images/Movements/ETA/ETA_2671/ETA_2671_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "2671",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_28800,
    // Jewels
    jewels: JewelsNumberEnum.J_25,
    // Reserve
    reserve: ReserveHoursEnum.R_38,
    // Functions
    functions: "Day, Hours, Minutes, Sweep Seconds, Quick date set and bi-directional winding",
    // Battery
    battery: undefined,
  },
};

export default ETA_2671;

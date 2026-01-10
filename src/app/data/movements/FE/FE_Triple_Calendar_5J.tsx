import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const FE_TRIPLE_CALENDAR_5J: Caliber = {
  // Title
  title: "FE (France Ebauche) Triple Calendar",
  //Description
  description: "",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/FE/FE_Triple_Calendar_5J/FE_Triple_Calendar_5J.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.FE,
    // ModelReference
    modelReference: "Triple Calendar",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_5,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "Tri-Compax (Month, Day, Date), Hours, Minutes, Seconds",
    // Battery
    battery: "399 / SR927SW",
  },
};

export default FE_TRIPLE_CALENDAR_5J;

import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ORIENT_46D40: Caliber = {
  // Title
  title: "Orient 46D40",
  //Description
  description: "Orient Movement with Diashock design (In-house Seiko shock protection system)",
  // UsefullLinks
  usefullLinks: {
    "Ranfft Orient 46D40": "https://ranfft.org/caliber/8558-Orient-46D40",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Orient/Orient_46D40/46D40_1.JPG",
    "public/assets/Images/Movements/Orient/Orient_46D40/46D40_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ORIENT,
    // ModelReference
    modelReference: "Cal. 46D40",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_21600,
    // Jewels
    jewels: JewelsNumberEnum.J_21,
    // Reserve
    reserve: ReserveHoursEnum.R_42,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default ORIENT_46D40;

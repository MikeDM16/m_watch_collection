import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const CERTINA_331: Caliber = {
  // Title
  title: "Certina Cal. 331",
  //Description
  description: "",
  // UsefullLinks
  usefullLinks: {
    "Emmy Watch Cal. Certina 331": "https://www.emmywatch.com/db/movement/certina--331/",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Certina/Certina_331/Certina_331_1.JPG",
    "public/assets/Images/Movements/Certina/Certina_331/Certina_331_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.CERTINA,
    // ModelReference
    modelReference: "Cal. 331",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_15,
    // Reserve
    reserve: ReserveHoursEnum.R_50,
    // Functions
    functions: "Hours, Minutes, Sub Seconds at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default CERTINA_331;

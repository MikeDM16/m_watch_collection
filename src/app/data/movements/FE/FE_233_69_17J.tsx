import { Caliber } from "../../movementsData";
import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const FE_233_69: Caliber = {
  // Title
  title: "FE (France Ebauche) Cal. 233-69",
  //Description
  description:
    "Previsouly known has Cupillard 233-69, before the brand joined France Ebauche.\n\
  Caliber Family\n\
  - 233-68: No Date\n\
  - 233-69: Date\n\
  - 233-70: Day and Date\n",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/FE/FE_233_69/FE_233_69_1.JPG",
    "public/assets/Images/Movements/FE/FE_233_69/FE_233_69_2.JPG",
    "public/assets/Images/Movements/FE/FE_233_69/FE_233_69_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.FE,
    // ModelReference
    modelReference: "Cal. 233-69",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_41,
    // Functions
    functions: "Day, Hours, Minutes, Sweep Seconds at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default FE_233_69;

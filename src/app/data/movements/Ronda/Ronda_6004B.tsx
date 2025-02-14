import { Caliber } from "../../movementsData";
import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const RONDA_6004B: Caliber = {
  // Title
  title: "Ronda 6004.B",
  //Description
  description: "",

  // UsefullLinks
  usefullLinks: {
    "CalibeCorner Ronda 6004.B": "https://calibercorner.com/ronda-caliber-6004-b/",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Ronda/Ronda_6004_B/Ronda_6004B_1.JPG",
    "public/assets/Images/Movements/Ronda/Ronda_6004_B/Ronda_6004B_2.JPG",
    "public/assets/Images/Movements/Ronda/Ronda_6004_B/Ronda_6004B_3.JPG",
    "public/assets/Images/Movements/Ronda/Ronda_6004_B/Ronda_6004B_5.JPG",
    "public/assets/Images/Movements/Ronda/Ronda_6004_B/Ronda_6004B_4.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.RONDA,
    // ModelReference
    modelReference: "6004.B",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_5,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "Date, Hours, Minutes, Seconds at 6 o'clock",
    // Battery
    battery: "370",
  },
};

export default RONDA_6004B;

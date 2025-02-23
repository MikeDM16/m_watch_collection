import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const RONDA_5040D: Caliber = {
  // Title
  title: "Ronda 5040.D",
  //Description
  description: "",

  // UsefullLinks
  usefullLinks: {
    "Ronda 5040.D":
      "https://www.relogios.pt/movement/5040-d/?srsltid=AfmBOoqnXSBMi9Sog_fvdnztLCKl1bZEEnSTZak2pHbEFghQAszhIQH8",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Ronda/Ronda_5040D/Ronda_5040D_4.JPG",
    "public/assets/Images/Movements/Ronda/Ronda_5040D/Ronda_5040D_1.JPG",
    "public/assets/Images/Movements/Ronda/Ronda_5040D/Ronda_5040D_2.JPG",
    "public/assets/Images/Movements/Ronda/Ronda_5040D/Ronda_5040D_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.RONDA,
    // ModelReference
    modelReference: "5040.B",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_13,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "Date, Hours, Minutes, Seconds at 3 o'clock, 1/10th Chronograph",
    // Battery
    battery: "395 / SR927SW",
  },
};

export default RONDA_5040D;

import { Caliber } from "../../movementsData";
import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const RONDA_5030D: Caliber = {
  // Title
  title: "Ronda 5030.D",
  //Description
  description: "",

  // UsefullLinks
  usefullLinks: {
    "Ronda 5030.D":
      "https://www.relogios.pt/movement/5030-d/?srsltid=AfmBOoqnXSBMi9Sog_fvdnztLCKl1bZEEnSTZak2pHbEFghQAszhIQH8",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Ronda/Ronda_5030D/Ronda_5030D_1.JPG",
    "public/assets/Images/Movements/Ronda/Ronda_5030D/Ronda_5030D_2.JPG",
    "public/assets/Images/Movements/Ronda/Ronda_5030D/Ronda_5030D_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.RONDA,
    // ModelReference
    modelReference: "5030.B",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_13,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "Date, Hours, Minutes, Seconds at 3 o'clock, 12 Hours Chronograph",
    // Battery
    battery: "395 / SR927SW",
  },
};

export default RONDA_5030D;

import { Caliber } from "../../movementsData";
import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const MIYOTA_OS10: Caliber = {
  // Title
  title: "Miyota OS10 (Citizen 0510)",
  //Description
  description: "",
  // UsefullLinks
  usefullLinks: {
    "Instruction Manual from Miyota": "../Files/JM_MiyotaOS10.pdf",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Miyota/OS10/OS10_1.JPG",
    "public/assets/Images/Movements/Miyota/OS10/OS10_2.JPG",
    "public/assets/Images/Movements/Miyota/OS10/OS10_3.JPG",
    "public/assets/Images/Movements/Miyota/OS10/OS10_4.JPG",
    "public/assets/Images/Movements/Miyota/OS10/OS10_5.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.MIYOTA,
    // ModelReference
    modelReference: "OS10",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_0,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "Chrono up to 12 hours 60min, Date, Hours, Minutes, Seconds at 6 o'clock",
    // Battery
    battery: "399",
  },
};

export default MIYOTA_OS10;

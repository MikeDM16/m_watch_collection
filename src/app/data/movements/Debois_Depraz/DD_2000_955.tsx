import { Caliber } from "../../movementsData";
import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const DD_2000_ETA_955_232: Caliber = {
  // Title
  title: "LWO 185.30 - Dubois Depraz 2000 on ETA 955.232",
  //Description
  description:
    "Lemania LWO 185*/283 movement is a combination of an ETA base movement with a Chronograph module from Lemania. \n" +
    "- LWO 185.30 has 26 jewels and the cronograph module is powered by a quartz ETA 955.232 base movement. \n" +
    "- LWO 283.30 has 40 jewels and is powered by the automatic ETA 2982-2 movement. \n" +
    "Lemania developed the 2000 module with Dubois Depraz, exclusively for Heuer. \n" +
    "Many Heuer and TAG Heuer watches with cronograph movements in the 1980s-90s used the LWO 185/283. \n\n" +
    "When Piaget/Lemania took over Heuer, they changed the deal to allow Lemania to sell the movement more broadly. " +
    "It was later used on the original Audemars Piguet Royal Oak Offshore from 1993.",

  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/DuboisDepraz/DD_2000_ETA_955_232/LWO_283_1.JPG",
    "public/assets/Images/Movements/DuboisDepraz/DD_2000_ETA_955_232/LWO_283_2.JPG",
    "public/assets/Images/Movements/DuboisDepraz/DD_2000_ETA_955_232/DD_2000_955_1.JPG",
    "public/assets/Images/Movements/DuboisDepraz/DD_2000_ETA_955_232/DD_2000_955_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.DUBOIS_DEPRAZ,
    // ModelReference
    modelReference: "LWO 185.30 (DD 2000 on ETA 955.232)",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_26,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "12h 30M Meca Chronograph, Date, Hours, Minutes, Seconds",
    // Battery
    battery: "395",
  },
};

export default DD_2000_ETA_955_232;

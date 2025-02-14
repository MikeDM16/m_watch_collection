import { Caliber } from "../../movementsData";
import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const ETA_G10_211: Caliber = {
  // Title
  title: "ETA G10.211",
  //Description
  description:
    "Simple quartz chronograph movement with 4 jewels. Part of ETA Fashionline series of quartz movements.\n\
    This caliber is not considered to be repairable and is frequently found in entry level timepieces.\n\n\
    Used in most of the mid 2000 Tissot quartz series like PRS 200, PRC 200, T-Race, V8, PRS 516 and Couturier models.\n\
    Also present in brands like Hamilton and Certina. Swatch Group strongly adopted this caliber in most of Swatch chronographs.\n\n\
    The movement was removed from production around 2016, being replaced with the similar ETA G10.212 ",

  // UsefullLinks
  usefullLinks: {
    "Instruction Manual from ETA": "../Files/2798_ETA G10.211,G10.21A Operating Instructions.pdf",
    "Technical Information from ETA": "../Files/623_ETAG10.211,G10.21A.pdf",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_G10_211/eta-caliber-g10-211.JPG",
    "public/assets/Images/Movements/ETA/ETA_G10_211/eta-caliber-g10-211-2.JPG",
    "public/assets/Images/Movements/ETA/ETA_G10_211/G10_211_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_G10_211/G10_211_2.JPG",
    "public/assets/Images/Movements/ETA/ETA_G10_211/G10_211_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "G10.211",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_4,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "Chrono up to 1/10 seconds, Date, Hours, Minutes, Seconds at 6 o'clock",
    // Battery
    battery: "394",
  },
};

export default ETA_G10_211;

import { Caliber } from "../../movementsData";
import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const ETA_G10_961: Caliber = {
  // Title
  title: "ETA G10.961",
  //Description
  description:
    "Simple quartz chronograph movement with 4 jewels. Part of ETA Fashionline series of quartz movements.\n\
    Additional 24 GMT Hour Hand at the 9 0'clock subdial.\n\n\
    GMT is adjusted using the external pusher: Click the GMT pusher once, release, press again to jump the GMT hand in 1-hour intervals.",

  // UsefullLinks
  usefullLinks: {
    WatchBase: "https://watchbase.com/eta/caliber/g10-961",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_G10_961/G10_961_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_G10_961/G10_961_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "G10.961",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_4,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "GMT Hand at 9'clock, Date, Hours, Minutes, Seconds at 6 o'clock",
    // Battery
    battery: "394",
  },
};

export default ETA_G10_961;

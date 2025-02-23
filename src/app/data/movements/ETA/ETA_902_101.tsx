import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ETA_902_101: Caliber = {
  // Title
  title: "ETA 902.101",
  //Description
  description:
    "ETA 902.101 is part of ETA Normflatline movements. It has 4 jewels with a gold plated finish. \n\
  It is a “V8” movement, indicating that it is assembled in Switzerland.",

  // UsefullLinks
  usefullLinks: {
    "ETA 902.101":
      "https://www.eta.ch/en/our-products/quartz-movements/normflatline/eta-normflatline-902101",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_902_101/902_101_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_902_101/902_101_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "902.101",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_4,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "Hours, Minutes, Seconds, End of Life indicator",
    // Battery
    battery: "364 / SR621SW",
  },
};

export default ETA_902_101;

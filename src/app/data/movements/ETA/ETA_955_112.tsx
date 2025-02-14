import { Caliber } from "../../movementsData";
import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const ETA_955_112: Caliber = {
  // Title
  title: "ETA 955.112",
  //Description
  description:
    "ETA 955.112 is part of ETA Normflatline movements. It has 7 jewels with a gold plated finish and a blue circuit board. \n\
  It is a “V8” movement, indicating that it is assembled in Switzerland.\n\
  It was produced from around the 1995 up to 2020. It's also a replacement for the previous generation 955.114\n\
  \n\
  ETA 955.412 is an equivalent movement but with a smaller diameter. \n\
  955.112 has 25.6mm diameter. 955.412 has 23.3mm diameter.",

  // UsefullLinks
  usefullLinks: {
    "ETA 955.112":
      "http://www.eta.ch/en/our-products/quartz-movements/normflatline/eta-normflatline-955112",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_955_112/955_112_2.JPG",
    "public/assets/Images/Movements/ETA/ETA_955_112/955_112_3.JPG",
    "public/assets/Images/Movements/ETA/ETA_955_112/955_112_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_955_112/955_412_1.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "955.112",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_7,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "Date, Hours, Minutes, Seconds, End of Life indicator",
    // Battery
    battery: "395 (or 371)",
  },
};

export default ETA_955_112;

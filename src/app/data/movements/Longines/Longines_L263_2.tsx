import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const LONGINES_L263_2: Caliber = {
  // Title
  title: "Longines L263.2 (ETA 955.412)",
  //Description
  description:
    "Longines L263.2 is Longines' version of the ETA 955.412, a 7-jewel quartz movement from ETA's Normflatline range: " +
    "23.3 mm across (10½ lignes) and 2.5 mm high, with date at 3 and an end-of-battery indicator.\n" +
    "The same ETA base is used, under other calibre names, in several Tag Heuer quartz watches in this collection.",
  // UsefullLinks
  usefullLinks: {
    "Ranfft Longines L263": "https://ranfft.org/caliber/13245-Longines-L263",
    "Ranfft ETA 955.412": "https://ranfft.org/caliber/12914-ETA-955412",
    "CaliberCorner Longines L263": "https://calibercorner.com/longines-caliber-l263/",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_955_112/955_412_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_955_112/955_412_2.JPG",
    "public/assets/Images/Movements/ETA/ETA_955_112/955_412_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "L263.2",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_7,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "Date, Hours, Minutes, Sweep Seconds",
    // Battery
    battery: "371",
  },
};

export default LONGINES_L263_2;

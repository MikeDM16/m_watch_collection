import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const AS_1861: Caliber = {
  // Title
  title: "A. Schild 1861",
  //Description
  description:
    "AS 1861 is a thin 11½-ligne (26 mm, 3.2 mm high) hand-wound A. Schild calibre with date, introduced around 1970 " +
    "and running at 21600 A/h. It uses an indirect, Roskopf-layout minute drive, which leaves room for a large balance " +
    "in a low movement, and has Incabloc shock protection.\n" +
    "It belongs to the AS 1714 - 1866 family, built in pairs: the first number runs at 18000 A/h, the second at 21600 A/h.\n\n" +
    "Family:\n" +
    "- 1714 / 1860: hand-wound, no date\n" +
    "- 1715 / 1861: hand-wound, date\n" +
    "- 1819 / 1865: hand-wound, day and date\n" +
    "- 1716 / 1862: automatic\n" +
    "- 1717 / 1863: automatic, date\n" +
    "- 1820 / 1866: automatic, day and date",
  // UsefullLinks
  usefullLinks: {
    "Ranfft AS 1861": "https://ranfft.org/caliber/857-AS-1861",
  },
  // sliderImages
  sliderImages: [],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.AS,
    // ModelReference
    modelReference: "Cal. 1861",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_21600,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_46,
    // Functions
    functions: "Date, Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default AS_1861;

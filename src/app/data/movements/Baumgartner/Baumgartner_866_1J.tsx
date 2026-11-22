import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const BAUMGARTNER_866: Caliber = {
  // Title
  title: "Baumgartner (BFG) Cal. 866",
  //Description
  description:
    "Baumgartner (BFG) 866 is a Swiss hand-wound pin-lever (Roskopf-type) movement with centre seconds, " +
    "built in versions with 0, 1 and 17 jewels. The date version is designated 866 CLD.\n\n" +
    "Variants:\n" +
    "- 866: sweep seconds\n" +
    "- 866 CLD: sweep seconds, date\n" +
    "- 866 CLDD: sweep seconds, day, date\n" +
    "- 875: sub seconds",
  // UsefullLinks
  usefullLinks: {
    "EmmyWatch Baumgartner 866": "https://www.emmywatch.com/db/movement/baumgartner--866",
    "OldSwissWatches BFG 866": "https://oldswisswatches.com/tag/bfg-calibre/",
  },
  // sliderImages
  sliderImages: [],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.BAUMGARTNER,
    // ModelReference
    modelReference: "Cal. 866",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_1,
    // Reserve
    reserve: ReserveHoursEnum.R_39,
    // Functions
    functions: "Date, Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default BAUMGARTNER_866;

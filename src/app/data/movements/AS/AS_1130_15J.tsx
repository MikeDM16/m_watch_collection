import { JewelsNumberEnum } from "@/app/enums/caliberEnums";

import type { Caliber } from "../../caliberTypes";
import AS_1130 from "./AS_1130_17J";

// Same caliber as AS_1130 (description, links and photos are shared); only the jewel count differs.
const AS_1130_15J: Caliber = {
  ...AS_1130,
  // Title
  title: "A. Schild 1130 (15 Jewels)",
  // Details
  details: {
    ...AS_1130.details,
    // Jewels
    jewels: JewelsNumberEnum.J_15,
  },
};

export default AS_1130_15J;

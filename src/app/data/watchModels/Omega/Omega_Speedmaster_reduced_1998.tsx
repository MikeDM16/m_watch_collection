import { BezelTypeEnum } from "@/app/enums/bezelTypeEnum";
import { BraceletMaterialEnum } from "@/app/enums/braceletMaterialEnum";
import { BraceletWidthEnum } from "@/app/enums/braceletWidthEnum";
import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CaseDiameterEnum } from "@/app/enums/caseDiameterEnum";
import { CaseFinishingEnum } from "@/app/enums/caseFinishingEnum";
import { CaseMaterialEnum } from "@/app/enums/caseMaterialEnum";
import { CaseThicknessEnum } from "@/app/enums/caseThicknessEnum";
import { ColorEnum } from "@/app/enums/colorEnum";
import { CrownWatchTypeEnum } from "@/app/enums/crownWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { featuresEnum } from "@/app/enums/featuresEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import movement_OMEGA_1141_45J from "../../movements/Omega/Omega_1141";
import { WatchDetails } from "../../watchDetails";
import { OmegaBrandSeries } from "./OmegaBrandSeries";

const details: WatchDetails = {
  title: "1998 Omega Speedmaster Reduced Cal. 1141",

  sliderImages: [
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2372.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2373.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2376.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2276.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2277.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2279.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2280.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2283.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2330.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2331.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2332.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2333.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2339.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2365.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2334.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2335.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2336.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2338.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2340.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2284.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2287.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2288.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2289.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2290.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2291.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2292.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2293.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2294.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2341.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2342.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2343.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2344.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2345.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2346.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2347.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2348.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2349.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2350.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2351.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2352.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2354.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2366.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2367.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2369.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2370.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2295.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2296.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2297.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2298.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2299.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2300.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2301.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2302.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2303.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2307.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2309.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2310.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2311.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2312.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2313.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2314.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2315.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2316.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2317.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2318.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2320.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2321.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2323.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2326.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2327.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2329.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2355.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2356.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2357.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2358.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2359.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2360.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2361.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2362.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_reduced/IMG_2363.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.AUTOMATIC_CHRONOGRAPH,
      featuresEnum.TACHYMETER,
      "Case with production number 56126955, dating the watch back to 1998",
    ],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.SPEEDMASTER,
      catalogueReference: '"Reduced" (175.0032)',
      productionYear: "1998",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_39,
      thickness: CaseThicknessEnum.T_14,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.TACHYMETER,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.BLACK,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.SS_LINKS,
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.SS_POLISHED,
    },

    movement: movement_OMEGA_1141_45J,
  },
};

export default details;

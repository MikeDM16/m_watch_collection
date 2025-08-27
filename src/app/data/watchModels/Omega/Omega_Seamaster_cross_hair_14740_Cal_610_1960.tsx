import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrownWatchTypeEnum } from "@/app/enums/crownWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { featuresEnum } from "@/app/enums/featuresEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";
import { OmegaBrandSeries } from "./OmegaBrandSeries";

const details: WatchDetails = {
  title: "1960 Omega Seamaster Cross-hair Cal. 610",
  sliderImages: [
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4263.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4264.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4266.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4268.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4269.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4270.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4271.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4272.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4275.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4276.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4277.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4278.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4279.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4280.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4281.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4282.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4283.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4284.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4285.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4290.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4291.JPG",

    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/service_1.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/service_2.JPG",

    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4293.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4296.JPG",

    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4305.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4306.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4338.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4339.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4353.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4354.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4355.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4356.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4357.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4358.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4368.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4369.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4299.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4300.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4301.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4302.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4303.JPG",
    "public/assets/Images/Omega/1960_Omega_14740_CrossHaird_610/IMG_4304.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.MECHANICAL,
      "Movement with production number 17748333, dating the watch back to 1960",
    ],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.SEAMASTER_VINTAGE,
      catalogueReference: "14740 1SC",
      productionYear: "1960",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "9 mm",
      material: "Stainless Steel - 20\u339B Gold plated",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Polished",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Beige (Patina)",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Bourdeaux Red",
    },

    movement: MovementsDataDB.OMEGA_610_17J,
  },
};

export default details;

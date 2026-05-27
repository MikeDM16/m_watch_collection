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

import movement_OMEGA_266_17J from "../../movements/Omega/Omega_266_17J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1952 Omega Trésor Honeycomb Cal. 266 18K Gold",

  sliderImages: [
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4081.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4083.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4084.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4086.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4087.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4088.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4089.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4090.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4091.JPG",

    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4117.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4118.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4119.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4120.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4121.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4122.JPG",

    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4159.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4160.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4161.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4162.JPG",

    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9163.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9164.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9166.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9167.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9168.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9173.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9180.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9181.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9182.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9188.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9190.JPG",

    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4123.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4124.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4125.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4126.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4127.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4128.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4129.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4132.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4133.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4134.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4135.JPG",

    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4147.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4149.JPG",

    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4136.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4137.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4138.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4139.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4140.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4141.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4142.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4143.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4144.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4145.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4146.JPG",

    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4172.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4175.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4174.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9159.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9158.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4173.JPG",

    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4151.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4152.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4153.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4154.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4156.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4157.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_4158.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.SOLID_GOLD,
      "Movement with production number 13564275, dating the watch back to 1952",
    ],

    information: {
      brand: BrandsEnum.OMEGA,
      series: "Trésor",
      catalogueReference: "2684 (Caliber 13564275)",
      productionYear: "1952",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: CaseDiameterEnum.D_36,
      thickness: CaseThicknessEnum.T_8,
      material: CaseMaterialEnum.SOLID_YELLOW_GOLD_18K_13G,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.HONEYCOMB,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LIZARD_LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.LIGHT_BROWN,
    },

    movement: movement_OMEGA_266_17J,
  },
};

export default details;

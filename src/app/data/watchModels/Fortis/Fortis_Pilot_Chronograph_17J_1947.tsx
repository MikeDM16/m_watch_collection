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

const details: WatchDetails = {
  title: "1947 Fortis Pilot Chronograph Venus 170",

  sliderImages: [
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6389.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6390.JPG",

    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6410.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6411.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6412.JPG",

    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6375.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6377.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6378.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6379.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6380.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6381.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6383.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6386.JPG",

    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6361.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6363.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6364.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6365.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6367.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6370.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6372.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6373.JPG",

    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6391.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6392.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6393.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6394.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6395.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6396.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6397.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6398.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6399.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6400.JPG",

    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6408.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6409.JPG",

    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6413.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6414.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6415.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6416.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6417.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6418.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6419.JPG",

    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6401.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6402.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6403.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6404.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6405.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6406.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6407.JPG",
  ],
  technicalData: {
    features: [featuresEnum.MECHANIQUE_CHRONOGRAPH],

    information: {
      brand: BrandsEnum.FORTIS,
      series: "Pilot Chronograph",
      catalogueReference: "3510",
      productionYear: "1947",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.VERTICAL_BRUSHED,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather (Fixed Lugs)",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.VALJOUX_77_17J,
  },
};

export default details;

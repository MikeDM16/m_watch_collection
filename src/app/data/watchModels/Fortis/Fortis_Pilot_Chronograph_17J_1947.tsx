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
  title: "1947 Fortis Pilot Chronograph Valjoux 77",

  sliderImages: [
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6949.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6948.JPG",

    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6908.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6909.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6910.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6911.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6912.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6914.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6915.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6916.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6917.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6918.JPG",

    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6897.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6900.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6902.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6904.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6905.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6906.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6907.JPG",

    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6919.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6920.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6921.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6922.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6923.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6924.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6925.JPG",

    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6933.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6934.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6936.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6939.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6940.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6941.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6944.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6946.JPG",

    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6926.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6927.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6928.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6929.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6930.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6931.JPG",

    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6950.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6951.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6952.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6953.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6954.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6955.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6956.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6957.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6958.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6959.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6960.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6961.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6962.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6963.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6964.JPG",
    "public/assets/Images/Fortis/1947_Fortis_Pilot_Chronograph_Valjoux_77/IMG_6965.JPG",
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

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

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1955 Hermes Landerom 51 Chronograph",
  sliderImages: [
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1926.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1927.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1928.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1929.JPG",

    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1904.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1905.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1906.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1907.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1908.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1909.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1910.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1911.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1912.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1913.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1915.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1916.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1917.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1918.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1919.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1920.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1921.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1922.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1923.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1924.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1925.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1891.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1892.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1893.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1894.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1895.JPG",
    "public/assets/Images/Hermes/1955_Hermes_Chronograph/IMG_1896.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.MECHANIQUE_CHRONOGRAPH,
      featuresEnum.WATER_RESIST,
      featuresEnum.TACHYMETER,
    ],

    information: {
      brand: BrandsEnum.HERMES,
      series: "Chronograph",
      catalogueReference: "-",
      productionYear: "1955",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: CaseDiameterEnum.D_41,
      thickness: CaseThicknessEnum.T_14,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.TACHYMETER,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.CROCODILE_LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BROWN,
    },

    movement: MovementsDataDB.LANDERON_51_17J,
  },
};

export default details;

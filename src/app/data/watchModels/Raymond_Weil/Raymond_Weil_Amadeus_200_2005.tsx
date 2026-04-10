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
import { RaymondWeilBrandSeries } from "./RaymondWeilBrandSeries";

const details: WatchDetails = {
  title: "2005 Raymond Weil Amadeus 200 7750",
  sliderImages: [
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1475.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1476.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1477.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1478.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1480.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1481.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1482.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1483.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1484.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1485.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1486.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1949.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1950.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1951.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1952.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1953.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1954.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1955.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1956.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1957.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1958.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1959.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1960.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1961.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1962.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1963.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1964.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1965.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1966.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1967.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1970.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1971.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1972.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1973.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1974.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1975.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1976.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1580.JPG",
    "public/assets/Images/Raymond_Weil/2005_Raymond_Weil_Amadeus_200/IMG_1977.JPG",
  ],
  saleReport: {
    price: 425,
    date: "21/10/2023",
    url: "https://www.catawiki.com/en/l/75616609",
  },
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC_CHRONOGRAPH,
      featuresEnum.ELETRO_GOLD_PLATED_18k,
      featuresEnum.WR_50_METERS,
      featuresEnum.TACHYMETER,
    ],

    information: {
      brand: BrandsEnum.RAYMOND_WEIL,
      series: RaymondWeilBrandSeries.VINTAGE_SERIES,
      catalogueReference: "Amadeus 200 - 7713",
      productionYear: "2005",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: CaseDiameterEnum.D_36,
      thickness: CaseThicknessEnum.T_12,
      material: CaseMaterialEnum.GOLD_18K_AND_SS,
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.BEIGE,
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.GOLD_DETAILS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.CROCODILE_LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.BROWN,
    },

    movement: MovementsDataDB.ETA_Valjoux_7750_25J,
  },
};

export default details;

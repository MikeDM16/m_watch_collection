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

import movement_CERTINA_25_261_27J from "../../movements/Certina/Certina_25_261_28J";
import { WatchDetails } from "../../watchDetails";
import { CertinaBrandSeries } from "./CertinaBrandSeries";

const details: WatchDetails = {
  title: "1977 Certina Blue Ribbon",

  sliderImages: [
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5650.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5652.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5653.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5654.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5655.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5656.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5657.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5658.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5659.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5660.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5661.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5662.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5663.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5664.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5665.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5666.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5667.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5668.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5669.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5670.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5671.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5672.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5673.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5674.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5675.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5676.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5677.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5678.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5679.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5680.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5681.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5682.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5683.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5684.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5685.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5686.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5687.JPG",
    "public/assets/Images/Certina/1977_Certina_Blue_Ribbon_25_651/IMG_5688.JPG",
  ],

  saleReport: {
    price: 180,
    date: "26/10/2026",
    url: "https://www.catawiki.pt/l/107597508",
  },

  technicalData: {
    features: [featuresEnum.AUTOMATIC, featuresEnum.DATE],

    information: {
      brand: BrandsEnum.CERTINA,
      series: CertinaBrandSeries.VINTAGE_SERIES,
      catalogueReference: "5806 174",
      productionYear: "1977",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_35,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.GP,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.VERTICAL_BRUSHED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LIZARD_LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BORDEAUX,
    },

    movement: movement_CERTINA_25_261_27J,
  },
};

export default details;

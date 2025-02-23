import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "2012 Tissot Ballade Chronograph",

  sliderImages: [
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0352.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0353.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0354.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0355.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0356.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0357.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0358.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0359.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0361.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0362.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0364.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0365.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0366.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0367.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0368.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0369.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0370.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0371.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0372.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0373.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0374.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0375.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0376.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0377.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0378.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0379.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0380.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0381.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0382.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0350.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0351.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0384.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0385.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0386.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0387.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0390.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0391.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0339.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0340.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0341.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0342.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0343.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0344.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0345.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0346.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0347.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0348.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono/IMG_0349.JPG",
  ],
  saleReport: {
    price: 222,
    date: "10/10/2023",
    url: "https://www.catawiki.com/en/l/75114057-tissot-ballade-chronograph-eta-251-272-25-jewels-men-2012",
  },
  technicalData: {
    features: ["Date", "Chronograph", "30 meters"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.BALLADE,
      catalogueReference: "C288/388",
      productionYear: "2012",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "36 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Coin Detail bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Beige",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.WEB_TEXTURE_DIAL,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "18 mm",
      color: "Polished",
    },

    movement: MovementsDataDB.ETA_251_272,
  },
};

export default details;

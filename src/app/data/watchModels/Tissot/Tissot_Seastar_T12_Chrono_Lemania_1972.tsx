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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "1972 Tissot Seastar T.12 Chronograph Lemania 1281",
  sliderImages: [
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6422.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6421.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6420.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6423.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6424.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6425.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6426.JPG",

    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6446.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6447.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6449.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6451.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6452.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6453.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6454.JPG",

    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6487.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6490.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6480.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6481.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6482.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6483.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6486.JPG",

    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_2885.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_2886.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_2887.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_2888.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_2890.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_2891.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_2894.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_2896.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_2897.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_2900.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_2901.JPG",

    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6455.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6456.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6457.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6458.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6459.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6461.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6462.JPG",

    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6468.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6469.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6470.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6471.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6473.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6474.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6475.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6476.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6478.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6479.JPG",

    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6427.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6428.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6429.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6430.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6431.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6432.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6433.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6434.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6435.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6436.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6437.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6438.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6439.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6440.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6441.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6442.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6443.JPG",

    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6444.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6445.JPG",

    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6493.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6494.JPG",

    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6463.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6464.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6465.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6467.JPG",

    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6495.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6496.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6497.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6498.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6499.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6500.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6501.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6502.JPG",
    "public/assets/Images/Tissot/1972_Tissot_Navigator_Seastar_T12_Lemania_1281/IMG_6503.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.MECHANIQUE_CHRONOGRAPH,
      "Movement with production number 2393844, dating the watch back to 1972.",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.T12,
      catalogueReference: "Seastar T.12 4050-6",
      productionYear: "1972",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "43 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_10M,
      finishingDetails: "Polished",
      bezel: "Inner Tachymeter bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Stainless Steel (GF)",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "22 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.LEMANIA_1281_17J,
  },
};

export default details;

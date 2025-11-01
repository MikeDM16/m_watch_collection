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
  title: "2011 Tissot Heritage 1944 COSC Limited Edition 0141/3333",
  sliderImages: [
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3802.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3804.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3805.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3806.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3807.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3808.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3809.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3810.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3811.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3815.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3816.JPG",

    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3824.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3825.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3826.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3827.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3828.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3829.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3830.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3831.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3832.JPG",

    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3855.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3856.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3857.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3859.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3860.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3861.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3862.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3863.JPG",

    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3817.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3818.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3819.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3820.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3822.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3823.JPG",

    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3865.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3866.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3867.JPG",

    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3840.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3841.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3842.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3843.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3844.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3845.JPG",

    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3833.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3834.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3835.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3836.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3837.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3838.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3839.JPG",

    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3846.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3847.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3848.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3849.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3850.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3851.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3852.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3853.JPG",
    "public/assets/Images/Tissot/2011_Tissot_Heritage_1944_150th/IMG_3854.JPG",
  ],

  saleReport: {
    price: 1110,
    date: "25/11/2024",
    url: "https://www.catawiki.com/en/l/90472205-tissot-heritage-1944-cosc-27-jewels-limited-edition-0141-3333-men-2011",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.OPEN_CASE_BACK, featuresEnum.AUTOMATIC],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.HERITAGE,

      catalogueReference: " 150th Anniversary 0141/3333",
      productionYear: "2011",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "39 mm",
      thickness: "8 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without Bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "Silver",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.VERTICAL_BRUSHED,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "20 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.ETA_2895_2,
  },
};

export default details;

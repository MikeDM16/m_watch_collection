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
  title: "1974 Tissot Navigator Lemania 1341",
  sliderImages: [
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/catalogue_2.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/catalogue_1.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/catalogue_3.JPG",

    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4076.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4078.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4079.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4080.JPG",

    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4036.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4037.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4039.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4040.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4041.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4042.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4043.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4044.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4045.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4046.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4047.JPG",

    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4020.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4021.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4022.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4023.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4027.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4028.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4029.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4031.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4032.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4033.JPG",

    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4034.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4035.JPG",

    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4052.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4053.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4054.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4055.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4056.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4057.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4058.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4059.JPG",

    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4071.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4072.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4073.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4075.JPG",

    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4048.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4049.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4050.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4051.JPG",

    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4060.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4061.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4062.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4063.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4064.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4065.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4066.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4067.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4068.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/IMG_4070.JPG",

    "public/assets/Images/Tissot/1974_Tissot_Navigator_Automatic_Panda_Lemania_1341/manufacture_date.JPG",
  ],

  saleReport: {
    price: 936,
    date: "31/08/2025",
    url: "https://www.catawiki.com/en/l/97307708",
  },

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC_CHRONOGRAPH,
      "Movement with production number 17285838, dating the watch back to 1974",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.NAVIGATOR,
      catalogueReference: "Automatic - 45501 (17285838)",
      productionYear: "1974",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "37 mm",
      thickness: "13 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Slight Vertical brush",
      bezel: "Tachymeter bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "White (Panda Subdials)",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.VERTICAL_BRUSHED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.TISSOT_2170,
  },
};

export default details;

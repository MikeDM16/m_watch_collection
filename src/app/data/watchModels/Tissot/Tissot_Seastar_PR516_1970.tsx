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

import { WatchDetails } from "../../watchDetails";
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "1970 Tissot Seastar PR 516",
  sliderImages: [
    "public/assets/Images/Tissot/1970_Tissot_PR_516/IMG_1626.JPG",
    "public/assets/Images/Tissot/1970_Tissot_PR_516/IMG_1627.JPG",
    "public/assets/Images/Tissot/1970_Tissot_PR_516/IMG_1628.JPG",
    "public/assets/Images/Tissot/1970_Tissot_PR_516/IMG_1629.JPG",
    "public/assets/Images/Tissot/1970_Tissot_PR_516/IMG_1630.JPG",
    "public/assets/Images/Tissot/1970_Tissot_PR_516/IMG_1631.JPG",
    "public/assets/Images/Tissot/1970_Tissot_PR_516/IMG_1632.JPG",
    "public/assets/Images/Tissot/1970_Tissot_PR_516/IMG_1633.JPG",
    "public/assets/Images/Tissot/1970_Tissot_PR_516/IMG_1634.JPG",
    "public/assets/Images/Tissot/1970_Tissot_PR_516/IMG_1635.JPG",
    "public/assets/Images/Tissot/1970_Tissot_PR_516/IMG_1636.JPG",
    "public/assets/Images/Tissot/1970_Tissot_PR_516/IMG_1637.JPG",
    "public/assets/Images/Tissot/1970_Tissot_PR_516/IMG_1584.JPG",
    "public/assets/Images/Tissot/1970_Tissot_PR_516/IMG_1638.JPG",
    "public/assets/Images/Tissot/1970_Tissot_PR_516/IMG_1588.JPG",
    "public/assets/Images/Tissot/1970_Tissot_PR_516/IMG_1639.JPG",
    "public/assets/Images/Tissot/1970_Tissot_PR_516/IMG_1587.JPG",
    "public/assets/Images/Tissot/1970_Tissot_PR_516/IMG_1589.JPG",
    "public/assets/Images/Tissot/1970_Tissot_PR_516/MQLE2384.JPG",
    "public/assets/Images/Tissot/1970_Tissot_PR_516/UTTB4144.JPG",
    "public/assets/Images/Tissot/1970_Tissot_PR_516/tissot_manufacturing_dates.JPG",
  ],
  saleReport: {
    price: 90,
    date: "28/02/2019",
    url: "https://www.catawiki.pt/l/24623279-tissot-seastar-pr-516-cal-781-1-homem-1960-1969",
  },
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.MECHANICAL,
      "Movement with production number 11611371, dating the watch back to 1970",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.PR_516_VINTAGE,
      catalogueReference: "Visodate 42620-1X",
      productionYear: "1970",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_36,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.VERTICAL_BRUSHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.GREY,
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.VERTICAL_BRUSHED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BLACK,
    },

    movement: {
      title: "Tissot 781-1",
      description:
        "In-house Tissot movement produced around 1965 until 1972. \n" +
        'Suffix "-1": new Incabloc. \n',
      usefullLinks: {
        "Ranfft Tissot 781-1":
          "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&&2uswk&Tissot_781_1",
        "Vintage technical Information from Tissot":
          "../Files/2790_Tissot 781.1,782.1,783.1,784.1.pdf",
      },
      sliderImages: [
        "public/assets/Images/Tissot/1970_Tissot_PR_516/tissot_781-1-1.JPG",
        "public/assets/Images/Tissot/1970_Tissot_PR_516/tissot_781-1-2.JPG",
      ],
      details: {
        manufacturer: "Tissot (Swiss Made)",
        modelReference: "781-1",
        type: "Mechanical",
        frequency: "18000 A/h",
        jewels: "17 (Seventeen) Jewels ",
        reserve: "49 Hours",
        functions: "Date, Hours, Minutes, Sweep Seconds",
      },
    },
  },
};

export default details;

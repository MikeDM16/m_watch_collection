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
  title: "1975 Martini Special 17 Rubis",
  sliderImages: [
    "public/assets/Images/Martini/1975_Martini_Special/IMG_2779.JPG",
    "public/assets/Images/Martini/1975_Martini_Special/IMG_2780.JPG",
    "public/assets/Images/Martini/1975_Martini_Special/IMG_2781.JPG",
    "public/assets/Images/Martini/1975_Martini_Special/IMG_2782.JPG",
    "public/assets/Images/Martini/1975_Martini_Special/IMG_2783.JPG",
    "public/assets/Images/Martini/1975_Martini_Special/IMG_2784.JPG",
    "public/assets/Images/Martini/1975_Martini_Special/IMG_2785.JPG",
    "public/assets/Images/Martini/1975_Martini_Special/IMG_2786.JPG",
    "public/assets/Images/Martini/1975_Martini_Special/IMG_2787.JPG",
    "public/assets/Images/Martini/1975_Martini_Special/IMG_2788.JPG",
    "public/assets/Images/Martini/1975_Martini_Special/IMG_2789.JPG",
    "public/assets/Images/Martini/1975_Martini_Special/IMG_2790.JPG",
    "public/assets/Images/Martini/1975_Martini_Special/IMG_2791.JPG",
    "public/assets/Images/Martini/1975_Martini_Special/IMG_2792.JPG",
  ],
  saleReport: {
    price: 70,
    date: "29/07/2018",
    url: "https://www.catawiki.pt/l/20023981-martini-swiss-special-17-rubis-nos-cal-fe-140-17-rubis-homem-1970-1979",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.MARTINI,
      series: "Special",
      catalogueReference: "17 rubis",
      productionYear: "1975",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Bordeaux",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.FE_140,
  },
};

export default details;

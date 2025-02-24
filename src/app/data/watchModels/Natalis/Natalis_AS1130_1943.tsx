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
  title: "1943 Natalis Cal. AS1130",
  description: {
    text:
      "Natalis is a vintage watch brand which appears to have their major sales around the 1930s and 1940s. \n" +
      'From the few information that I was able to gather, there also seems to be a strong connection between the brand and Germany, \
        although some high-end model have the "Swiss Made" stamp in the dials. \n \n' +
      "Models that sometimes appear at online sales and forums, are essentially military and pilot watches, using simple designs in the dials and very lume, \
         allowing a fast reading low light and tactical conditions. There is, however, also some very good dress watches and high-end models, having as movement variants \
          of the well know Valjoux.\n \n" +
      "This particular model is one of the non-military and more daily formal watches that the brand assembled back then. \
        Given their age, it's in some rough condition. \n" +
      "The case seems to be chromed nickel and has some severe marks and scratches, which for me actually gives it a very particular look. \
        The build quality is also not the most rigorous, as the length between the lug ends is not the same on both sides of the case. \
        This could be explained because of around 1943, the Germans were hard pressed for cash and they were supplied with less costly watches, \
         but yet build rugged and dependable. \n \n" +
      "The acrylic glass dome could be easily removed. Although I rather don't risk any tries regards the cleaning of the dial, which as started to become\
         greyish due to the decades.\n" +
      "The movement is fully working and without losing time, after some cleaning and lubrification of the parts. \
        It is based on the AS 1130 although this version seems to be a bit more detailed. It was also used in some \
        prestigious brand, as for instance the caliber Girard-Perregaux 27 or the Alpina 652. \n" +
      'This movement is known as the Wehrmachtswerk, which translates to "army movement", as it was deeply used in German military watches back then.\n \n' +
      "Following the end of WW1 and the Peace Treaty of Versailles in 1919, German was forced to limit the number of German troops to 100,000 and \
        was strictly prohibited to use of any aircrafts. Even German planes that survived WW1 were dismantled. \n" +
      'In the following 15 years and until around 1930\'s there was no German air force, which, during the German Nazi time was called "Luftwaffe".\n' +
      "This is an important historical information since this context meant that there were literally no military-issued watches in Germany during that important period. \
        Many companies, either less known brands like Natalis to powerhouses like Omega and Breitling did issue aviator watches but none were officially military marked. \n" +
      "Although, there were many pilot's watches that were distributed to and worn by pilots in the Luftwaffe (German Nazi Airforce). \
        This information was taken from Konrad Knirim's 'Militaruhren' (Military Timepieces), 2002, page 146. \
        The last two photos were also taken from this book, where there can be seen that the brand Natalis appear together whit other big names \
         like Mimo, Breitling, Titus, Zenith, Omega and Helvetia. Also, other manufacturers such as Longines, Roamer and Lanco made this type of military watches \
          around the 1930s.",

    sliderImages: [
      "public/assets/Images/Natalis/1943_Natalis_German/others/m1 (4).JPG",
      "public/assets/Images/Natalis/1943_Natalis_German/others/m1 (3).JPG",
      "public/assets/Images/Natalis/1943_Natalis_German/others/m1 (2).JPG",
      "public/assets/Images/Natalis/1943_Natalis_German/others/m1 (1).JPG",
      "public/assets/Images/Natalis/1943_Natalis_German/others/m2 (1).JPG",
      "public/assets/Images/Natalis/1943_Natalis_German/others/m2 (6).JPG",
      "public/assets/Images/Natalis/1943_Natalis_German/others/m3 (1).JPG",
      "public/assets/Images/Natalis/1943_Natalis_German/others/m3 (2).JPG",
      "public/assets/Images/Natalis/1943_Natalis_German/others/m3 (3).JPG",
      "public/assets/Images/Natalis/1943_Natalis_German/others/m4 (1).JPG",
      "public/assets/Images/Natalis/1943_Natalis_German/others/m4 (3).JPG",
      "public/assets/Images/Natalis/1943_Natalis_German/others/m4 (2).JPG",
      "public/assets/Images/Natalis/1943_Natalis_German/others/m5 (4).JPG",
      "public/assets/Images/Natalis/1943_Natalis_German/others/m5 (5).JPG",
      "public/assets/Images/Natalis/1943_Natalis_German/others/m5 (3).JPG",
      "public/assets/Images/Natalis/1943_Natalis_German/others/m5 (2).JPG",
      "public/assets/Images/Natalis/1943_Natalis_German/others/m5 (1).JPG",
      "public/assets/Images/Natalis/1943_Natalis_German/others/m6.JPG",
      "public/assets/Images/Natalis/1943_Natalis_German/others/m7.JPG",
    ],
  },

  sliderImages: [
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2548.JPG",
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2549.JPG",
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2550.JPG",
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2551.JPG",
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2552.JPG",
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2553.JPG",
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2554.JPG",
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2555.JPG",
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2488.JPG",
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2489.JPG",
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2490.JPG",
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2491.JPG",
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2492.JPG",
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2493.JPG",
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2494.JPG",
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2495.JPG",
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2496.JPG",
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2497.JPG",
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2498.JPG",
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2323.JPG",
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2324.JPG",
    "public/assets/Images/Natalis/1943_Natalis_German/IMG_2535.JPG",
  ],
  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.INCABLOC],

    information: {
      brand: BrandsEnum.NATALIS,
      series: "17 Rubis",
      catalogueReference: "36132 02",
      productionYear: "1943",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "37 mm",
      thickness: "10 mm",
      material: "Stainless Steel - Nickel Chromed",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.TEXTURED,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.AS_1130,
  },
};

export default details;

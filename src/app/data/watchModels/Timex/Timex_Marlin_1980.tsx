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

const details: WatchDetails = {
  title: "1980 Timex Marlin",
  description: {
    text:
      "Most of the actual low to mid-range brands reduced their production costs by using cheap and very simple Chinese or Japanese quartz movements. \
         Regarding their very-low price range, the quartz movement will mostly be able to keep accurate time and for most of the buyers, that is the most \
         important feature in a watch. \n \n" +
      "So the point is, what makes a watch gain its valuable? is it workmanship, accuracy, finishing details, longevity, or a combination of all this? \
        These Timex watches are, in my humble opinion, very interesting timepieces because of the watch era that they represent. Back then, around the beginning \
        of the 20º century, American watch companies were trying to create a series of cheap watches, but still able to maintain proper time accuracy. \
        This projects around inexpensive watches triggered one of the most remarkable achievements in the history of the mechanical watch.\n \n" +
      "The most known company producing these 'cheap' machines was the Ingersoll Watch company. Their goal, in the beginning, was to produce a watch \
        which equalled a day's pay at the turn of the century: $1.00. The company was later purchased by the Waterbury Clock Company in 1922, and by U.S. Time in 1944.\
         This last company, eventually grown to become the beginning of Timex trademark.\n" +
      "This background is somehow important, has is explain the reason why the majority of Timex watches use these low-production costs movements, \
         which make the brand able to provide affordable models whit strong accuracy and durability.\n" +
      "To reduce the production costs of these movements, most of the expensive details and parts were extremely reduced or changed. \
        For instance, the movement would have no jewels (or very few), been built whit cheaper metals and have no finish or polished parts to \
         provide then whit beautiful details in the movement back. These movements were known as Pin Lever movements for the simple reason that the 'expensive' \
         pallet fork jewels were substituted by metal pins. Pallets are usually made of hard stone, such as sapphire jewels, in more traditional quality movements.\n \n" +
      "Even though the watches are made so inexpensively, it was still possible to regulate the timing of the movement. Such an escapement was less \
        expensive to manufacture and the movements were generally of low quality. But this wasn't the case for all pin levers, though. \
        Oris, for example, was restricted by Swiss law to produce only pin lever movements from around 1934 up to the mid-1960s. As such they put more time and effort \
        into this type of movement than most and produced a number of high-jewelled pin lever movements. Because the main goal was to build a cheap but remarkable \
        accurate movement, some of those pin-lever watches even rivalled the accuracy of watches costing thousands of dollars more. This made the Timex brand gain a \
        significant position in the US wristwatch market shares, by the early 1960s.\n" +
      "As a response, the major watch companies reacted by offering their own less expensive watch options through subsidiary brands such as Hamilton's Vantage line \
        and Bulova's Caravelle watches. These companies took advantage of offshore manufacture and assembly to reduce costs while still providing decent jewelled lever watches. \
        They also embarked on some interesting comparison-based advertisements such the one seen in the last image of the slideshow, from LIFE Magazine around December 1968. \
        A 7 jewel watch from Caravelle is being compared to an unjeweled pin lever Timex. \n \n" +
      "These watches told time faithfully until they quit and, since it would cost more to service the watch than it would be to buy another, \
        most of the people just bought a new one. (kinda like the actual Swatch company business philosophy ). Because of these features, and because some models \
         were still able to last until nowadays in mint condition, these model are somehow collectable and searched for some watch collectors. \
         Although simple, they still ticking strong.\n \n" +
      "After some research, I investigated tricks to date either Timex or Kelton watches. This can be a tough task since different countries or production lines\
         could use different codes in the watches. After 1963 Timex, and its subsidiaries began recording an 8-digit code in front of the clock in the 6 o'clock zone. \
         Pre-1963 models have an ink-stamped code inside the back case of the watch.\n \n" +
      "This model is marked whit the code 27130-10080 Whit this information, the catalogue reference number of this model is 27130, the movement is a Timex M100 \
        and the year of production was 1980. This movements, like other Timex movements from these decades, contained no jewels and could only be serviced from the dial side. \
        They were made to 'eat dust and pass through well'. Needing few calibrations or maintenance, these movements are still ticking strong after more than three decades.\n" +
      "The crystal is acrylic and the dial has a gorgeous gold/champagne colour dial.",

    sliderImages: [],
  },

  sliderImages: [
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0892.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0893.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0894.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0895.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0896.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0897.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0898.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0899.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0900.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0901.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0902.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0903.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0904.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0905.JPG",

    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0915.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0916.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0917.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0918.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0687.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0688.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/caravelle_LIFE_13_dec_1968.JPG",

    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0906.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0907.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0908.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0909.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0910.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0911.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0912.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0913.JPG",
    "public/assets/Images/Timex/1980_Timex_Marlin_M100/IMG_0914.JPG",
  ],
  technicalData: {
    features: ["Date", "Mechanical"],

    information: {
      brand: BrandsEnum.TIMEX,
      series: "Marlin (27130)",
      catalogueReference: "27130-10080",
      productionYear: "1980",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "35 mm",
      thickness: "8 mm",
      material: "Stainless Steel - Chrome plated",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Champgne",
      dialMarkers: DialMarketsEnum.BREGUET,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Lizard Sking Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.TIMEX_M100,
  },
};

export default details;

import { BezelTypeEnum } from "@/app/enums/bezelTypeEnum";
import { BraceletMaterialEnum } from "@/app/enums/braceletMaterialEnum";
import { BraceletWidthEnum } from "@/app/enums/braceletWidthEnum";
import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
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
import { WatchTypeEnum } from "@/app/enums/watchTypeEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";
import { NextResponse } from "next/server";

// Flatten featuresEnum to {KEY: "display name"} like all other enums
const featuresFlat: Record<string, string> = {};
for (const [key, val] of Object.entries(featuresEnum)) {
  featuresFlat[key] = val.name;
}

export async function GET() {
  return NextResponse.json({
    BrandsEnum,
    WatchTypeEnum,
    WatchStyleEnum,
    MovementWatchTypeEnum,
    CaseDiameterEnum,
    CaseThicknessEnum,
    CaseMaterialEnum,
    CaseFinishingEnum,
    BezelTypeEnum,
    CrownWatchTypeEnum,
    CrystalMaterialEnum,
    CaseBackDetailsEnum,
    WaterResistanceEnum,
    ColorEnum,
    DialMarketsEnum,
    FinishingDetailsEnum,
    LuminescentIndexesEnum,
    CalendarWatchTypeEnum,
    BraceletMaterialEnum,
    BraceletWidthEnum,
    BuckleTypeEnum,
    CaliberBrandsEnum,
    FrequencyEnum,
    JewelsNumberEnum,
    ReserveHoursEnum,
    featuresEnum: featuresFlat,
  });
}

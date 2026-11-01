import {
  BraceletInformationToDisplayTextMapping,
  CaseInformationKeyToDisplayTextMapping,
  DialInformationToDisplayTextMapping,
  ModelInformationKeyToDisplayTextMapping,
} from "@/app/data/watchDetails";

/**
 * The model editor's fields: where each sits in `technicalData`, what the page
 * calls it, and the enum its value comes from. One table drives the reader,
 * the writer and the form, so a field cannot be read one way and written
 * another.
 *
 * Plain data, safe on either side of the client boundary.
 */

export type FieldGroup = "Model" | "Case" | "Dial" | "Bracelet";

export interface FieldSpec {
  /** Under `technicalData`, e.g. `case.diameter`. */
  path: string;
  group: FieldGroup;
  label: string;
  /** The enum the value is written from (`CaseDiameterEnum.D_39`), else free text. */
  enumName?: string;
  /** Written as `A + B`: the second value is a suffix of the first. */
  multi?: boolean;
  readOnly?: boolean;
}

const field = (
  group: FieldGroup,
  path: string,
  labels: Record<string, string>,
  enumName?: string,
  extra: Partial<FieldSpec> = {},
): FieldSpec => ({ path, group, label: labels[path.split(".")[1]], enumName, ...extra });

const M = ModelInformationKeyToDisplayTextMapping;
const C = CaseInformationKeyToDisplayTextMapping;
const D = DialInformationToDisplayTextMapping;
const B = BraceletInformationToDisplayTextMapping;

/** In page order. Series has its own control (it depends on the brand). */
export const FIELDS: FieldSpec[] = [
  field("Model", "information.brand", M, "BrandsEnum", { readOnly: true }),
  field("Model", "information.catalogueReference", M),
  field("Model", "information.productionYear", M),
  field("Model", "information.movementType", M, "MovementWatchTypeEnum"),
  field("Model", "information.style", M, "WatchStyleEnum"),

  field("Case", "case.diameter", C, "CaseDiameterEnum"),
  field("Case", "case.thickness", C, "CaseThicknessEnum"),
  field("Case", "case.material", C, "CaseMaterialEnum"),
  field("Case", "case.waterResistance", C, "WaterResistanceEnum"),
  field("Case", "case.finishingDetails", C, "CaseFinishingEnum"),
  field("Case", "case.bezel", C, "BezelTypeEnum"),
  field("Case", "case.crownType", C, "CrownWatchTypeEnum"),
  field("Case", "case.crystal", C, "CrystalMaterialEnum"),
  field("Case", "case.caseback", C, "CaseBackDetailsEnum"),

  field("Dial", "dial.color", D, "ColorEnum"),
  field("Dial", "dial.dialMarkers", D, "DialMarketsEnum"),
  field("Dial", "dial.finishingDetails", D, "FinishingDetailsEnum"),
  field("Dial", "dial.luminiscentIndexes", D, "LuminescentIndexesEnum", { multi: true }),
  field("Dial", "dial.calendar", D, "CalendarWatchTypeEnum", { multi: true }),

  field("Bracelet", "bracelet.material", B, "BraceletMaterialEnum"),
  field("Bracelet", "bracelet.buckleType", B, "BuckleTypeEnum"),
  field("Bracelet", "bracelet.width", B, "BraceletWidthEnum"),
  field("Bracelet", "bracelet.color", B, "ColorEnum"),
];

/** Where an enum is imported from: `CaseDiameterEnum` → `@/app/enums/caseDiameterEnum`. */
export const enumModule = (name: string) => `@/app/enums/${name[0].toLowerCase()}${name.slice(1)}`;

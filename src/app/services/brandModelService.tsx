import { TechnicalData } from "../data/watchDetails";

export const technicalDataHasFeature = (technicalData: TechnicalData, featureName: string) => {
  return technicalData.features
    .filter((entry) => entry != undefined)
    .some((entry) => {
      const name = typeof entry == "string" ? entry : "name" in entry ? entry.name : "";
      return name.toLowerCase().includes(featureName.toLowerCase());
    });
};

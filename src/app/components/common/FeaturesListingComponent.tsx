import { getExternalResource } from "@/app/services/commonFunctions";

import ImageComponent from "./ImageComponent";

export default function FeatureListingComponent(
  title: string,
  features: Record<string, string>,
  imgSrc?: string,
  backgroudImage?: string,
  keyToDisplayTextmappings?: Record<string, string>,
) {
  const containerImage = imgSrc ? <ImageComponent src={getExternalResource(imgSrc)} /> : undefined;
  return (
    <div>
      <div className="container-title centered-container border-bottom-text">{title}</div>
      {containerImage}
      <div
        className="feature-information-background"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.9)), url(${backgroudImage})`,
        }}
      >
        {Object.entries(features).map(([key, value]) => {
          const displayText = keyToDisplayTextmappings?.[key] || key;
          return (
            <div key={`model_information_${key}`}>
              <b className="capitalize-text">{displayText}</b>
              <p>{value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

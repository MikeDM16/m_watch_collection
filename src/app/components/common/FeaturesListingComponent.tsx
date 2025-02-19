import { getExternalResource } from "@/app/services/commonFunctions";
import ImageComponent from "./ImageComponent";

export default function FeatureListingComponent(
  title: string,
  features: Record<string, string>,
  imgSrc?: string,
  keyToDisplayTextmappings?: Record<string, string>,
) {
  const containerImage = imgSrc ? <ImageComponent src={getExternalResource(imgSrc)} /> : undefined;
  return (
    <div>
      <div className="upper-text container-title centered-container border-bottom-text">
        {title}
      </div>
      {containerImage}
      {Object.entries(features).map(([key, value]) => {
        const displayText = keyToDisplayTextmappings?.[key] || key;
        return (
          <div className="capitalize-text" key={`model_information_${key}`}>
            <b>{displayText}</b>
            <p>{value}</p>
          </div>
        );
      })}
    </div>
  );
}

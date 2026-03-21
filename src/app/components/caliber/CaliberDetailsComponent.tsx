import {
  Caliber,
  CaliberTechinicalDetailskeyToDisplayTextmappings,
} from "@/app/data/movementsData";

import ImageGalleryComponent from "../common/ImageGalleryComponent";

export const CaliberDetailComponent = (caliberDetails: Caliber) => {
  return (
    <div>
      <div className="info-text container-title py-4">{caliberDetails.title}</div>
      <div className="bottom-margin-m">
        <ImageGalleryComponent galleryImages={caliberDetails.sliderImages} />
      </div>
      <div className="bottom-margin-m" style={{ whiteSpace: "pre-line" }}>
        {caliberDetails.description}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {Object.entries(caliberDetails.details)
          .filter(([, value]) => value != undefined)
          .map(([key, value]) => {
            const displayText = CaliberTechinicalDetailskeyToDisplayTextmappings?.[key] || key;
            return (
              <div
                className="capitalize-text"
                key={`caliber_information_${key}`}
              >
                <b>{displayText}</b>
                <p>{value}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

import {
  Caliber,
  CaliberTechinicalDetailskeyToDisplayTextmappings,
} from "@/app/data/movementsData";

import ImageGalleryComponent from "../common/ImageGalleryComponent";

export const CaliberDetailComponent = (caliberDetails: Caliber) => {
  return (
    <div className="section-container">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-4">
          <div>
            <ImageGalleryComponent galleryImages={caliberDetails.sliderImages} />
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <div>
            <div className="info-text container-title">{caliberDetails.title}</div>
            <div className="bottom-margin-m" style={{ whiteSpace: "pre-line" }}>
              {caliberDetails.description}
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            {Object.entries(caliberDetails.details)
              .filter(([, value]) => value != undefined)
              .map(([key, value]) => {
                const displayText = CaliberTechinicalDetailskeyToDisplayTextmappings?.[key] || key;
                return (
                  <div
                    className="capitalize-text col-span-12 sm:col-span-6 md:col-span-4"
                    key={`caliber_information_${key}`}
                  >
                    <b>{displayText}</b>
                    <p>{value}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

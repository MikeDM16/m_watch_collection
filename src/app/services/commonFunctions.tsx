import { IconType } from "react-icons";

export function getExternalResource(image_url: string) {
  //const url_begin = "https://github.com/MikeDM16/MWatchCollectionResources/raw/master";
  const base_url = "https://raw.githubusercontent.com/MikeDM16/MWatchCollectionResources/master";
  const proxy_url = `${encodeURI(base_url)}/${encodeURI(image_url)}`;
  return proxy_url;
}

export function getSaleReportImage(baseImgSrc: string): string {
  const imagePath = baseImgSrc.split("/");
  imagePath.pop();
  return imagePath.join("/") + "/saleReport.JPG";
}

export const SizeType = {
  FULL_HD: "1200x1200",
  GALLERY: "800x800",
  SLIDER: "500x500",
  THUMBNAIL: "200x200",
  DEFAULT: "Default",
};

export function getImgURLForSizeType(imageUrl: string, type: string) {
  if (type == SizeType.DEFAULT) {
    return imageUrl;
  }

  return `${imageUrl.split(".")[0]}_${type}.${imageUrl.split(".")[1]}`;
}

export function getIconWithTextCentered(Icon: IconType, text: string) {
  return (
    <div key={`main_div_icon${text}`} className="centered-container">
      <div key={`centered_div_icon${text}`} className="centered-container align-center gap-1">
        <Icon />
        <div>{text}</div>
      </div>
    </div>
  );
}

export function getPathParameter(value: string): string {
  return decodeURIComponent(value);
}

export function setPathParameter(value: string): string {
  return encodeURIComponent(value);
}

export function routeToMainPageHeader() {
  return "/#";
}

export function routeToMainPageAllBrandListing() {
  return "/#AllBrandsItems";
}

export function routeToCollectionBrandPage(brandName: string): string {
  return `/collection/${setPathParameter(brandName)}`;
}

export function routeToCollectionBrandModelPage(brandName: string, modelName: string): string {
  return `/collection/${setPathParameter(brandName)}/${setPathParameter(modelName)}`;
}

export function selectBackgroundImage(images: string[] | undefined): string | undefined {
  if (!images || images.length == 0) {
    return undefined;
  }

  const currentHour = new Date().getHours();
  const selectedIdx = currentHour % images.length;
  return images[selectedIdx];
}

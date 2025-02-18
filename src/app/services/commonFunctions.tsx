import { IconType } from "react-icons";

export function getExternalResource(image_url: string) {
  const url_begin = "https://github.com/MikeDM16/MWatchCollectionResources/raw/master";
  image_url = url_begin + "/" + image_url;
  return image_url;
}

export const SizeType = {
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
  return value.replaceAll("-", " ");
}

export function setPathParameter(value: string): string {
  return value.replaceAll(" ", "-");
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

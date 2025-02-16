import { IconType } from "react-icons";

export function getExternalResource(image_url: string) {
  const url_begin = "https://github.com/MikeDM16/MWatchCollectionResources/raw/master";
  image_url = url_begin + "/" + image_url;
  return image_url;
}

export function getIconWithTextCentered(Icon: IconType, text: string) {
  return (
    <div key={`main_div_icon${text}`} className="centered-container">
      <div key={`centered_div_icon${text}`} className="centered-container gap-1">
        <Icon />
        <div>{text}</div>
      </div>
    </div>
  );
}

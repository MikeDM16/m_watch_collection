export default function getExternalResource(image_url: string) {
  const url_begin = "https://github.com/MikeDM16/MWatchCollectionResources/raw/master";
  image_url = url_begin + "/" + image_url;
  return image_url;
}

// image optimazation function on the image url

import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage; // handling games without images
  const target = "media/";
  const imageOpt = "crop/600/400/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + imageOpt + url.slice(index);
};

export default getCroppedImageUrl;

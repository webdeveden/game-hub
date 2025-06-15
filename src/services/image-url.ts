// image optimazation function on the image url

const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const imageOpt = "crop/600/400/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + imageOpt + url.slice(index);
};

export default getCroppedImageUrl;

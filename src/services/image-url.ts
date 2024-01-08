// to optimize image we added this string
// 'crop/600/400
import noImage from "../assets/no-image.avif";
const croppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
export default croppedImageUrl;

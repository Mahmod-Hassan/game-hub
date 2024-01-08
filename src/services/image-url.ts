// to optimize image we added this string
// 'crop/600/400
const croppedImageUrl = (url: string) => {
  if (!url) return "";
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
export default croppedImageUrl;

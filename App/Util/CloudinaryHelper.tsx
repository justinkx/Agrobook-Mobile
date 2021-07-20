type imageProp = {
  formats: any;
};
export const imageHelper = (image: imageProp): string => {
  let url = null;
  if (image.formats.large) {
    url = image.formats.large.url;
  } else if (image.formats.medium) {
    url = image.formats.medium.url;
  } else if (image.formats.small) {
    url = image.formats.small.url;
  }
  return url;
};

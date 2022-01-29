//export const API_URL = "http://localhost:1337";
export const API_URL = "https://e-learning-strapi-backend.herokuapp.com";

export const formatNumber = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(number);
};
export const fromImageToUrl = (imageUrl) => {
  if (!imageUrl) {
    return "/vercel.svg"; //Or default image here
  }
  // if (image.url.indexOf("/") === 0) {
  //It's a relative url, add API URL

  return `${API_URL}${imageUrl}`;
  // }

  // return image.url;
};

export const API_URL = "http://localhost:1337";

//export const API_URL = "https://elearning-strapi.herokuapp.com";
// export const API_URL = "https://elearning-strapi.herokuapp.com";
//   process.env.NEXT_PUBLIC_API_URL || "http://localhost:1338"
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

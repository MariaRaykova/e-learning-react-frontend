import qs from "qs";
//const res = await fetch(`${process.env.REACT_APP_HOST}/products`);
//const res = await fetch(`${API_URL}/api/products`);
//const res = await fetch(`${API_URL}/api/products?pagination[limit]=3&pagination[withCount]=true&populate=image`);
export const queryCourse = qs.stringify(
  {
    populate: {
      test: {
        populate: {
          questions: {
            populate: {
              answers: {
                populate: "*"
              }
            }
          }
        }
      },
      course_image: {
        fields: ["name", "url"]
      },
      course_video: {
        fields: ["name", "url"]
      }
    }
  },
  {
    encodeValuesOnly: true
  }
);
// export const queryCourseCart = qs.stringify({
//   attributes: {
//     fields: ["course_name", "course_price"]
//   }
// });
//await request(`/api/articles?${query}`);
// GET /api/articles?populate[0]=seoData&populate[1]=seoData.sharedImage&populate[2]=seoData.sharedImage.media
// const query = "?populate[0]=categories"

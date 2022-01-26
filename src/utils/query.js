import qs from "qs";

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
//await request(`/api/articles?${query}`);
// GET /api/articles?populate[0]=seoData&populate[1]=seoData.sharedImage&populate[2]=seoData.sharedImage.media
// const query = "?populate[0]=categories"

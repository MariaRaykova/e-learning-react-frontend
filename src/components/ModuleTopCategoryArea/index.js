import { Link } from "react-router-dom";

const ModuleTopCategoryArea = () => {
  return (
    <div class="top_catagory_area section-padding-80 clearfix">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-6 col-md-4">
            <div
              class="single_catagory_area d-flex align-items-center justify-content-center bg-img"
              style={{ backgroundImage: "url(assets/img/bg-img/bg-2.jpg)" }}
            >
              <div class="catagory-content">
                <a href="#">Face</a>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-4">
            <div
              class="single_catagory_area d-flex align-items-center justify-content-center bg-img"
              style={{ backgroundImage: "url(assets/img/bg-img/bg-3.jpg)" }}
            >
              <div class="catagory-content">
                <a href="#">Body</a>
              </div>
            </div>
          </div>

          {/* <div class="col-12 col-sm-6 col-md-4">
            <div
              class="single_catagory_area d-flex align-items-center justify-content-center bg-img"
              style={{ backgroundImage: "url(assets/img/bg-img/bg-4.jpg)" }}
            >
              <div class="catagory-content">
                <a href="#">Accessories</a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default ModuleTopCategoryArea;

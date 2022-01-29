import React from "react";
import ModuleAllCourses from "../../components/ModuleAllCourses";
import ModulePopular from "../../components/ModulePopular";
import ModuleSale from "../../components/ModuleSale";
import ModuleTopCategoryArea from "../../components/ModuleTopCategoryArea";
// import { GitHubIcon } from "../components/icons";
import PageWrapper from "../../components/PageWrapper";
const Home = () => {
  return (
    <PageWrapper>
      <div>
        <ModuleAllCourses />
        {/* <ModuleTopCategoryArea /> */}
        <ModulePopular />
        <ModuleSale />
        {/* Logos of popular brands */}
        <div class="brands-area d-flex align-items-center justify-content-between">
          <div class="single-brands-logo">
            <img src="assets/img/core-img/brand1.png" alt="" />
          </div>

          <div class="single-brands-logo">
            <img src="assets/img/core-img/brand2.png" alt="" />
          </div>

          <div class="single-brands-logo">
            <img src="assets/img/core-img/brand3.png" alt="" />
          </div>

          <div class="single-brands-logo">
            <img src="assets/img/core-img/brand4.png" alt="" />
          </div>

          <div class="single-brands-logo">
            <img src="assets/img/core-img/brand5.png" alt="" />
          </div>

          <div class="single-brands-logo">
            <img src="assets/img/core-img/brand6.png" alt="" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
export default Home;

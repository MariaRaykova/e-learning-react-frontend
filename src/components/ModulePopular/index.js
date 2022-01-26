import React, { useContext } from "react";
import { CoursesContext } from "../../contexts/CoursesContext";
import CourseItem from "../CourseItem";
const ModulePopular = () => {
  const { courses } = useContext(CoursesContext);

  return (
    // <div class="top_catagory_area section-padding-80 clearfix">
    //   <div class="container">
    //     <div class="row justify-content-center">
    //       <div class="col-12 col-sm-6 col-md-4">
    //         <div
    //           class="single_catagory_area d-flex align-items-center justify-content-center bg-img"
    //           style={{ backgroundImage: "url(assets/img/bg-img/bg-2.jpg)" }}
    //         >
    //           <div class="catagory-content">
    //             <a href="#">Clothing</a>
    //           </div>
    //         </div>
    //       </div>

    //       <div class="col-12 col-sm-6 col-md-4">
    //         <div
    //           class="single_catagory_area d-flex align-items-center justify-content-center bg-img"
    //           style={{ backgroundImage: "url(assets/img/bg-img/bg-3.jpg)" }}
    //         >
    //           <div class="catagory-content">
    //             <a href="#">Shoes</a>
    //           </div>
    //         </div>
    //       </div>

    //       <div class="col-12 col-sm-6 col-md-4">
    //         <div
    //           class="single_catagory_area d-flex align-items-center justify-content-center bg-img"
    //           style={{ backgroundImage: "url(assets/img/bg-img/bg-4.jpg)" }}
    //         >
    //           <div class="catagory-content">
    //             <a href="#">Accessories</a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // {/* Popular products Carusel... */}
    <section class="new_arrivals_area section-padding-80 clearfix">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-heading text-center">
              <h2>Our Most Popular Body Sculpting Courses</h2>
              <h6>
                Learn how to do these in-demand procedures with our step-by-step
                body contouring training online.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            {/* <div class="popular-products-slides owl-carousel"> */}
            {courses.map((course) => (
              <CourseItem key={course.id} course={course} />
            ))}

            {/*   <div class="single-product-wrapper">
               <div class="product-img">
                  <img src="assets/img/product-img/product-1.jpg" alt="" />
                  <img
                    class="hover-img"
                    src="assets/img/product-img/product-2.jpg"
                    alt=""
                  />

                  <div class="product-favourite">
                    <a href="#" class="favme fa fa-heart"></a>
                  </div>
                </div>

                <div class="product-description">
                  <span>topshop</span>
                  <a href="#">
                    <h6>Knot Front Mini Dress</h6>
                  </a>
                  <p class="product-price">$80.00</p>

                  <div class="hover-content">
                    <div class="add-to-cart-btn">
                      <a href="#" class="btn essence-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="single-product-wrapper">
                <div class="product-img">
                  <img src="assets/img/product-img/product-2.jpg" alt="" />

                  <img
                    class="hover-img"
                    src="assets/img/product-img/product-3.jpg"
                    alt=""
                  />

                  <div class="product-favourite">
                    <a href="#" class="favme fa fa-heart"></a>
                  </div>
                </div>

                <div class="product-description">
                  <span>topshop</span>
                  <a href="#">
                    <h6>Poplin Displaced Wrap Dress</h6>
                  </a>
                  <p class="product-price">$80.00</p>

                  <div class="hover-content">
                    <div class="add-to-cart-btn">
                      <a href="#" class="btn essence-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="single-product-wrapper">
                <div class="product-img">
                  <img src="assets/img/product-img/product-3.jpg" alt="" />

                  <img
                    class="hover-img"
                    src="assets/img/product-img/product-4.jpg"
                    alt=""
                  />

                  <div class="product-badge offer-badge">
                    <span>-30%</span>
                  </div>

                  <div class="product-favourite">
                    <a href="#" class="favme fa fa-heart"></a>
                  </div>
                </div>

                <div class="product-description">
                  <span>mango</span>
                  <a href="#">
                    <h6>PETITE Crepe Wrap Mini Dress</h6>
                  </a>
                  <p class="product-price">
                    <span class="old-price">$75.00</span> $55.00
                  </p>

                  <div class="hover-content">
                    <div class="add-to-cart-btn">
                      <a href="#" class="btn essence-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="single-product-wrapper">
                <div class="product-img">
                  <img src="assets/img/product-img/product-4.jpg" alt="" />

                  <img
                    class="hover-img"
                    src="assets/img/product-img/product-5.jpg"
                    alt=""
                  />

                  <div class="product-badge new-badge">
                    <span>New</span>
                  </div>

                  <div class="product-favourite">
                    <a href="#" class="favme fa fa-heart"></a>
                  </div>
                </div>

                <div class="product-description">
                  <span>mango</span>
                  <a href="#">
                    <h6>PETITE Belted Jumper Dress</h6>
                  </a>
                  <p class="product-price">$80.00</p>

                  <div class="hover-content">
                    <div class="add-to-cart-btn">
                      <a href="#" class="btn essence-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>*/}
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};
export default ModulePopular;

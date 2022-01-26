import React from "react";
import ModuleAllCourses from "../../components/ModuleAllCourses";
import ModulePopular from "../../components/ModulePopular";
// import { GitHubIcon } from "../components/icons";

const Home = () => {
  return (
    <div>
      <div class="cart-bg-overlay"></div>

      <div class="right-side-cart-area">
        <div class="cart-button">
          <a href="#" id="rightSideCart">
            <img src="assets/img/core-img/bag.svg" alt="" /> <span>3</span>
          </a>
        </div>

        <div class="cart-content d-flex">
          <div class="cart-list">
            <div class="single-cart-item">
              <a href="#" class="product-image">
                <img
                  src="assets/img/product-img/product-1.jpg"
                  class="cart-thumb"
                  alt=""
                />

                <div class="cart-item-desc">
                  <span class="product-remove">
                    <i class="fa fa-close" aria-hidden="true"></i>
                  </span>
                  <span class="badge">Mango</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p class="size">Size: S</p>
                  <p class="color">Color: Red</p>
                  <p class="price">$45.00</p>
                </div>
              </a>
            </div>

            <div class="single-cart-item">
              <a href="#" class="product-image">
                <img
                  src="assets/img/product-img/product-2.jpg"
                  class="cart-thumb"
                  alt=""
                />

                <div class="cart-item-desc">
                  <span class="product-remove">
                    <i class="fa fa-close" aria-hidden="true"></i>
                  </span>
                  <span class="badge">Mango</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p class="size">Size: S</p>
                  <p class="color">Color: Red</p>
                  <p class="price">$45.00</p>
                </div>
              </a>
            </div>

            <div class="single-cart-item">
              <a href="#" class="product-image">
                <img
                  src="assets/img/product-img/product-3.jpg"
                  class="cart-thumb"
                  alt=""
                />

                <div class="cart-item-desc">
                  <span class="product-remove">
                    <i class="fa fa-close" aria-hidden="true"></i>
                  </span>
                  <span class="badge">Mango</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p class="size">Size: S</p>
                  <p class="color">Color: Red</p>
                  <p class="price">$45.00</p>
                </div>
              </a>
            </div>
          </div>

          <div class="cart-amount-summary">
            <h2>Summary</h2>
            <ul class="summary-table">
              <li>
                <span>subtotal:</span> <span>$274.00</span>
              </li>
              <li>
                <span>delivery:</span> <span>Free</span>
              </li>
              <li>
                <span>discount:</span> <span>-15%</span>
              </li>
              <li>
                <span>total:</span> <span>$232.00</span>
              </li>
            </ul>
            <div class="checkout-btn mt-100">
              <a href="#" class="btn essence-btn">
                check out
              </a>
            </div>
          </div>
        </div>
      </div>

      <ModuleAllCourses />
      <ModulePopular />

      <div class="cta-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
                class="cta-content bg-img background-overlay"
                style={{ backgroundImage: "url(assets/img/bg-img/bg-1.jpg)" }}
              >
                <div class="h-100 d-flex align-items-center justify-content-end">
                  <div class="cta--text">
                    <h6>-60%</h6>
                    <h2 style={{ color: "white" }}>Best Offers</h2>
                    <a href="#" class="btn essence-btn">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
  );
};
export default Home;

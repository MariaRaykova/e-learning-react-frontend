import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { formatNumber, fromImageToUrl } from "../../utils";

const CourseItem = ({ course }) => {
  const { addCourse, cartItems, increase } = useContext(CartContext);

  const isInCart = (course) => {
    return !!cartItems.find((item) => item.id === course.id);
  };

  const imageUrl = fromImageToUrl(
    course.attributes.course_image.data.attributes.url
  );
  return (
    <div className="card card-body">
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
                
      {/* <img
        style={{ display: "block", margin: "0 auto 10px", maxHeight: "200px" }}
        className="img-fluid"
        src={`${imageUrl}`}
        alt=""
      /> */}
      <div class="single-product-wrapper">
        <img
          style={{
            display: "block",
            margin: "0 auto 10px",
            maxHeight: "200px"
          }}
          className="img-fluid"
          src={`${imageUrl}`}
          alt=""
        />
        {/* <img class="hover-img" src="assets/img/bg-img/bg-6.jpg" alt="" /> */}
        <div class="product-favourite">
          <a href="#" class="favme fa fa-heart"></a>
        </div>

        <p>{course.attributes.course_name}</p>
        <div className="text-right">
          {course.attributes.course_short_description}
        </div>
        <h3 className="text-left">
          {formatNumber(course.attributes.course_price)}
        </h3>
        <div className="text-right">
          <Link to="/" className="btn btn-link btn-sm mr-2">
            Details
          </Link>
          <Link
            className="snipcart-add-item btn btn-outline-danger btn-sm"
            to={`/course/${course.id}`}
            key={course.id}
          >
            Test
          </Link>
          {/* {isInCart(course) && (
            <button
              onClick={() => increase(course)}
              className="btn btn-outline-primary btn-sm"
            >
              Add more
            </button>
          )} */}

          {!isInCart(course) && (
            <button
              type="button"
              onClick={() => addCourse(course)}
              className="snipcart-add-item btn btn-outline-danger btn-sm"
              data-item-name={course.attributes.course_name}
              data-item-price={course.attributes.course_price}
              data-item-description={course.attributes.course_short_description}
              data-item-min-quantity="0"
              // data-item-max-quantity={course.attributes.quantity}
              data-item-id={course.id}
              data-item-url={imageUrl}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseItem;

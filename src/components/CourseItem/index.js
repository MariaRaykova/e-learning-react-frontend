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
    <section class="single-product-wrapper">
      <div class="product-img">
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
        {/* <img
          style={{
            display: "block",
            margin: "0 auto 10px",
            maxHeight: "200px"
          }}
          className="img-fluid"
          src={`${imageUrl}`}
          alt=""
        /> */}
        {/* <img class="hover-img" src="assets/img/bg-img/bg-6.jpg" alt="" /> */}
        <div class="product-favourite">
          <a href="#" class="favme fa fa-heart"></a>
        </div>
      </div>
      <div class="product-description">
        <p>{course.attributes.course_name}</p>
        <div className="text-right">
          {course.attributes.course_short_description}
        </div>
        <h3 className="text-left">
          {formatNumber(course.attributes.course_price)}
        </h3>
        <div className="text-right">
          <Link
            to={`/course/${course.id}`}
            className="btn btn-link btn-sm mr-2"
          >
            Details
          </Link>
        </div>
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
        {/* <Link
          className="snipcart-add-item btn btn-outline-danger btn-sm"
          to={`/course/${course.id}`}
          key={course.id}
        >
          Test
        </Link> */}
      </div>
    </section>
  );
};

export default CourseItem;

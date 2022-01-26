import React, { useContext } from "react";
import {
  PlusCircleIcon,
  MinusCircleIcon,
  TrashIcon
} from "../../components/Icons";
import { CartContext } from "../../contexts/CartContext";

import { formatNumber, fromImageToUrl } from "../../utils";

const CartItem = ({ course }) => {
  const { increase, decrease, removeCourse } = useContext(CartContext);
  const imageUrl = fromImageToUrl(
    course.attributes.course_image.data.attributes.url
  );
  return (
    <div className="row no-gutters py-2">
      <div className="col-sm-2 p-2">
        <img
          alt={course.attributes.course_name}
          src={`${imageUrl}`}
          className="img-fluid d-block"
        />
      </div>
      <div className="col-sm-4 p-2">
        <h5 className="mb-1">{course.attributes.course_name}</h5>
        <p className="mb-1">
          Price: {formatNumber(course.attributes.course_price)}{" "}
        </p>
      </div>
      <div className="col-sm-2 p-2 text-center ">
        {/*  <p className="mb-0">Qty: {course.Qte}</p>
      </div>
      <div className="col-sm-4 p-2 text-right">
        <button
          onClick={() => increase(product)}
          className="btn btn-primary btn-sm mr-2 mb-1"
        >
          <PlusCircleIcon width={"20px"} />
        </button> */}

        {/* {product.quantity > 1 && (
          <button
            onClick={() => decrease(product)}
            className="btn btn-danger btn-sm mb-1"
          >
            <MinusCircleIcon width={"20px"} />
          </button>
        )} */}

        {/* {product.quantity === 1 && ( */}
        <button
          onClick={() => removeCourse(course)}
          className="btn btn-danger btn-sm mb-1"
        >
          <TrashIcon width={"20px"} />
        </button>
        {/* )} */}
      </div>
    </div>
  );
};

export default CartItem;

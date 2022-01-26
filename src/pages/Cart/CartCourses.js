import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import CartItem from "./CartItem";

const CartCourses = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <div className="card card-body border-0">
        {cartItems.map((course) => (
          <CartItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CartCourses;

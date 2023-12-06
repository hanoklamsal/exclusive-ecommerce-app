import React from "react";
import Header from "../header/header";
import "./cart.css";

function Cart() {
  return (
    <div>
      <Header />
      <div className="cart-container">
        <div className="cart-table-heading">
          <span>Product</span>Price<span></span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;

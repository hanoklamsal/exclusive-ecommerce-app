import React from "react";
import "./products.css";

function ProductItem({ props }) {
  const addToCartButtonHandler = () => {};
  return (
    <div className="product-item-container">
      <div className="image-container">
        <img src={props.p_image_url} alt="a product" height={200} width={200} />
      </div>
      <p className="product_name">{props.p_name}</p>
      <span className="discounted-price">${props.p_discounted_price}</span>
      <span className="original-price">${props.p_original_price}</span>
      <div className="buttons">
        <button className="checkout">Checkout</button>
        <button className="add-to-cart" onClick={addToCartButtonHandler}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;

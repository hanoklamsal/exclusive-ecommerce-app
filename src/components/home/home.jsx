import React from "react";
import Header from "../header/header";
import flash_img1 from "../../assets/images/flash-img1.png";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlashSales from "./../flash-sales/flash-sales";
import Products from "../product-listing/products";

function Home() {
  return (
    <>
      <Header />
      <div className="parent-container">
        <div className="categories-container">
          <li>
            <a>Mens Clothing</a>
            <FontAwesomeIcon icon="fa-light fa-greater-than" />
          </li>
          <li>
            <a>Womens Clothing</a>
          </li>
          <li>
            <a>Kids Clothing</a>
          </li>
          <li>
            <a>Electronics</a>
          </li>
          <li>
            <a>Health and Beauty</a>
          </li>
        </div>
        <div className="flash-sales-container">
          <FlashSales />
        </div>
      </div>
      <div className="best-selling-products-container">
        <div>
          <h3>Best Selling Products</h3>
          <button id="view-all">View All</button>
        </div>
        <Products />
      </div>
    </>
  );
}

export default Home;

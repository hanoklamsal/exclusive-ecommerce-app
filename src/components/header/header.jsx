import React from "react";
import wishlist_icon from "../../assets/images/wishlist-icon.png";
import cart_icon from "../../assets/images/cart-icon.png";
import account_icon from "../../assets/images/account-icon.png";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <h2>Exclusive</h2>
      <nav className="navigation-container">
        <li>
        <Link to={'/home'}>Home</Link>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a>SignUp</a>
        </li>
      </nav>
      <div className="search-and-icons-container">
        <form className="search-bar">
          <input type="search" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
        <img src={wishlist_icon} height={'20px'} width={'20px'} alt="wishlist"/>
        <img src={cart_icon} height={'20px'} width={'20px'} alt="cart"/>
        <img src={account_icon} height={'20px'} width={'20px'} alt="account"/>
      </div>
    </div>
  );
}

export default Header;

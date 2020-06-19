import React from "react";
import "./styles.scss";

import Logo from "./../../assets/TreasuresLogo.png";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="clusterLeft">
          <ul className="container">
            <a className="homeLink" href="/">
              Home
            </a>
            <li>
              <a href="/products">
                <i className="fas fa-angle-down"></i> Products
              </a>
              <ul className="productsList">
                <li>
                  <a href="/products/home-decor">Home Decor</a>
                </li>
                <li>
                  <a href="#">Wall Decor</a>
                </li>
                <li>
                  <a href="#">Gifts for Her</a>
                </li>
                <li>
                  <a href="#">Hostess Gifts</a>
                </li>
                <li>
                  <a href="#">Baby</a>
                </li>
                <li>
                  <a href="#">Wedding</a>
                </li>
                <li>
                  <a href="#">Jewelry</a>
                </li>
                <li>
                  <a href="#">Bath and Beauty</a>
                </li>
                <li>
                  <a href="#">Neighborhood Collection</a>
                </li>
                <li>
                  <a href="#">Apparel</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/products">
                <i className="fas fa-angle-down"></i> Brands
              </a>
              <ul className="brandsList">
                <li>
                  <a href="#">Nora Flemming</a>
                </li>
                <li>
                  <a href="#">Glory House</a>
                </li>
                <li>
                  <a href="#">Scout</a>
                </li>
                <li>
                  <a href="#">Peepers</a>
                </li>
                <li>
                  <a href="#">Southern Jubilee</a>
                </li>
                <li>
                  <a href="#">Pampa Bay</a>
                </li>
                <li>
                  <a href="#">Lizzy James</a>
                </li>
                <li>
                  <a href="#">Rewined Candles</a>
                </li>
                <li>
                  <a href="#">Two's Company</a>
                </li>
                <li>
                  <a href="#">Primitives by Kathy</a>
                </li>
                <li>
                  <a href="#">Little Birdie</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="TreasuresLogo"></img>
          </a>
        </div>
        <div className="clusterRight">
          <a href="/contact">Contact</a>
          <a href="/about">About Us</a>
          <a href="/cart">
            <i className="fas fa-shopping-cart"></i> Cart
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

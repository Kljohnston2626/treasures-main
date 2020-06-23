import React, { Component } from "react";

import Featured from './../../firebase/featured';
import "./styles.scss";
import owl from "./../../assets/owl.jpg";
import present from "./../../assets/present.jpg";

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="wrap">
          <img src={present} alt="present"></img>
          <div className="container">
            <h1>Think Local</h1>
            <div className="desc">
              Shop the local and popular brands you love
            </div>
            <div className="wrapper">
              <a href="/products">FIND TREASURES</a>
            </div>
          </div>
        </div>
        <div className="featured">
          <Featured />
          <div className="title">Featured Products</div>
          <div className="products">
            <div className="productRow">
              <a href="/products/item" alt="item">
                <div className="item">
                  <div className="container">
                    <img src={owl} alt="itemImg"></img>
                    <div className="overlay">
                      <div className="text">View Item</div>
                    </div>
                  </div>
                  <div className="productName">Nora Flemming Mini - Owl</div>
                  <div className="price">$99.99</div>
                </div>
              </a>
              <a href="/products/item" alt="item">
                <div className="item">
                  <div className="container">
                    <img src={owl} alt="itemImg"></img>
                    <div className="overlay">
                      <div className="text">View Item</div>
                    </div>
                  </div>
                  <div className="productName">Nora Flemming Mini - Owl</div>
                  <div className="price">$99.99</div>
                </div>
              </a>
              <a href="/products/item" alt="item">
                <div className="item">
                  <div className="container">
                    <img src={owl} alt="itemImg"></img>
                    <div className="overlay">
                      <div className="text">View Item</div>
                    </div>
                  </div>
                  <div className="productName">Nora Flemming Mini - Owl</div>
                  <div className="price">$99.99</div>
                </div>
              </a>
              <a href="/products/item" alt="item">
                <div className="item">
                  <div className="container">
                    <img src={owl} alt="itemImg"></img>
                    <div className="overlay">
                      <div className="text">View Item</div>
                    </div>
                  </div>
                  <div className="productName">Nora Flemming Mini - Owl</div>
                  <div className="price">$99.99</div>
                </div>
              </a>
            </div>
            <div className="productRow">
              <a href="/products/item" alt="item">
                <div className="item">
                  <div className="container">
                    <img src={owl} alt="itemImg"></img>
                    <div className="overlay">
                      <div className="text">View Item</div>
                    </div>
                  </div>
                  <div className="productName">Nora Flemming Mini - Owl</div>
                  <div className="price">$99.99</div>
                </div>
              </a>
              <a href="/products/item" alt="item">
                <div className="item">
                  <div className="container">
                    <img src={owl} alt="itemImg"></img>
                    <div className="overlay">
                      <div className="text">View Item</div>
                    </div>
                  </div>
                  <div className="productName">Nora Flemming Mini - Owl</div>
                  <div className="price">$99.99</div>
                </div>
              </a>
              <a href="/products/item" alt="item">
                <div className="item">
                  <div className="container">
                    <img src={owl} alt="itemImg"></img>
                    <div className="overlay">
                      <div className="text">View Item</div>
                    </div>
                  </div>
                  <div className="productName">Nora Flemming Mini - Owl</div>
                  <div className="price">$99.99</div>
                </div>
              </a>
              <a href="/products/item" alt="item">
                <div className="item">
                  <div className="container">
                    <img src={owl} alt="itemImg"></img>
                    <div className="overlay">
                      <div className="text">View Item</div>
                    </div>
                  </div>
                  <div className="productName">Nora Flemming Mini - Owl</div>
                  <div className="price">$99.99</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

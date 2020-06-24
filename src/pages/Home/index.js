import React, { Component } from "react";
import { db } from "./../../firebase/config";

import "./styles.scss";
import owl from "./../../assets/owl.jpg";
import present from "./../../assets/present.jpg";

class Home extends Component {
  state = {
    products: null,
    showItems: 4,
  };

  componentDidMount() {
    db.collection("products")
      .where("Rank", "<", 9)
      .get()
      .then((snapshot) => {
        const products = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          products.push(data);
        });
        this.setState({ products: products });
      })
      .catch((error) => console.log(error));
  }

  render() {
    var count = 0;
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
          <div className="title">Featured Products</div>
          <div className="products">
            <div className="productRow">
              {
                this.state.products &&
                this.state.products
                  .slice(count, this.state.showItems)
                  .map((product) => {
                    count++;
                    return (
                      <a key={product.Rank} href="/products/item" alt="item">
                        <div className="item">
                          <div className="container">
                            <img src={owl} alt="itemImg"></img>
                            <div className="overlay">
                              <div className="text">View Item</div>
                            </div>
                          </div>
                          <div className="productName">{product.Name}</div>
                          <div className="price">${String(product.Price)}</div>
                        </div>
                      </a>
                    );
                  })}
            </div>
            <div className="productRow">
              {
                this.state.products &&
                this.state.products
                  .slice(count)
                  .map((product) => {
                    count++;
                    return (
                      <a key={product.Rank} href="/products/item" alt="item">
                        <div className="item">
                          <div className="container">
                            <img src={owl} alt="itemImg"></img>
                            <div className="overlay">
                              <div className="text">View Item</div>
                            </div>
                          </div>
                          <div className="productName">{product.Name}</div>
                          <div className="price">${String(product.Price)}</div>
                        </div>
                      </a>
                    );
                  })}
            </div>
            {/* <div className="productRow">
              <a href="/products/item" alt="item">
                <div className="item">
                  <div className="container">
                    <img src={owl} alt="itemImg"></img>
                    <div className="overlay">
                      <div className="text">View Item</div>
                    </div>
                  </div>
                  <div className="productName"></div>
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
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

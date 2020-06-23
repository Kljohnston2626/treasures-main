import React, { Component } from 'react';
import { db } from './config';


class getFeatured extends Component {
    
    var products = db.collection("products");
    var featured = products.where("Name", "==", "Product1").get();

    featured
      .update({
        Name: "test",
      })
}

export default getFeatured;

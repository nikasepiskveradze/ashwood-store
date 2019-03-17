import React, { Component } from "react";
import Card from "./Card";

class Products extends Component {
  state = {};
  render() {
    return (
      <div id="products" className="bg-light  py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-2">
              <ul className="list-group">
                <li className="list-group-item">All Products</li>
                <li className="list-group-item">Man</li>
                <li className="list-group-item">Woman</li>
                <li className="list-group-item">Accesories</li>
                <li className="list-group-item">Stickers</li>
              </ul>
            </div>
            <div className="col-md-9">
              <div className="row">
                <Card />
                <Card />
                <Card />

                <Card />
                <Card />
                <Card />

                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;

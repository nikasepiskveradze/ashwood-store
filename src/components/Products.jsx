import React, { Component } from "react";
import Card from "./Card";
import * as productService from "../services/productSevice";

class Products extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    const { data: products } = await productService.getAllProducts();
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    console.log(this.state.products);
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
                {products.map(product => (
                  <Card key={product._id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;

import React, { Component } from "react";
import Card from "./Card";
import Pagination from "./common/Pagination";
import * as productService from "../services/productSevice";
import { paginate } from "../utils/paginate";

class Products extends Component {
  state = {
    products: [],
    pageSize: 9,
    currentPage: 1
  };

  async componentDidMount() {
    const { data: products } = await productService.getAllProducts();
    this.setState({ products });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { products: allProducts, pageSize, currentPage } = this.state;

    const products = paginate(allProducts, currentPage, pageSize);

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

              <Pagination
                itemsCount={this.state.products.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;

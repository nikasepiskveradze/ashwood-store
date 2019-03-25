import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "./common/Pagination";
import * as productService from "../services/productSevice";
import { paginate } from "../utils/paginate";

class Dashboard extends Component {
  state = {
    products: [],
    pageSize: 5,
    currentPage: 1
  };

  async componentDidMount() {
    const { data: products } = await productService.getAllProducts();
    console.log(products);

    this.setState({ products });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { products: allProducts, pageSize, currentPage } = this.state;

    const products = paginate(allProducts, currentPage, pageSize);

    return (
      <div id="dashborad" className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h2 className="mb-3">Products Dashboard</h2>

              <Link to="/products/new" className="btn btn-primary mb-2">
                New Product
              </Link>

              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product._id}>
                      <td>
                        <Link to={`/products/edit/${product._id}`}>
                          {product.title}
                        </Link>
                      </td>
                      <td>{product.category.name}</td>
                      <td>{product.short}</td>
                      <td>{product.price}</td>
                      <td>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <Pagination
                itemsCount={allProducts.length}
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

export default Dashboard;

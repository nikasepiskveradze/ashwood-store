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
    const latestProducts = products.reverse();

    this.setState({ products: latestProducts });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleProductDelete = async product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products.splice(index, 1);

    await productService.removeProduct(product._id);

    this.setState({ products });
  };

  render() {
    const { products: allProducts, pageSize, currentPage } = this.state;

    const products = paginate(allProducts, currentPage, pageSize);

    return (
      <div id="dashborad" className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
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
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product._id}>
                      <td>{product.title}</td>
                      <td>{product.category.name}</td>
                      <td>{product.short}</td>
                      <td>{product.price}</td>
                      <td>
                        <Link to={`/products/edit/${product._id}`}>
                          <button className="btn btn-info">Edit</button>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => this.handleProductDelete(product)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
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

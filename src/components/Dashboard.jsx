import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "./common/Pagination";
import * as productService from "../services/productSevice";
import * as categoryService from "../services/categoryService";
import { paginate } from "../utils/paginate";

class Dashboard extends Component {
  state = {
    products: [],
    categories: [],
    category: { value: "" },
    pageSize: 5,
    currentPage: 1
  };

  async componentDidMount() {
    const { data: products } = await productService.getAllProducts();
    const { data: categories } = await categoryService.getProductCategories();

    const latestProducts = products.reverse();

    this.setState({ products: latestProducts, categories });
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

  handleCategory = e => {
    const category = { ...this.state.category };
    category.value = e.currentTarget.value;

    this.setState({ category });
  };

  handleDeleteCategory = async category => {
    const categories = [...this.state.categories];
    const index = categories.indexOf(category);
    categories.splice(index, 1);

    await categoryService.deleteCategory(category._id);

    this.setState({ categories });
  };

  handleSubmitCategory = async e => {
    e.preventDefault();
    const { data: category } = await categoryService.addCategory(
      this.state.category.value
    );

    const categories = [...this.state.categories, category];

    this.setState({ categories, category: { value: "" } });
  };

  render() {
    const {
      products: allProducts,
      categories,
      pageSize,
      currentPage
    } = this.state;

    const products = paginate(allProducts, currentPage, pageSize);

    return (
      <div id="dashborad" className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="mb-3">Products Dashboard</h2>

              <Link to="/products/new" className="btn btn-primary mb-2">
                New Product
              </Link>

              <div className="table-responsive">
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
              </div>

              <Pagination
                itemsCount={allProducts.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            </div>

            <div className="col-md-4">
              <h2>Add Category</h2>
              <form onSubmit={this.handleSubmitCategory}>
                <input
                  type="text"
                  placeholder="Enter Category"
                  className="form-control"
                  value={this.state.category.value}
                  onChange={this.handleCategory}
                />
              </form>

              <div className="list-group mt-3">
                {categories.map(category => (
                  <div
                    key={category._id}
                    className="list-group-item mb-2 d-flex justify-content-between align-items-center"
                  >
                    {category.name}{" "}
                    <div
                      onClick={() => this.handleDeleteCategory(category)}
                      className="fa fa-remove"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

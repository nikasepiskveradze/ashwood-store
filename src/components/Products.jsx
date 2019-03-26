import React, { Component } from "react";
import Card from "./Card";
import Pagination from "./common/Pagination";
import ListGroup from "./common/ListGroup";
import Footer from "./Footer";
import * as productService from "../services/productSevice";
import * as categoryService from "../services/categoryService";
import { paginate } from "../utils/paginate";

class Products extends Component {
  state = {
    products: [],
    categories: [],
    pageSize: 9,
    currentPage: 1
  };

  async componentDidMount() {
    const { data: categories } = await categoryService.getProductCategories();
    const newCategories = [
      { _id: null, name: "All Categories" },
      ...categories
    ];

    const { data: products } = await productService.getAllProducts();
    const latestProducts = products.reverse();

    this.setState({ products: latestProducts, categories: newCategories });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleCategorySelect = category => {
    this.setState({ selectedCategory: category, currentPage: 1 });
  };

  render() {
    const {
      products: allProducts,
      pageSize,
      currentPage,
      categories,
      selectedCategory
    } = this.state;

    const filtered =
      selectedCategory && selectedCategory._id
        ? allProducts.filter(m => m.category._id === selectedCategory._id)
        : allProducts;

    const products = paginate(filtered, currentPage, pageSize);

    return (
      <React.Fragment>
        <div id="products" className="bg-light  py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-3 mb-2">
                <ListGroup
                  items={categories}
                  selectedItem={selectedCategory}
                  onItemSelect={this.handleCategorySelect}
                />
              </div>

              <div className="col-md-9">
                <div className="row">
                  {products.map(product => (
                    <Card
                      key={product._id}
                      product={product}
                      onClick={() => this.props.onClick(product)}
                    />
                  ))}
                </div>

                <Pagination
                  itemsCount={filtered.length}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={this.handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Products;

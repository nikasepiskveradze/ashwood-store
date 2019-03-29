import React, { Component } from "react";
import Card from "./Card";
import Pagination from "./common/Pagination";
import ListGroup from "./common/ListGroup";
import SearchBox from "./common/SearchBox";
import Footer from "./Footer";
import * as productService from "../services/productSevice";
import * as categoryService from "../services/categoryService";
import { paginate } from "../utils/paginate";

class Products extends Component {
  state = {
    products: [],
    categories: [],
    pageSize: 9,
    currentPage: 1,
    selectedCategory: null,
    searchQuery: ""
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
    this.setState({
      selectedCategory: category,
      searchQuery: "",
      currentPage: 1
    });
  };

  handleSearch = query => {
    this.setState({
      searchQuery: query,
      selectedCategory: null,
      currentPage: 1
    });
  };

  render() {
    const {
      products: allProducts,
      pageSize,
      currentPage,
      categories,
      selectedCategory,
      searchQuery
    } = this.state;

    console.log(allProducts);

    let filtered = allProducts;
    if (searchQuery) {
      filtered = allProducts.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedCategory && selectedCategory._id) {
      filtered = allProducts.filter(
        m => m.category._id === selectedCategory._id
      );
    }

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
                <SearchBox value={searchQuery} onChange={this.handleSearch} />
                <div className="card-columns">
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

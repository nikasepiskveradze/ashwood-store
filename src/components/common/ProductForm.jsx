import React from "react";
import Joi from "joi-browser";
import Form from "./Form";
import * as productService from "../../services/productSevice";
import * as categoryService from "../../services/categoryService";

class ProductForm extends Form {
  state = {
    data: {
      title: "",
      short: "",
      long: "",
      price: "",
      category: ""
    },
    categories: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    short: Joi.string()
      .required()
      .label("Short Description"),
    long: Joi.string()
      .required()
      .label("Long Description"),
    price: Joi.string()
      .required()
      .label("Price"),
    category: Joi.string()
      .required()
      .label("Category")
  };

  async componentDidMount() {
    const { data: categories } = await categoryService.getProductCategories();
    this.setState({ categories });

    const productId = this.props.match.url.split("/");
    if (productId[2] === "new") return;

    const { data: product } = await productService.getProduct(productId[3]);
    this.setState({ data: this.mapToViewModel(product) });
  }

  mapToViewModel(product) {
    return {
      _id: product._id,
      title: product.title,
      short: product.short,
      long: product.long,
      price: product.price,
      category: product.category._id
    };
  }

  doSubmit = async () => {
    const sendData = { ...this.state.data };
    sendData["image"] = this.state.file;

    await productService.saveProduct(sendData);

    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div>
        <div className="container">
          <h2>Product Form</h2>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("title", "Title")}
            {this.renderSelect("category", "Category", this.state.categories)}
            {this.renderInput("short", "Short Description")}
            {this.renderInput("long", "Long Description")}
            <input
              type="file"
              name="image"
              onChange={e => this.setState({ file: e.target.files[0] })}
            />
            {this.renderInput("price", "Price", "number")}
            {this.renderButton("Save")}
          </form>
        </div>
      </div>
    );
  }
}

export default ProductForm;

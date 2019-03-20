import React, { Component } from "react";
import Counter from "./common/Counter";
import * as productService from "../services/productSevice";

class ProductDetails extends Component {
  state = {
    product: { title: "", short: "", long: "", image: "", price: "" }
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const { data: product } = await productService.getProduct(id);

    console.log(product);
    this.setState({ product });
  }

  render() {
    const { title, short, long, image, price } = this.state.product;
    return (
      <div id="productDetail" className="bg-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={`http://localhost:5000/${image}`}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h2 className="text-black">{title}</h2>
              <p className="text-muted mb-4">{long}</p>

              <p>
                <strong className="text-primary h4">{price}$</strong>
              </p>

              <Counter />

              <p>
                <button
                  onClick={() => this.props.onClick(this.state.product)}
                  className="add-to-card"
                >
                  Add To Card
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;

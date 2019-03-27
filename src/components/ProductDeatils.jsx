import React, { Component } from "react";
import * as productService from "../services/productSevice";

class ProductDetails extends Component {
  state = {
    product: { title: "", short: "", long: "", image: "", price: "" }
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const { data: product } = await productService.getProduct(id);

    this.setState({ product });
  }

  render() {
    const { title, long, image, price } = this.state.product;
    return (
      <div id="productDetail" className=" py-4">
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
              <h2
                className="text-black mb-3"
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                {title}
              </h2>

              <div className="text-muted mb-1">Description: </div>
              <div className="text-muted mb-4">{long}</div>

              <p>
                <strong className="text-primary h4">Price: {price}$</strong>
              </p>

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

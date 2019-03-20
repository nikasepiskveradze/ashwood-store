import React, { Component } from "react";
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

              <div className="mb-5">
                <div className="input-group mb-3" style={{ maxWidth: 120 }}>
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-primary ">-</button>
                  </div>

                  <input
                    type="text"
                    className="form-control text-center"
                    value="1"
                    placeholder=""
                  />

                  <div class="input-group-append">
                    <button className="btn btn-outline-primary">+</button>
                  </div>
                </div>
              </div>

              <p>
                <button className="add-to-card">Add To Card</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;

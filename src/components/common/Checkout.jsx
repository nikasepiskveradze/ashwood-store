import React from "react";
import Joi from "joi-browser";
import Form from "./Form";
import * as cartService from "../../services/cartService";
import * as checkoutService from "../../services/checkoutService";

class Checkout extends Form {
  state = {
    cart: [],
    data: {
      firstname: "",
      lastname: "",
      country: "",
      address: "",
      city: "",
      phone: "",
      email: ""
    },
    errors: {}
  };

  schema = {
    firstname: Joi.string()
      .required()
      .label("Firstname"),
    lastname: Joi.string()
      .required()
      .label("Lastname"),
    country: Joi.string()
      .required()
      .label("Country"),
    address: Joi.string()
      .required()
      .label("Address"),
    city: Joi.string()
      .required()
      .label("City"),
    phone: Joi.string()
      .required()
      .label("Phone"),
    email: Joi.string()
      .required()
      .email()
      .label("Email")
  };

  componentDidMount() {
    const cart = cartService.getCartsFromStorage();
    this.setState({ cart });
  }

  doSubmit = async () => {
    try {
      const { data: customer, cart } = this.state;
      const order = await checkoutService.checkout(customer, cart);

      if (!order) {
        window.location = "/login";
        return;
      }

      cartService.removeCartsFromStorage();
      window.location = "/thanks";
    } catch (ex) {
      // console.log("err");
      // if (ex.response && ex.response.status === 400) {
      //   const errors = { ...this.state.errors };
      //   errors.email = ex.response.data;
      //   this.setState({ errors });
      // }
    }
  };

  render() {
    return (
      <div id="checkout" className="py-4">
        <div className="container">
          <div className="text-center">
            <h2>Checkout</h2>
            <p className="lead">
              Please fill all the field to successfully purchase your products.
            </p>
          </div>

          <div className="row">
            <div className="col-md-6 order-sm-2 order-md-1">
              <h2>Checkout Info</h2>
              <form onSubmit={this.handleSubmit}>
                {this.renderInput("firstname", "Firstname")}
                {this.renderInput("lastname", "Lastname")}
                {this.renderInput("country", "Country")}
                {this.renderInput("address", "Address")}
                {this.renderInput("city", "City")}
                {this.renderInput("phone", "Phone Number")}
                {this.renderInput("email", "Email Address")}
                {this.renderButton("Place Order")}
              </form>
            </div>
            <div className="col-md-6 order-sm-1 order-md-2">
              <h2 className="py-3">Review Order</h2>
              <div className="list-group">
                {this.state.cart.map(cart => (
                  <div
                    key={cart._id}
                    className="list-group-item d-flex justify-content-between"
                  >
                    <div>
                      <div>Product: {cart.title}</div>
                      <div>Quantity: {cart.quantity}</div>
                    </div>
                    <div>{cart.price}$</div>
                  </div>
                ))}
              </div>
              <h2 className="text-right mt-3">Total: {this.props.total}$</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;

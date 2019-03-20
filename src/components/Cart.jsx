import React, { Component } from "react";
import images from "../images/cloth_1.jpg";
import Counter from "./common/Counter";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div id="cart" className="py-4">
        <div className="container">
          <table
            className="table table-bordered text-center"
            style={{ height: 200 }}
          >
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <td className="align-middle">
                <img src={images} alt="" style={{ width: 200 }} />
              </td>
              <td>
                <h2 className="h5 align-middle">Top Up T-Shirt</h2>
              </td>
              <td>$49.00</td>
              <td>
                <Counter />
              </td>
              <td>$49.00</td>
              <td>
                <button className="btn btn-primary">X</button>
              </td>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Cart;

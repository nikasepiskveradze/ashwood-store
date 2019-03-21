import React, { Component } from "react";
import Counter from "./common/Counter";
import { Link } from "react-router-dom";

class Cart extends Component {
  render() {
    const { cart } = this.props;

    if (cart.length === 0) {
      return (
        <div className="py-5 bg-light" id="no-items">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto text-center">
                <div className="py-3">
                  <i
                    className="fa fa-shopping-cart"
                    style={{ fontSize: 120 }}
                  />
                </div>

                <h2 className="mb-3">YOUR SHOPPING CART IS EMPTY</h2>

                <Link to="/products" className="btn btn-primary px-4">
                  RETURN TO SHOP
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div id="cart" className="py-4">
        <div className="container">
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item._id}>
                  <td>
                    <img
                      src={`http://localhost:5000/${item.image}`}
                      alt=""
                      style={{ width: 200 }}
                    />
                  </td>
                  <td style={{ paddingTop: 70 }}>
                    <h2 className="h5">{item.short}</h2>
                  </td>
                  <td style={{ paddingTop: 70 }}>{item.price}$</td>
                  <td style={{ paddingTop: 70 }}>
                    <Counter
                      onHandleIncrement={() =>
                        this.props.onHandleIncrement(item)
                      }
                      onHandleDecrement={() =>
                        this.props.onHandleDecrement(item)
                      }
                      quantity={item.quantity}
                    />
                  </td>
                  <td style={{ paddingTop: 70 }}>
                    {item.quantity * item.price}$
                  </td>
                  <td style={{ paddingTop: 70 }}>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.props.onHandleRemove(item)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row py-3">
            <div className="col-md-4 offset-8 text-right">
              <h2 className="pb-2">Total: {this.props.total}$</h2>
              <button className="btn btn-primary text-right">
                Process Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;

import React, { Component } from "react";
import Counter from "./common/Counter";

class Cart extends Component {
  render() {
    const { cart } = this.props;
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
                <th>Total</th>
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
                  <td style={{ paddingTop: 70 }}>{item.price}</td>
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
                    {item.quantity * item.price}
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

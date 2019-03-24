import React, { Component } from "react";

class Counter extends Component {
  handleChange = () => {};

  render() {
    return (
      <div className="mb-5">
        <div
          className="input-group mb-3"
          style={{ maxWidth: 120, margin: "auto" }}
        >
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-primary"
              onClick={this.props.onHandleDecrement}
            >
              -
            </button>
          </div>

          <input
            type="text"
            className="form-control text-center"
            value={this.props.quantity}
            onChange={this.handleChange}
          />

          <div className="input-group-append">
            <button
              className="btn btn-outline-primary"
              onClick={this.props.onHandleIncrement}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;

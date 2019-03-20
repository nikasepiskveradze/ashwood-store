import React, { Component } from "react";

class Counter extends Component {
  state = {
    total: 0
  };

  handleChange = () => {};

  handleDecrement = () => {
    const total = this.state.total - 1;
    if (total < 0) return;
    this.setState({ total });
  };

  handleIncrement = () => {
    const total = this.state.total + 1;
    this.setState({ total });
  };

  render() {
    return (
      <div className="mb-5">
        <div className="input-group mb-3" style={{ maxWidth: 120 }}>
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-primary"
              onClick={this.handleDecrement}
            >
              -
            </button>
          </div>

          <input
            type="text"
            className="form-control text-center"
            value={this.state.total}
            onChange={this.handleChange}
          />

          <div className="input-group-append">
            <button
              className="btn btn-outline-primary"
              onClick={this.handleIncrement}
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

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    const { _id, title, short, image, price } = this.props.product;
    return (
      // <div className="col-sm-6 col-lg-4 mb-3">
      <div className="card">
        <img
          className="card-img-top"
          src={`https://cherry-pie-80014.herokuapp.com/${image}`}
          alt=""
        />

        <div className="card-body text-center">
          <h5 className="card-title">
            <Link to={`/products/${_id}`}>{title}</Link>
          </h5>
          <p className="card-text">{short}</p>
          <p className="card-text">{price}$</p>
          <p>
            <button onClick={this.props.onClick}>Add To Card</button>
          </p>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default Card;

import React, { Component } from "react";
import image from "../images/shoe_1.jpg";

class Card extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-4 mb-3">
        <div className="card">
          <img className="card-img-top" src={image} alt="" />

          <div className="card-body text-center">
            <h5 className="card-title">
              <a href="#">Show</a>
            </h5>
            <p className="card-text">Finding perfect t-shirt</p>
            <p className="card-text">50$</p>
            <p>
              <button>Add To Card</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

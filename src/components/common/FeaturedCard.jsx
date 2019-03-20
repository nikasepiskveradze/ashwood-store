import React from "react";
import { Link } from "react-router-dom";

const FeaturedCard = ({ itemInfo }) => {
  const { _id, title, image, short, price } = itemInfo;
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img
          className="card-img-top"
          src={`http://localhost:5000/${image}`}
          alt=""
        />

        <div className="card-body text-center">
          <h5 className="card-title">
            <Link to={`/products/${_id}`}>{title}</Link>
          </h5>
          <p className="card-text">{short}</p>
          <p className="card-text">{price}$</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;

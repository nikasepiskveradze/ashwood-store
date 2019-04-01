import React from "react";
import { Link } from "react-router-dom";

const FeaturedCard = ({ itemInfo }) => {
  const { _id, title, image, short, price } = itemInfo;
  return (
    <div className="card mx-1 my-3" style={{ width: 350, height: 450 }}>
      <img
        className="card-img-top"
        src={`https://cherry-pie-80014.herokuapp.com/${image}`}
        alt=""
        height="300"
      />

      <div className="card-body text-center">
        <h5 className="card-title">
          <Link to={`/products/${_id}`}>{title}</Link>
        </h5>
        <p className="card-text">{short}</p>
        <p className="card-text">{price}$</p>
      </div>
    </div>
  );
};

export default FeaturedCard;

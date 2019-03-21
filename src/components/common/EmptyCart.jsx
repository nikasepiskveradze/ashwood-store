import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="py-5 bg-light" id="no-items">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto text-center">
            <div className="py-3">
              <i className="fa fa-shopping-cart" style={{ fontSize: 120 }} />
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
};

export default EmptyCart;

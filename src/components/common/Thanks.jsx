import React from "react";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <div id="thanks" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <span
              className="fa fa-check-circle text-success"
              style={{ fontSize: 70 }}
            />
            <h2 class="display-3 text-black">Thank you!</h2>
            <p class="lead mb-5">You order was successfuly completed.</p>
            <p>
              <Link to="/products" class="btn btn-primary px-4 py-2">
                Back to shop
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thanks;

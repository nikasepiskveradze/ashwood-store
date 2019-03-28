import React from "react";
import { Link } from "react-router-dom";

const Showcase = () => {
  return (
    <section id="showcase">
      <div className="showcase-overlay">
        <div className="container">
          <div className="showcase-content text-left text-sm-center">
            <h1 className="display-4 font-weight-bold">
              WEAR YOUR UNIVERSITY WITH YOU
            </h1>
            <p className="mt-3 text-center">
              Ashwood University's online shop.
            </p>

            {/* <div className="w-75 m-auto">
              <Link to="/products" className="btn btn-primary mt-5 py-2 px-5 ">
                SHOP NOW
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

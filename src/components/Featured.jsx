import React from "react";
import image from "../images/cloth_1.jpg";

const Featured = () => {
  return (
    <section id="featured" className="bg-light py-4">
      <div className="container">
        <h2 className="text-center py-3">Featured Products</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <img className="card-img-top" src={image} alt="" />

              <div className="card-body text-center">
                <h5 className="card-title">
                  <a href="#">Tank Top</a>
                </h5>
                <p className="card-text">Finding perfect t-shirt</p>
                <p className="card-text">50$</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card">
              <img className="card-img-top" src={image} alt="" />

              <div className="card-body text-center">
                <h5 className="card-title">
                  <a href="#">Tank Top</a>
                </h5>
                <p className="card-text">Finding perfect t-shirt</p>
                <p className="card-text">50$</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card">
              <img className="card-img-top" src={image} alt="" />

              <div className="card-body text-center">
                <h5 className="card-title">
                  <a href="#">Tank Top</a>
                </h5>
                <p className="card-text">Finding perfect t-shirt</p>
                <p className="card-text">50$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;

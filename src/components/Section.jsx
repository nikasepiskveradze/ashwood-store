import React from "react";

const Section = () => {
  return (
    <div id="section-1" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex">
            <div className="icon">
              <i className="fa fa-truck" />
            </div>
            <div className="text">
              <h2 className="text-uppercase">Free Shipping</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>

          <div className="col-md-4 d-flex">
            <div className="icon">
              <i className="fa fa-refresh" />
            </div>
            <div className="text">
              <h2 className="text-uppercase">Free Returns</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>

          <div className="col-md-4 d-flex">
            <div className="icon">
              <i className="fa fa-question-circle" />
            </div>
            <div className="text">
              <h2 className="text-uppercase">Customer Support</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;

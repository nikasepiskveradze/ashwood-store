import React from "react";

const Section = () => {
  return (
    <div id="section-1" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex mb-2">
            <div className="icon">
              <i className="fa fa-truck" />
            </div>
            <div className="text">
              <h2 className="text-uppercase">Free Shipping</h2>
              <p>
                We offer free shipping around the city or any place where you
                want. also it your shipping is very fast and reliable.
              </p>
            </div>
          </div>

          <div className="col-md-4 d-flex mb-2">
            <div className="icon">
              <i className="fa fa-refresh" />
            </div>
            <div className="text">
              <h2 className="text-uppercase">Free Returns</h2>
              <p>
                Your service is guaranty you to return any products if something
                is not good, we can return products without any cost.
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
                We can give you a nice and fast customer support, any time of
                day It is very simple and good for people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;

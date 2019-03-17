import React from "react";

const Showcase = () => {
  return (
    <section id="showcase">
      <div className="showcase-overlay">
        <div className="container">
          <div className="showcase-content text-left text-sm-center">
            <h1 className="display-4 font-weight-bold">
              WEAR YOUR UNIVERSITY WITH YOU
            </h1>
            <p className="mt-3 d-none d-sm-block">
              Ashwood University's online shop.
            </p>

            <button className="btn btn-primary mt-5 py-2 px-5">BUY NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

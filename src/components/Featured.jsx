import React from "react";
import FeaturedCard from "./common/FeaturedCard";

const Featured = props => {
  return (
    <section id="featured" className="bg-light py-4">
      <div className="container">
        <h2 className="text-center py-3">Newest Products</h2>
        <div className="row">
          {props.featured.map(item => (
            <FeaturedCard key={item._id} itemInfo={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;

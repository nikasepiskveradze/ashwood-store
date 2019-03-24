import React from "react";
import FeaturedCard from "./common/FeaturedCard";
import Slider from "react-slick";

const Featured = props => {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    autoplay: true,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000
  };

  return (
    <section id="featured" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center py-3">Newest Products</h2>
        <div>
          <Slider {...settings}>
            {props.featured.map(item => (
              <FeaturedCard key={item._id} itemInfo={item} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Featured;

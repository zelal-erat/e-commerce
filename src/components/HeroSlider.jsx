import React from "react";
import Slider from "react-slick";

// Slick Carousel stil dosyalarını dahil et
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="my-16">
      <Slider {...settings}>
        <div>
          <img
            src="https://images.placeholders.dev/350x150"
            alt="Slide 1"
            className="w-full h-auto"
          />
        </div>
        <div>
          <img
            src="https://images.placeholders.dev/350x150"
            alt="Slide 2"
            className="w-full h-auto"
          />
        </div>
        <div>
          <img
            src="https://images.placeholders.dev/350x150"
            alt="Slide 3"
            className="w-full h-auto"
          />
        </div>
      </Slider>
    </div>
  );
}

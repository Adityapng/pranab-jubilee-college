"use client";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { initializeCarousalEventListener } from "./imageCarousalNavigator";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const carousalimage = {
  image1: "/assets/elements/ImageCarausal/1.jpeg",
  image2: "/assets/elements/ImageCarausal/2.jpeg",
  image3: "/assets/elements/ImageCarausal/4.jpeg",
  image4: "/assets/elements/ImageCarausal/5.jpeg",
  image5: "/assets/elements/ImageCarausal/6.jpeg",
};

const ImageCarausal = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const pause = () => {
    sliderRef.slickPause();
  };
  const play = () => {
    sliderRef.slickPlay();
  };

  useEffect(() => {
    initializeCarousalEventListener();
  }, []);

  return (
    <div className="w-full min-[200px]:max-[1180px]:mt-0">
      <div
        className="relative overflow-hidden rounded-3xl slider-container"
        id="slider"
      >
        <div className="flex z-[999] absolute w-full h-full min-[200px]:max-[1180px]:hidden">
          <div
            className="w-full h-full "
            onMouseEnter={pause}
            onMouseLeave={play}
            onClick={previous}
          ></div>
          <div
            className="w-full h-full "
            onMouseEnter={pause}
            onMouseLeave={play}
            onClick={next}
          ></div>
        </div>
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          <div className="w-full ">
            <img
              className="w-full h-[600px] min-[481px]:max-[1180px]:h-[500px] min-[200px]:max-[480px]:h-[250px] object-cover rounded-3xl"
              src={carousalimage.image1}
              alt="Caraousal"
            />
          </div>
          <div className="w-full">
            <img
              className="w-full h-[600px] min-[481px]:max-[1180px]:h-[500px] min-[200px]:max-[480px]:h-[250px] object-cover rounded-3xl"
              src={carousalimage.image2}
              alt="Caraousal"
            />
          </div>
          <div className="w-full">
            <img
              className="w-full h-[600px] min-[481px]:max-[1180px]:h-[500px] min-[200px]:max-[480px]:h-[250px] object-cover rounded-3xl"
              src={carousalimage.image3}
              alt="Caraousal"
            />
          </div>
          <div className="w-full">
            <img
              className="w-full h-[600px] min-[481px]:max-[1180px]:h-[500px] min-[200px]:max-[480px]:h-[250px] object-cover rounded-3xl"
              src={carousalimage.image4}
              alt="Caraousal"
            />
          </div>
          <div className="w-full">
            <img
              className="w-full h-[600px] min-[481px]:max-[1180px]:h-[500px] min-[200px]:max-[480px]:h-[250px] object-cover rounded-3xl"
              src={carousalimage.image5}
              alt="Caraousal"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarausal;

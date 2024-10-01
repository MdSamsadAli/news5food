import Slider from "react-slick";
import { products } from "../assets/data";
import { BiComment, BiTime } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Title from "../common/Title";
import adslot from "../assets/images/ad-slot-2.webp";

const FastFood = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const slider = useRef(null);

  const beforeChange = (prev, next) => {
    setSliderIndex(Math.floor(next));
  };
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: beforeChange,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const next = () => {
    slider.current.slickNext();
  };

  const previous = () => {
    slider.current.slickPrev();
  };
  return (
    <>
      <div className="w-10/12 m-auto relative">
        <div className="w-11/12 m-auto pt-10 pb-4">
          <Title title={"Fast Food"} />
        </div>
        {sliderIndex > 0 && (
          <button
            className="text-white absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-red-500 w-10 h-10 grid items-center place-content-center rounded-full shadow-lg"
            onClick={previous}
          >
            <IoIosArrowBack />
          </button>
        )}

        {sliderIndex < products.length - Math.ceil(settings.slidesToShow) && (
          <button
            className=" text-white absolute top-1/2 right-0 z-10 transform -translate-y-1/2 bg-red-500 w-10 h-10 grid items-center place-content-center rounded-full shadow-lg"
            onClick={next}
          >
            <IoIosArrowForward />
          </button>
        )}
        <Slider ref={slider} {...settings}>
          {products.map((val, key) => (
            <div className="py-4" key={key}>
              <div className="border rounded-xl overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img
                    src={val.img}
                    alt="img"
                    className="rounded-xl w-full h-full hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                </div>

                <div className="p-5">
                  <p className="text-sm text-rose-600 font-semibold capitalize">
                    {val.category}
                  </p>
                  <p className="text-xl text-gray-900 font-semibold capitalize limit-2">
                    {val.title}
                  </p>
                  <div className="text-sm flex gap-4 text-gray-950 mt-2">
                    <p className="flex items-center gpa-1">
                      <BiTime />
                      {val.time}
                    </p>
                    <p className="flex items-center gpa-1">
                      <BiComment />
                      {val.comments}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex justify-center text-center mt-4 group">
          <button className="flex gap-3 items-center py-3 px-10 text-white font-semibold bg-rose-500 rounded-xl transition-all ease-in-out duration-300 group-hover:gap-5">
            More
            <span className="hidden group-hover:inline">
              <IoIosArrowForward />
            </span>
          </button>
        </div>

        <div className="overflow-hidden mt-10 rounded-xl">
          <img
            src={adslot}
            alt="adimg"
            className="w-full h-40 lg:h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default FastFood;

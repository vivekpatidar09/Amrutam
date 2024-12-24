import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerStories: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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

  const reviews = [
    {
      title: "Consulted for Skin",
      name: "Sophie Moore",
      location: "Chennai",
      date: "17/02/24",
      rating: 5,
      quote: "One of a kind service",
      description:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
      bgColor: "bg-purple-100",
    },
    {
      title: "Consulted for Hair",
      name: "Sophie Moore",
      location: "Mumbai",
      date: "17/02/24",
      rating: 5,
      quote: "One of a kind service",
      description:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
      bgColor: "bg-green-100",
    },
    {
      title: "Consulted for Hair",
      name: "Sophie Moore",
      location: "Chennai",
      date: "17/02/24",
      rating: 5,
      quote: "One of a kind service",
      description:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
      bgColor: "bg-green-100",
    },
  ];

  return (
    <>
      <div className=" py-12 lg:px-12 bg-[#FFF7E2]">
        <h1 className="text-[38px] near1024:text-[55px] near1024:w-[48rem] near1024:border-none near1024:leading-[4.5rem]  sm:text-[50px] sm:mb-10 sm:w-[30rem] near360:text-[30px] near340:text-[30px]  lg:text-4xl text-center lg:border-b-4 lg:w-fit w-[20rem]  mx-auto lg:border-[#C3D0C4] font-bold text-[#3A643B]">
          Stories from our valued customers
        </h1>
        <div className="slider-container near360:p-3 p-3 pl-7 pr-0 lg:p-2 ">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className="rounded-2xl near1024:max-w-[26rem] near1024:m-1 near430:mx-[12px] mx-[45px] sm:mx-0 near540:max-w-[24rem] near340:max-w-[19rem] near340:mx-[1%] near360:mt-4 near360:mx-[11%] near360:max-w-[18rem] m-5 near360:m-0 lg:m-5 shadow-lg bg-white h-[26rem] lg:h-auto near912:max-w-[26rem] max-w-[22rem] lg:max-w-[22rem] "
              >
                <div
                  className={`lg:px-4 near1024:text-[20px] near1024:p-6 lg:py-3 px-6 py-5 rounded-t-lg text-[20px] lg:text-sm font-medium ${review.bgColor} text-black`}
                >
                  {review.title}
                </div>
                <div className="p-6 pt-3">
                  <div className="flex items-center mt-5 lg:mt-4">
                    <div className="w-12 h-12 rounded-full bg-[#515151]"></div>
                    <div className="ml-4">
                      <h3 className="text-lg  near1024:text-[26px] font-semibold">{review.name}</h3>
                      <p className="text-sm  near1024:text-[22px] text-gray-600">{review.location}</p>
                    </div>
                    <p className="ml-auto text-sm text-gray-600">
                      {review.date}
                    </p>
                  </div>
                  <div className="flex  items-center mt-8 lg:mt-1">
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <span
                        key={starIndex}
                        className="text-[#EEDE4D]  near1024:text-[38px] text-[30px] "
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <h4 className="mt-1 text-[23px] near1024:text-[30px] near1024:my-6 lg:text-xl font-semibold lg:font-bold">
                    "{review.quote}"
                  </h4>
                  <p className="mt-2 near1024:text-[25px] text-[19px] lg:text-[16px] text-gray-700">
                    {review.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CustomerStories;

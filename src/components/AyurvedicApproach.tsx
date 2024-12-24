import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AyurvedicApproach() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1266,
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
          slidesToShow: 3,
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

  const cardData = [
    {
      num: "1",
      head: "Make Appointment",
      para: "You must make an appointment in advance, to choose the service and date.",
    },
    {
      num: "2",
      head: "Consultations",
      para: "The next stage involves a thorough consultation with an Ayurveda practitioner.",
    },
    {
      num: "3",
      head: "Treatment Planning",
      para: "The Ayurvedic practitioner creates a personalized treatment plan for you",
    },
    {
      num: "4",
      head: "Maintenance",
      para: "These visits allow for assessment of progress, adjustments to the treatment.",
    },
  ];

  return (
    <div className="bg-white py-12 near1024:px-12 px-6 my-4 mb-6 lg:px-16">
      <div className="text-center mb-12">
        <h1 className="text-[38px]  near1024:text-[55px] near1024:w-[48rem] near1024:border-none near1024:leading-[4.5rem]  sm:text-[50px] sm:mb-10 sm:w-[38rem] near340:text-[30px] near340:max-w-[17rem] near360:text-[30px] near360:max-w-[17rem] lg:text-4xl lg:border-b-4 lg:w-fit w-[25rem]  mx-auto lg:border-[#C3D0C4] font-bold text-[#3A643B] mb-6">
          Our Ayurvedic Approach{" "}
        </h1>
        <p className="text-gray-600 near1024:text-[24px] near1024:w-[38rem] near1024:leading-[35px] sm:text-[24px] sm:w-[38rem] sm:leading-[35px] w-[19rem] lg:w-[35rem] text-base lg:text-base mx-auto">
          At Amrutam we follow a unique and personalized approach to healing.
          Our expert practitioners begin each treatment process by conducting a
          thorough analysis of the patient’s body type, medical history, and
          current health conditions.
        </p>
      </div>

      {/* Mobile Screen  */}
      <div className="slider-container xl:hidden ">
        <Slider {...settings}>
          {cardData.map((x, index) => (
            <div key={index} className="p-5">
              <div className="flex bg-[#FFF7E2] near1024:w-[17rem] near1024:mx-0 near540:m-auto lg:w-[24rem] near912:max-w-[24rem] sm:h-[23rem] max-w-[19rem] h-[17rem] mx-3 justify-center flex-col items-center text-center border-t-[6px] border-[#3A643B] shadow-lg rounded-2xl p-4">
                <span className="flex sm:w-24 sm:h-24 justify-center mb-4 items-center text-4xl font-semibold text-white border-[#3A643B] border rounded-full bg-[#3A643BA8] h-16 w-16 ">
                  {x.num}
                </span>
                <p className="text-lg font-bold sm:text-[25px] sm:my-6 text-[#3A643B] mb-2">
                  {x.head}
                </p>
                <p className="text-[14px] sm:text-[22px] sm:w-[16rem] w-[13rem] text-[#414141]">
                  {x.para}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="hidden xl:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Large Screen  */}
        {cardData.map((x, index) => (
          <div
            key={index}
            className="flex bg-[#FFF7E2] h-[17rem] justify-center flex-col items-center text-center border-t-[6px] border-[#3A643B] shadow-lg rounded-2xl p-4"
          >
            <span className="flex justify-center mb-4 items-center text-4xl font-semibold text-white border-[#3A643B] border rounded-full bg-[#3A643BA8] h-16 w-16 ">
              {x.num}
            </span>
            <p className="text-lg font-bold text-[#3A643B] mb-2">{x.head}</p>
            <p className="text-[14px] w-[13rem] text-[#414141]">{x.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AyurvedicApproach;

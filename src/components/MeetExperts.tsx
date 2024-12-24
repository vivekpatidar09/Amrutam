import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute  near1024:right-[-1rem] top-1/2 -right-20 h-9 w-14 flex justify-center items-center transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <img src="/rightIcon.png" alt="" />
    </div>
  );
};

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute near1024:left-[-1rem] top-1/2 -left-20 h-9 w-14 flex justify-center items-center transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <img src="/leftIcon.png" alt="" />
    </div>
  );
};

const MeetExperts: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false, // Add arrows: false here
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Add arrows: false here
        },
      },
    ],
  };

  const doctors = [
    {
      name: "Dr. Vaishali Sharma",
      specialization: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      expertise: "Skin Specialist",
      rating: 4.5,
      image:
        "https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aThGT6X-pORybQWcBeE7-oXEvJ-Ey41vxaJEbYC5x0RpIwPk2t7IX5tqrdWOh1Rk3EtS2yHGIAqX0uhWIST~4ldJjf1GGSB7VBkPf~1QFL7Pz7Bu2fZFVBSlwyhK48cMSoIftI3gnBTEFOgqIc08H~Y5uCui~aGYtAP0Efi05fxiJ-5xZu~NSFVvgF4oONJNUvOiokHqHn9Tc7G0FutOuULrqp1fq9FwJun3vQaKLKL2KgfPMzp1ruFxGw-ZAMH5Lih5lJewq5DyNXZ1Kt3mUn6p8eBWc1JeJudEXo0Z6qkAIC4l2WK15oaxThlkjFG8V4mnAg1-gk9uZRIIgUeqbA__",
    },
    {
      name: "Dr. Vaishali Sharma",
      specialization: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      expertise: "Skin Specialist",
      rating: 4.5,
      image:
        "https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aThGT6X-pORybQWcBeE7-oXEvJ-Ey41vxaJEbYC5x0RpIwPk2t7IX5tqrdWOh1Rk3EtS2yHGIAqX0uhWIST~4ldJjf1GGSB7VBkPf~1QFL7Pz7Bu2fZFVBSlwyhK48cMSoIftI3gnBTEFOgqIc08H~Y5uCui~aGYtAP0Efi05fxiJ-5xZu~NSFVvgF4oONJNUvOiokHqHn9Tc7G0FutOuULrqp1fq9FwJun3vQaKLKL2KgfPMzp1ruFxGw-ZAMH5Lih5lJewq5DyNXZ1Kt3mUn6p8eBWc1JeJudEXo0Z6qkAIC4l2WK15oaxThlkjFG8V4mnAg1-gk9uZRIIgUeqbA__",
    },
    {
      name: "Dr. Vaishali Sharma",
      specialization: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      expertise: "Skin Specialist",
      rating: 4.5,
      image:
        "https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aThGT6X-pORybQWcBeE7-oXEvJ-Ey41vxaJEbYC5x0RpIwPk2t7IX5tqrdWOh1Rk3EtS2yHGIAqX0uhWIST~4ldJjf1GGSB7VBkPf~1QFL7Pz7Bu2fZFVBSlwyhK48cMSoIftI3gnBTEFOgqIc08H~Y5uCui~aGYtAP0Efi05fxiJ-5xZu~NSFVvgF4oONJNUvOiokHqHn9Tc7G0FutOuULrqp1fq9FwJun3vQaKLKL2KgfPMzp1ruFxGw-ZAMH5Lih5lJewq5DyNXZ1Kt3mUn6p8eBWc1JeJudEXo0Z6qkAIC4l2WK15oaxThlkjFG8V4mnAg1-gk9uZRIIgUeqbA__",
    },
  ];

  return (
    <div className=" bg-white py-12 px-10 lg:px-12 ">
      <h1 className="text-[38px]  near1024:text-[55px] near1024:w-[48rem] near1024:border-none near1024:leading-[4.5rem] near1024:mb-12 near360:text-[30px] leading-[42px] my-10 mb-16 lg:mb-5  lg:text-4xl text-center lg:border-b-4 lg:w-fit w-[20rem]  mx-auto lg:border-[#C3D0C4] font-bold text-[#3A643B]">
        Meet Our Ayurveda Experts
      </h1>
      <div className="lg:p-28 near1024:p-0 mx-auto lg:py-5 ">
        <Slider {...settings}>
          {doctors.map((doctor, index) => (
            <div key={index} className="m-auto ">
              <div className="rounded-[40px] m-auto overflow-hidden bg-[#FFF7E2] max-w-[18rem] text-center">
                <div className="p-6 ">
                  <div className="relative">
                    <div className=" w-36 h-36 mx-auto rounded-full overflow-hidden shadow-md">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute w-16 bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#0B0B0B] to-[rgba(11,11,11,0.79)] text-white font-bold text-sm px-2 py-1 rounded-full shadow">
                        {doctor.rating}{" "}
                        <span className="text-[18px] text-[#EFDA3B] ">★</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{doctor.name}</h3>
                  <p className="text-sm text-[#838383]">
                    {doctor.specialization}
                  </p>
                  <div className="flex items-center justify-center mt-4 text-sm text-gray-700">
                    <span className="mr-2">
                      <img src="/Frame (2).png" alt="" />
                    </span>
                    {doctor.experience}
                  </div>
                  <div className="mt-4 flex items-center m-auto gap-2 px-1 w-[10rem] justify-center py-2 text-sm font-medium text-[#3A643B] bg-[#3A643B1F] rounded-full">
                    <img src="/Frame.png" alt="" />
                    {doctor.expertise}
                  </div>
                </div>
                <button className="w-full py-4 text-lg text-white bg-[#3A643B] shadow hover:bg-green-700">
                  Book a session
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <button className="lg:flex hidden  justify-center m-auto my-8 items-center gap-3 bg-[#DBE3DC63] border-[#3A643B] border rounded-md p-2 px-4 ">
        <span className="mb-1">Find more experts</span>
        <img src="/chevron-right.png" alt="" />
      </button>
    </div>
  );
};

export default MeetExperts;

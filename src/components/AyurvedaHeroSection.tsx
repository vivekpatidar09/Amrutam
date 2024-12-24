import React from "react";

interface MoreDetail {
  img: string;
  para: string;
}

const AyurvedaHeroSection: React.FC = () => {
  const moreDetails: MoreDetail[] = [
    {
      img: "/Frame 427319082.png",
      para: "Convenient Online & In-clinic Consultations",
    },
    {
      img: "/Frame 427319083.png",
      para: "Safe And Effective Treatment",
    },
    {
      img: "/Frame 427319084.png",
      para: "Experienced Ayurvedic Practitioners",
    },
    {
      img: "/Frame 427319085.png",
      para: "Personalized Treatment Plans & Guidance",
    },
  ];

  return (
    <div>
      <div className="relative h-[40rem] lg:h-[500px] flex flex-col justify-center lg:justify-start lg:flex-row items-center">
        {/* Background Image */}
        <img
          src="/Rectangle 3464754.png"
          alt="Background Overlay"
          className="absolute inset-0  hidden lg:block z-10 w-full h-full"
        />
        <img
          src="/banner.jpg"
          alt="Background"
          className="absolute inset-0 w-full hidden lg:block h-full object-cover z-0"
        />
        <img
          src="/Rectangle 3464762.png"
          alt="Background"
          className="absolute inset-0 w-full lg:hidden h-full object-cover z-0"
        />
        <img
          src="/overlayLayer.png"
          alt="Background"
          className="absolute inset-0 lg:hidden w-full h-full object-cover z-0"
        />

        {/* Text Content */}
        <div className="relative z-20 text-start text-white near1024:max-w-4xl max-w-3xl px-6 lg:px-12">
          {/* Subheading */}
          <p className="text-lg near1024:text-[30px] md:text-[28px]  lg:text-lg  text-gray-300 mb-2">
            Namaste, Welcome to Amrutam
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl my-6 lg:text-[34px] near1021:text-[40px] md:text-[40px] md:leading-[54px]  leading-[48px] lg:my-6 font-semibold ">
            Step into Holistic Healing with
            <span className="boredr border-b-[2px]"> Ayurveda</span> <br />
            Book Consultation With Certified Experts.
          </h1>

          {/* Description */}
          <p className="mt-4 text-base near1024:text-[24px] near1024:max-w-2xl near1024:leading-[30px] md:text-[26px] md:leading-[36px] lg:text-base -tracking-[1px] text-gray-300">
            Dive into the world of Ayurveda and experience personalized health
            solutions and holistic guidance from trusted Ayurvedic doctors
            anytime, anywhere.
          </p>

          {/* Call-to-Action Button */}
          <button className=" mt-12 lg:mt-8 lg:h-[50px] h-[60px] w-[250px] px-6 py-2 bg-[#3A643B] text-white text-base font-medium rounded-2xl hover:bg-green-700 transition">
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
      <div className="bg-[#FFF7E2] lg:p-4 flex flex-col lg:flex-row items-start lg:items-center justify-center ">
        <div className="flex items-center flex-col lg:flex-row gap-1 lg:gap-9 w-18">
          {moreDetails.map((x, index) => (
            <div
              key={index}
              className="flex items-center lg:items-center p-2 lg:p-0 border-b-2 border-[#E9E9E9] lg:border-none"
            >
              <img className="w-[100px] lg:w-[70px]" src={x.img} alt="" />
              <p className="w-[19rem] near912:text-[30px] near912:w-[50rem] overflow-hidden sm:w-[41rem] near360:w-[20rem] near340:text-[19px] near360:text-[19px] lg:w-[10rem] lg:text-[14px] lg:font-semibold font-bold text-[22px] text-[#3A643B] ">
                {x.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AyurvedaHeroSection;

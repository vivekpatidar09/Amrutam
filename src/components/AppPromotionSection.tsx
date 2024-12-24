import React from "react";

const AppPromotionSection: React.FC = () => {
  return (
    <section className="bg-[#FFF7E2] py-12 px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="lg:w-1/2  text-center lg:text-start ">
        <h1 className="text-[#3A643B] sm:text-[50px] sm:mb-14 sm:w-[41rem] lg:text-[40px] lg:mb-0 text-3xl sm:text-4xl font-bold">
          Amrutam Home App
        </h1>
        <p className="text-[#676767]  sm:text-[24px] sm:w-[38rem] lg:text-base sm:leading-[35px] w-[19rem] mx-auto lg:mx-0 lg:w-auto my-6 text-base">
          The Amrutam Home App is your one-stop app for all things Ayurveda!
          Apart from mimicking the significant characteristics of our website,
          this app offers a wide range of additional features.
        </p>
        <div>
          <div className="lg:w-1/2 lg:hidden mt-12 lg:mt-0 relative">
            <img
              src="/iPhone 13 (1).png"
              alt="App Mockup"
              className="relative z-10 w-[34rem] h-auto"
            />
          </div>
          <p className="text-black sm:text-[41px] sm:w-[35rem] lg:mb-12 lg:my-0 text:[23px] lg:text-[20px] w-[19rem] text-center lg:text-start mx-auto mt-12 mb-12 lg:w-auto lg:text-2xl font-semibold">
            Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across
            The Globe
          </p>
          <h3 className="text-black text-[33px] lg:text-2xl mb-6 font-bold">
            Get The App Now
          </h3>
          {/* Store Buttons */}
          <div className="flex flex-col lg:flex-row lg:space-x-4">
            <img
              src="/image 67.png"
              alt="Get it on Google Play"
              className="lg:w-44 sm:w-[27rem] w-[20rem] my-4 m-auto lg:m-0 h-auto cursor-pointer"
            />
            <img
              src="/image 68.png"
              alt="Download on the App Store"
              className="lg:w-44 sm:w-[27rem] w-[20rem] my-4 m-auto lg:m-0 h-auto cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 lg:block hidden mt-12 lg:mt-0 relative">
        <img
          src="/Group 39489.png"
          alt="App Mockup"
          className="relative z-10 sm:w-[43rem] w-[34rem] h-auto"
        />
      </div>
    </section>
  );
};

export default AppPromotionSection;

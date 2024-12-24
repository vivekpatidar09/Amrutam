import React from "react";

const FooterSection: React.FC = () => {
  const icons = [
    {
      icon: "/facebook.png",
    },
    { icon: "/twitter.png" },
    { icon: "/yt.png" },
    { icon: "/twitter.png" },
    { icon: "/linkedin.png" },
    { icon: "/pinterest.png" },
  ];

  return (
    <div className="bg-[#3A643B2E]  pb-40 lg:p-24 pt-14 p-6 flex flex-col lg:grid lg:grid-cols-3 lg:gap-12">
      {/* Get in Touch Section */}
      <div className="lg:text-base text-[20px]">
        <h4 className=" lg:text-lg text-[23px] sm:text-[37px]  mb-4 font-bold text-[#3A643B]">
          Get in Touch
        </h4>
        <p className="text-[#000000] mb-2">support@amrutam.co.in</p>
        <p className="text-[#000000] my-4 lg:mb-2">
          Amrutam Pharmaceuticals Pvt Ltd., Chitragupt Ganj, Nai Sadak, Lashkar,
          Gwalior - 474001
        </p>
        <p className="text-[#000] mb-4">+91 9713171999</p>
        <div className="flex space-x-2 my-8 lg:mb-4">
          {icons.map((x, index) => (
            <a href="#" key={index} className="text-[#3A643B] text-2xl">
              <img className="w-14 lg:w-10 " src={x.icon} alt="" />
            </a>
          ))}
        </div>
      </div>

      {/* Information Section */}
      <div>
        <h4 className="mb-4  lg:text-lg text-[23px] sm:text-[37px]  font-bold text-[#3A643B]">
          Information
        </h4>
        <ul className="space-y-2 lg:text-base sm:text-[26px] text-[20px] ">
          <li className="text-[#474747]">About Us</li>
          <li className="text-[#474747]">Terms and Conditions</li>
          <li className="text-[#474747]">Privacy Policy</li>
          <li className="text-[#474747]">Privacy Policy for Mobile Apps</li>
          <li className="text-[#474747]">Shipping and Returns Policy</li>
          {/* <FacebookIcon /> */}
          <li className="text-[#474747]">International Delivery</li>
          <li className="text-[#474747]">For Businesses, Hotels and Resorts</li>
        </ul>
      </div>

      {/* Newsletter Section */}
      <div>
        <h4 className=" lg:text-lg text-[23px] sm:text-[37px]  mt-10 mb-8 lg:mt-0  font-bold text-[#3A643B]">
          Subscribe to our Newsletter and join Amrutam Family today!
        </h4>
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Your Email Address"
            className="p-3 lg:p-3 lg:text-base sm:p-7 sm:text-[25px] px-5 flex-1 border border-black bg-transparent outline-none placeholder-black	 rounded-l-full"
          />
          <button className="p-3 lg:p-3 lg:text-base bg-[#000]  sm:p-7 sm:text-[25px]  text-white rounded-r-full ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;

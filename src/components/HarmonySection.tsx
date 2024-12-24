import React from "react";

const HarmonySection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[27rem] flex items-center justify-center"
      style={{
        backgroundImage: "url('/Rectangle 4167.png')", // Replace with your image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white">
        <h2 className="text-[37px] sm:text-[44px] sm:w-[40rem] w-[23rem] lg:w-[31rem] font-medium mb-4">
          Ready to restore harmony in your mind, body and spirit?
        </h2>
        <button className="mt-6 sm:text-[26px] sm:w-[321px] sm:h-[66px] h-[60px] w-[250px] lg:h-[46px] lg:w-[200px] px-6 py-2 bg-[#3A643B] text-white text-[18px] lg:text-[15px] font-medium rounded-xl hover:bg-green-700 transition">
          Book a consultation
        </button>
      </div>
    </section>
  );
};

export default HarmonySection;

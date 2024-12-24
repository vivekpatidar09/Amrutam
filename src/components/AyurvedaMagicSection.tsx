import React from "react";

const AyurvedaMagicSection = () => {
  const features = [
    {
      title: "Personalized Wellness",
      description:
        "Get treatments made just for you based on your individual doshas (body type).",
      icon: "/Frame 427319094.png",
      bgColor: "bg-blue-100",
      alignment: "left",
      positionClass: "xl:ml-8",
    },
    {
      title: "Holistic Healing",
      description: "Fix the root problem for long-lasting health.",
      icon: "/Frame 427319099.png",
      bgColor: "bg-purple-100",
      alignment: "right",
      positionClass: "xl:mr-8",
    },
    {
      title: "Focus on Prevention",
      description: "Stop problems even before they start.",
      icon: "/Frame 427319095.png",
      bgColor: "bg-green-100",
      alignment: "left",
      positionClass: "",
    },
    {
      title: "Natural Remedies",
      description: "Using herbs and natural therapies for healing.",
      icon: "/Frame 427319098.png",
      bgColor: "bg-yellow-100",
      alignment: "right",
      positionClass: "",
    },
    {
      title: "Mind-Body Connection",
      description: "Keep your mind and body in sync for a happy life.",
      icon: "/Frame 427319096.png",
      bgColor: "bg-red-100",
      alignment: "left",
      positionClass: "xl:ml-8",
    },
    {
      title: "Boosting Immunity",
      description: "Stay strong and healthy for life, not just for today.",
      icon: "/Frame 427319097.png",
      bgColor: "bg-green-200",
      alignment: "right",
      positionClass: "xl:mr-8",
    },
  ];

  const mobFeatures = [
    {
      title: "Personalized Wellness",
      description:
        "Get treatments made just for you based on your individual doshas (body type).",
      icon: "/Frame 427319094.png",
      bgColor: "bg-blue-100",
      alignment: "left",
      positionClass: "xl:ml-8",
    },
    {
      title: "Focus on Prevention",
      description: "Stop problems even before they start.",
      icon: "/Frame 427319095.png",
      bgColor: "bg-green-100",
      alignment: "left",
      positionClass: "",
    },
    {
      title: "Mind-Body Connection",
      description: "Keep your mind and body in sync for a happy life.",
      icon: "/Frame 427319096.png",
      bgColor: "bg-red-100",
      alignment: "left",
      positionClass: "xl:ml-8",
    },
    {
      title: "Holistic Healing",
      description: "Fix the root problem for long-lasting health.",
      icon: "/Frame 427319099.png",
      bgColor: "bg-purple-100",
      alignment: "right",
      positionClass: "xl:mr-8",
    },

    {
      title: "Natural Remedies",
      description: "Using herbs and natural therapies for healing.",
      icon: "/Frame 427319098.png",
      bgColor: "bg-yellow-100",
      alignment: "right",
      positionClass: "",
    },
    {
      title: "Boosting Immunity",
      description: "Stay strong and healthy for life, not just for today.",
      icon: "/Frame 427319097.png",
      bgColor: "bg-green-200",
      alignment: "right",
      positionClass: "xl:mr-8",
    },
  ];

  return (
    <div className="bg-white py-12 px-4 xl:px-16">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-[38px] near1024:text-[55px] near1024:w-[48rem] md:text-[55px] md:w-[36rem] near340:text-[30px] near340:max-w-[18rem] near360:text-[30px] near360:w-[18rem]  xl:text-4xl xl:border-b-4 xl:w-fit w-[25rem] mx-auto xl:border-[#C3D0C4] font-bold text-[#3A643B] mb-4">
          Discover Ayurveda’s Magic With Us
        </h1>
        <p className="text-gray-600 md:text-[30px] near1024:w-[37rem] md:leading-[41px] md:w-[35rem] w-[22rem] near360:w-[20rem] xl:w-[35rem] text-base xl:text-base mx-auto">
          Ayurvedic treatment aims to balance your body and mind, bringing
          harmony and vitality. It’s like a journey to better health using
          ancient wisdom, a totally effective approach for a better life.
        </p>
      </div>

      <div className="">
        {/* Center Content */}
        <div className="relative flex justify-center items-center ">
          {/* Mandala Background */}
          <img
            src="/Group 39477.png"
            alt="Yoga Pose"
            className=" unset xl:absolute md:w-[35rem] md:h-[35rem] top-[.5rem] w-[300px] h-[300px] xl:w-[360px] xl:h-[360px] rounded-full z-40"
          />
        </div>

        {/* Feature Section */}
        {/* for Big Screen  */}
        <div className="xl:grid hidden grid-cols-2 xl:grid-cols-2 gap-4 xl:gap-12 mt-4">
          {features.map((feature, index) => (
            <div key={index}>
              <div
                className={`relative xl:flex xl:w-auto xl:h-auto xl:border-none  border-[1.5px] border-[#E4E4E4] rounded-xl w-[208px] h-[18rem] p-8 xl:p-0 flex-col-reverse items-center ${
                  feature.alignment === "right"
                    ? "xl:flex-row-reverse flex-col-reverse "
                    : "flex-col-reverse xl:flex-row"
                } ${feature.positionClass}`}
              >
                {/* Text */}
                <div
                  className={`xl:ml-6 ml-0 text-center xl:text-start ${
                    feature.alignment === "right" ? "mr-6 ml-0" : ""
                  }`}
                >
                  <h3 className="text-lg w-auto xl:w-auto font-bold xl:font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-sm w-[11rem] font-medium xl:font-normal xl:w-[14rem] my-2 xl:my-0 text-[#6D6B6B] ">
                    {feature.description}
                  </p>
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 flex justify-center items-center ${feature.bgColor} rounded-full`}
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* For Mobile Screen  */}
              <div
                key={index}
                className={`relative xl:hidden  border-[1.5px] border-[#E4E4E4] rounded-2xl w-[187px] h-[18rem] p-4 flex flex-col items-center xl:w-auto xl:h-auto xl:border-none xl:p-0 xl:flex-row ${
                  feature.alignment === "right"
                    ? "xl:flex-row-reverse"
                    : "xl:flex-row"
                } ${feature.positionClass}`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 flex justify-center items-center ${feature.bgColor} rounded-full mb-4 xl:mb-0`}
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full"
                  />
                </div>

                {/* Text */}
                <div
                  className={`text-center xl:text-start ${
                    feature.alignment === "right" ? "xl:mr-6" : "xl:ml-6"
                  }`}
                >
                  <h3 className="text-lg font-bold xl:font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-medium xl:font-normal text-[#6D6B6B] my-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* For Mobile Screen  */}
        <div className="grid grid-cols-2 sm:p-[30px] sm:my-[25px] xl:hidden xl:grid-cols-2 gap-4 xl:gap-12 mt-4">
          {mobFeatures.map((feature, index) => (
            <div key={index}>
              <div
                className={`relative near1024:w-[27rem] sm:py-12 border-[1.5px] near540:w-[240px] md:w-[21rem] near912:w-[25rem] sm:h-[27rem] near340:w-[158px] near360:w-[183px] border-[#E4E4E4] rounded-2xl w-[187px] h-[18rem] p-4 flex flex-col items-center xl:w-auto xl:h-auto xl:border-none xl:p-0 xl:flex-row  `}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 md:w-[8rem] md:h-[8rem] flex justify-center items-center ${feature.bgColor} rounded-full mb-4 xl:mb-0`}
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full"
                  />
                </div>

                {/* Text */}
                <div
                  className={`text-center xl:text-start ${
                    feature.alignment === "right" ? "xl:mr-6" : "xl:ml-6"
                  }`}
                >
                  <h3 className="text-lg near1024:text-[30px] near1024:my-8  sm:my-5 sm:text-[23px] font-bold xl:font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-sm  md:w-[16rem] sm:text-[22px] near1024:text-[26px] near1024:w-[23rem] md:leading-[32px] font-medium text-center m-auto w-[128px] xl:font-normal text-[#6D6B6B] my-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AyurvedaMagicSection;

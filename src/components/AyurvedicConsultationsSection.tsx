import React from "react";

const AyurvedicSection: React.FC = () => {
  return (
    <section className="bg-[#FFF7E2] py-16 px-4 lg:px-16 ">
      <h1 className="text-[38px] near1024:text-[55px] near1024:w-[48rem] near1024:border-none near1024:leading-[4.5rem] sm:text-[55px] sm:w-[36rem]  near340:text-[30px] near340:max-w-[19rem] near360:text-[30px] near360:max-w-[20rem] lg:text-4xl text-center lg:border-b-4 lg:w-fit w-[25rem]  mx-auto lg:border-[#C3D0C4] font-bold text-[#3A643B] mb-12">
        What sets Ayurvedic consultations apart?{" "}
      </h1>

      {/* Top Row with Varied Box Sizes */}
      <div className="xl:flex flex flex-col sm:hidden lg:flex-row flex-wrap gap-6 mb-6">
        {/* 1st Box - Large */}
        <div className="flex-1 near340:max-w-[100%] near360:w-[100%] bg-white text-center shadow-lg rounded-2xl p-6 border-t-[6px] border-[#3A643B]">
          <p className="text-[32px] near360:text-[26px] near340:text-[24px] lg:font-medium font-semibold text-[#3A643B] mb-4">
            स्वस्थस्य स्वास्थ्य रक्षणं,
            <br />
            आतुरस्य विकार प्रशमनं।
          </p>
          <p className="text-lg near360:w-[17rem] near340:w-[15rem] lg:text-base text-center m-auto w-80 lg:w-96 text-[#3A643B] ">
            [Meaning: The Goal of Ayurveda is to maintain the health of a
            healthy person and to cure the disease of a diseased person.]
          </p>
        </div>

        {/* 2nd Box - Medium */}
        <div className="lg:w-[28%] w-full bg-white shadow-lg rounded-lg text-center ">
          <img
            src="/Rectangle 4144.png"
            alt="Precise Diagnosis"
            className="rounded-lg w-full h-64 object-cover"
          />
        </div>

        {/* 3rd Box - Small */}
        <div className="lg:w-[23%] w-full flex justify-center flex-col text-[24px] text-start border-t-[6px] border-[#3A643B] bg-white shadow-lg rounded-2xl p-12 lg:p-4">
          <p className="lg:text-xl text-[29px] font-bold text-[#3A643B] mb-2">
            Precise Diagnosis
          </p>
          <p className="lg:text-base text-[22px]  text-[#414141]">
            Ayurveda's core principles revolve around Vata, Pitta, and Kapha
            doshas, guiding you with precise diagnosis and treatment.
          </p>
        </div>
      </div>

      {/* Bottom Row with 4 Equal Boxes */}
      <div className="xl:grid grid grid-cols-1 sm:hidden sm:grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Box 4 */}
        <div className="flex h-62 justify-center flex-col text-start border-t-[6px] border-[#3A643B] bg-white shadow-lg rounded-2xl p-12 lg:p-4">
          <p className="lg:text-xl text-[29px] font-bold text-[#3A643B] mb-2">
            Zero side-effects{" "}
          </p>
          <p className="lg:text-base text-[22px] text-[#414141]">
            Ayurvedic treatments are devoid of chemicals, and are based
            completely on natural herbs 
          </p>
        </div>

        {/* Box 5 - Image */}
        <div className=" h-full shadow-lg rounded-lg text-center">
          <img
            src="/Rectangle 4146.png"
            alt="Natural Ingredients"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Box 6 */}
        <div className="flex h-62 justify-center flex-col text-start border-t-[6px] border-[#3A643B] bg-white shadow-lg rounded-2xl p-12 lg:p-4">
          <p className="lg:text-xl text-[29px] font-bold text-[#3A643B] mb-2">
            Individual Treatment{" "}
          </p>
          <p className="lg:text-base text-[22px]  text-[#414141]">
            all Treatments are personalized based on a person's unique
            constitution and health concerns.
          </p>
        </div>

        {/* Box 7 - Image */}
        <div className=" h-full shadow-lg rounded-lg text-center">
          <img
            src="/Rectangle 4148.png"
            alt="Natural Ingredients"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Laptop Screen 600px  */}

      <div className="sm:grid near1024:grid-cols-3 xl:hidden grid-cols-1 hidden sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 1st Box - Large */}
        <div className="flex-1 near340:max-w-[100%] near360:w-[100%] bg-white text-center shadow-lg rounded-2xl p-6 border-t-[6px] border-[#3A643B]">
          <p className="text-[32px] near1024:text-[26px] near360:text-[26px] near340:text-[24px] lg:font-medium font-semibold text-[#3A643B] mb-4">
            स्वस्थस्य स्वास्थ्य रक्षणं,
            <br />
            आतुरस्य विकार प्रशमनं।
          </p>
          <p className="text-lg near1024:w-[15rem] near360:w-[17rem] near340:w-[15rem] lg:text-base text-center m-auto w-80 lg:w-96 text-[#3A643B] ">
            [Meaning: The Goal of Ayurveda is to maintain the health of a
            healthy person and to cure the disease of a diseased person.]
          </p>
        </div>

        {/* 2nd Box - Medium */}
        <div className="lg:w-[28%] near1024:w-full w-full bg-white shadow-lg rounded-lg text-center ">
          <img
            src="/Rectangle 4144.png"
            alt="Precise Diagnosis"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Box 4 */}
        <div className="flex h-62 justify-center flex-col text-start border-t-[6px] border-[#3A643B] bg-white shadow-lg rounded-2xl p-12 lg:p-4">
          <p className="lg:text-xl text-[29px] font-bold text-[#3A643B] mb-2">
            Zero side-effects{" "}
          </p>
          <p className="lg:text-base text-[22px] text-[#414141]">
            Ayurvedic treatments are devoid of chemicals, and are based
            completely on natural herbs 
          </p>
        </div>

        {/* Box 5 - Image */}
        <div className=" h-full shadow-lg rounded-lg text-center">
          <img
            src="/Rectangle 4146.png"
            alt="Natural Ingredients"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Box 6 */}
        <div className="flex h-62 justify-center flex-col text-start border-t-[6px] border-[#3A643B] bg-white shadow-lg rounded-2xl p-12 lg:p-4">
          <p className="lg:text-xl  text-[29px] font-bold text-[#3A643B] mb-2">
            Individual Treatment{" "}
          </p>
          <p className="lg:text-base text-[22px]  text-[#414141]">
            all Treatments are personalized based on a person's unique
            constitution and health concerns.
          </p>
        </div>

        {/* Box 7 - Image */}
        <div className=" h-full shadow-lg rounded-lg text-center">
          <img
            src="/Rectangle 4148.png"
            alt="Natural Ingredients"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AyurvedicSection;

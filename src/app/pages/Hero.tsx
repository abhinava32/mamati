import React from "react";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat animate-fadeInSlow"
    >
      {/* Main Hero Section */}
      <div className="relative  lg:pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 mx-auto text-center">
              <h1 className="text-white font-semibold text-5xl mb-8">
                Welcome to Mamati Web Solutions
              </h1>
              <p className="mt-4 text-lg text-green-100">
                Empowering businesses with comprehensive BPO solutions and
                exceptional service delivery. Your trusted partner in business
                process optimization.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 animate-bounce">
                <a
                  href="#services"
                  className="bg-white text-green-700 font-bold px-6 py-3 rounded-lg mr-4 hover:bg-green-50 transition-all duration-300"
                >
                  Our Services
                </a>
                <a
                  href="#contact"
                  className="bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-green-700 transition-all duration-300 "
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

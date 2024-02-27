import React from "react";
import about from "../../assets/about.jpg";

const AboutSection = () => {
  return (
    <section className="bg-red-900">
      <div className="h-screen flex pt-16 pb-0 px-24">
        <div className="div1 relative bg-red-900 w-2/4 flex justify-center items-center float-right">
          <img
            src={about}
            className="w-full h-full object-cover "
            alt="our service"
          />
          <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-white"></div>
          <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-white"></div>
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-white"></div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
        </div>
        <div className="div2 relative bg-red-900 w-2/4 flex justify-center items-center float-left">
          <div className="w-5/6 h-5/6 bg-red-900 relative z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-white"></div>
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-white"></div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

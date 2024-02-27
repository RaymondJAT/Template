import React from "react";
import services from "../../assets/services.jpg";

const ServiceSection = () => {
  return (
    <section className="bg-red-900">
      <div className="h-screen flex pt-0 pb-16 px-24">
        <div className="div1 relative bg-red-900 w-2/4 flex justify-center items-center float-right">
          <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-white"></div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
        </div>
        <div className="div2 relative bg-red-900 w-2/4 flex justify-center items-center float-left">
          <img
            src={services}
            className="w-full h-full object-cover "
            alt="our service"
          />
          <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-white"></div>
          <div className="w-lvh h-lvh bg-red-900relative z-10 overflow-hidden"></div>
          <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-white"></div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

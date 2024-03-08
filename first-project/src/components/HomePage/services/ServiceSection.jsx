import React from "react";
import service from "../../../assets/5L/services.png";

const ServiceSection = () => {
  const bg = {
    background: "#E7E5E4",
  };

  const red = {
    background: "#FF0000",
  };

  return (
    <section style={red}>
      <div className="service w-full h-screen flex justify-center items-center">
        <div className="service-content w-[1280px] max-w-[95%] my-0 mx-auto flex flex-wrap items-center justify-around">
          <img
            src={service}
            alt="services img"
            className="h-[500px] w-[450px] rounded-xl border-8 border-stone-900 order-2 md:order-1 mb-10 md:mb-0"
          />
          <div className="service-text w-[550px] max-w-full py-0 px-3 order-1 md:order-2">
            <h1 className="capitalize text-[34px] mb-5 font-bold">
              <span className="text-white">Providing</span> high-quality
              services
            </h1>
            <p className="tracking-wide text-lg leading-7 mb-11">
              <ul className="text-white font-semibold py-5 ">
                <li className="py-2">Electrical Design and Installation</li>
                <li className="py-2">
                  Installation and Repair of Surveillance Systems/CCTV
                </li>
                <li className="py-2">
                  Structured Cabling Design and Installation
                </li>
                <li className="py-2">RFID System Design and Installation</li>
                <li className="py-2">PABX Design and Installation</li>
              </ul>
            </p>
            <button
              type="button"
              className="font-bold no-underline py-3 px-8 text-base block my-0 mx-auto rounded-lg"
              style={bg}
            >
              Find out more about our services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

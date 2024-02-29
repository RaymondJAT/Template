import React from "react";
import services from "../../assets/services.jpg";

const ServiceSection = () => {
  const background = {
    background: "#7a1818",
  };
  return (
    <section className="bg-slate-300" style={background}>
      <div className="h-screen flex pt-0 pb-16 px-28">
        <div className="div1 relative bg-stone-300 w-2/4 flex justify-center items-center float-right">
          <div className="w-4/5 h-5/6 bg-stone-300 relative z-10">
            <h1 className="text-4xl mb-5 pt-9 uppercase tracking-wide text-black font-bold">
              what we offer
            </h1>
            <h2 className="text-black text-2xl mb-5 tracking-wider capitalize font-bold">
              I'm a paragraph
            </h2>
            <p className="text-black text-lg mb-9 capitalize tracking-wide text-justify">
              <ul>
                <li>Write something here</li>
                <li>Write something here</li>
                <li>Write something here</li>
                <li>Write something here</li>
                <li>Write something here</li>
              </ul>
            </p>
            <button
              type="button"
              className="bg-white text-black rounded-lg text-lg font-bold py-2.5 px-7 border-2 border-black border-solid"
            >
              Click Me
            </button>
          </div>
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-white"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
        </div>
        <div className="div2 relative bg-white w-2/4 flex justify-center items-center float-left">
          <img
            src={services}
            className="w-full h-full object-cover "
            alt="our service"
          />
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-white"></div>
          <div className="w-lvh h-lvh bg-whiterelative z-10 overflow-hidden"></div>
          <div className="absolute top-0 bottom-0 right-0 w-1 bg-white"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

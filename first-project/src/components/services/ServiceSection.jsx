import React from "react";
import services from "../../assets/services.jpg";

const ServiceSection = () => {
  const background = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(90, 101, 111, 1), rgba(229, 231, 240, 1))`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <section className="bg-white" style={background}>
      <div className="h-screen flex pt-0 pb-16 px-32">
        <div className="div1 relative bg-slate-200 w-2/4 flex justify-center items-center float-right">
          <div className="w-5/6 h-5/6 bg-slate-200 relative z-10">
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
              className="bg-slate-100 text-black rounded-lg text-lg font-bold py-2.5 px-7 border-2 border-black border-solid"
            >
              Click Me
            </button>
          </div>
          <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-yellow-500"></div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"></div>
        </div>
        <div className="div2 relative bg-red-700 w-2/4 flex justify-center items-center float-left">
          <img
            src={services}
            className="w-full h-full object-cover "
            alt="our service"
          />
          <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-yellow-500"></div>
          <div className="w-lvh h-lvh bg-red-700relative z-10 overflow-hidden"></div>
          <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-yellow-500"></div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"></div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

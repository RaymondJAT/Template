import React from "react";

const AboutSection = () => {
  return (
    <div className="h-screen flex">
      <div className="div1 relative bg-red-900 w-2/4 flex justify-center items-center float-right">
        <div className="w-5/6 h-5/6 bg-red-900 relative z-10"></div>
        <div className="absolute top-0 bottom-0 left-0 w-1 bg-yellow-500"></div>
        <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-yellow-500"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-500"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-500"></div>
      </div>

      <div className="div2 relative bg-red-900 w-2/4 flex justify-center items-center float-left">
        <div className="w-5/6 h-5/6 bg-red-900 relative z-10"></div>
        <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-yellow-500"></div>
        <div className="absolute top-0 bottom-0 right-0 w-1 bg-yellow-500"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-500"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-500"></div>
      </div>
    </div>
  );
};

export default AboutSection;

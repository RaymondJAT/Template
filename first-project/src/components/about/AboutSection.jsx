import React from "react";

const AboutSection = () => {
  return (
    <div className="h-screen flex">
      <div className="div1 bg-black w-2/4 flex justify-center items-center float-right">
        <div className="w-5/6 h-5/6 bg-white"></div>
      </div>

      <div className="div2 bg-black w-2/4 flex justify-center items-center float-left">
        <div className="w-5/6 h-5/6 bg-white"></div>
      </div>
    </div>
  );
};

export default AboutSection;

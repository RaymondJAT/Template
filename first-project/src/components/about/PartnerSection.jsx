import React from "react";
import banner from "../../assets/banner-bg.jpg";

const PartnerSection = () => {
  const styles = {
    background: "#7a1818",
  };

  return (
    <section className="bg-slate-300" style={styles}>
      <div className="h-56 flex px-28">
        <div className="relative bg-transparent w-1/4 flex justify-center items-center">
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-white"></div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
        </div>
        <div className="relative bg-transparent w-1/4 flex justify-center items-center">
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-white"></div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
        </div>
        <div className="relative bg-transparent w-1/4 flex justify-center items-center">
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-white"></div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
        </div>
        <div className="relative bg-transparent w-1/4 flex justify-center items-center">
          <div className="absolute top-0 bottom-0 right-0 w-1 bg-white"></div>
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-white"></div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;

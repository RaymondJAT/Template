import React from "react";
import banner from "../../assets/banner-bg.jpg";

const PartnerSection = () => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.75)),url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // backgroundAttachment: "fixed",
  };

  return (
    <section className="bg-transparent" style={styles}>
      <div className="h-56 flex px-32">
        {/* <div className="relative bg-transparent w-1/5 flex justify-center items-center">
          <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-white"></div>
          <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-white"></div>
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-white"></div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
        </div> */}
        <div className="relative bg-transparent w-1/4 flex justify-center items-center">
          {/* <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-white"></div> */}
          <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-yellow-500"></div>
          {/* <div className="absolute top-0 left-0 right-0 h-0.5 bg-yellow-500"></div> */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"></div>
        </div>
        <div className="relative bg-transparent w-1/4 flex justify-center items-center">
          {/* <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-yellow-500"></div> */}
          <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-yellow-500"></div>
          {/* <div className="absolute top-0 left-0 right-0 h-0.5 bg-yellow-500"></div> */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"></div>
        </div>
        <div className="relative bg-transparent w-1/4 flex justify-center items-center">
          {/* <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-yellow-500"></div> */}
          <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-yellow-500"></div>
          {/* <div className="absolute top-0 left-0 right-0 h-0.5 bg-yellow-500"></div> */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"></div>
        </div>
        <div className="relative bg-transparent w-1/4 flex justify-center items-center">
          <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-yellow-500"></div>
          <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-yellow-500"></div>
          {/* <div className="absolute top-0 left-0 right-0 h-0.5 bg-yellow-500"></div> */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"></div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;

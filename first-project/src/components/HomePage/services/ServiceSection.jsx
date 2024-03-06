import React from "react";
import ceo from "../../../assets/about.jpg";
import img1 from "../../../assets/5L/ElectricalDesignandInstallation.png";
import img2 from "../../../assets/5L/InstallationandRepairofSurveillanceSystemsCCTV.png";
import img3 from "../../../assets/5L/ITSupport.png";
import img4 from "../../../assets/5L/PABXDesignandInstallation.png";
import img5 from "../../../assets/5L/StructuredCablingDesignandInstallation.png";

const ServiceSection = ({ children }) => {
  const bg = {
    background: "#E7E5E4",
  };

  const red = {
    color: "#FF0000",
  };

  return (
    <section style={{ background: "#FF0000", height: "650px" }}>
      <div className="relative w-full h-90vh flex justify-center items-center">
        {children}
        <div className="h-screen flex pt-16 px-28">
          {/* Right div */}
          {/* right side images */}
          <div className="div2 relative w-2/4 flex  mb-28">
            <img
              src={img1}
              className="absolute w-[170px] h-[170px] object-cover top-[-50px] left-[70px] z-10"
              alt="our service"
            />

            {/* right div border */}
            <div
              className="absolute w-[170px] h-[170px] top-[-60px] left-[60px]"
              style={bg}
            ></div>

            <img
              src={img2}
              className="absolute w-[170px] h-[170px] object-cover top-[150px] left-[150px] z-10"
              alt="our service"
            />

            {/* right div border */}
            <div
              className="absolute w-[170px] h-[170px] top-[140px] left-[140px]"
              style={bg}
            ></div>

            <img
              src={img3}
              className="absolute w-[170px] h-[170px] object-cover top-[350px] left-[100px] z-10"
              alt="our service"
            />

            {/* right div border */}
            <div
              className="absolute w-[170px] h-[170px] top-[340px] left-[90px]"
              style={bg}
            ></div>
          </div>

          {/* left side images */}
          <div className="div2 relative w-1/4 flex justify-center items-center float-left">
            <img
              src={img4}
              className="absolute w-[170px] h-[170px] object-cover top-[70px] right-[240px] z-10"
              alt="our service"
            />

            {/* right div border */}
            <div
              className="absolute w-[170px] h-[170px] top-[60px] right-[250px]"
              style={bg}
            ></div>

            <img
              src={img5}
              className="absolute w-[170px] h-[170px] object-cover top-[290px] right-[220px] z-10"
              alt="our service"
            />

            {/* right div border */}
            <div
              className="absolute w-[170px] h-[170px] top-[280px] right-[230px]"
              style={bg}
            ></div>
          </div>

          {/* Left div */}
          <div className="div1 relative w-2/4 flex justify-center items-center right-[40px] mb-36 top-[-50px]">
            <div
              className="w-full h-full flex-col justify-center pt-5 flex relative"
              style={red}
            >
              <h1 className="text-2xl mb-6 uppercase tracking-wide text-black font-bold text-left">
                Lorem ipsum dolor sit.
              </h1>

              <div className="text-black text-md mb-11 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, hic vitae debitis alias perspiciatis atque, aliquam
                accusamus expedita eum iusto minus rerum. Repellendus totam
                enim, vitae reiciendis recusandae ea quidem voluptates harum
                dolor perspiciatis error facilis dolore id nobis expedita ab,
                aliquam odit eligendi adipisci nesciunt officia sequi quod
                cupiditate.
              </div>
              <button
                type="button"
                className="text-black rounded-md text-sm font-bold py-2.5 px-4 mx-auto bg-white w-64"
                style={{
                  display: "block",
                }}
              >
                Find out more about our services
              </button>
            </div>

            <div>
              <div className="absolute top-0 bottom-0 right-0 w-1 "></div>
              <div className="absolute top-0 bottom-0 left-0 w-1 "></div>
              <div className="absolute top-0 left-0 right-0 h-1 "></div>
              <div className="absolute bottom-0 left-0 right-0 h-1 "></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

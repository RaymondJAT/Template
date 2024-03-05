import React from "react";
import ceo from "../../assets/about.jpg";
import bgceo from "../../assets/hero.jpg";

const AboutSection = ({ children }) => {
  const header = {
    backgroundImage: `rgba(0, 0, 0, 0.9)`,
  };

  const bg = {
    background: "#E7E5E4",
  };

  const border = {
    background: "#FF0000",
  };

  const red = {
    color: "#FF0000",
  };

  return (
    <section className="origin-top-left relative">
      {/* left-div-content */}
      <div
        className="relative w-full h-90vh flex justify-center items-center"
        style={bg}
      >
        {children}
        <div className="h-screen flex pt-16 px-28">
          <div className="div1 relative w-2/4 flex justify-center items-center float-right mb-36">
            <div
              className="w-10/12 h-full flex-col justify-center pt-5"
              style={bg}
            >
              <h1
                className="text-2xl mb-6 uppercase tracking-wide text-black font-bold text-left"
                style={red}
              >
                company profile
              </h1>
              <h2 className="text-black text-3xl mb-9 capitalize font-semibold text-left">
                5L SOLUTIONS SUPPLY & ALLIED <br />
                SERVICE CORP.
              </h2>
              <p className="text-black text-md mb-11 text-justify">
                5L SOLUTIONS SUPPLY AND ALLIED SERVICES is a company who
                provides technical equipment and services in the field of
                Information Technology in offices, residences, companies and
                manufacturing organization across various industries. Subsequent
                to service engagement, the company has the capability to design,
                install and repair electronic and electrical powered devices or
                equipment such as CCTV, cable, air conditioning, system,
                security system customized to customer requirement.
              </p>
              <button
                type="button"
                className="text-white rounded-md text-sm font-bold py-2.5 px-4 mx-auto"
                style={{
                  width: "220px",
                  background: "#FF0000",
                  display: "block",
                }}
              >
                Learn more about us
              </button>
            </div>

            {/* left div */}
            <div>
              <div className="absolute top-0 bottom-0 right-0 w-1 "></div>
              <div className="absolute top-0 bottom-0 left-0 w-1 "></div>
              <div className="absolute top-0 left-0 right-0 h-1 "></div>
              <div className="absolute bottom-0 left-0 right-0 h-1 "></div>
            </div>
          </div>

          {/* right-div-content */}
          <div className="div2 relative w-2/4 flex justify-center items-center float-left mx-8 mb-28">
            <img
              src={ceo}
              className="absolute w-3/4 h-96 object-cover top-20 right-26 z-10"
              alt="our service"
            />

            <img
              src={bgceo}
              alt=""
              className="h-96 w-2/3 absolute bottom-32 right-1"
              style={header}
            />

            {/* right div border */}
            <div className="absolute w-2/3 h-5/6 top-14 right-[40px] z-20">
              <div
                className="absolute top-0 bottom-0 left-0 w-2"
                style={border}
              ></div>
              <div
                className="absolute top-0 bottom-0 right-0 w-2"
                style={border}
              ></div>
              <div
                className="absolute top-0 left-0 right-0 h-2"
                style={border}
              ></div>
              <div
                className="absolute bottom-0 left-0 right-0 h-2"
                style={border}
              ></div>
            </div>
          </div>

          {/* Skew */}
          <div
            className="absolute bottom-0 left-0 w-full h-60"
            style={{
              background: "#FF0000",
              clipPath: "polygon(0% 60%, 100% 100%, 0% 100%)",
              marginBottom: "-1px",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

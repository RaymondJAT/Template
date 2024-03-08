import React from "react";
import ceo from "../../assets/5L/CEO.png";

const Ceo = ({ content, title, title2 }) => {
  const red = {
    color: "#FF0000",
  };

  return (
    <div className="container">
      <div className="heading w-11/12 m-auto text-center">
        <div
          className="wrapper w-5/6 my-12 mx-auto flex justify-between items-center"
          style={{ gap: "100px" }}
        >
          <div className="content w-1/2 pt-16 mx-6">
            <h1 className="text-left text-3xl font-bold" style={red}>
              {title} <br />
              {title2}
            </h1>
            <p className="text-justify mt-5 text-md leading-normal font-medium">
              {content}
            </p>
          </div>

          <div className="image w-2/4 pt-24">
            <img src={ceo} alt="" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ceo;

{
  /* <section>
      <div
        className="about w-full h-screen flex justify-center items-center relative"
        style={bg}
      >
        <div className="content w-[1280px] max-w-[95%] my-0 mx-auto flex flex-wrap items-center justify-around relative">
          <div className="text max-w-full w-[550px] py-0 px-2">
            <h1 className="capitalize font-bold text-2xl mb-1" style={red}>
              Company Profile
            </h1>
            <h5 className="text-4xl uppercase tracking-wider mb-5 font-bold">
              5l solutions supply & <br />
              allied service corp.
            </h5>
            <p className="leading-7 text-base tracking-wide mb-5">
              5L SOLUTIONS SUPPLY AND ALLIED SERVICES is company who provides
              technical equipment and services in the field of information
              Technology in offices, residences, companies and manufacturing
              organization across various industries. Subsequent to service
              engagement, the Company has the capability to design, install and
              repair electronic and electrical powered devices or equipment such
              as CCTV, cable, air conditioning, system, security system
              customized to Customer requirement.
            </p>
          </div>
          <img
            src={ceo}
            alt="mr. bagapuro"
            className="max-w-[500px] h-[600px] rounded-lg"
          />
        </div>
      </div>
    </section> */
}

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

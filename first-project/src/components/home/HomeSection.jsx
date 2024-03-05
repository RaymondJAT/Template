import React from "react";

const HomeSection = ({ title, title1, subtitle, subtitle1, link }) => {
  const red = {
    background: "#FF0000",
  };

  return (
    <section id="hero_section">
      <div className="align_center flex-col justify-center ">
        <h1
          id="hero_title"
          className="text-7xl text-white mt-56 text-center font-based uppercase tracking-wide"
        >
          {title}
          <br />
          {title1}
        </h1>
        <p
          id="hero_subtitle"
          className="mx-auto my-2 leading-6 text-white text-center tracking-widest"
        >
          {subtitle}
          <br /> {subtitle1}
        </p>

        <button
          type="button"
          className="text-white w-32 py-1.5 px-0 text-center my-6 mx-2.5 rounded-md font-bold uppercase bg-red-700"
          style={red}
        >
          <a href={link}>join us</a>
        </button>
      </div>
    </section>
  );
};

export default HomeSection;

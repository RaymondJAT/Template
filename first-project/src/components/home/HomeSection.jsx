import React from "react";

const HomeSection = ({ title, title1, subtitle, subtitle1, link }) => {
  return (
    <section id="hero_section">
      <div className="align_center flex-col justify-center ">
        <h1
          id="hero_title"
          className="text-7xl text-white mt-36 text-center font-bold uppercase tracking-wider"
        >
          {title}
          <br />
          {title1}
        </h1>
        <p
          id="hero_subtitle"
          className="mx-auto my-5 leading-6 text-white font-thin text-center tracking-wide"
        >
          {subtitle}
          <br /> {subtitle1}
        </p>

        <button
          type="button"
          className="text-white w-32 py-1.5 px-0 text-center my-1 mx-2.5 rounded-md bg-transparent font-bold border-2 border-orange-100 uppercase"
        >
          <a href={link}>click me</a>
        </button>
      </div>
    </section>
  );
};

export default HomeSection;

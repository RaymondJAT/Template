import React from "react";

const HomeSection = ({ title, title1, subtitle, subtitle1, link }) => {
  return (
    <section id="hero_section">
      <div className="align_center flex flex-col items-center justify-center h-full">
        <h1
          id="hero_title"
          className="text-7xl text-white mt-36 text-center font-bold"
        >
          {title}
          <br />
          {title1}
        </h1>
        <p
          id="hero_subtitle"
          className="mx-auto my-5 leading-6 text-white font-thin text-center"
        >
          {subtitle}
          <br /> {subtitle1}
        </p>
        {/* <a href={link} id="hero_link" className="">
          JOIN NOW
        </a> */}
        <button
          type="button"
          className="text-white w-52 py-2.5 px-0 text-center my-1 mx-2.5 rounded-md bg-transparent cursor-pointer font-bold border-2 border-orange-100"
        >
          BUTTON
        </button>
      </div>
    </section>
  );
};

export default HomeSection;

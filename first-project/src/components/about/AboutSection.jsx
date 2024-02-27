import React from "react";
import about from "../../assets/about.jpg";

const AboutSection = () => {
  return (
    <section className="bg-red-900">
      <div className="h-screen flex pt-16 pb-0 px-24">
        <div className="div1 relative bg-red-900 w-2/4 flex justify-center items-center float-right">
          <img
            src={about}
            className="w-full h-full object-cover "
            alt="our service"
          />
          <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-white"></div>
          <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-white"></div>
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-white"></div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
        </div>
        <div className="div2 relative bg-red-900 w-2/4 flex justify-center items-center float-left">
          <div className="w-5/6 h-5/6 bg-red-900 relative z-10">
            <h1 className="text-5xl mb-5 pt-9 uppercase tracking-wide text-white font-bold">
              about us
            </h1>
            <h2 className="text-white text-2xl mb-5 tracking-wider capitalize font-bold">
              I'm a paragraph
            </h2>
            <p className="text-slate-200 text-lg mb-9 capitalize tracking-wide text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              molestiae, cupiditate ea quidem repellat quos praesentium sequi,
              excepturi, rerum atque numquam perspiciatis dicta. Repudiandae,
              neque accusantium! Vitae ipsa placeat accusamus, mollitia aut enim
              perferendis, veritatis natus iste delectus laudantium dolorem at
              quam quas nemo quaerat vel. Praesentium delectus dolorum vel
              vitae, odio animi autem consequuntur maxime odit at obcaecati
              exercitationem.
            </p>
            <button
              type="button"
              className="bg-white text-red-800 rounded-lg text-lg font-bold py-2.5 px-7"
            >
              Click Me
            </button>
          </div>
          <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-white"></div>
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-white"></div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

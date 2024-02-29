import React from "react";
import about from "../../assets/about.jpg";

const AboutSection = () => {
  const bg = {
    background: "#7a1818",
  };
  return (
    <section className="" style={bg}>
      <div className="h-screen flex pt-16 px-28">
        <div className="div1 relative bg-white w-2/4 flex justify-center items-center float-right">
          <img
            src={about}
            className="w-full h-full object-cover"
            alt="our service"
          />
          {/* <div className="absolute top-0 bottom-0 right-0 w-1 bg-white"></div> */}
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-white"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-white"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
        </div>
        <div className="div2 relative bg-stone-300 w-2/4 flex justify-center items-center float-left">
          <div className="w-4/5 h-5/6 bg-stone-300 relative z-10 flex flex-col justify-center">
            <h1 className="text-4xl mb-5 uppercase tracking-wide text-black font-bold text-left">
              company profile
            </h1>
            <h2 className="text-black text-2xl mb-5 tracking-wider capitalize font-semibold text-left">
              5L SOLUTIONS SUPPLY & ALLIED <br />
              SERVICE CORP.
            </h2>
            <p className="text-black text-md mb-9 capitalize tracking-wide text-justify">
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
              className="bg-white text-black rounded-lg text-lg font-bold py-2.5 px-4 border-2 border-black border-solid"
              style={{ width: "120px" }}
            >
              Click Me
            </button>
          </div>

          <div className="absolute top-0 bottom-0 left-0 w-1 bg-white"></div>
          <div className="absolute top-0 bottom-0 right-0 w-1 bg-white"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-white"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

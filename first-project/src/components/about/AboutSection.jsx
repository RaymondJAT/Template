import React from "react";
import about from "../../assets/about.jpg";

const AboutSection = () => {
  const background = {
    backgroundImage: `linear-gradient(to bottom, rgba(200, 0, 0, 0.50), rgba(0, 0, 0, 1))`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <section className="bg-red-700" style={background}>
      <div className="h-screen flex pt-16 px-32">
        <div
          className="div1 relative bg-red-700 w-2/4 flex justify-center items-center float-right"
          style={background}
        >
          <img
            src={about}
            className="w-full h-full object-cover"
            alt="our service"
          />
          <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-yellow-500"></div>
          <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-yellow-500"></div>
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-yellow-500"></div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"></div>
        </div>
        <div className="div2 relative bg-white w-2/4 flex justify-center items-center float-left">
          <div className="w-5/6 h-5/6 bg-white relative z-10 flex flex-col justify-center">
            <h1 className="text-4xl mb-5 uppercase tracking-wide text-black font-bold text-left">
              about us
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

          <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-yellow-500"></div>
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-yellow-500"></div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

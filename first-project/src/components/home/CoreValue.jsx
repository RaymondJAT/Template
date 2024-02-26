import React from "react";
import CoreCard from "./CoreCard";
import proactive from "../../assets/proactive.png";
import integrity from "../../assets/agree.png";
import efficient from "../../assets/save-time.png";
import teamwork from "../../assets/united.png";
import excellence from "../../assets/excellence.png";
import AboutSection from "../about/AboutSection";

const CoreValue = () => {
  return (
    <section className="my-60 mx-0 bg-white">
      {/* <h2 className="font-bold text-4xl text-center text-white uppercase mb-16">
        Core Values
      </h2> */}

      <div className="flex items-center justify-evenly mb-16">
        <CoreCard
          image={proactive}
          title="Core Value"
          subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste explicabo quisquam, deleniti, esse doloremque repellendus suscipit adipisci iure nemo dolores at pariatur ad natus. Dolores."
        />
        <CoreCard
          image={integrity}
          title="Core Value"
          subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste explicabo quisquam, deleniti, esse doloremque repellendus suscipit adipisci iure nemo dolores at pariatur ad natus. Dolores."
        />
        <CoreCard
          image={efficient}
          title="Core Value"
          subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste explicabo quisquam, deleniti, esse doloremque repellendus suscipit adipisci iure nemo dolores at pariatur ad natus. Dolores."
        />
        <CoreCard
          image={teamwork}
          title="Core Value"
          subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste explicabo quisquam, deleniti, esse doloremque repellendus suscipit adipisci iure nemo dolores at pariatur ad natus. Dolores."
        />
        <CoreCard
          image={excellence}
          title="Core Value"
          subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste explicabo quisquam, deleniti, esse doloremque repellendus suscipit adipisci iure nemo dolores at pariatur ad natus. Dolores."
        />
      </div>
      <AboutSection />
    </section>
  );
};

export default CoreValue;

import React from "react";
import CoreCard from "./CoreCard";
import proactive from "../../assets/proactive.png";
import integrity from "../../assets/agree.png";
import efficient from "../../assets/time-management.png";
import teamwork from "../../assets/united.png";
import excellence from "../../assets/excellence.png";

const CoreValue = () => {
  return (
    <section className="my-60 mx-0 h-auto flex-1 bg-slate-300">
      <div className="flex items-center justify-evenly mb-16">
        <CoreCard
          image={proactive}
          bgColor="#9b2c2c"
          ttlColor="white"
          txtColor="white"
          title="Core Value"
          // subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste explicabo quisquam, deleniti, esse doloremque repellendus suscipit adipisci iure nemo dolores at pariatur ad natus. Dolores."
        />
        <CoreCard
          image={integrity}
          bgColor="white"
          title="Core Value"
          // subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste explicabo quisquam, deleniti, esse doloremque repellendus suscipit adipisci iure nemo dolores at pariatur ad natus. Dolores."
        />
        <CoreCard
          image={efficient}
          bgColor="#9b2c2c"
          ttlColor="white"
          txtColor="white"
          title="Core Value"
          // subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste explicabo quisquam, deleniti, esse doloremque repellendus suscipit adipisci iure nemo dolores at pariatur ad natus. Dolores."
        />
        <CoreCard
          image={teamwork}
          bgColor="white"
          title="Core Value"
          // subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste explicabo quisquam, deleniti, esse doloremque repellendus suscipit adipisci iure nemo dolores at pariatur ad natus. Dolores."
        />
        <CoreCard
          image={excellence}
          bgColor="#9b2c2c"
          ttlColor="white"
          txtColor="white"
          title="Core Value"
          // subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste explicabo quisquam, deleniti, esse doloremque repellendus suscipit adipisci iure nemo dolores at pariatur ad natus. Dolores."
        />
      </div>
    </section>
  );
};

export default CoreValue;

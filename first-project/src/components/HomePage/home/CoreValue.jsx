import React from "react";
import CoreCard from "./CoreCard";
import proactive from "../../../assets/proactive.png";
import integrity from "../../../assets/agree.png";
import efficient from "../../../assets/time-management.png";
import teamwork from "../../../assets/united.png";
import excellence from "../../../assets/excellence.png";

const CoreValue = () => {
  return (
    <div className="flex items-center justify-evenly mt-60">
      <CoreCard
        image={proactive}
        bgColor="#7a1818"
        ttlColor="white"
        txtColor="white"
        title="Core Value"
      />
      <CoreCard
        image={integrity}
        bgColor="rgb(214 211 209)"
        title="Core Value"
      />
      <CoreCard
        image={efficient}
        bgColor="#7a1818"
        ttlColor="white"
        txtColor="white"
        title="Core Value"
      />
      <CoreCard
        image={teamwork}
        bgColor="rgb(214 211 209)"
        title="Core Value"
      />
      <CoreCard
        image={excellence}
        bgColor="#7a1818"
        ttlColor="white"
        txtColor="white"
        title="Core Value"
      />
    </div>
  );
};

export default CoreValue;

import React from "react";
import ContactPage from "../HomePage/contact/ContactSection";
import profile from "../../assets/profile1.svg";

const Team = () => {
  return (
    <div className="team-container bg-slate-100 text-center">
      <div className="team-header pt-8 text-4xl m-auto leading-10">
        <h1 className="font-bold uppercase">Meet our Core Team</h1>
      </div>
      <div className="sub-container max-w-7xl m-auto py-10 px-0 flex flex-wrap justify-center">
        <div className="teams my-4 mx-5 p-6 max-w-[30%] cursor-pointer border border-solid border-black rounded-xl transition duration-300 box-border hover:bg-slate-500 hover:rounded-xl">
          <img src={profile} alt="" className=" w-40 h-40" />
          <div className="name p-3 font-bold text-base uppercase">
            name here
          </div>
          <div className="desig my-2 mx-0">position</div>
        </div>

        <div className="teams my-4 mx-5 p-6 max-w-[30%] cursor-pointer border border-solid border-black rounded-xl transition duration-300 box-border hover:bg-slate-500 hover:rounded-xl">
          <img src={profile} alt="" className=" w-40 h-40" />
          <div className="name p-3 font-bold text-base uppercase">
            name here
          </div>
          <div className="desig my-2 mx-0">position</div>
        </div>

        <div className="teams my-4 mx-5 p-6 max-w-[30%] cursor-pointer border border-solid border-black rounded-xl transition duration-300 box-border hover:bg-slate-500 hover:rounded-xl">
          <img src={profile} alt="" className=" w-40 h-40" />
          <div className="name p-3 font-bold text-base uppercase">
            name here
          </div>
          <div className="desig my-2 mx-0">position</div>
        </div>

        <div className="teams my-4 mx-5 p-6 max-w-[30%] cursor-pointer border border-solid border-black rounded-xl transition duration-300 box-border hover:bg-slate-500 hover:rounded-xl">
          <img src={profile} alt="" className=" w-40 h-40" />
          <div className="name p-3 font-bold text-base uppercase">
            name here
          </div>
          <div className="desig my-2 mx-0">position</div>
        </div>

        <div className="teams my-4 mx-5 p-6 max-w-[30%] cursor-pointer border border-solid border-black rounded-xl transition duration-300 box-border hover:bg-slate-500 hover:rounded-xl">
          <img src={profile} alt="" className=" w-40 h-40" />
          <div className="name p-3 font-bold text-base uppercase">
            name here
          </div>
          <div className="desig my-2 mx-0">position</div>
        </div>
      </div>
    </div>
  );
};

export default Team;

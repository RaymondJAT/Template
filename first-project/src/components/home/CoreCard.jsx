import React from "react";

const CoreCard = ({ image, title, subtitle }) => {
  return (
    <article className="w-64 h-full m-5 rounded-3xl shadow-md bg-white overflow-hidden">
      <div className="flex justify-center h-40 text-center border-b border-gray-300">
        <img src={image} className="h-full" alt="core image" />
      </div>

      <div className="core_details py-5 px-5">
        <h2 className="text-2xl font-bold text-center">{title}</h2>
        <p className="text-lg mt-1 text-center">{subtitle}</p>
      </div>
    </article>
  );
};

export default CoreCard;

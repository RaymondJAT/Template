import React from "react";

const CoreCard = ({ image, title, subtitle, bgColor, txtColor, ttlColor }) => {
  return (
    <article
      className="w-64 h-full m-5 rounded-3xl shadow-md overflow-hidden"
      style={{ background: `${bgColor}` }}
    >
      <div className="flex justify-center h-40 text-center border-b border-gray-300">
        <img src={image} className="h-full" alt="core image" />
      </div>

      <div className="core_details py-5 px-5">
        <h2
          className="text-2xl font-bold text-center"
          style={{ color: `${txtColor}` }}
        >
          {title}
        </h2>
        <p
          className="text-lg mt-1 text-center"
          style={{ color: `${ttlColor}` }}
        >
          {subtitle}
        </p>
      </div>
    </article>
  );
};

export default CoreCard;

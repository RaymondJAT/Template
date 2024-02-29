import React from "react";

const NewsCard = ({ image, title, subtitle, seen }) => {
  return (
    <section className="product_card w-auto h-60 m-5 rounded-lg shadow-md bg-white overflow-hidden flex">
      <div className="product_image flex justify-center w-1/2 h-full text-center border-r border-gray-300">
        <a href="product/1">
          <img src={image} className="h-auto" alt="news image" />
        </a>
      </div>

      <div className="product_details py-5 px-5 w-1/2">
        <div className="justify-between flex-auto">
          <h3 className="product_title text-lg">{title}</h3>
          <h3 className="product_price text-21 font-bold">{subtitle}</h3>
        </div>

        <div className="align_left my-40 flex flex-col items-end">
          <p className="align_center product_rating h-8 py-1 px-2 font-semibold rounded-md text-black"></p>
          <p className="product_review_count text-base ml-2.5 text-gray-500 py-0 px-2.5 border-b-2 border-gray-300"></p>
          <p>{seen}</p>
        </div>

        <button className="w-10 h-10 rounded-full border-none bg-transparent cursor-pointer"></button>
      </div>
    </section>
  );
};

export default NewsCard;

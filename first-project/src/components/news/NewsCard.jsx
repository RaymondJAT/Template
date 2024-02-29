import React from "react";

const NewsCard = ({ image, iconLeft, title, subtitle, like }) => {
  return (
    <div className="product_card w-64 h-80 m-5 rounded-lg shadow-md bg-white overflow-hidden">
      <div className="product_image flex justify-center h-40 text-center border-b border-gray-300">
        <a href="product/1">
          <img
            src={image}
            className="h-full w-screen bg-contain"
            alt="product image"
          />
        </a>
      </div>
      <div className="product_details py-5 px-5">
        <h3 className="product_price text-21 font-bold">Article Title</h3>
        <p className="product_title text-sm mt-1 flex">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <div>
          <div className="align_left my-7 flex flex-col items-end">
            <p className="product_review_count text-base w-full text-gray-500 border-b-2 border-gray-200 mb-2"></p>
            <div className="flex items-center">
              <p className="align_center h-8 py-1 px-2 font-semibold text-black mr-36">
                <img src={iconLeft} alt="comment img" className="w-5 h-5" />
              </p>
              <p className="text-sm mr-2 ml-3">
                <img src={like} alt="like img" className="w-5 h-5" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

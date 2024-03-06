import React from "react";

const PartnerCard = ({ image }) => {
  return (
    <div className="product_card w-80 h-48 shadow-md bg-transparent overflow-hidden flex-col">
      <div className="product_image flex justify-center h-48 text-center">
        <a href="product/1">
          <img
            src={image}
            className="h-full w-screen bg-contain"
            style={{ border: "5px solid red" }}
            alt="product image"
          />
        </a>
      </div>
    </div>
  );
};

export default PartnerCard;

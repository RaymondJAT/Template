import React from "react";
import bg from "../../../assets/partner-bg.jpg";
import ProductCard from "./ProductCard";
import ups from "../../../assets/Products/UPS.png";
import ups2 from "../../../assets/Products/UPS2.png";
import yellow from "../../../assets/Products/yellow.png";
import ref from "../../../assets/Products/ref.png";
import dunkin from "../../../assets/Partner/Dunkin.jpg";
import wats from "../../../assets/Partner/watsons.jpg";
import sevEl from "../../../assets/Partner/seveneleven.png";
import PartnerCard from "./PartnerCard";

const ProductSection = () => {
  const red = {
    background: "#FF0000",
  };

  const styles = {
    backgroundImage: `linear-gradient(rgba(10, 0, 0, 0.7), rgba(10, 0, 0, 0.7)),url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    height: "680px",
  };

  return (
    <section
      className="product-section w-full h-screen flex items-center justify-center"
      style={styles}
    >
      <div className="section-container w-11/12 h-full pt-4 flex flex-wrap items-center justify-around">
        {/* 1st product */}
        <div className="card w-72 overflow-hidden mt-4 text-center border-4 border-solid border-red-600 rounded-2xl shadow-slate-400">
          <div className="product-image w-60 my-5 mx-auto">
            <img
              src={ref}
              alt=""
              className="w-full transition duration-500 hover:scale-110"
            />
          </div>
          <div className="product-info">
            <h4 className="text-lg py-0 px-6 mb-3 text-white">
              Lorem ipsum dolor sit amet.
            </h4>
          </div>
        </div>

        {/* 2nd product */}
        <div className="card w-72 overflow-hidden mt-4 text-center border-4 border-solid border-red-600 rounded-2xl shadow-slate-400">
          <div className="product-image w-60 my-5 mx-auto">
            <img
              src={ups}
              alt=""
              className="w-full transition duration-500 hover:scale-110"
            />
          </div>
          <div className="product-info">
            <h4 className="text-lg py-0 px-6 mb-3 text-white">
              Lorem ipsum dolor sit amet.
            </h4>
          </div>
        </div>

        {/* 3rd product */}
        <div className="card w-72 overflow-hidden mt-4 text-center border-4 border-solid border-red-600 rounded-2xl shadow-slate-400">
          <div className="product-image w-60 my-5 mx-auto">
            <img
              src={ups2}
              alt=""
              className="w-full transition duration-500 hover:scale-110"
            />
          </div>
          <div className="product-info">
            <h4 className="text-lg py-0 px-6 mb-3 text-white">
              Lorem ipsum dolor sit amet.
            </h4>
          </div>
        </div>

        {/* 4th product */}
        <div className="card w-72 overflow-hidden mt-4 text-center border-4 border-solid border-red-600 rounded-2xl shadow-slate-400">
          <div className="product-image w-60 my-5 mx-auto">
            <img
              src={yellow}
              alt=""
              className="w-full transition duration-500 hover:scale-110"
            />
          </div>
          <div className="product-info">
            <h4 className="text-lg py-0 px-6 mb-3 text-white">
              Lorem ipsum dolor sit amet.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

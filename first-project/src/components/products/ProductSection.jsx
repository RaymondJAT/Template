import React from "react";
import bg from "../../assets/partner-bg.jpg";
import ProductCard from "./ProductCard";
import ups from "../../assets/Products/UPS.png";
import ups2 from "../../assets/Products/UPS2.png";
import sm from "../../assets/Products/small.png";
import ref from "../../assets/Products/ref.png";

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
    height: "600px",
  };

  return (
    <section>
      <div style={styles}>
        <div className="pt-9 pb-9 flex flex-col">
          <h2 className="font-bold text-4xl text-center text-white">
            Our Products
          </h2>
        </div>
        <div className="align_center featured_products_list justify-evenly mb-16">
          <ProductCard image={ups} />
          <ProductCard image={sm} />
          <ProductCard image={ref} />
          <ProductCard image={ups2} />
        </div>

        <div className="w-64 text-center mx-auto mt-5">
          <button
            type="button"
            className="text-white w-64 py-2 justify-center rounded-md bg-stone-950 font-bold text-sm"
            style={red}
          >
            Learn more about our products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

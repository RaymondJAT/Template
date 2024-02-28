import React from "react";
import ContactForm from "../contact/ContactForm";

const NewsPage = () => {
  const background = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(200, 0, 0, 1))`,
  };
  return (
    <section
      className="relative h-5/6 py-1 px-24 flex justify-center items-center flex-col bg-slate-200"
      style={background}
    ></section>
  );
};

export default NewsPage;

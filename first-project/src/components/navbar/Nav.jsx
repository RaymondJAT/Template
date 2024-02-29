import React from "react";
import Link from "./Link";

const Nav = () => {
  const header = {
    background: `rgba(0, 0, 0, 0.8)`,
  };

  return (
    // align_center w-10/12 m-auto flex items-center justify-between
    <nav className="">
      <div
        id="banner"
        className="abosolute w-full h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4"
        style={header}
      >
        <div className="align_center flex-1">
          <h1
            id="navbar_heading"
            className="align_center text-5xl font-bold w-36 cursor-pointer text-white"
          >
            LOGO
          </h1>
        </div>
        <div
          id="navbar_links"
          className="align_center list-none inline-block my-0 mx-2.5 relative text-xs font-bold text-white"
        >
          <Link title="Home" link="/" />
          <Link title="About" link="/about" />
          <Link title="Services" link="/services" />
          <Link title="Products" link="/products" />
          <Link title="News" link="/news" />
          <Link title="Contacts" link="/contacts" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

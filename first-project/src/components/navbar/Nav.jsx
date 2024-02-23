import React from "react";
import Link from "./Link";

const Nav = () => {
  return (
    <div id="banner" className="abosolute w-full h-[4rem] py-7">
      <nav className="align_center w-3/5 m-auto flex items-center justify-between">
        <div className="align_center">
          <h1
            id="navbar_heading"
            className="align_center text-6xl font-bold w-36 cursor-pointer text-white"
          >
            LOGO
          </h1>
        </div>
        <div
          id="navbar_links"
          className="align_center list-none inline-block my-0 mx-2.5 relative text-sm text-white"
        >
          <Link title="Home" link="/" />
          <Link title="About" link="/about" />
          <Link title="Services" link="/services" />
          <Link title="Products" link="/products" />
          <Link title="News" link="/news" />
          <Link title="Contacts" link="/contacts" />
        </div>
      </nav>
    </div>
  );
};

export default Nav;

import React from "react";
import Link from "./Link";

const Nav = () => {
  const header = {
    background: `rgba(0, 0, 0, 0.5)`,
  };

  return (
    <div id="banner" className="abosolute w-full py-4 h-20" style={header}>
      <nav className="align_center w-10/12 m-auto flex items-center justify-between ">
        <div className="align_center">
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
      </nav>
    </div>
  );
};

export default Nav;

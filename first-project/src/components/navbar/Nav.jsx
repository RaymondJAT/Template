import React from "react";
import Link from "./Link";

const Nav = () => {
  return (
    <nav className="align_center w-3/4 m-auto flex items-center justify-between">
      <div className="align_center">
        <h1
          id="navbar_heading"
          className="align_center text-6xl font-bold w-36 cursor-pointer"
        >
          LOGO
        </h1>
      </div>

      <div
        id="navbar_links"
        className="align_center list-none inline-block my-0 mx-3.5 relative text-sm"
      >
        <Link title="Home" link="/" />
        <Link title="About" link="/about" />
        <Link title="Services" link="/services" />
        <Link title="Products" link="/products" />
        <Link title="News" link="/news" />
        <Link title="Contacts" link="/contacts" />
      </div>
    </nav>
  );
};

export default Nav;

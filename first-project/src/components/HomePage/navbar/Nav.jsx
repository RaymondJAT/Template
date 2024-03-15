import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.cjs";
import logo from "../../../assets/5L/5L_logo-Red.png";

const Nav = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Service", link: "/services" },
    { name: "Products", link: "/products" },
    { name: "News", link: "/news" },
    { name: "Contact", link: "/contacts" },
  ];

  let [isNav, isSetNav] = useState(false);

  const handleNavToggle = () => {
    isSetNav(!isNav);
  };

  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isNav) {
        isSetNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isNav]);

  const header = {
    background: `rgba(0, 0, 0, 0.95)`,
  };

  return (
    <div
      className="absolute flex justify-between items-center h-24 w-full mx-auto px-4 bg-black text-white"
      // style={header}
    >
      <div className="mx-7 cursor-pointer z-20">
        <img
          src={logo}
          alt="company logo"
          className="h-8 sm:h-10 flex flex-col justify-between items-center max-w-[1240px]"
        />
      </div>

      <div
        onClick={handleNavToggle}
        className="block md:hidden h-20 pt-7 mx-5 cursor-pointer z-20"
      >
        {isNav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in uppercase text-center py-0 px-6 ${
          isNav ? "top-24" : "top-[-490px]"
        }`}
        style={header}
      >
        {Links.map((link) => (
          <li className="md:ml-8 md:my-0 my-7 font-semibold text-sm py-1 px-0">
            <a
              href={link.link}
              className="text-white hover:text-red-600 duration-500"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;

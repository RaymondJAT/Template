import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/5L/5L_logo-Red.png";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const header = {
    background: `rgba(0, 0, 0, 0.9)`,
  };
  return (
    <div
      className="absolute flex justify-between items-center h-10vh w-full mx-auto z-50 px-4 text-white"
      style={header}
    >
      <h1 className="w-full mx-7 cursor-pointer">
        <img src={logo} alt="company logo" className="h-12 flex" />
      </h1>
      <ul className="hidden md:flex cursor-pointer mx-5 uppercase text-sm">
        <li className="p-7">Home</li>
        <li className="p-7">About</li>
        <li className="p-7">Services</li>
        <li className="p-7">Products</li>
        <li className="p-7">News</li>
        <li className="p-7">Contact</li>
      </ul>
      <div
        onClick={handleNav}
        className="block md:hidden h-20 pt-7 mx-5 cursor-pointer"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-4xl font-bold text-white m-4">
          <img src={logo} alt="company logo" className="h-12 flex" />
        </h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4 border-b border-gray-600">Services</li>
        <li className="p-4 border-b border-gray-600">Products</li>
        <li className="p-4 border-b border-gray-600">News</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Nav;

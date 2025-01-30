import React from "react";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 py-8 mx-auto max-w-7xl">
        <hr className="h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none" />
      </div>
      <div className="flex items-center justify-around px-4 pt-4 flex-wrap">
        <div>
          <img className="h-20" src={logo} alt="logo" />
        </div>
        <div className="mt-2 sm:mt-0">
          <p className="text-black text-sm font-inter no-underline normal-case text-center sm:text-left">
            Copyright 2020
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

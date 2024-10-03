import React from "react";
import { IoLogoFreebsdDevil } from "react-icons/io";

const Logo = () => {
  return (
    <div className="logo flex items-center justify-center">
      <IoLogoFreebsdDevil className="inline text-2xl md:text-4xl text-purpleMain" />
      <span className="text-purpleMain font-semibold mx-2 text-2xl">
        Todoist
      </span>
    </div>
  );
};

export default Logo;

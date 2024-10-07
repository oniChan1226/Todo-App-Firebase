import React from 'react';

const Button = ({ isIndex = "primary", type="", width="", disabled=false, children, onClick }) => {
  const baseClasses = "border border-purpleMain px-3 py-1 rounded-md font-normal dark:text-gray-300 hover:-translate-y-1 duration-500 transition-all hover:shadow-md hover:shadow-purpleMain";
  const primaryClasses = "hover:bg-purpleMain";
  const secondaryClasses = "bg-purpleMain hover:bg-transparent";
  const spacing = width ? width : "";

  return (
    <button className={`${baseClasses} ${isIndex === "primary" ? primaryClasses : secondaryClasses} ${spacing}`} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

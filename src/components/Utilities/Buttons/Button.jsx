import React from 'react';

const Button = ({ isIndex = "primary", type="", width="", disabled=false, children, onClick, TodoFieldButton=false }) => {
  const baseClasses = "border border-purpleMain px-3 py-1 rounded-md font-normal dark:text-gray-300 hover:-translate-y-1 duration-500 transition-all hover:shadow-md hover:shadow-purpleMain";
  const primaryClasses = "hover:bg-purpleMain";
  const secondaryClasses = "bg-purpleMain hover:bg-transparent";
  const TodoFieldClasses = "px-6 py-3 md:text-xl"
  const spacing = width ? width : "";

  return (
    <button className={`${baseClasses} ${TodoFieldButton ? TodoFieldClasses : ""} ${isIndex === "primary" ? primaryClasses : secondaryClasses} ${spacing} ${disabled ? "bg-lightGray hover:bg-lightGray text-mediumGray " : ""}`} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

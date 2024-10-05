import React from 'react';

const PrimaryBtn = ({ isIndex = "primary", children }) => {
  const baseClasses = "border border-purpleMain px-3 py-1 rounded-md font-normal dark:text-gray-300";
  const primaryClasses = "hover:bg-purpleMain";
  const secondaryClasses = "bg-purpleMain hover:bg-transparent";

  return (
    <button className={`${baseClasses} ${isIndex === "primary" ? primaryClasses : secondaryClasses}`}>
      {children}
    </button>
  );
};

export default PrimaryBtn;

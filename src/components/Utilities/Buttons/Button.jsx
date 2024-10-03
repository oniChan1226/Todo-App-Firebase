import React from 'react'

const PrimaryBtn = ({ label="button", isIndex="primary" }) => {
  return (
    <button className={` ${isIndex === "primary" ? "border border-purpleMain px-3 py-1 rounded-md font-normal hover:bg-purpleMain dark:text-gray-300" : "bg-purpleMain border border-purpleMain px-3 py-1 rounded-md font-normal hover:bg-transparent dark:text-gray-300"}`}>
              {label}
    </button>
  )
}

export default PrimaryBtn
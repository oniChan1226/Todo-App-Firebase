import React from "react";
import { Link } from "react-router-dom";

const FooterUlList = ({
  headline = "features",
  infoList = ["List-1", "List-2", "List-3"],
}) => {
  return (
    <div>
      <h3 className="text-text_gray dark:text-text_gray_dark text-xl xl:text-2xl capitalize mb-3 md:mb-8">{headline}</h3>
      <ul className="flex flex-col space-y-2 text-center md:text-start">
        {infoList.map((info, index) => (
          <li key={index}>
            <Link to={"#"}>
              <p className="text-text_gray dark:text-text_gray_dark">
                {info}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterUlList;

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaGit, FaInstagram, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <ul className="flex space-x-2 md:space-x-3 text-xl xl:text-2xl">
      <li>
        <Link to={"#"}>
          <FaFacebookSquare className="text-text_gray dark:text-text_gray_dark hover:text-purpleMain duration-200" />
        </Link>
      </li>
      <li>
        <Link to={"#"}>
          <FaInstagram className="text-text_gray dark:text-text_gray_dark hover:text-purpleMain duration-200" />
        </Link>
      </li>
      <li>
        <Link to={"#"}>
          <FaGit className="text-text_gray dark:text-text_gray_dark hover:text-purpleMain duration-200" />
        </Link>
      </li>
      <li>
        <Link to={"#"}>
          <FaLinkedin className="text-text_gray dark:text-text_gray_dark hover:text-purpleMain duration-200" />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;

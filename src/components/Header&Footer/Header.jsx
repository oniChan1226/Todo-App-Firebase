import React, { useEffect, useState } from "react";
import CustomizedSwitches from "../Utilities/DarkMode/DarkMode";
import { Link, NavLink } from "react-router-dom";
import Button from "../Utilities/Buttons/Button"
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger icon
import { IoClose } from "react-icons/io5"; // Close icon
import Logo from "../Utilities/Logo/Logo"
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { useUserAuth } from "../Contexts/UserAuthContext";
import { toast } from "react-toastify";

const Header = () => {
  const [theme, setTheme] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(true);

  useGSAP(() => {
    let tl = gsap.timeline()
    tl.from(".gsap-animation-logo", {
      x:-100,
      duration:0.5,
      opacity: 0,
    })
    tl.from(".gsap-animation-nav", {
      y:-30,
      duration:0.3,
      opacity: 0,
      stagger: 0.3,
    })
    tl.from(".gsap-animation-btns", {
      x:50,
      duration:0.3,
      opacity: 0,
    })
  })

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme ? "dark" : "light");
  }, [theme]);

  const handleBackdropClick = () => {
    setNavToggle(false);
    setToggleBtn(true);
  }

  const { logOut, user } = useUserAuth();

  const handleLogOut = async () => {
    console.log("called")
    try {
      await logOut();
      toast.success("Until we meet again! buhahaha");
    }
    catch(error) {
      toast.error("Error Logging out");
    }

  }

  return (
    <header className="shadow-md sticky w-full top-0 z-50 bg-bgSlightDark md:bg-inherit md:backdrop-blur-md dark:bg-bgSlightDark xl:tracking-wider">
      <nav
        className={` md:w-[85%] xl:w-[80%] md:mx-auto px-3 md:px-0 py-3 md:py-6 flex justify-between items-center text-xl relative`}
      >
        {/* Backdrop for mobile navigation */}
        {navToggle && (
          <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleBackdropClick}
          ></div>
        )}
        {/* Mobile Navigation */}
        <div className=" md:hidden">
          <GiHamburgerMenu className={`${toggleBtn ? "inline-block" : "hidden"} text-2xl text-text_gray_dark mr-2`} onClick={() => {setNavToggle(true); setToggleBtn(false)}} />
          <IoClose className={`${toggleBtn ? "hidden" : "inline-block"} text-2xl text-text_gray dark:text-text_gray_dark mr-2`} onClick={() =>{ setNavToggle(false); setToggleBtn(true)}} />
          <ul className={` ${navToggle ? "left-0 opacity-100 blur-none" : "left-[-100%] opacity-0 blur-sm"} flex flex-col justify-center absolute top-[100%] z-50 pl-4 py-3 space-y-2 text-xl w-full bg-white dark:bg-gray-500 font-medium tracking-wide text-black transition-all duration-500`}>
            <li>
              <NavLink to={"/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-orange-500"
                    : ""
                } `
              }
              onClick={() => {setNavToggle(false); setToggleBtn(true)}}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/features"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-orange-500"
                    : ""
                }`
              }
              onClick={() => {setNavToggle(false); setToggleBtn(true)}}>
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-orange-500"
                    : ""
                } `
              }
              onClick={() => {setNavToggle(false); setToggleBtn(true)}}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* logo */}
        <Logo/>

        {/* Navlinks */}
        <ul className="hidden md:flex justify-center items-center space-x-3 md:space-x-5 font-medium">
          <li className="gsap-animation-nav">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-purpleMain"
                    : "text-text_gray dark:text-text_gray_dark"
                } hover:text-purpleMain hover:dark:text-purpleMain`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="gsap-animation-nav">
            <NavLink
              to={"/todo"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-purpleMain"
                    : "text-text_gray dark:text-text_gray_dark"
                } hover:text-purpleMain hover:dark:text-purpleMain`
              }
            >
              Todos
            </NavLink>
          </li>
          <li className="gsap-animation-nav">
            <NavLink
              to={"/features"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-purpleMain"
                    : "text-text_gray dark:text-text_gray_dark"
                } hover:text-purpleMain hover:dark:text-purpleMain`
              }
            >
              Features
            </NavLink>
          </li>
          <li className="gsap-animation-nav">
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-purpleMain"
                    : "text-text_gray dark:text-text_gray_dark"
                } hover:text-purpleMain hover:dark:text-purpleMain`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* buttons */}
        <div className="buttons space-x-2  gsap-animation-btns">
          {user ? (
          <>
            <Button 
            isIndex="primary"
            onClick={handleLogOut}
            >
              Log out
            </Button>
          </> )
          :(<><Link to={"/login"} className="hidden md:inline-block">
            <Button 
            isIndex="primary"
            >
              Log in
            </Button>
          </Link>

          <Link to={"/signup"} className="hidden md:inline-block">
          <Button 
            isIndex="secondary"
            >
              Sign up
            </Button>
          </Link>
          </>)}

          <CustomizedSwitches toggleTheme={() => setTheme((prev) => !prev)} />
        </div>
      </nav>
    </header>
  );
};

export default Header;

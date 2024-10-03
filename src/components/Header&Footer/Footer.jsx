import React, { useState } from "react";
import Logo from "../Utilities/Logo/Logo";

import Socials from "../Utilities/Socials/Socials";
import FooterUlList from "../Utilities/FooterUlList/FooterUlList";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="dark:bg-bgDark">
      <div className="grid grid-cols-3 md:grid-cols-4 place-items-center space-y-8 md:space-y-0 gap-2 md:gap-5 md:w-[85%] xl:w-[80%] md:mx-auto px-3 md:px-0 py-12 md:py-28 space-x-2 md:space-x-4 border-t border-t-text_gray_dark">

        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start space-y-2 md:space-y-4 col-span-3 md:col-span-1">
          <Logo />
          <p className="text-text_gray dark:text-text_gray_dark">
            Join millions of people who organize work and life with Todoist.
          </p>
          <Socials />
        </div>

        <FooterUlList />
        <FooterUlList headline="about"/>
        <FooterUlList headline="contact"/>

      </div>

      <footer className="text-purpleMain text-sm md:text-base tracking-wide md:tracking-widest text-center whitespace-nowrap py-2 px-2 md:font-bold">
        &copy; {currentYear} YourCompanyName. All Rights Reserved.
      </footer>
    </section>
  );
};

export default Footer;

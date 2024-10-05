import React from "react";
import HeroImg from "../../assets/HeroImg-removebg-preview.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../../components/Utilities/Buttons/Button";
import { Link } from "react-router-dom";

const Home = () => {
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(".gsap-animation-hero1", {
      x: -50,
      duration: 0.8,
      opacity: 0,
      delay: 0.3,
    });
    tl.from(".gsap-animation-hero2", {
      x: 50,
      duration: 0.5,
      opacity: 0,
    });
  });

  return (
    <section className=" dark:bg-bgDark grid grid-cols-1 text-center md:text-start md:grid-cols-2 place-items-center gap-5 pt-8 md:pt-4 md:px-10 xl:px-32 pb-4 md:pb-4 h-[80vh] ">
      <article className="p-2 md:p-5 space-y-2 md:space-y-4 tracking-wide gsap-animation-hero1 ">
        <h1 className="text-3xl md:text-5xl xl:text-8xl text-purpleMain font-semibold ">
          Organize your work
        </h1>
        <span className="text-3xl md:text-5xl xl:text-8xl text-purpleMain font-semibold">
          and life.
        </span>
        <p className="text-xl xl:text-3xl text-text_gray dark:text-text_gray_dark pb-3">
          Simplify life for both you and your team with the world’s #1 task
          manager and to-do list app.
        </p>
        <Link to={"#"}>
          <Button>Join Now</Button>
        </Link>
      </article>

      <div className="w-1/2 md:w-auto gsap-animation-hero2">
        <img src={HeroImg} alt="Hero Image" className="xl:w-[800px]" />
      </div>
    </section>
  );
};

export default Home;

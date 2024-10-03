import React from 'react'
import HeroImg from '../../assets/HeroImg-removebg-preview.png'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'


const Home = () => {

  useGSAP(() => {
    gsap.from(".gsap-animation-hero", {
      x:-30,
      duration:0.5,
      opacity: 0,
      stagger: 0.3,
      delay: 0.7,
    })
  })

  return (
    <section className=' dark:bg-bgDark grid grid-cols-1 text-center md:text-start md:grid-cols-2 place-items-center gap-5 pt-8 md:pt-4 md:px-10 xl:px-32 pb-4 md:pb-4 h-[80vh] '>

      <article className="p-2 md:p-5 space-y-2 md:space-y-4 tracking-wide gsap-animation-hero">
        <h1 className='text-3xl md:text-5xl xl:text-8xl text-purpleMain font-semibold '>Organize your work</h1>
        <span className='text-3xl md:text-5xl xl:text-8xl text-purpleMain font-semibold '>and life.</span>
        <p className='text-xl xl:text-3xl text-text_gray dark:text-text_gray_dark'>Simplify life for both you and your team with the world’s #1 task manager and to-do list app.</p>
      </article>

      <div className='w-1/2 md:w-auto gsap-animation-hero'>
        <img src={HeroImg} alt="Hero Image" className='xl:w-[800px]'/>
      </div>

    </section>
  )
}

export default Home
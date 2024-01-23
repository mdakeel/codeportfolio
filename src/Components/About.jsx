import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoRemoveOutline } from "react-icons/io5";
import { FaGithubSquare, FaLinkedin, FaFileAlt } from "react-icons/fa";

export const About = () => {
  return (
   <>
    <section id='about'>
    <div className='md:p-[100px]  p-[50px] md:fixed md:w-1/3 w-screen flex flex-col  md:gap-[30px]  '>
        <div className='w-full space-y-2  text-balance'>
            <h1 className='text-5xl font-bold'>Mohd Aadil</h1>
            <h3 className='text-[18px] font-semibold'>Lead Engineer at Upstatement</h3>
            <p>I build pixel-perfect, accessible products for the web and beyond.</p>
        </div>
        <div className='md:mt-20 mt-10'>
            <ul className='space-y-3'>
                <li ><NavLink to={"/about"}><div className='menu'><IoRemoveOutline className='text-4xl text-primary ' />ABOUT</div></NavLink></li>
                <li><NavLink to={"/experience"}><div className='menu'><IoRemoveOutline  className='text-4xl  text-primary' />EXPERIENCE</div></NavLink></li>
                <li><NavLink to={"/project"}><div className='menu'><IoRemoveOutline className='text-4xl text-primary' />PROJECT</div></NavLink></li>
            </ul>
        </div>
        <div className='flex flex-row items-center md:justify-start justify-center space-x-4 md:mt-10 mt-[50px] text-2xl '>
              
                <a href="https://github.com/mdakeel/mohdaadil">
            <FaGithubSquare  className='hover:text-primary hover:scale-110 transition-all duration-300'/></a>
          
            <a href="https://www.linkedin.com/in/md-akeel-233ab1219/">
            <FaLinkedin className='hover:text-primary hover:scale-110 transition-all duration-300'/>
            </a>
          
            <a href="https://drive.google.com/file/d/1oIb52V7iCKjc9qS_frZ2O_-Q3s-Qqu1e/view?usp=sharing">
            <FaFileAlt className='hover:text-primary hover:scale-110 transition-all duration-300'/>
            </a>
        </div>
    </div>
    <div className="md:p-[100px] float-right md:right-0  md:w-3/4 lg:w-2/3 w-4/5 md:m-0 m-[50px]  ">
       <div className="w-full">
        <div className="flex w-full flex-col flex-row gap-4 xl:p-x-3 p-4 mb-10 ">
          
          <p className="w-full text-justify ">
            Back in 2012, I decided to try my hand at creating custom <span className="about">Tumblr
            themes</span> and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I've had the privilege of
            building software for an <span className="about">advertising agency</span>, a
            start-up, a student-led design studio, and
            a <span className="about">huge corporation</span>.
            </p>
            <p className="w-full text-justify">
              My main focus these days is building products and leading projects
              for our clients at <span className="about">Upstatement</span>. In my free time I've also released
              an <span className="about">online video course</span> that covers everything you need to know to
              build a web app with the Spotify API.
            </p>
            <p className="w-full text-justify">
              When I'm not at the computer, I'm usually rock climbing, hanging
              out with my wife and two cats, or running around Hyrule searching
              for Korok seeds <span className="about">Korok seeds</span>.
            </p>
          
        </div>
        </div>
        </div>
    </section>
   </>
  )
}

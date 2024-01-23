import React from 'react'
import { FaGithubSquare, FaLinkedin, FaFileAlt, FaAngleDown } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <>
    <header className='w-full h-[80vh]  ' id="home">
    <div className='md:px-[100px] md:p-4 pt-10 mt-14 '>
        <div className='flex md:flex-row md:mt-20 mt-8 flex-col h-full md:justify-between md:space-y-0 space-y-20 items-center'>
            <div className='flex flex-col gap-0 mt-4 '>
                <h3 className='md:text-[30px] text-[25px] font-semibold'>Hello, my name is</h3>
                <h1 className='md:text-[80px] text-[60px] drop-shadow-md  font-bold '>Mohd Aadil</h1>
                <h3 className='md:text-[30px] text-[25px] font-semibold'>I'm a <span className='font-bold drop-shadow-md  text-primary'>Full Stack Developer</span></h3>
                <NavLink to={"/about"} ><button className='mt-5 btnPrimary md:w-[145px] md:text-[15px] text-[12px] w-[128px] hover:shadow-3xl transition-all duration-300'>Know More</button></NavLink>
            </div>
            <div className='flex md:flex-col flex-row md:items-center  justify-center md:space-y-8 md:space-x-0 space-x-5 text-2xl '>
                <div>
                <a href="https://github.com/mdakeel/mohdaadil">
            <FaGithubSquare  className='hover:text-primary hover:scale-110 transition-all duration-300'/></a>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/md-akeel-233ab1219/">
            <FaLinkedin className='hover:text-primary hover:scale-110 transition-all duration-300'/>
            </a>
            </div>
            <div>
            <a href="https://drive.google.com/file/d/1oIb52V7iCKjc9qS_frZ2O_-Q3s-Qqu1e/view?usp=sharing">
            <FaFileAlt className='hover:text-primary hover:scale-110 transition-all duration-300'/>
            </a></div>
            </div>
        </div>    
    </div>
    <div className='flex items-center justify-center md:mt-[130px] mt-[70px]'><NavLink to={"/about"} ><FaAngleDown className='text-3xl hover:translate-y-2 transition-all duration-300 hover:text-primary' /></NavLink></div>
    </header>
    </>
  )
}

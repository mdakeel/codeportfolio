import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import portfolioDex from "../assets/portfolioDex.png";
import portfolioMob from "../assets/portfolioMob.png";
import taskifyDex from "../assets/taskifyDex.png";
import taskifyMob from "../assets/taskifyMob.png";

export const Project = () => {
  return (
    <>
      <div  className="md:p-[100px] float-right  md:w-3/4 lg:w-2/3 w-4/5 w-screen md:m-0 m-[50px] " id='project'>
        <div className="w-full lg:-mt-[150px] -mt-[100px] ">
          <div className="flex sm:flex-col xl:flex-row w-full flex-col mb-10 float-right  items-start  hover:bg-[#fafafa] hover:shadow-xl xl:p-3 p-4 ">
            <div className="w-full">
              <p className=" md:w-[150px] w-full text-[13px] p-[5px] font-semibold text-gray-600">
                2024 - PRESENT
              </p>
            </div>

            <div className="space-y-2 w-full ">
              <div className="flex w-full flex-col flex-row gap-2 md:px-4">
                <div className="flex items-center gap-1 ">
                  <a href="https://mdakeel-portfolio.onrender.com/" className="flex items-center gap-1">
                    <h1 className="text-xl font-bold">
                      Portfolio · AakilTayyab
                    </h1>
                    <FaArrowUp className="rotate-45 text-primary hover:-translate-y-1 hover:translate-x-1 transition-all duration-300 text-xl" />
                  </a>
                </div>

                <div className="flex gap-2">
                  <img src={portfolioDex} className="lg:w-[370px] sm:w-[350px] w-[250px] lg:h-[190px] sm:h-[150px] h-[100px] hover:drop-shadow-md " alt="img1" />
                  <img src={portfolioMob} className = "lg:w-[100px] sm:w-[90px] w-[60px] lg:h-[190px] sm:h-[150px] h-[100px] hover:drop-shadow-xl " alt="img2" />
                </div>
                <p className="text-justify text-balance ">
                  Deliver high-quality, robust production code for a diverse
                  array of projects for clients including Harvard Business
                  School, Everytown for Gun Safety, 
                  </p>
              </div>
              <div className="sm:w-[500px] xl:w-[600px] w-full ">
                <ul className="flex grid xl:grid-cols-5 sm:grid-cols-4  grid-cols-3 gap-2 ">
                  <li className="skills">React</li>
                  <li className="skills">Tailwind</li>
                  <li className="skills">JavaScrip</li>
                </ul>
              </div>
            </div>

          </div>

          <div className="flex sm:flex-col xl:flex-row w-full flex-col mb-10 float-right  items-start  hover:bg-[#fafafa] hover:shadow-xl xl:p-3 p-4 ">
            <div className="w-full">
              <p className=" md:w-[150px] w-full text-[13px] p-[5px] font-semibold text-gray-600">
                JULY - DEC 2023
              </p>
            </div>

            <div className="space-y-2 w-full ">
              <div className="flex w-full flex-col flex-row gap-2 md:px-4">
                <div className="flex items-center gap-1 ">
                  <a href="https://taskify-jamia.vercel.app/" className="flex items-center gap-1">
                    <h1 className="text-xl font-bold">
                      TaskiFy · Jamia
                    </h1>
                    
                    <FaArrowUp className="rotate-45 text-primary hover:-translate-y-1 hover:translate-x-1 transition-all duration-300 text-xl" />
                    </a>
                  
                </div>

                <div className="flex gap-2">
                  <img src={taskifyDex} className="lg:w-[370px] sm:w-[350px] w-[250px] lg:h-[190px] sm:h-[150px] h-[100px] hover:drop-shadow-md " alt="img1" />
                  <img src={taskifyMob} className = "lg:w-[100px] sm:w-[90px] w-[60px] lg:h-[190px] sm:h-[150px] h-[100px] hover:drop-shadow-xl " alt="img2" />
                </div>
                <p className="text-justify text-balance ">
                  Deliver high-quality, robust production code for a diverse
                  array of projects for clients including Harvard Business
                  School, Everytown for Gun Safety, 
                  </p>
              </div>
              <div className="sm:w-[500px] xl:w-[600px] w-full ">
                <ul className="flex grid xl:grid-cols-5 sm:grid-cols-4  grid-cols-3 gap-2 ">
                  <li className="skills">React</li>
                  <li className="skills">Tailwind</li>
                  <li className="skills">JavaScrip</li>
                  <li className="skills">Node Js</li>
                  <li className="skills">MOngoDb</li>

                </ul>
              </div>
            </div>
            
          </div>

          <div>
            <a
              href="https://drive.google.com/file/d/1oIb52V7iCKjc9qS_frZ2O_-Q3s-Qqu1e/view?usp=sharing"
              className="flex float-start p-10"
            >
              <h3 className="text-[16px] font-semibold">View Full Resume</h3>
              <FaArrowUp className="rotate-45 text-primary hover:-translate-y-1 hover:translate-x-1 transition-all duration-300 text-xl" />
            </a>
          </div>

          <div className="flex fixed md:bottom-16 bottom-8 md:right-10 right-8 ">
            <NavLink to={"/"}>
              <FaAngleDown className="md:text-4xl text-2xl rotate-180 hover:-translate-y-2 transition-all duration-300 hover:text-primary" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

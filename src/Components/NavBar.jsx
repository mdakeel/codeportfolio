import React, { useState } from 'react'
import logo from '../assets/logo.png'

//NOTE when clink on nav menu for scroll download npm i react-scroll and import 
import { Link } from 'react-scroll';

//react icon start
import { GrLanguage } from "react-icons/gr";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        }

        const navItems = [
        {link: 'HOME', path: 'home'},
        {link: 'ABOUT', path: 'about'},
        {link: 'EXPERIENCE', path: 'experience'},
        {link: 'PROJECT', path: 'project'},
    ]

  return (
    <>
    <nav className='md:px-[100px] p-3  bg-secondary w-full h-[60px] '>
    <div className='flex items-center justify-between '>      
            <div className='flex items-center gap-1 cursor-pointer'>
                <img src={logo} alt="logo" className='w-6 -rotate-90 ' />
                <h1 className='text-3xl font-semibold '>Code</h1>
            </div>
            <div className='flex space-x-14 items-center'>
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link,path}) => <NavLink activeClass='active' spy={true} smooth={true} offset={100} key={link} to={path}
                        className=' hover:text-primary font-semibold text-[14px] text-gray-600 hover:translate-y-[-3px] transition-all duration-300 cursor-pointer'>{link}</NavLink>)
                    }
                </ul>
            </div>
           
                {/* menu btn. only display on mobile */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className=' text-xl focus:outline-none '>
                        {
                            isMenuOpen ? 
                            (<FaXmark className='w-6 h-6 text-primary'/>) 
                            : 
                            (<FaBars className='w-6 h-6 text-primary'/>)
                        }
                    </button>
                </div>
        </div>
    </nav>
    {/* navitem for mobile devices start */}
    <div className={`space-y-4 px-4 pt-8 pb-5 bg-secondary ${isMenuOpen ? " fixed top-14 right-0 left-0" : "hidden"}`}>
    {
        navItems.map(({link,path}) => <NavLink activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block text-gray-600 hover:text-primary hover:translate-x-3 transition-all duration-300 cursor-pointer'
        onClick={toggleMenu}
        >{link}</NavLink>)
    }
</div>
{/* navitem for mobile devices end */}
</>
  )
}

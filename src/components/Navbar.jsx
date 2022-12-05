import React, { useState } from "react";

import logo from "../assets/logo.png";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
   const [toggle, setToggle] = useState(false);
   return (
      <nav className="w-full flex py-6 justify-between items-center navbar">
         <img src={logo} className="w-[102px] h-[47px]" alt="hoobank" />
         <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
               <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer transition-all leading-[17px] tracking-[1px] uppercase duration-300  text-[13px] text-laito hover:text-secondary active:text-secondary ${index === navLinks.length - 1 ? " mr-0" : "mr-10"
                     }`}
               >
                  {nav.id === "https://linktr.ee/abdelghanie" ? <a href={nav.id}>{nav.title}</a> : <Link to={nav.id}>{nav.title}</Link>}
               </li>
            ))}
         </ul>
         <div className="sm:hidden flex flex-1 justify-end item-center">
            <img
               src={toggle ? close : menu}
               alt="menu"
               className="w-[28px] h-[28px] object-contain"
               onClick={() => setToggle((prev) => !prev)}
            />
            <div
               className={`${toggle ? "flex" : "hidden"
                  } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
               <ul className="list-none flex flex-col justify-end items-center flex-1">
                  {navLinks.map((nav, index) => (
                     <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer transition-all leading-[17px] tracking-[1px] uppercase duration-300  text-[13px] text-laito hover:text-secondary active:text-secondary ${index === navLinks.length - 1 ? " mr-0" : "mb-4"
                           }`}
                     >
                        {nav.id === "https://linktr.ee/abdelghanie" ? <a href={nav.id}>{nav.title}</a> : <Link to={nav.id}>{nav.title}</Link>}
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;

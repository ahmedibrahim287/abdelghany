import React from 'react'
import logo from "../assets/logo.png";
import styles from "../styles.js";

const Footer = () => {
   return (

      <section className={`${styles.flexCenter} flex-col`}>
         <img src={logo} className="w-[102px] h-[47px]" alt="hoobank" />
         <p className=" mb-6 text-dimWhite text-[15px] leading-[25px] font-extralight capitalize">©2022 Abd-Elghany Mohmamed All Rights reserved</p>
      </section>
   )
}

export default Footer
import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { aboutMeInfo, aboutMeParagraph } from '../../constants'
import styles from '../../styles'
import styules from "./About.module.css"
import aboutImg from "../../assets/about.jpg"
import InfoCard from "../../components/InfoCard"
const About = () => {
   return (
      <>

         {/* <section className="relative">
            <div className="bg-transparent w-full overflow-hidden text-slate-100	absolute h-[260px]">
               <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                  <div className={`${styles.boxWidth}`}>
                     <Navbar />
                  </div>
               </div>
            </div>
         </section> */}
         <div className={` ${styles.flexCenter} `}  >
            <div className={`${styles.flexCenter} flex-col text-center`}>
               <h1 className="mb-10 text-white text-[48px] leading-[53px] font-light capitalize">{aboutMeParagraph}</h1>
            </div>
         </div>

         <section className={`${styles.flexCenter} flex-col text-center`}>
            <img src={aboutImg} alt="sdsd" className="w-[20%] sm:w-[15%] md:w-[10%] m-auto rounded-[6rem] " />
            {aboutMeInfo.map((info, index) => (
               <InfoCard key={index} info={info} />))
            }
         </section>

         {/* <Footer /> */}
      </>

   )
}

export default About
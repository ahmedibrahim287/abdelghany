import React from "react";
import Navbar from "../../components/Navbar";
import { aboutMeHeader, Header, prevWork, skills } from "../../constants";
import styles from "../../styles";
import styules from "./Home.module.css"
import CvBtn from "../../components/CvBtn"
import CardOfWork from "../../components/CardOfWork";
import CardOfSkills from "../../components/CardOfSkills";
import Footer from "../../components/Footer";


const Home = () => {
   return (
      <>
         <section className="relative">
            <div className="bg-transparent w-full overflow-hidden text-slate-100	absolute h-[260px]">
               <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                  <div className={`${styles.boxWidth}`}>
                     <Navbar />
                  </div>
               </div>
            </div>
            <div className={`${styules.new} ${styles.flexCenter}`}  >
               <div className={`${styles.flexCenter} flex-col text-center`}>
                  <h1 className="mb-10 text-white text-[48px] leading-[53px] font-light capitalize">{aboutMeHeader}</h1>
                  <p className="mb-6 text-dimWhite text-[20px] leading-[25px] font-extralight capitalize">{Header}</p>
                  <CvBtn />
               </div>
            </div>
         </section>

         <section className="flex flex-col items-center justify-center text-center" >
            <h2 id="LatestWork" className="mb-10 text-white text-[50px] leading-[53px] font-medium capitalize">

               Latest work
            </h2>
            <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
               {prevWork.map((work, index) => (
                  <div key={work.id} className=" flex flex-col justify-center items-center text-center">
                     <CardOfWork work={work} />
                  </div>
               ))}
            </div>
         </section>




         <section className="flex flex-col items-center justify-center text-center mt-16">
            <h2 className="mb-10 text-white text-[50px] leading-[53px] font-medium capitalize">
               Skills
            </h2>
            <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
               {skills.map((skill, index) => (
                  <div key={skill.id} className=" flex flex-col justify-center items-center text-center">
                     <CardOfSkills skill={skill} />
                  </div>
               ))}
            </div>
         </section>


         <Footer />

      </>
   )
}

export default Home
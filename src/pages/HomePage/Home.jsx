import React from "react";
import Navbar from "../../components/Navbar";
import { aboutMeHeader, Header } from "../../constants";
import styles from "../../styles";
import styules from "./Home.module.css"
import CvBtn from "../../components/CvBtn"
import Footer from "../../components/Footer";


import {
   Outlet,
   useNavigation,
} from "react-router-dom";

const Home = () => {
   const navigation = useNavigation();
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



         <div id="detail" className={
            navigation.state === "loading" ? "loading" : ""
         }>
            <Outlet />
         </div>
         <Footer />

      </>
   )
}

export default Home
import React from 'react'
import { prevWork, skills } from "../constants";

import CardOfWork from "../components/CardOfWork";
import CardOfSkills from "../components/CardOfSkills";
const Index = () => {
   return (
      <>

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
      </>
   )
}

export default Index
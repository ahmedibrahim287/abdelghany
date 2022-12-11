import React from 'react'

const CardOfWork = ({ work }) => {
   return (
      <>
         <div className="max-w-sm rounded overflow-hidden shadow-xl shadow-dimBlue mb-14 ">
            <a href={work.link}>
               <img className="w-[400px] h-[350px] object-cover scale-100 hover:scale-y-105 hover:scale-x-110 transition-all duration-500" src={work.img} alt="Sunset in the mountains  " />
            </a>
            {/* <div className="px-6 py-4">
               <div className="mb-6 text-dimWhite text-[20px] leading-[25px] font-extralight capitalize">{work.title}</div>
            </div> */}
         </div>
      </>


   )
}

export default CardOfWork
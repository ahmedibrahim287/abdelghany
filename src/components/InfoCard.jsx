import React from 'react'

const InfoCard = ({ info }) => {
   return (
      <div className="w-[80%] sm:w-[65%] md:w-[60%] flex flex-col    mb-5 p-5 text-justify">
         <div className="mb-2 text-white text-[30px] leading-[53px] font-medium capitalize">{info.header} :</div>
         <div className="mb-6 text-dimWhite text-[18px] leading-[25px] font-extralight capitalize">{info.description}</div>
      </div>
   )
}

export default InfoCard
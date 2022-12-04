import React from 'react'

const CardOfSkills = ({ skill }) => {
   return (
      <div className="max-w-sm rounded overflow-hidden  mb-14 object-contain">
         <img className="w-[30%] m-auto rounded-[6rem] " src={skill.img} alt="Sunset in the mountains" />
         <div className="px-6 py-4">
            <div className="mb-6 text-dimWhite text-[20px] leading-[25px] font-extralight capitalize">{skill.description}</div>
         </div>
      </div>
   )
}

export default CardOfSkills
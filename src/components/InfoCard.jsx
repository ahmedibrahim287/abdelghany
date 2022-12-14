import React from "react";

const InfoCard = ({ info }) => {
  return (
    <div className="w-[100%] sm:w-[100%] md:w-[60%] flex flex-col    mb-5  text-left">
      <div className="mb-2 text-white text-[30px] leading-[53px] font-medium capitalize">
        {info.header}{" "}
      </div>
      <div className="mb-6 text-dimWhite text-[18px] leading-[25px] font-extralight capitalize">
        {info.description}
      </div>
    </div>
  );
};

export default InfoCard;

import React from "react";
import { FaBell } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const HeroWrapper = ({ children }) => {
  return (
    <div className="flex fixed sm:top-[90px] top-[60px] left-0 md:left-[200px] md:pt-5 md:pr-[200px] justify-center w-full items-center bg-white h-full">
      {children}
      <div className="bg-blue-200 hidden h-full w-[60px] md:mt-[-45px] sm:flex flex-col justify-between items-end">
        <button className="flex relative hover:bg-blue-500 hover:text-white px-3 items-center gap-3 h-11 bg-white text-[#4299e1] text-[16px] rounded-[4px] font-semibold">
          <FaBell size={22} />
          <div className="absolute top-[6px] right-[6px] w-4 h-4 rounded-full text-white bg-red-500 text-[10px]">
            <span className="translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]">
              3
            </span>
          </div>
        </button>
        <div>
          <div className="w-9 h-[150px] bg-white rounded-md mb-6"></div>
          <span className="w-9 h-9 mr-1 text-violet-600 rounded-full flex justify-center items-center bg-white mb-28">
            <FiPlus size={22} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroWrapper;

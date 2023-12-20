import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CgMenuLeftAlt } from "react-icons/cg";
import MobileNav from "../sidebar/MobileNav";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div
        className="md:hidden fixed top-2 left-2 p-2 z-50"
        onClick={() => setShowNav((pre) => !pre)}
      >
        <CgMenuLeftAlt color="blue" size={22} />
      </div>
      <div className="sm:h-[90px] h-[60px] fixed top-0 w-full md:pl-[200px] flex items-center justify-between bg-blue-200 sm:pr-[40px]">
        <div className="md:flex hidden items-center">
          <div className="header-model"></div>
        </div>
        <div className="md:flex items-center gap-2 hidden">
          <button className="flex px-3 cursor-pointer hover:bg-blue-500 hover:text-white items-center gap-3 h-11 bg-white text-black text-[12px] sm:text-[14px] rounded-[4px] font-semibold">
            <span className="w-9 h-9 rounded-full bg-red-400">
              <img
                src="./user.jpg"
                className="w-full h-full object-cover overflow-hidden rounded-full"
                alt="user"
              />
            </span>
            <span>XYZ Enterprises Pvt Ltd.</span>
          </button>
          <button className="flex cursor-pointer hover:bg-blue-500 hover:text-white px-3 items-center gap-3 h-11 bg-white text-black text-[14px] rounded-[4px] font-semibold">
            <IoIosArrowDown />
          </button>
        </div>
      </div>
      <MobileNav showNav={showNav} setShowNav={setShowNav} />
    </>
  );
};

export default Header;

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { navigationLinks } from "../../data/data";
import { NavLink } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar = () => {
  return (
    <>
      <div className="md:flex flex-col top-0 left-0 h-screen w-[200px] hidden bg-white">
        <div className="bg-white w-full h-[90px] flex items-center justify-center">
          <h1 className="text-[42px] font-bold text-[#4299e1]">P</h1>
        </div>
        <div className="h-full hidden sm:flex justify-between flex-col shadow-lg border-r border-t mt-3">
          <div>
            <div className="flex justify-center shadows flex-col p-5 items-center overflow-hidden">
              <div className="rounded-full w-[90px] h-[90px] bg-red-200 overflow-hidden">
                <img
                  src="./user.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="flex gap-2 items-center">
                <h2 className="text-[18px] font-bold">Ram mohan</h2>
                <IoIosArrowForward color="#4299e1" />
              </div>
              <p className="text-[14px]">rammohan2@gmail.com</p>
            </div>
            <div className="flex-col gap-5 hidden sm:flex pr-[40px] pt-5 lg:pt-10">
              {navigationLinks.map((item, id) => (
                <NavLink
                  to={item.link}
                  key={id}
                  className={({ isActive }) =>
                    isActive
                      ? "flex py-2 items-center gap-3 bg-blue-600/70 text-white hover:bg-blue-200  rounded-r-[8px] pl-4"
                      : "flex py-2 items-center gap-3 border-[0.5px] rounded-r-[8px] pl-4 overflow-hidden hover:bg-blue-600/50 hover:scale-105 transition-all ease-in-out duration-200"
                  }
                >
                  {item.icon}
                  <span className="text-[16px] font-semibold">
                    {item.title}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="bg-blue-200/20 flex py-3 cursor-pointer items-center justify-center hover:bg-blue-600/70 hover:text-white">
            <p className="font-semibold flex items-center gap-4 text-[16px] text-blue-400 hover:text-white">
              Logout <AiOutlineLogout size={20} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

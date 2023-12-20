import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { navigationLinks } from "../../data/data";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";

const MobileNav = ({ showNav, setShowNav }) => {
  return (
    <div
      className={`flex ${
        showNav ? "translate-x-0" : "translate-x-[-100%]"
      } flex-col top-0 fixed z-50 left-0 h-screen w-[200px] sm:hidden shadow-lg bg-white transition-all ease-linear duration-200`}
    >
      <div className="bg-white w-full h-[90px] flex items-center justify-center">
        <h1 className="text-[42px] font-bold text-[#4299e1]">P</h1>
      </div>
      <div className="h-full flex justify-between flex-col shadow-lg border-r border-t mt-3">
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
              <h2 className="text-[14px] font-bold">Ram mohan</h2>
              <IoIosArrowForward color="#4299e1" />
            </div>
            <p className="text-[12px]">rammohan2@gmail.com</p>
          </div>
          <div className="flex-col gap-5 flex pr-[40px] pt-5 lg:pt-10">
            {navigationLinks.map((item, id) => (
              <NavLink
                onClick={() => setShowNav(false)}
                to={item.link}
                key={id}
                className={({ isActive }) =>
                  isActive
                    ? "flex py-2 items-center gap-3 bg-blue-600/70 text-white hover:bg-blue-200  rounded-r-[8px] pl-4"
                    : "flex py-2 items-center gap-3 border-[0.5px] rounded-r-[8px] pl-4 overflow-hidden hover:bg-blue-600/50 hover:scale-105 transition-all ease-in-out duration-200"
                }
              >
                {item.icon}
                <span className="text-[14px] font-semibold">{item.title}</span>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="bg-blue-200/20 flex py-3 items-center justify-center">
          <p className="font-semibold text-[14px] text-blue-400">Logout</p>
        </div>
      </div>
      <MdClose
        className="fixed top-2 right-2 hover:text-red-600"
        size={25}
        color=""
        onClick={() => setShowNav(false)}
      />
    </div>
  );
};

export default MobileNav;

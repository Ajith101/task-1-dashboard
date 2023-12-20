import React from "react";
import Button from "../button/Button";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail, MdStorage } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

const PlanCard = ({ item }) => {
  const { name, rate, discount, description, bg } = item;
  return (
    <div className="flex shadow-md flex-col px-4 py-2 rounded-[16px] shadows">
      <h2 className="text-[16px] font-bold">{name}</h2>
      <p className="text-[12px] strike w-fit">{rate}/m</p>
      <span className="text-[14px] font-semibold">
        ${"  "}
        {discount}/m
      </span>
      <Button color={bg} title={"Get check"} />
      <div>
        {" "}
        <div className="w-full border-b-[1px] border-gray-400/50 mt-5"></div>
        <div className="flex flex-col gap-1 mt-3">
          <p className="text-[13px]">what you will get :</p>
          <div className="flex items-center gap-2">
            <div className="w-fit">
              <FaRegUser size={12} />
            </div>
            <p className="text-[14px] font-semibold">{}</p>
            <p className="text-[14px]">{description?.user}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-fit">
              <MdStorage size={12} />
            </div>
            <p className="text-[14px]">{description.storage}</p>
          </div>
          <div className="flex items-center gap-2 break-words">
            <div className="w-fit">
              <MdOutlineEmail size={12} />
            </div>
            <p className="text-[16px]">{description?.support}</p>
          </div>
          <div className="flex items-center">
            <span className="w-[14px]"></span>
            <span className="underline text-[16px] font-semibold tracking-wider text-gray-800">
              Explore Features
            </span>
            <IoMdArrowDropright color="blue" size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;

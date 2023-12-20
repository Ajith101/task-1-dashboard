import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdDoneAll, MdOutlineEmail, MdStorage } from "react-icons/md";
import Button from "../button/Button";

const PlancardSecond = ({ item }) => {
  const { title, text, bg, features, btnText, heading, description } = item;
  return (
    <div className="bg-white px-4 py-2 flex xl:flex-row flex-col shadows items-center justify-between rounded-[15px] shadow-md">
      <div className="flex flex-col gap-1 xl:w-[60%] w-full">
        <span
          className={`rounded-[14px] font-semibold flex items-center gap-3 text-center px-2 text-[10px] w-fit ${bg} text-black`}
        >
          {heading}
        </span>
        <h2 className="text-[16px] font-bold">{title}</h2>
        <p className="text-[14px] w-fit mb-3">{text}</p>
        <Button color={bg} title={btnText} />
      </div>
      <div className="flex flex-col gap-1 ml-2 mt-3 xl:w-[40%] w-full">
        <p className="text-[12px]">what you will get :</p>
        {description?.user && (
          <div className="flex items-center gap-2">
            <FaRegUser size={12} />
            <p className="text-[14px] font-semibold">{description?.user}</p>
          </div>
        )}
        {description?.storage && (
          <div className="flex items-center gap-2">
            <MdStorage size={12} />
            <p className="text-[14px] font-semibold">{description?.storage}</p>
          </div>
        )}
        {description?.support && (
          <div className="flex items-center gap-2">
            <MdOutlineEmail size={12} />
            <p className="text-[14px] font-semibold">{description?.support}</p>
          </div>
        )}
        {features && (
          <div className="flex gap-2 break-words">
            <MdDoneAll size={42} className="" />
            <p className="text-[14px] font-semibold break-words">{features}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlancardSecond;

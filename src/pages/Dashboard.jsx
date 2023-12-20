import React from "react";
import PlanCard from "../components/cards/Plancard";
import { planInfo, planInfoTwo } from "../data/data";
import PlancardSecond from "../components/cards/PlancardSecond";

const Dashboard = () => {
  return (
    <section className="w-full h-full px-4 md:px-16 overflow-y-scroll py-3">
      <div>
        <div className="flex justify-between items-center py-5 md:py-0">
          <h2 className="text-[18px] font-bold mb-5">
            Choose a plan that's just right for you !
          </h2>
          <div className="border-[1px] border-black rounded-[12px] p-1 flex items-center w-fit">
            <button
              className={`rounded-[12px] flex items-center gap-3 text-center px-2 py-1 text-[12px] font-semibold w-fit bg-blue-300 text-black`}
            >
              Monthly
            </button>
            <button
              className={`rounded-[12px] flex items-center gap-3 text-center px-2 py-1 font-semibold text-[12px] w-fit text-black`}
            >
              Annually
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 2xl:gap-40 gap-4">
          {planInfo.map((item, id) => (
            <PlanCard item={item} key={id} />
          ))}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:gap-6 grid-cols-1 2xl:gap-40 pt-6 gap-4">
        {planInfoTwo.map((item, id) => (
          <PlancardSecond item={item} key={id} />
        ))}
      </div>
      <p className="text-blue-400 pt-5 md:mt-4 text-right font-[10px]">
        *some unique features are provided as add-ons wih individual plans for
        each features
      </p>
    </section>
  );
};

export default Dashboard;

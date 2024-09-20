import { numberFormat } from "../../../utils/format";
import { trendTopics } from "../../../constant";
import { PiDotsThreeCircle } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { PiSmileySadThin } from "react-icons/pi";

const TrendsSection = () => {
  return (
    <div className="w-full border border-neutral-800/70 pt-4 rounded-2xl mt-4 overflow-hidden">
      <h1 className="pl-4  mb-1.5 font-semibold text-lg">Trends for you</h1>
      {trendTopics.map((topic) => (
        <button
          key={topic.id}
          className="w-full flex items-start justify-between px-4 py-2 hover:bg-neutral-800/70 transition-colors"
        >
          <div className="flex flex-col items-start">
            <span className="text-xs text-neutral-500">{topic.category}</span>
            <span className="text-sm">#{topic.title}</span>
            <span className="text-xs text-neutral-500">
              {numberFormat(topic.posts)} posts
            </span>
          </div>
          <Popover className="relative">
            <PopoverButton>
              <PiDotsThreeCircle className="text-xl hover:text-blue-500 transition-colors" />
            </PopoverButton>
            <PopoverPanel className="absolute bg-black top-0 z-40 right-0 min-w-[300px] shadow-box-shadow rounded-xl ">
              <button className="w-full flex items-center px-2.5 py-2">
                <PiSmileySadThin className="text-2xl" />
                <p className="flex-1 text-[15px]">Not interested in this</p>
              </button>
              <button className="w-full flex items-center px-2.5 py-2">
                <PiSmileySadThin className="text-2xl" />
                <p className="flex-1 text-[15px]">
                  This trend is harmful or spammy
                </p>
              </button>
            </PopoverPanel>
          </Popover>
        </button>
      ))}
      <NavLink className="text-blue-500 block px-4 mt-2 text-sm py-2.5 hover:bg-neutral-800/70 text-start">
        Show more
      </NavLink>
    </div>
  );
};

export default TrendsSection;

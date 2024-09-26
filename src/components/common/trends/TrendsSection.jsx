import { numberFormat } from "../../../utils/format";
import { trendTopics } from "../../../constant";
import { PiDotsThreeCircle } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { PiSmileySadThin } from "react-icons/pi";

const TrendsSection = () => {
  return (
    <div className="w-full border border-neutral-500/50 bg-[color:var(--background-primary)] pt-4 rounded-2xl mt-4 overflow-hidden">
      <h1 className="pl-4 text-[color:var(--text-color)] mb-1.5 font-semibold text-lg">
        Trends for you
      </h1>
      {trendTopics.map((topic) => (
        <button
          key={topic.id}
          className="w-full flex items-start justify-between px-4 py-2 hover-effect transition-colors"
        >
          <div className="flex flex-col items-start">
            <span className="text-xs text-[color:var(--text-color-secondary)]">
              {topic.category}
            </span>
            <span className="text-sm font-semibold text-[color:var(--text-color)]">
              #{topic.title}
            </span>
            <span className="text-xs text-[color:var(--text-color-secondary)]">
              {numberFormat(topic.posts)} posts
            </span>
          </div>
          <Popover className="relative text-[color:var(--text-color)]">
            <PopoverButton>
              <PiDotsThreeCircle className="text-xl hover:text-[color:var(--color-primary)] transition-colors" />
            </PopoverButton>
            <PopoverPanel className="absolute bg-[color:var(--background-primary)] top-0 z-40 right-0 min-w-[300px] shadow-box rounded-xl ">
              <button className="w-full flex items-center px-2.5 py-2">
                <PiSmileySadThin className="text-2xl mr-2.5" />
                <p className="text-[15px]">Not interested in this</p>
              </button>
              <button className="w-full flex items-center px-2.5 py-2">
                <PiSmileySadThin className="text-2xl mr-2.5" />
                <p className="text-[15px]">
                  This trend is harmful or spammy
                </p>
              </button>
            </PopoverPanel>
          </Popover>
        </button>
      ))}
      <NavLink className="text-[color:var(--color-primary)] block px-4 mt-2 text-sm py-2.5 hover-effect text-start">
        Show more
      </NavLink>
    </div>
  );
};

export default TrendsSection;

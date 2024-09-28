import PropTypes from "prop-types";
import { numberFormat } from "../../utils/format";
import { Popover, PopoverPanel, PopoverButton } from "@headlessui/react";
import { PiDotsThreeCircle, PiSmileySadThin } from "react-icons/pi";

const TrendingItem = ({ title, category, posts }) => {
  return (
    <div>
      <button className="w-full flex items-start justify-between px-4 py-2 hover:bg-[--hover] transition-colors">
        <div className="flex flex-col items-start">
          <span className="text-xs text-[color:var(--text-color-secondary)]">
            {category}
          </span>
          <span className="text-sm font-semibold text-[color:var(--text-color)]">
            #{title}
          </span>
          <span className="text-xs text-[color:var(--text-color-secondary)]">
            {numberFormat(posts)} posts
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
              <p className="text-[15px]">This trend is harmful or spammy</p>
            </button>
          </PopoverPanel>
        </Popover>
      </button>
    </div>
  );
};

TrendingItem.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  posts: PropTypes.number.isRequired,
};

export default TrendingItem;

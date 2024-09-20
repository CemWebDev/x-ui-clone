import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import PropTypes from "prop-types";
import PopoverPanelContent from "./PopoverPanelContent";
import { morePopoverLinks } from "../../../constant";

const MorePopover = ({ icon: Icon }) => {
  return (
    <Popover className="relative outline-none">
      <PopoverButton className="block text-start">
        <div className="inline-flex items-center gap-4 p-2.5 rounded-full hover:bg-neutral-800/70 transition-colors">
          <Icon className="text-2xl" />
          <span className="hidden xl:block text-xl">More</span>
        </div>
      </PopoverButton>
      <PopoverPanel className="absolute overflow-hidden flex flex-col items-center w-[318px] bottom-4 left-0 bg-black rounded-xl shadow-box-shadow">
        {morePopoverLinks.map((link) => (
          <PopoverPanelContent key={link.id} {...link} />
        ))}
      </PopoverPanel>
    </Popover>
  );
};

MorePopover.propTypes = {
  icon: PropTypes.elementType.isRequired,
};

export default MorePopover;

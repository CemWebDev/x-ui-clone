import { NavLink } from "react-router-dom";
import { trendsFooterLinks } from "../../../constant";
import { footerPopoverLinks } from "../../../constant";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const Footer = () => {
  return (
    <footer className="mt-2 mb-4 px-4 text-[.8125rem] text-start">
      {trendsFooterLinks.map((link) =>
        link.path ? (
          <NavLink
            to={link.path}
            key={link.id}
            className="m-1 hover:underline text-neutral-500"  
          >
            {link.text}
          </NavLink>
        ) : (
          <Popover key={link.id} className="relative">
            <PopoverButton className="text-neutral-500">
              {link.text}
            </PopoverButton>
            <PopoverPanel className="absolute -top-48 left-1/2 -translate-x-1/2 bg-black w-48 max-w-[24rem] rounded-2xl shadow-box-shadow overflow-hidden">
              {footerPopoverLinks.map((link) => (
                <NavLink
                  key={link.id}
                  className="w-full block text-base text-white hover:bg-neutral-800/70 py-2 px-3"
                  to={link.path}
                >
                  {link.text}
                </NavLink>
              ))}
            </PopoverPanel>
          </Popover>
        )
      )}
      <div className="text-xs text-neutral-500 my-2">
      &copy; 2024 cemwebdev Corp.
      </div>
    </footer>
  );
};

export default Footer;

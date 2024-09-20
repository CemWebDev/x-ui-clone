import { FaXTwitter } from "react-icons/fa6";
import { sidebarLinks } from "../../../constant/index";
import { NavLink } from "react-router-dom";
import SidebarLink from "./SidebarLink";
import Button from "../../UI/Button";
import Profile from "./Profile";
import { FaFeather } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="min-h-screen sticky top-0 max-h-screen flex flex-col w-20 xl:w-64 pl-3 pr-4">
      <div className="mt-3 text-3xl pl-2.5">
        <NavLink to="/">
          <FaXTwitter />
        </NavLink>
      </div>
      <ul className="my-3 flex flex-col items-start gap-1">
        {sidebarLinks.map((link) => (
          <SidebarLink key={link.id} {...link} />
        ))}
      </ul>
      <Button size="large">
        <span className="hidden 2xl:block">Post</span>
        <span className="block 2xl:hidden">
          <FaFeather />
        </span>
      </Button>
      <Profile />
    </aside>
  );
};

export default Sidebar;

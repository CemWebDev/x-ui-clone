import { NavLink } from "react-router-dom";
import SuggestedFollow from "./SuggestedFollow";
import { whoToFollow } from "../../../constant";

const WhoToFollow = () => {
  return (
    <div className="w-full border border-neutral-800/70 pt-4 rounded-2xl mt-4 overflow-hidden">
      <h1 className="pl-4  mb-1.5 font-semibold text-lg">Who To Follow</h1>
      {whoToFollow.map((user) => (
        <SuggestedFollow key={user.id} user={user} /> 
      ))}
      <NavLink className="text-blue-500 block px-4 mt-2 text-sm py-2.5 hover:bg-neutral-800/70 text-start">
        Show more
      </NavLink>
    </div>
  );
};

export default WhoToFollow;

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useAccount } from "../../../store/auth/hooks";
import { PiDotsThreeCircle } from "react-icons/pi";

const Profile = () => {
  const account = useAccount();

  return (
    <div className="mt-auto">
      <Popover className="relative">
        <PopoverButton className="mt-3 mb-1 xl:hover:bg-neutral-800/70 w-full flex px-2 py-3 rounded-full items-center">
          <div className="flex items-center gap-1 flex-1">
            <img
              src={account.avatar}
              alt="avatar"
              className="xl:w-10 xl:h-10 rounded-full"
            />
            <div className="xl:flex flex-col items-starts hidden gap-0.5">
              <h6 className="text-white font-semibold">{account.fullName}</h6>
              <div className="text-xs text-gray-300">{account.username}</div>
            </div>
          </div>
          <PiDotsThreeCircle className="hidden xl:block text-xl" />
        </PopoverButton>
        <PopoverPanel className="absolute bottom-10 z-20 w-[300px] left-0 bg-black shadow-box-shadow rounded-xl py-3">
          <button className="py-2 hover:bg-neutral-800/70 w-full transition-colors">
            Add an existing account
          </button>
          <button className="py-2 hover:bg-neutral-800/70 w-full transition-colors">
            Log out @{account.username}
          </button>
        </PopoverPanel>
      </Popover>
    </div>
  );
};

export default Profile;

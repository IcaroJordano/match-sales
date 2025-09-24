import { FaLock } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";
import { LuLayoutDashboard, LuUserRound } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";

const Menu = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null;

  return (
    <nav className="lg:hidden w-full bg-black/20 fixed top-15 left-0 flex z-50 h-full">
      <div className="w-10/12 mt-5 p-5 flex flex-col gap-2 bg-neutral-800 dark:bg-white mx-auto max-h-80 rounded-xl">
        <div className="font-bold cursor-pointer bg-neutral-700/50 dark:bg-neutral-200/40 py-3 rounded-md flex px-5 gap-3 items-center">
          <LuUserRound className="text-lg" />
          Users List
        </div>
        <div className="relative font-bold cursor-pointer  py-3 rounded-md flex px-5 gap-3 items-center group">
          <LuLayoutDashboard className="text-base" />
          Dashboard
          <FaLock className="absolute text-rose-500 right-4 top-1/2 -translate-y-1/2 text-xs hidden group-hover:block" />
        </div>
        <div className="relative font-bold cursor-pointer  py-3 rounded-md flex px-5 gap-3 items-center group">
          <GoGraph className="text-base" />
          Monitoring
          <FaLock className="absolute text-rose-500 right-4 top-1/2 -translate-y-1/2 text-xs hidden group-hover:block" />
        </div>
        <div className="relative font-bold cursor-pointer  py-3 rounded-md flex px-5 gap-3 items-center group">
          <MdOutlineSecurity className="text-base" />
          Auth Security
          <FaLock className="absolute text-rose-500 dark:text-rose-6s00 right-4 top-1/2 -translate-y-1/2 text-xs hidden group-hover:block" />
        </div>
        <div className="relative font-bold cursor-pointer  py-3 rounded-md flex px-5 gap-3 items-center group">
          <IoIosSettings className="text-base" />
          Settings
          <FaLock className="absolute text-rose-500 dark:text-rose-6s00 right-4 top-1/2 -translate-y-1/2 text-xs hidden group-hover:block" />
        </div>
      </div>
    </nav>
  );
};

export default Menu;

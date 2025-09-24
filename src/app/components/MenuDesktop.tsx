"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLock } from "react-icons/fa";
import { GoGraph, GoHomeFill } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";
import { LuLayoutDashboard, LuUserRound } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";

const MenuDesktop = ({ isOpen }: { isOpen: boolean }) => {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    pathname === href
      ? "font-bold cursor-pointer bg-neutral-800/50 dark:bg-neutral-200/40 py-3 rounded-md flex px-5 gap-3 items-center"
      : "relative font-bold cursor-pointer hover:bg-neutral-800/50 dark:hover:bg-neutral-200/40 py-3 rounded-md flex px-5 gap-3 items-center";

  return (
    <nav
      className={`${
        isOpen ? "w-3/12 border-r" : "w-0 border-0"
      } gap-2 hidden lg:flex flex-col transition-all truncate duration-700 justify-between py-5 border-neutral-600 dark:border-neutral-200 overflow-y-auto`}
    >
      <div className="px-3 gap-2 flex-col flex">
        <Link href={"/"} className={linkClass("/")}>
          <GoHomeFill className="text-lg" />
          Home page
        </Link>

        <Link href="/users" className={linkClass("/users")}>
          <LuUserRound className="text-lg" />
          Users List
        </Link>

        <div className="relative font-bold cursor-pointer hover:bg-neutral-800/50 dark:hover:bg-neutral-200/40 py-3 rounded-md flex px-5 gap-3 items-center group">
          <LuLayoutDashboard className="text-base" />
          Dashboard
          <FaLock className="absolute text-rose-500 dark:text-rose-600 right-4 top-1/2 -translate-y-1/2 text-xs hidden group-hover:block" />
        </div>

        <div className="relative font-bold cursor-pointer hover:bg-neutral-800/50 dark:hover:bg-neutral-200/40 py-3 rounded-md flex px-5 gap-3 items-center group">
          <GoGraph className="text-base" />
          Monitoring
          <FaLock className="absolute text-rose-500 dark:text-rose-600 right-4 top-1/2 -translate-y-1/2 text-xs hidden group-hover:block" />
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t px-4 pt-2 border-neutral-500 dark:border-neutral-200">
        <div className="relative font-bold cursor-pointer hover:bg-neutral-800/50 dark:hover:bg-neutral-200 py-3 rounded-md flex px-5 gap-3 items-center group">
          <MdOutlineSecurity className="text-base" />
          Auth Security
          <FaLock className="absolute text-rose-500 dark:text-rose-600 right-4 top-1/2 -translate-y-1/2 text-xs hidden group-hover:block" />
        </div>
        <div className="relative font-bold cursor-pointer hover:bg-neutral-800/50 dark:hover:bg-neutral-200 py-3 rounded-md flex px-5 gap-3 items-center group">
          <IoIosSettings className="text-base" />
          Settings
          <FaLock className="absolute text-rose-500 dark:text-rose-600 right-4 top-1/2 -translate-y-1/2 text-xs hidden group-hover:block" />
        </div>
      </div>
    </nav>
  );
};

export default MenuDesktop;

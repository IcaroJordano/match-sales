"use client";

import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CiMenuFries, CiUser } from "react-icons/ci";
import { FaLock, FaRegUser, FaSun, FaUser } from "react-icons/fa";
import { GiPadlockOpen } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";
import { LuLayoutDashboard, LuUserRound } from "react-icons/lu";
import { MdDarkMode, MdOutlineSecurity } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import { SiAuth0 } from "react-icons/si";
import { useTheme } from "../hooks/useTheme";

const MainDesktop = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex h-screen flex-col bg-neutral-900 dark:bg-neutral-50 dark:text-black/60 text-white">
      {/* Header */}
      <header className="border-b py-5 px-5 border-neutral-600 dark:border-neutral-200 flex justify-between">
        <div className="flex gap-3 font-semibold text-xl">
          <RiMenu2Line
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="p-1 hover:text-purple-300  hover:border-purple-300/50 dark:hover:text-black/60  dark:hover:border-neutral-400 transition-all duration-300 cursor-pointer text-3xl rounded-md border border-neutral-700 dark:border-neutral-200"
          />
          <h1>
            Bem vindo,{" "}
            <span className="text-purple-400 dark:text-purple-600 ">
              Time Match Sales
            </span>
          </h1>
        </div>
        <div className="flex gap-3">
          {theme === "dark" ? (
            <MdDarkMode
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 p-1  dark:text-black hover:border-neutral-700  transition-all duration-300 cursor-pointer text-2xl rounded-md border border-neutral-600 dark:border-neutral-200"
            />
          ) : (
            <FaSun
              onClick={() => setTheme("dark")}
              className="w-8 h-8 p-1 hover:text-purple-400 dark:text-black hover:border-purple-400/50  transition-all duration-300 cursor-pointer text-2xl rounded-md border border-neutral-600 dark:border-neutral-200"
            />
          )}

          <img
            className="w-8 h-8 cursor-pointer text-2xl rounded-md border border-neutral-600"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLU6CGQIPweu6hjsiHdhnxyWE3Ar9HLrF4aw&s"
            alt=""
            transition-all
          />
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <nav
          className={`${
            isOpen ? "w-3/12 border-r" : "w-0 border-0"
          }   gap-2 flex-col transition-all truncate duration-700 justify-between py-5 flex border-neutral-600 dark:border-neutral-200 overflow-y-auto`}
        >
          <div className="px-3 gap-2 flex-col flex">
            <div className="font-bold cursor-pointer bg-neutral-800/50 dark:bg-neutral-200/40 py-3 rounded-md flex px-5 gap-3 items-center">
              <LuUserRound className="text-lg" />
              Users List
            </div>
            <div className="relative font-bold cursor-pointer hover:bg-neutral-800/50 dark:hover:bg-neutral-200/40 py-3 rounded-md flex px-5 gap-3 items-center group">
              <LuLayoutDashboard className="text-base" />
              Dashboard
              <FaLock className="absolute text-[#ff5ef7] dark:text-black right-4 top-3 text-xs hidden group-hover:block" />
            </div>
            <div className="relative font-bold cursor-pointer hover:bg-neutral-800/50 dark:hover:bg-neutral-200/40 py-3 rounded-md flex px-5 gap-3 items-center group">
              <GoGraph className="text-base" />
              Monitoring
              <FaLock className="absolute text-[#ff5ef7] dark:text-black right-4 top-3 text-xs hidden group-hover:block" />
            </div>
          </div>

          <div className=" flex flex-col gap-2 border-t px-4 pt-2 border-neutral-500 dark:border-neutral-200">
            <div className="relative font-bold cursor-pointer hover:bg-neutral-800/50 dark:hover:bg-neutral-200 py-3 rounded-md flex px-5 gap-3 items-center group">
              <MdOutlineSecurity className="text-base" />
              Auth Security
              <FaLock className="absolute text-[#ff5ef7] dark:text-black right-4 top-3 text-xs hidden group-hover:block" />
            </div>
            <div className="relative font-bold cursor-pointer hover:bg-neutral-800/50 dark:hover:bg-neutral-200 py-3 rounded-md flex px-5 gap-3 items-center group">
              <IoIosSettings className="text-base" />
              Settings
              <FaLock className="absolute text-[#ff5ef7] dark:text-black right-4 top-3 text-xs hidden group-hover:block" />
            </div>
          </div>
        </nav>

        {/* Main content */}
        <div className="flex-1 overflow-auto ">{children}</div>
      </div>
    </div>
  );
};

export default MainDesktop;

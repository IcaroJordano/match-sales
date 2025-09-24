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
import Header from "./Header";
import MenuDesktop from "./MenuDesktop";
import Menu from "./Menu";

const MainDesktop = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col bg-neutral-900 dark:bg-neutral-50 dark:text-black/60 text-white">
      {/* Header */}
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <MenuDesktop isOpen={isOpen} />
        <Menu isOpen={isOpen} />

        {/* Main content */}
        <div className="flex-1  overflow-auto dark:bg-neutral-100 ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainDesktop;

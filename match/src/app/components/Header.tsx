"use client";

import { FaSun } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import { useTheme } from "../hooks/useTheme";

const Header = ({ setIsOpen, isOpen }: { setIsOpen: any; isOpen: any }) => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="border-b py-3 bg-neutral-950/80 lg:bg-neutral-900 dark:bg-neutral-50 dark:lg:bg-neutral-50 lg:py-5 px-5 border-neutral-600 dark:border-neutral-200 flex justify-between">
      <div className="flex gap-3 font-semibold text-xl">
        <RiMenu2Line
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="p-1 hover:text-rose-400  hover:border-rose-300/50 dark:hover:text-black/60  dark:hover:border-neutral-400 transition-all duration-300 cursor-pointer text-4xl lg:text-3xl rounded-md border border-neutral-700 dark:border-neutral-200"
        />
        <h1 className="hidden lg:flex">
          Bem vindo, <span className="text-rose-500">Time Match Sales</span>
        </h1>
      </div>
      <div className="flex gap-3">
        {theme === "dark" ? (
          <MdDarkMode
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-8 h-8 p-1  dark:text-black hover:border-neutral-700  transition-all duration-300 cursor-pointer text-3xl lg:text-2xl rounded-md border border-neutral-600 dark:border-neutral-200"
          />
        ) : (
          <FaSun
            onClick={() => setTheme("dark")}
            className="w-8 h-8 p-1 hover:text-rose-400 dark:text-black hover:border-rose-400/50  transition-all duration-300 cursor-pointer text-xl lg:text-2xl rounded-md border border-neutral-600 dark:border-neutral-200"
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
  );
};

export default Header;

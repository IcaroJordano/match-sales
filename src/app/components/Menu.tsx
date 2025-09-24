"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaLock } from "react-icons/fa";
import { GoGraph, GoHomeFill } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";
import { LuLayoutDashboard, LuUserRound } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import Link from "next/link";

const Menu = ({ isOpen }: { isOpen: boolean }) => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string | null>(null);

  if (!isOpen) return null;

  const linkClass = (href: string) =>
    pathname === href
      ? "font-bold cursor-pointer bg-neutral-700/50 dark:bg-neutral-200/40 py-3 rounded-md flex px-5 gap-3 items-center"
      : "relative font-bold cursor-pointer py-3 rounded-md flex px-5 gap-3 items-center hover:bg-neutral-800/50 dark:hover:bg-neutral-200/40";

  const menuItems = [
    {
      href: "/",
      label: "Home page",
      icon: <GoHomeFill className="text-lg" />,
      locked: false,
    },
    {
      href: "/users",
      label: "Users List",
      icon: <LuUserRound className="text-lg" />,
      locked: false,
    },
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <LuLayoutDashboard className="text-base" />,
      locked: true,
    },
    {
      href: "/monitoring",
      label: "Monitoring",
      icon: <GoGraph className="text-base" />,
      locked: true,
    },
    {
      href: "/auth-security",
      label: "Auth Security",
      icon: <MdOutlineSecurity className="text-base" />,
      locked: true,
    },
    {
      href: "/settings",
      label: "Settings",
      icon: <IoIosSettings className="text-base" />,
      locked: true,
    },
  ];

  return (
    <nav className="lg:hidden w-full bg-black/20 fixed top-15 left-0 flex z-50 h-full">
      <div className="w-10/12 mt-5 p-5 flex flex-col gap-2 overflow-y-auto bg-neutral-800 dark:bg-white mx-auto max-h-80 rounded-xl">
        {menuItems.map((item) => {
          if (!item.locked) {
            // Link normal sem cadeado
            return (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass(item.href)}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          }

          // Items com bloqueio
          return (
            <div
              key={item.href}
              className={linkClass(item.href)}
              onClick={() =>
                setActiveItem(activeItem === item.href ? null : item.href)
              }
            >
              {item.icon}
              {item.label}
              {activeItem === item.href && (
                <FaLock className="absolute text-rose-500 right-4 top-1/2 -translate-y-1/2 text-xs" />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Menu;

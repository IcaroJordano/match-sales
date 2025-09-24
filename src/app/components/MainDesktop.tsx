"use client";

import { useState } from "react";
import Header from "./Header";
import MenuDesktop from "./MenuDesktop";
import Menu from "./Menu";

const MainDesktop = ({ children }: { children: React.ReactNode }) => {
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

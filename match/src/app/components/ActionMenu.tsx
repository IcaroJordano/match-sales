"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { BiEdit } from "react-icons/bi";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { ImBin } from "react-icons/im";

type ActionMenuProps = {
  options?: {
    label: string;
    color?: string;
    icon?: ReactNode; // Novo campo para ícone
    onClick: () => void;
  }[];
  className?: string; // Para personalizar o container externo
};

export default function ActionMenu({
  options = [
    {
      label: "Editar",
      color: "text-white dark:text-neutral-900",
      icon: <BiEdit />, // Exemplo de ícone
      onClick: () => console.log("Editar"),
    },
    {
      label: "Excluir",
      color: "text-rose-500",
      icon: <ImBin />,
      onClick: () => console.log("Excluir"),
    },
  ],
  className = "",
}: ActionMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`} ref={ref}>
      {/* Botão */}
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-md hover:text-rose-400"
      >
        <HiOutlineEllipsisVertical className="text-2xl lg:text-4xl" />
      </div>

      {/* Menu */}
      {open && (
        <div className="absolute right-0 lg:right-10 mt-2 w-40 dark:bg-white bg-neutral-900/70 flex flex-col rounded-lg shadow-lg border border-neutral-200/20 dark:border-neutral-200 z-50">
          {options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => {
                opt.onClick();
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 hover:opacity-80 flex items-center gap-2 ${
                opt.color ?? "text-neutral-900 dark:text-white"
              }`}
            >
              {opt.icon && (
                <span className="flex items-center">{opt.icon}</span>
              )}
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import CreateUser from "./CreateUser";
import UsersList from "./UsersList";
import { BiPlus } from "react-icons/bi";

export default function UsersPage() {
  const [isOpen, setIsOpne] = useState(false);

  return (
    <main className="mx-auto max-w-6xl  dark:bg-neutral-100 p-5">
      <div className="flex  lg:flex-row  justify-between w-full">
        <h2 className="mb-6 text-2xl flex font-bold text-white dark:text-neutral-900">
          <span className="hidden lg:flex mr-2">Listagem de</span> Usuários
        </h2>
        <button
          onClick={() => setIsOpne(true)}
          className="flex bg-rose-500 h-10 w-36 items-center gap-2 px-2 dark:text-white dark:bg-neutral-900 rounded-md"
        >
          <BiPlus />
          Novo Usuário
        </button>
      </div>
      <UsersList />
      <CreateUser isOpen={isOpen} setIsOpen={setIsOpne} />
    </main>
  );
}

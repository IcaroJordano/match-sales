"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaEllipsisVertical, FaLocationDot } from "react-icons/fa6";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import TableDesktop from "../components/TableDesktop";
import { IoLocate } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import TableSkeleton from "../components/TableSkeleton";
import ErrorPage from "../components/ErrorPage";
import CreateUser from "./CreateUser";
import { BiSearch } from "react-icons/bi";
import ActionMenu from "../components/ActionMenu";

type User = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
};

async function fetchUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", // evita mismatch SSR x client
  });
  if (!res.ok) throw new Error("Erro ao carregar usuários");
  return res.json();
}

export default function UsersList() {
  const { data, error, isLoading, isError, refetch } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const [search, setSearch] = useState("");

  // filtro por nome
  const filteredUsers =
    data?.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    ) || [];

  // 🔹 LOADING
  if (isLoading) {
    return (
      <>
        <TableSkeleton />
        <div className="lg:hidden grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-28 animate-pulse rounded-xl bg-zinc-800"
            />
          ))}
        </div>
      </>
    );
  }

  // 🔹 ERRO
  if (isError) {
    return <ErrorPage onRetry={refetch} />;
  }

  // 🔹 SUCESSO
  return (
    <div className="space-y-6 transition-all duration-500 ">
      {/* Search */}
      <div className="w-full border max-w-sm px-3  border-zinc-700 dark:bg-neutral-50 dark:border-neutral-200 dark:text-black bg-zinc-900 rounded-lg flex items-center">
        <BiSearch />
        <input
          type="text"
          placeholder="Buscar por nome..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border-zinc-700 dark:bg-neutral-50 dark:border-neutral-200 dark:text-black bg-zinc-900 px-3 py-2 text-white placeholder-zinc-500  focus:outline-none"
        />
      </div>

      {/* Lista */}
      {filteredUsers.length > 0 ? (
        <div className="flex flex-col items-center gap-4 justify-center ">
          <TableDesktop filteredUsers={filteredUsers} />
          <div className="lg:hidden w-full flex flex-col gap-4">
            {filteredUsers.map((user) => (
              <>
                <div className="flex rounded-xl bg-neutral-800 dark:bg-neutral-100 dark:shadow  p-4">
                  <div className="flex gap-4 items-center ">
                    <img
                      className="w-12 h-12 object-cover rounded-full"
                      src="./user-placeholder.png"
                      alt=""
                    />
                    <div className="text-neutral-400 dark:text-neutral-500 text-sm flex flex-col gap-0.5">
                      <h2 className="font-bold text-base dark:text-neutral-700 text-white">
                        {user.name}{" "}
                      </h2>
                      <div className="flex items-center gap-1 max-w-[200px]">
                        <MdEmail className="flex-shrink-0" />
                        <span className="truncate overflow-hidden whitespace-nowrap">
                          {user.email}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 max-w-[200px]">
                        <FaLocationDot className="flex-shrink-0" />
                        <span className="truncate overflow-hidden whitespace-nowrap">
                          {user.address.city}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <ActionMenu />
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-zinc-400">Nenhum usuário encontrado.</p>
      )}
    </div>
  );
}

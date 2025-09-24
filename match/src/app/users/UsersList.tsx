"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaEllipsisVertical, FaLocationDot } from "react-icons/fa6";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import TableDesktop from "../components/TableDesktop";
import { IoLocate } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-28 animate-pulse rounded-xl bg-zinc-800" />
        ))}
      </div>
    );
  }

  // 🔹 ERRO
  if (isError) {
    return (
      <div className="text-center">
        <p className="mb-2 text-red-500">
          Ocorreu um erro: {(error as Error).message}
        </p>
        <button
          onClick={() => refetch()}
          className="rounded-lg bg-violet-600 px-4 py-2 text-white hover:bg-violet-700"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  // 🔹 SUCESSO
  return (
    <div className="space-y-6 transition-all duration-500 ">
      {/* Search */}
      {/* <div className="flex w-full max-w-sm">
        <input
          type="text"
          placeholder="Buscar por nome..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder-zinc-500 focus:border-violet-600 focus:outline-none"
        />
      </div> */}

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
                  <div className=" text-rose-500 ml-auto rounded-md flex items-center justify-center">
                    <HiOutlineEllipsisVertical className="text-3xl " />
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

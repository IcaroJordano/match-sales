"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";

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
          <>
            <table className="min-w-full border truncate border-neutral-100 dark:bg-neutral-200 bg-neutral-200/10  dark:border-neutral-200 text-white dark:text-neutral-500 rounded-xl overflow-hidden">
              <thead className="bg-neutral-900/70  border-b  dark:border-neutral-200 border-neutral-700 dark:bg-neutral-100 min-w-full">
                <tr>
                  <th className="px-6 py-5 text-left  font-semibold">
                    Profile
                  </th>
                  <th className="px-6 py-5 text-left  font-semibold">Nome</th>
                  <th className="px-6 py-5 text-left  font-semibold">Email</th>
                  <th className="px-6 py-5 text-left  font-semibold">Cidade</th>
                  <th className="px-6 py-5 text-left  font-semibold">Ações</th>
                </tr>
              </thead>
              <tbody className=" bg-neutral-900/70 dark:bg-neutral-50">
                {filteredUsers.map((user) => (
                  <tr className="hover:bg-neutral-800/90 dark:hover:bg-neutral-100  border-b border-neutral-700 dark:border-neutral-200 transition-colors">
                    <td className="px-6 py-4 hover:text-pink-400">
                      <img
                        className="w-10 h-10 object-cover rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfaDkQdhg6yji1yDOvvgoizD_Z97VaoJ3hKg&s"
                        alt=""
                      />
                    </td>
                    <td className="px-6 py-4 hover:text-purple-400 dark:hover:text-purple-600 ">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 hover:text-purple-400 dark:hover:text-purple-600 ">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 hover:text-purple-400 dark:hover:text-purple-600 ">
                      {user.address.city}
                    </td>
                    <td className="px-6 py-4  text-center cursor-pointer">
                      <div className="w-8  h-8    hover:bg-white/80 dark:hover:bg-neutral-800/80  hover:text-neutral-800 dark:hover:text-white  rounded-md flex items-center justify-center">
                        <HiOutlineEllipsisVertical className="text-lg " />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-right w-full mr-20">Exibindo 3 de 3 usuários</p>
          </>
        </div>
      ) : (
        <p className="text-center text-zinc-400">Nenhum usuário encontrado.</p>
      )}
    </div>
  );
}

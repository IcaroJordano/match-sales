"use client";

import React from "react";
import { CgClose } from "react-icons/cg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useQueryClient } from "@tanstack/react-query";

// 1️⃣ Definindo o schema de validação
const createUserSchema = z.object({
  name: z.string().min(2, "O nome deve ter no mínimo 2 caracteres"),
  email: z.string().email("Email inválido"),
  city: z.string().optional(),
});

type CreateUserFormData = z.infer<typeof createUserSchema>;

export default function CreateUser({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserSchema),
  });

  if (!isOpen) return null;

  const onSubmit = async (data: CreateUserFormData) => {
    // Simula delay de submissão
    await new Promise((r) => setTimeout(r, 1000));

    // Atualiza a lista de usuários localmente
    queryClient.setQueryData(["users"], (oldData: any) => [
      ...(oldData || []),
      {
        id: Date.now(),
        name: data.name,
        email: data.email,
        address: { city: data.city || "" },
      },
    ]);

    reset(); // limpa o form
    setIsOpen(false); // fecha modal
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="w-full h-full fixed top-0 left-0 bg-neutral-900 dark:bg-white lg:relative lg:w-5/12 lg:h-9/12 lg:rounded-xl">
        <div className="flex h-screen w-full flex-col bg-background-light font-display text-text-dark">
          {/* Header */}
          <header className="flex h-16 items-center justify-between border-b border-neutral-700 dark:border-neutral-200 px-4">
            <button
              className="text-text-light"
              onClick={() => setIsOpen(false)}
            >
              <CgClose size={24} />
            </button>
            <h1 className="text-lg font-bold text-text-dark">
              Adicionar Usuário
            </h1>
            <div className="w-8" />
          </header>

          {/* Main */}
          <main className="flex-1 overflow-y-auto bg-background-light p-6">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              {/* Nome */}
              <div className="space-y-1">
                <label className="font-medium text-text-dark" htmlFor="name">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Nome do usuário"
                  className="form-input w-full rounded-lg border border-neutral-700 dark:border-neutral-200 bg-surface-light p-4 py-3 mt-2 text-base text-text-dark placeholder-text-light "
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="font-medium text-text-dark" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email do usuário"
                  className="form-input w-full rounded-lg border border-neutral-700 dark:border-neutral-200 bg-surface-light p-4 py-3 mt-2 text-base text-text-dark placeholder-text-light "
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Cidade */}
              <div className="space-y-1">
                <label className="font-medium text-text-dark" htmlFor="city">
                  Cidade (Opcional)
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Cidade do usuário"
                  className="form-input w-full rounded-lg border border-neutral-700 dark:border-neutral-200 bg-surface-light p-4 py-3 mt-2 text-base text-text-dark placeholder-text-light "
                  {...register("city")}
                />
              </div>

              {/* Submit */}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center rounded-lg bg-rose-500 bg-button-dark py-3 text-base font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {isSubmitting ? "Adicionando..." : "Adicionar"}
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

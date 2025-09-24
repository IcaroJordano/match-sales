"use client";

import React from "react";
import { CgClose } from "react-icons/cg";

export default function CreateUser({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden w-full bg-neutral-900 dark:bg-white fixed top-0 left-0 flex z-50 h-full">
      <div className="flex h-screen w-full flex-col bg-background-light font-display text-text-dark">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b border-neutral-700 dark:border-neutral-200  px-4">
          <button className="text-text-light">
            <CgClose
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </button>
          <h1 className="text-lg font-bold text-text-dark">
            Adicionar Usuário
          </h1>
          <div className="w-8" />
        </header>

        {/* Main */}
        <main className="flex-1 overflow-y-auto bg-background-light p-6">
          <form className="space-y-6">
            {/* Nome */}
            <div className="space-y-2">
              <label className="font-medium text-text-dark" htmlFor="name">
                Nome
              </label>
              <input
                id="name"
                type="text"
                placeholder="Nome do usuário"
                className="form-input w-full rounded-lg border border-neutral-700 dark:border-neutral-200 bg-surface-light p-4 py-2 mt-2 text-base text-text-dark placeholder-text-light focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <p className="text-sm text-red-500">
                O nome deve ter no mínimo 2 caracteres.
              </p>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="font-medium text-text-dark" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email do usuário"
                className="form-input w-full rounded-lg border border-neutral-700 dark:border-neutral-200 bg-surface-light p-4 py-2 mt-2 text-base text-text-dark placeholder-text-light focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <p className="text-sm text-green-500">Email válido.</p>
            </div>

            {/* Cidade */}
            <div className="space-y-2">
              <label className="font-medium text-text-dark" htmlFor="city">
                Cidade (Opcional)
              </label>
              <input
                id="city"
                type="text"
                placeholder="Cidade do usuário"
                className="form-input w-full rounded-lg border border-neutral-700 dark:border-neutral-200 bg-surface-light p-4 py-2 mt-2 text-base text-text-dark placeholder-text-light focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </form>
        </main>

        {/* Footer */}
        <footer className="border-t  border-neutral-700 dark:border-neutral-200 fixed bottom-0 w-full  bg-surface-light p-4">
          <button className="flex w-full bg-rose-500 items-center justify-center rounded-lg bg-button-dark py-3 text-base font-bold text-white transition-opacity hover:opacity-90">
            Adicionar
          </button>
        </footer>
      </div>
    </div>
  );
}

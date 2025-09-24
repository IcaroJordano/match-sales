"use client";

import React from "react";
import { CiCircleAlert } from "react-icons/ci";

export default function ErrorPage({ onRetry }: { onRetry?: () => void }) {
  return (
    <div className="flex flex-col  justify-between bg-background-light dark:bg-background-dark font-display">
      {/* Header */}

      {/* Main */}
      <main className="flex-grow flex my-40 flex-col items-center justify-center text-center px-4">
        <div className="space-y-4">
          {/* Ícone */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-4xl bg-rose-600/10 p-2 rounded-full">
                <CiCircleAlert className="text-rose-500" />
              </span>
            </div>
          </div>

          {/* Texto */}
          <h2 className="text-xl font-bold text-white dark:text-neutral-800">
            Não foi possível carregar os usuários.
          </h2>
          <p className="text-white/60 dark:text-neutral-600">
            Ocorreu um erro ao buscar a lista de usuários. Por favor, tente
            novamente.
          </p>

          {/* Botão */}
          <button
            onClick={onRetry}
            className="bg-rose-700 my-4 text-white font-bold py-2 px-2 rounded-lg w-full max-w-xs"
          >
            Tentar Novamente
          </button>
        </div>
      </main>
    </div>
  );
}

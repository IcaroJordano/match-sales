"use client";

import Link from "next/link";
import React from "react";
import { FaUserCog } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen justify-between bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-gray-100">
      {/* Main */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 text-center">
        <div className="mb-4">
          <FaUserCog className="text-6xl text-rose-500" />
        </div>
        <h2 className="text-3xl font-bold mb-2 text-white dark:text-neutral-900">
          Welcome to User Management
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
          Manage your users efficiently with our intuitive interface. Get
          started by viewing your current user list.
        </p>
        <Link
          href="/users"
          className="bg-rose-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-primary/90 transition-colors"
        >
          View Users
        </Link>
      </main>
    </div>
  );
}

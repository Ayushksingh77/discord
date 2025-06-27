"use client";
import { BellIcon, MoonIcon, SunIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2">
        <button aria-label="Notifications" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
          <BellIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {theme === "dark" ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
        </button>
        <UserCircleIcon className="h-8 w-8 text-gray-500 dark:text-gray-300" aria-label="Profile" />
      </div>
    </header>
  );
} 
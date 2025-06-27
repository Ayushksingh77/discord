"use client";
import { useState } from "react";
import { HomeIcon, UsersIcon, ShieldCheckIcon, ChatBubbleLeftRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Members", href: "/members", icon: UsersIcon },
  { name: "Roles", href: "/roles", icon: ShieldCheckIcon },
  { name: "Messages", href: "/messages", icon: ChatBubbleLeftRightIcon },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 w-64 min-h-screen hidden md:block">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 md:hidden">
          <span className="text-lg font-bold">Server Admin</span>
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
        <ul className="flex-1 space-y-2 p-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-black bg-opacity-30 md:hidden ${open ? "block" : "hidden"}`} onClick={() => setOpen(false)} />
      <div className={`fixed top-0 left-0 z-50 w-64 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform md:hidden`}> 
        <div className="flex items-center justify-between p-4">
          <span className="text-lg font-bold">Server Admin</span>
          <button onClick={() => setOpen(false)}>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <ul className="space-y-2 p-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => setOpen(false)}>
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
} 
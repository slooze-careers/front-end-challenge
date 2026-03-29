"use client";

import { useAuth } from "@/contexts/AuthContext";
import { ThemeToggle } from "./ThemeToggle";
import { Search, Bell, Grid, User, LogOut, Menu } from "lucide-react";
import { useRouter } from "next/navigation";

export function Navbar() {
  const { user, logout, role } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <header className="h-[76px] bg-white dark:bg-[#0a0a0a] border-b border-slate-200 dark:border-slate-800/50 flex items-center justify-between px-6 z-10 transition-colors duration-200">
      <div className="flex items-center gap-4 flex-1">
        <button className="lg:hidden p-2 -ml-2 text-slate-500 hover:text-slate-900 dark:hover:text-white">
          <Menu className="w-5 h-5" />
        </button>
        
        {/* Search Bar matching Figma */}
        <div className="hidden md:flex items-center gap-3 w-full max-w-[420px] lg:ml-2">
          <div className="relative flex-1">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-white dark:bg-[#111111] border border-slate-200 dark:border-slate-800 rounded-lg pl-4 pr-10 py-2.5 text-[14px] text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors shadow-sm dark:shadow-none" 
            />
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2.5 rounded-lg text-white text-[14px] font-medium transition-colors shadow-sm">
            Search
          </button>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <ThemeToggle />
        
        <div className="flex items-center gap-2 cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
            <span className="text-[14px] font-medium hidden sm:block">Admin</span>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>

        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
          <button className="hover:text-slate-900 dark:hover:text-white transition-colors">
            <Grid className="w-5 h-5" />
          </button>
          <button className="hover:text-slate-900 dark:hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
          </button>
        </div>

        <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 block"></div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden relative border border-slate-300 dark:border-slate-700">
            <ImageFallback />
          </div>
          <button
            onClick={handleLogout}
            className="p-1.5 text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50"
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

// Fallback user icon for the avatar
function ImageFallback() {
  return (
    <svg className="absolute w-10 h-10 text-slate-400 -left-1 -bottom-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
    </svg>
  );
}

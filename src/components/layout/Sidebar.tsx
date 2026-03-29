"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { 
  LayoutDashboard, Home, ShoppingBag, BarChart2, 
  Wallet, Settings, ChevronDown, ChevronRight, User, MousePointerSquareDashed
} from "lucide-react";
import { RequireRole } from "../auth/RequireRole";

const navigation = [
  { name: "Home", href: "/home", icon: Home, roles: ["MANAGER", "STORE_KEEPER"], hasChevron: true },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard, roles: ["MANAGER"], hasChevron: true },
  { 
    name: "Store", 
    icon: ShoppingBag, 
    roles: ["MANAGER", "STORE_KEEPER"],
    hasChevron: true,
    children: [
      { name: "Product", href: "/products" },
      { name: "Add Product", href: "/products/add" },
    ]
  },
  { 
    name: "Analytic", 
    icon: BarChart2, 
    roles: ["MANAGER"],
    hasChevron: true,
    children: [
      { name: "Traffic", href: "/analytics/traffic" },
      { name: "Earning", href: "/analytics/earning" },
    ]
  },
  { 
    name: "Finances", 
    icon: Wallet, 
    roles: ["MANAGER"],
    hasChevron: true,
    children: [
      { name: "Payment", href: "/finances/payment" },
      { name: "Payout", href: "/finances/payout" },
    ]
  },
  { 
    name: "Account Setting", 
    icon: Settings, 
    roles: ["MANAGER", "STORE_KEEPER"],
    hasChevron: true,
    children: [
      { name: "My Profile", href: "/settings/profile" },
      { name: "Security", href: "/settings/security" },
    ]
  },
  { name: "Help And Support", icon: MousePointerSquareDashed, href: "/support", roles: ["MANAGER", "STORE_KEEPER"], hasChevron: true },
];

export function Sidebar() {
  const pathname = usePathname();
  
  // Track open state of menus
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (name: string) => {
    setOpenMenus(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <aside className="hidden lg:flex flex-col w-[260px] h-full bg-white dark:bg-[#000000] border-r border-slate-200 dark:border-slate-800/40 transition-colors duration-200 py-6 px-4">
      {/* Brand Header */}
      <div className="flex items-center gap-4 mb-8 px-2">
        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
          <User className="w-5 h-5 opacity-80" />
        </div>
        <span className="text-[17px] font-semibold text-slate-900 dark:text-white tracking-wide">Bitstore</span>
      </div>
      
      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto scrollbar-hide pr-1">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const isOpen = openMenus[item.name];
            
            // Check if exactly matching href (if it has no children, we make it look like a rounded box based on the screenshot, normally active link logic, but in screenshot Home/Dashboard always have boxes)
            const isTopLevelBox = item.name === "Home" || item.name === "Dashboard";
            
            return (
              <RequireRole key={item.name} allowedRoles={item.roles as any}>
                <li className="mb-[2px]">
                  
                  {item.children ? (
                    <div className="flex flex-col">
                      <button 
                        onClick={() => toggleMenu(item.name)}
                        className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-[14px] font-medium transition-colors group ${
                          isTopLevelBox 
                            ? "bg-transparent dark:bg-[#111111] border border-transparent dark:border-slate-800 text-slate-800 dark:text-slate-200 mb-2 dark:shadow-sm" 
                            : "bg-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className={`w-[18px] h-[18px] opacity-70 group-hover:opacity-100 transition-opacity ${isTopLevelBox ? "text-slate-900 dark:text-slate-200 opacity-100" : ""}`} />
                          <span className="tracking-wide text-[13px]">{item.name}</span>
                        </div>
                        {item.hasChevron && (
                          <ChevronDown className={`w-[14px] h-[14px] opacity-50 transition-transform ${isOpen ? "" : "rotate-90"}`} />
                        )}
                      </button>
                      
                      {/* Children with left border connecting line */}
                      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-1 mb-2" : "grid-rows-[0fr] opacity-0"}`}>
                        <div className="overflow-hidden">
                          <ul className="relative ml-[21px] pl-5 space-y-1 py-1">
                            {/* Vertical connection line */}
                            <div className="absolute left-0 top-0 bottom-2 w-px bg-slate-200 dark:bg-slate-700/60" />
                            
                            {item.children.map((child) => {
                              const isActive = pathname === child.href;
                              
                              return (
                                <li key={child.name}>
                                  <Link
                                    href={child.href}
                                    className={`block px-4 py-2 rounded-xl text-[13px] font-medium tracking-wide transition-all ${
                                      isActive
                                        ? "bg-indigo-500 dark:bg-[#141414] text-white dark:text-slate-200 dark:border dark:border-slate-800 shadow-sm"
                                        : "text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-300"
                                    }`}
                                  >
                                    {child.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-[14px] font-medium transition-colors group ${
                        isTopLevelBox 
                          ? "bg-transparent dark:bg-[#131313] border border-transparent dark:border-slate-800/80 text-slate-800 dark:text-slate-200 mb-1.5 dark:shadow-sm" 
                          : "bg-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className={`w-[18px] h-[18px] opacity-70 group-hover:opacity-100 transition-opacity ${isTopLevelBox ? "text-slate-900 dark:text-slate-200 opacity-100" : ""}`} />
                        <span className="tracking-wide text-[13px]">{item.name}</span>
                      </div>
                      {item.hasChevron && (
                        <ChevronDown className="w-[14px] h-[14px] opacity-50" />
                      )}
                    </Link>
                  )}
                  
                </li>
              </RequireRole>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

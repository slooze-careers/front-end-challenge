"use client";

import { TopCards } from "@/components/dashboard/TopCards";
import { OverviewChart } from "@/components/dashboard/OverviewChart";
import { RecentSales } from "@/components/dashboard/RecentSales";
import { StatsCharts } from "@/components/dashboard/StatsCharts";
import { SecondaryStatsCharts } from "@/components/dashboard/SecondaryStatsCharts";
import { BottomWidgets } from "@/components/dashboard/BottomWidgets";
import { RequireRole } from "@/components/auth/RequireRole";
import { useAuth } from "@/contexts/AuthContext";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <RequireRole allowedRoles={["MANAGER"]} fallback={
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">Access Denied</h2>
        <p className="text-[15px] font-medium text-slate-600 dark:text-slate-400 max-w-[400px]">
          Your current role <span className="text-indigo-500">[{user?.role}]</span> does not grant permission to view the Manager Dashboard.
        </p>
      </div>
    }>
      <div className="space-y-[2px] animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-[22px] font-bold text-slate-900 dark:text-white tracking-tight">Dashboard</h1>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-[12px] font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm shadow-indigo-500/20">
            + Add New Product
          </button>
        </div>

        <TopCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-1 lg:col-span-2">
            <OverviewChart />
          </div>
          <div className="col-span-1">
            <RecentSales />
          </div>
        </div>

        <StatsCharts />
        
        <SecondaryStatsCharts />
        
        <BottomWidgets />

      </div>
    </RequireRole>
  );
}

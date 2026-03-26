"use client";

import { useQuery } from "@apollo/client/react";
import { GET_DASHBOARD_STATS } from "@/graphql/queries";
import { TrendingUp, AlertCircle, Package } from "lucide-react";

export default function DashboardPage() {
  const { data, loading, error } = useQuery(GET_DASHBOARD_STATS, {
    fetchPolicy: "cache-and-network"
  });

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-4 rounded-lg">
        Error loading dashboard data.
      </div>
    );
  }

  const { totalValue, lowStockCount, totalProducts } = data.dashboardStats;

  const stats = [
    {
      title: "Total Products",
      value: totalProducts,
      icon: Package,
      color: "blue",
    },
    {
      title: "Total Inventory Value",
      value: `$${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      icon: TrendingUp,
      color: "green",
    },
    {
      title: "Low Stock Alerts",
      value: lowStockCount,
      icon: AlertCircle,
      color: "red",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold dark:text-white mb-2">Dashboard overview</h1>
        <p className="text-gray-500 dark:text-gray-400">Welcome back. Here's what's happening with your inventory today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const colorClasses: Record<string, string> = {
            blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400",
            green: "bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400",
            red: "bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400",
          };

          return (
            <div
              key={stat.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4 transition-transform hover:scale-[1.02]"
            >
              <div className={`p-4 rounded-xl ${colorClasses[stat.color]}`}>
                <Icon size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {stat.value}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-white flex flex-col justify-center shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
        <h2 className="text-2xl font-bold z-10 relative">Ready to manage your products?</h2>
        <p className="mt-2 text-indigo-100 max-w-lg z-10 relative">
          Head over to the products section to add, edit, or remove commodities. Ensuring your stock levels are optimal leads to better customer satisfaction.
        </p>
      </div>
    </div>
  );
}

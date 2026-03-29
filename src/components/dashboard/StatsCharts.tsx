"use client";

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line } from "recharts";
import { ArrowUpRight, MoreHorizontal } from "lucide-react";

const chartData = [
  { name: "Jan", val1: 400, val2: 240 },
  { name: "Feb", val1: 300, val2: 139 },
  { name: "Mar", val1: 200, val2: 980 },
  { name: "Apr", val1: 278, val2: 390 },
  { name: "May", val1: 189, val2: 480 },
  { name: "Jun", val1: 239, val2: 380 },
  { name: "Jul", val1: 349, val2: 430 },
];

export function StatsCharts() {
  return (
    <div className="mt-8 space-y-6">
      {/* Title Header for Stats */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Stats</h2>
        <div className="flex items-center gap-2">
          <select className="bg-white dark:bg-[#111] border border-slate-200 dark:border-slate-800 text-[12px] text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg appearance-none">
            <option>Aug 12th - Sept 5th</option>
          </select>
          <span className="text-[12px] text-slate-500 dark:text-slate-500 font-medium">compared to</span>
          <select className="bg-white dark:bg-[#111] border border-slate-200 dark:border-slate-800 text-[12px] text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg appearance-none">
            <option>Previous</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Area Chart */}
        <div className="col-span-1 lg:col-span-2 bg-white dark:bg-[#111111] border border-slate-100 shadow-sm dark:shadow-none dark:border-slate-800/60 p-6 rounded-[1.25rem] flex flex-col h-[280px]">
          <div className="flex justify-between items-start mb-4 z-10">
            <div>
              <p className="text-[12px] font-medium text-slate-500 dark:text-slate-400">Total Earning</p>
              <h3 className="text-[20px] font-bold text-slate-900 dark:text-white mb-1">$ 112,893.00</h3>
              <div className="flex items-center text-[10px] font-medium">
                <span className="text-slate-400">trend life</span>
                <span className="text-emerald-500 ml-1">+12.3%</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full -mt-10">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip contentStyle={{ backgroundColor: '#111', border: 'none', borderRadius: '8px', color: '#fff' }} />
                <Area type="monotone" dataKey="val2" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Bar Chart (Gradient Blue) */}
        <div className="col-span-1 bg-white dark:bg-[#111111] border border-slate-100 shadow-sm dark:shadow-none dark:border-slate-800/60 p-6 rounded-[1.25rem] flex flex-col h-[280px]">
          <div className="flex justify-between items-start mb-4 z-10">
            <div>
              <p className="text-[12px] font-medium text-slate-500 dark:text-slate-400">Total Earning</p>
              <h3 className="text-[20px] font-bold text-slate-900 dark:text-white mb-1">$ 112,893.00</h3>
              <div className="flex items-center text-[10px] font-medium">
                <span className="text-slate-400">trend life</span>
                <span className="text-emerald-500 ml-1">+12.3%</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} barSize={24}>
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Bar dataKey="val2" fill="var(--color-stats-secondary)" radius={[4, 4, 4, 4]} stackId="a" />
                <Bar dataKey="val1" fill="var(--color-stats-primary)" radius={[4, 4, 4, 4]} stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Bottom Chart Row of Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2 bg-white dark:bg-[#111111] border border-slate-100 shadow-sm dark:shadow-none dark:border-slate-800/60 p-6 rounded-[1.25rem] flex flex-col h-[240px]">
          <div className="flex justify-between items-start z-10 mb-2">
            <div>
              <p className="text-[12px] font-medium text-slate-500 dark:text-slate-400">Total Earning</p>
              <h3 className="text-[20px] font-bold text-slate-900 dark:text-white">$ 112,893.00</h3>
            </div>
          </div>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData.slice(0, 6)} barSize={8}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} dy={5} />
                <YAxis hide domain={[0, 1000]} />
                <Bar dataKey="val1" fill="var(--color-stats-primary)" radius={[4, 4, 4, 4]} stackId="a" />
                <Bar dataKey="val2" fill="var(--color-stats-secondary)" radius={[4, 4, 4, 4]} stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-1 bg-white dark:bg-[#111111] border border-slate-100 shadow-sm dark:shadow-none dark:border-slate-800/60 p-6 rounded-[1.25rem] flex flex-col h-[240px]">
          <div className="flex justify-between items-start z-10 mb-4">
            <div>
              <p className="text-[12px] font-medium text-slate-500 dark:text-slate-400">Subscriptions</p>
              <h3 className="text-[20px] font-bold text-slate-900 dark:text-white">+ 112,893</h3>
            </div>
          </div>
          <div className="flex-1 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <Line type="monotone" dataKey="val1" stroke="#fbbf24" strokeWidth={3} dot={{ fill: '#fbbf24', r: 3, strokeWidth: 0 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

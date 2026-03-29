"use client";

import { ResponsiveContainer, LineChart, Line, YAxis } from "recharts";
import { ArrowUpRight } from "lucide-react";

const chartData1 = [
  { val: 100 }, { val: 250 }, { val: 180 }, { val: 300 }, { val: 260 }, { val: 340 }, { val: 290 }, { val: 400 },
];
const chartData2 = [
  { val: 150 }, { val: 120 }, { val: 280 }, { val: 240 }, { val: 320 }, { val: 270 }, { val: 350 }, { val: 360 },
];
const chartData3 = [
  { val: 200 }, { val: 180 }, { val: 240 }, { val: 190 }, { val: 280 }, { val: 250 }, { val: 300 }, { val: 350 },
];

export function SecondaryStatsCharts() {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Total Earning */}
        <div className="bg-white dark:bg-[#111111] border border-slate-100 shadow-sm dark:shadow-none dark:border-slate-800/60 p-6 rounded-[1.25rem] h-[240px] flex flex-col relative overflow-hidden">
          <div className="z-10">
            <p className="text-[13px] font-bold text-slate-900 dark:text-white mb-2">Total Earning</p>
            <h3 className="text-[20px] font-bold text-slate-900 dark:text-white tracking-tight mb-2">+ 112,893</h3>
            <div className="flex items-center text-[10px] font-medium">
              <span className="text-slate-400 dark:text-slate-500">trend title</span>
              <div className="flex items-center text-emerald-500 ml-1.5">
                <ArrowUpRight className="w-[10px] h-[10px] mr-[2px]" />
                70.5%
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-6 h-[80px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData1}>
                <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                <Line type="monotone" dataKey="val" stroke="#10b981" strokeWidth={1.5} dot={false} isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
            <div className="absolute bottom-[-10px] inset-x-5 flex justify-between text-[10px] text-slate-400 font-medium">
              <span>Nov 20th</span>
              <span>Dec 20th</span>
            </div>
            <div className="absolute bottom-2.5 inset-x-5 h-px bg-slate-200 dark:bg-slate-700/50" />
          </div>
        </div>

        {/* Card 2: Total Sales */}
        <div className="bg-white dark:bg-[#111111] border border-slate-100 shadow-sm dark:shadow-none dark:border-slate-800/60 p-6 rounded-[1.25rem] h-[240px] flex flex-col relative overflow-hidden">
          <div className="z-10">
            <p className="text-[13px] font-bold text-slate-900 dark:text-white mb-2">Total Sales</p>
            <h3 className="text-[20px] font-bold text-slate-900 dark:text-white tracking-tight mb-2">+ 112,893</h3>
            <div className="flex items-center text-[10px] font-medium">
              <span className="text-slate-400 dark:text-slate-500">trend title</span>
              <div className="flex items-center text-emerald-500 ml-1.5">
                <ArrowUpRight className="w-[10px] h-[10px] mr-[2px]" />
                70.5%
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-6 h-[80px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData2}>
                <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                <Line type="monotone" dataKey="val" stroke="#a855f7" strokeWidth={1.5} dot={false} isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
            <div className="absolute bottom-[-10px] inset-x-5 flex justify-between text-[10px] text-slate-400 font-medium">
              <span>Nov 20th</span>
              <span>Dec 20th</span>
            </div>
            <div className="absolute bottom-2.5 inset-x-5 h-px bg-slate-200 dark:bg-slate-700/50" />
          </div>
        </div>

        {/* Card 3: Total Views */}
        <div className="bg-white dark:bg-[#111111] border border-slate-100 shadow-sm dark:shadow-none dark:border-slate-800/60 p-6 rounded-[1.25rem] h-[240px] flex flex-col relative overflow-hidden">
          <div className="z-10">
            <p className="text-[13px] font-bold text-slate-900 dark:text-white mb-2">Total Views</p>
            <h3 className="text-[20px] font-bold text-slate-900 dark:text-white tracking-tight mb-2">+ 112,893</h3>
            <div className="flex items-center text-[10px] font-medium">
              <span className="text-slate-400 dark:text-slate-500">trend title</span>
              <div className="flex items-center text-emerald-500 ml-1.5">
                <ArrowUpRight className="w-[10px] h-[10px] mr-[2px]" />
                70.5%
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-6 h-[80px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData3}>
                <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                <Line type="monotone" dataKey="val" stroke="#fbbf24" strokeWidth={1.5} dot={false} isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
            <div className="absolute bottom-[-10px] inset-x-5 flex justify-between text-[10px] text-slate-400 font-medium">
              <span>Nov 20th</span>
              <span>Dec 20th</span>
            </div>
            <div className="absolute bottom-2.5 inset-x-5 h-px bg-slate-200 dark:bg-slate-700/50" />
          </div>
        </div>

      </div>
    </div>
  );
}

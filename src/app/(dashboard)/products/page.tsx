"use client";

import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts";
import { ArrowUpRight, ChevronLeft, ChevronRight, Filter, Download } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Dummy chart data for exact visual match
const chartData1 = [
  { val: 100 }, { val: 250 }, { val: 180 }, { val: 300 }, { val: 260 }, { val: 340 }, { val: 290 }, { val: 400 },
];
const chartData2 = [
  { val: 150 }, { val: 120 }, { val: 280 }, { val: 240 }, { val: 320 }, { val: 270 }, { val: 350 }, { val: 360 },
];
const chartData3 = [
  { val: 200 }, { val: 180 }, { val: 240 }, { val: 190 }, { val: 280 }, { val: 250 }, { val: 300 }, { val: 350 },
];

const productsData = [
  { name: "Iphone 12 Pro", views: "14.000", pricing: "$1.000", revenue: "$164.000", checked: true },
  { name: "Macbook Pro 2023", views: "14.000", pricing: "$1.000", revenue: "$164.000", checked: false },
  { name: "Macbook Pro 2023", views: "14.000", pricing: "$1.000", revenue: "$164.000", checked: false },
  ...Array(12).fill({ name: "Product Name Place Here", views: "14.000", pricing: "$1.000", revenue: "$164.000", checked: false })
];

const SortArrows = () => (
  <svg className="w-3 h-3 text-slate-400 inline-block ml-1 relative top-[-1px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 15l5 5 5-5M7 9l5-5 5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ProductListPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-[22px] font-bold text-slate-900 dark:text-white tracking-tight">Product</h1>
        <Link href="/products/add">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-[12px] font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm shadow-indigo-500/20">
            + Add New Product
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        
        {/* Left Table Column */}
        <div className="xl:col-span-3 bg-white dark:bg-[#111111] border border-slate-100 shadow-sm dark:shadow-none dark:border-slate-800/60 p-6 rounded-[1.25rem] flex flex-col min-h-[800px]">
          
          {/* Table Toolbar */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-800/60">
            <div className="flex items-center gap-6">
              <button className="text-[15px] font-bold text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-white pb-4 -mb-[18px]">Published</button>
              <button className="text-[15px] font-medium text-slate-500 dark:text-slate-500 pb-4 -mb-[18px] hover:text-slate-800 dark:hover:text-slate-300 transition-colors">Draft</button>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 dark:border-slate-700/80 rounded-lg text-[12px] font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <Filter className="w-3.5 h-3.5" />
                Filter
                <svg className="w-3 h-3 ml-1 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 dark:border-slate-700/80 rounded-lg text-[12px] font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <Download className="w-3.5 h-3.5" />
                Download
                <svg className="w-3 h-3 ml-1 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="flex-1 overflow-x-auto">
            <div className="min-w-[800px]">
              
              {/* Header Row */}
              <div className="flex items-center text-[12px] font-medium text-slate-500 dark:text-slate-500 pb-3 border-b border-slate-100 dark:border-slate-800/40">
                <div className="w-[48px] pl-3">
                  <input type="checkbox" className="w-[15px] h-[15px] rounded border-slate-300 dark:border-slate-700 dark:bg-slate-900 cursor-pointer" />
                </div>
                <div className="flex-1 pr-4">Product Name</div>
                <div className="w-[120px]">Views <SortArrows /></div>
                <div className="w-[120px]">Pricing <SortArrows /></div>
                <div className="w-[120px]">Revenue <SortArrows /></div>
                <div className="w-[130px]">Manage <SortArrows /></div>
              </div>

              {/* Data Rows */}
              <div className="divide-y divide-slate-100 dark:divide-slate-800/40">
                {productsData.map((prod, i) => (
                  <div key={i} className={`flex items-center py-[11px] group transition-colors ${prod.checked ? 'bg-indigo-50/50 dark:bg-indigo-500/5' : 'hover:bg-slate-50 dark:hover:bg-slate-800/20'}`}>
                    <div className="w-[48px] pl-3 pt-0.5">
                      <input 
                        type="checkbox" 
                        defaultChecked={prod.checked}
                        className={`w-[15px] h-[15px] rounded border-slate-300 dark:border-slate-700 cursor-pointer ${prod.checked ? 'accent-indigo-500 dark:accent-indigo-500' : 'dark:bg-slate-900'}`} 
                      />
                    </div>
                    <div className="flex-1 flex items-center gap-3 pr-4">
                      <div className="w-7 h-7 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center shrink-0 overflow-hidden border border-slate-200 dark:border-slate-700">
                        {/* Placeholder icon indicating a device thumbnail */}
                        <div className="w-2.5 h-3.5 bg-slate-300 dark:bg-slate-600 rounded-[2px]" />
                      </div>
                      <span className="text-[13px] font-bold text-slate-900 dark:text-white truncate">{prod.name}</span>
                    </div>
                    <div className="w-[120px] text-[13px] font-medium text-slate-600 dark:text-slate-400">{prod.views}</div>
                    <div className="w-[120px] text-[13px] font-medium text-slate-600 dark:text-slate-400">{prod.pricing}</div>
                    <div className="w-[120px] text-[13px] font-medium text-slate-600 dark:text-slate-400">{prod.revenue}</div>
                    <div className="w-[130px] flex items-center gap-2">
                      <button className="px-3 py-1 bg-transparent border border-slate-200 dark:border-slate-700/80 rounded-md text-[11px] font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Edit</button>
                      <button className="px-3 py-1 bg-transparent border border-slate-200 dark:border-slate-700/80 rounded-md text-[11px] font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Delete</button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-end pt-6 mt-auto">
            <div className="flex items-center gap-[4px]">
              <button className="w-7 h-7 flex items-center justify-center rounded bg-transparent border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <button className="w-7 h-7 flex items-center justify-center rounded text-[12px] font-semibold bg-indigo-500 border border-indigo-500 text-white">1</button>
              <button className="w-7 h-7 flex items-center justify-center rounded text-[12px] font-medium bg-transparent border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">2</button>
              <button className="w-7 h-7 flex items-center justify-center rounded text-[12px] font-medium bg-transparent border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">3</button>
              <button className="w-7 h-7 flex items-center justify-center rounded text-[12px] font-medium bg-transparent border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">4</button>
              <button className="w-7 h-7 flex items-center justify-center rounded text-[12px] font-medium bg-transparent border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">5</button>
              
              <button className="w-7 h-7 flex items-center justify-center rounded bg-transparent border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Right Info Column */}
        <div className="xl:col-span-1 space-y-6">
          <h2 className="text-[18px] font-bold text-slate-900 dark:text-white hidden xl:block">Relate Data</h2>
          
          {/* Card 1: Total Views */}
          <div className="bg-white dark:bg-[#111111] border border-slate-100 shadow-sm dark:shadow-none dark:border-slate-800/60 p-6 rounded-[1.25rem] h-[190px] flex flex-col relative overflow-hidden">
            <div className="z-10">
              <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 mb-1">Total Views</p>
              <h3 className="text-[20px] font-bold text-slate-900 dark:text-white tracking-tight mb-1">+ 112,893</h3>
              <div className="flex items-center text-[10px] font-medium">
                <span className="text-slate-400 dark:text-slate-500">trend life</span>
                <div className="flex items-center text-emerald-500 ml-1.5">
                  <ArrowUpRight className="w-[10px] h-[10px] mr-[2px]" />
                  12.3%
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-6 h-[70px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData1}>
                  <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                  <Line type="monotone" dataKey="val" stroke="#fbbf24" strokeWidth={1.5} dot={false} isAnimationActive={false} />
                </LineChart>
              </ResponsiveContainer>
              <div className="absolute bottom-[-10px] inset-x-5 flex justify-between text-[8px] text-slate-400 font-medium">
                <span>0</span>
                <span>Nov 20th</span>
                <span>Dec 20th</span>
              </div>
              <div className="absolute bottom-1.5 inset-x-5 h-px bg-slate-200 dark:bg-slate-700/50" />
            </div>
          </div>

          {/* Card 2: Total Sales */}
          <div className="bg-white dark:bg-[#111111] border border-slate-200 dark:border-slate-800/60 p-6 rounded-[1.25rem] h-[190px] flex flex-col relative overflow-hidden">
            <div className="z-10">
              <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 mb-1">Total Sales</p>
              <h3 className="text-[20px] font-bold text-slate-900 dark:text-white tracking-tight mb-1">+ 112,893</h3>
              <div className="flex items-center text-[10px] font-medium">
                <span className="text-slate-400 dark:text-slate-500">trend life</span>
                <div className="flex items-center text-emerald-500 ml-1.5">
                  <ArrowUpRight className="w-[10px] h-[10px] mr-[2px]" />
                  12.3%
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-6 h-[70px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData2}>
                  <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                  <Line type="monotone" dataKey="val" stroke="#a855f7" strokeWidth={1.5} dot={false} isAnimationActive={false} />
                </LineChart>
              </ResponsiveContainer>
              <div className="absolute bottom-[-10px] inset-x-5 flex justify-between text-[8px] text-slate-400 font-medium">
                <span>0</span>
                <span>Nov 20th</span>
                <span>Dec 20th</span>
              </div>
              <div className="absolute bottom-1.5 inset-x-5 h-px bg-slate-200 dark:bg-slate-700/50" />
            </div>
          </div>

          {/* Card 3: Total Earning */}
          <div className="bg-white dark:bg-[#111111] border border-slate-200 dark:border-slate-800/60 p-6 rounded-[1.25rem] h-[190px] flex flex-col relative overflow-hidden">
            <div className="z-10">
              <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 mb-1">Total Earning</p>
              <h3 className="text-[20px] font-bold text-slate-900 dark:text-white tracking-tight mb-1">+ 112,893</h3>
              <div className="flex items-center text-[10px] font-medium">
                <span className="text-slate-400 dark:text-slate-500">trend life</span>
                <div className="flex items-center text-emerald-500 ml-1.5">
                  <ArrowUpRight className="w-[10px] h-[10px] mr-[2px]" />
                  12.3%
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-6 h-[70px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData3}>
                  <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                  <Line type="monotone" dataKey="val" stroke="#10b981" strokeWidth={1.5} dot={false} isAnimationActive={false} />
                </LineChart>
              </ResponsiveContainer>
              <div className="absolute bottom-[-10px] inset-x-5 flex justify-between text-[8px] text-slate-400 font-medium">
                <span>0</span>
                <span>Nov 20th</span>
                <span>Dec 20th</span>
              </div>
              <div className="absolute bottom-1.5 inset-x-5 h-px bg-slate-200 dark:bg-slate-700/50" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

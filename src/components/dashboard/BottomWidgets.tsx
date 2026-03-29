"use client";

import { Check, X } from "lucide-react";

export function BottomWidgets() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      
      {/* Widget 1: Subscriptions Performers */}
      <div className="bg-white dark:bg-[#111111] border border-slate-100 shadow-sm dark:shadow-none dark:border-slate-800/60 p-6 rounded-[1.25rem] h-[340px] flex flex-col">
        <h3 className="text-[15px] font-bold text-slate-900 dark:text-white">Subscriptions Performers</h3>
        <p className="text-[12px] text-slate-500 dark:text-slate-400 mb-8 font-medium">Follower This Years</p>
        
        <div className="flex-1 flex flex-col justify-center items-center text-center -mt-6">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">+500</h2>
          
          <div className="w-full flex items-end justify-between h-[60px] gap-1 px-4">
            {Array(15).fill(0).map((_, i) => (
              <div 
                key={i} 
                className="w-full bg-cyan-400 dark:bg-cyan-500/80 rounded-t-sm" 
                style={{ height: `${Math.max(20, Math.random() * 100)}%` }} 
              />
            ))}
          </div>
          <button className="w-full mt-6 bg-slate-100 dark:bg-black border border-slate-200 dark:border-slate-800 dark:text-white py-2.5 rounded-xl text-[12px] font-semibold hover:bg-slate-200 dark:hover:bg-slate-900 transition-colors">
            Get Started
          </button>
        </div>
      </div>

      {/* Widget 2: Top Sales Product */}
      <div className="bg-white dark:bg-[#111111] border border-slate-100 shadow-sm dark:shadow-none dark:border-slate-800/60 p-6 rounded-[1.25rem] h-[340px] flex flex-col">
        <h3 className="text-[15px] font-bold text-slate-900 dark:text-white">Top Sales Product</h3>
        <p className="text-[12px] text-slate-500 dark:text-slate-400 mb-6 font-medium">Manage your payments.</p>
        
        <div className="flex-1 overflow-y-auto space-y-4">
          <div className="flex text-[11px] font-semibold text-slate-400 dark:text-slate-500 mb-2">
            <div className="flex-1">Product</div>
            <div className="w-16 text-right">Amount</div>
          </div>
          
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                  <div className="w-3 h-4 bg-slate-300 dark:bg-slate-600 rounded-sm" />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-slate-900 dark:text-white">Macbook Pro</p>
                  <p className="text-[10px] text-slate-400">12/10/2024</p>
                </div>
              </div>
              <span className="text-[12px] font-bold text-slate-900 dark:text-white w-16 text-right">$100</span>
            </div>
          ))}
        </div>
      </div>

      {/* Widget 3: Payment History */}
      <div className="bg-white dark:bg-[#111111] border border-slate-100 shadow-sm dark:shadow-none dark:border-slate-800/60 p-6 rounded-[1.25rem] h-[340px] flex flex-col">
        <h3 className="text-[15px] font-bold text-slate-900 dark:text-white">Payment History</h3>
        <p className="text-[12px] text-slate-500 dark:text-slate-400 mb-6 font-medium">Manage your payments.</p>
        
        <div className="flex-1 overflow-y-auto space-y-4">
          <div className="flex text-[11px] font-semibold text-slate-400 dark:text-slate-500 mb-2">
            <div className="w-[70px]">Status</div>
            <div className="flex-1">Email</div>
            <div className="w-16 text-right">Amount</div>
          </div>
          
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center">
              <div className="w-[70px] flex items-center gap-1.5 text-emerald-500 text-[11px]">
                <div className="w-4 h-4 rounded-full border border-emerald-500/30 flex items-center justify-center bg-emerald-500/10">
                  <Check className="w-2.5 h-2.5" />
                </div>
                success
              </div>
              <div className="flex-1 text-[11px] text-slate-600 dark:text-slate-400 truncate pr-2">
                You...ma@gmail.com
              </div>
              <span className="text-[12px] font-bold text-slate-900 dark:text-white w-16 text-right">$100</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

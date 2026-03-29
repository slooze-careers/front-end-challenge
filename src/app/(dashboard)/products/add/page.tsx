"use client";

import { ImageIcon } from "lucide-react";

export default function AddProductPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-[22px] font-bold text-slate-900 dark:text-white tracking-tight">Add Product</h1>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-[12px] font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm shadow-indigo-500/20">
          + Add New Product
        </button>
      </div>

      {/* Control Bar */}
      <div className="bg-white dark:bg-[#111111] border border-slate-100 shadow-sm dark:shadow-none dark:border-slate-800/60 p-4 md:p-6 rounded-[1.25rem] flex items-center justify-between">
        <h2 className="text-[15px] font-bold text-slate-900 dark:text-white tracking-wide">Add New Product</h2>
        <div className="flex items-center gap-3">
          <button className="text-red-500 border border-red-500/30 hover:bg-red-50 dark:hover:bg-red-500/10 px-4 py-2 rounded-lg text-[13px] font-semibold transition-colors">
            Discard Change
          </button>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-7 py-2 rounded-lg text-[13px] font-semibold transition-colors shadow-sm">
            Save
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Form Column */}
        <div className="xl:col-span-2 space-y-6">
          {/* General Information */}
          <div className="bg-white dark:bg-[#111111] border border-slate-100 shadow-sm dark:shadow-none dark:border-slate-800/60 p-6 md:p-8 rounded-[1.25rem]">
            <h3 className="text-[15px] font-bold text-slate-900 dark:text-white mb-6">General Information</h3>
            
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-[13px] font-medium text-slate-700 dark:text-slate-300">Product Name</label>
                <input 
                  type="text" 
                  placeholder="Product Name" 
                  className="w-full bg-[#fafafa] dark:bg-[#1a1a1a] border border-slate-200 dark:border-slate-800/80 rounded-xl px-4 py-3.5 text-[13px] text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div className="space-y-2 relative">
                <label className="text-[13px] font-medium text-slate-700 dark:text-slate-300">Product Category</label>
                <select className="w-full bg-[#fafafa] dark:bg-[#1a1a1a] border border-slate-200 dark:border-slate-800/80 rounded-xl px-4 py-3.5 text-[13px] text-slate-500 dark:text-slate-400 focus:outline-none focus:border-indigo-500 transition-colors appearance-none cursor-pointer">
                  <option>Product Category</option>
                  <option>Electronics</option>
                  <option>Clothing</option>
                </select>
                <div className="absolute right-4 top-[38px] pointer-events-none text-slate-400">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-medium text-slate-700 dark:text-slate-300">Descriptions</label>
                <textarea 
                  placeholder="Description" 
                  rows={4}
                  className="w-full bg-[#fafafa] dark:bg-[#1a1a1a] border border-slate-200 dark:border-slate-800/80 rounded-xl px-4 py-3.5 text-[13px] text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-medium text-slate-700 dark:text-slate-300">Tag Keyword</label>
                <textarea 
                  placeholder="Tag Keyword" 
                  rows={3}
                  className="w-full bg-[#fafafa] dark:bg-[#1a1a1a] border border-slate-200 dark:border-slate-800/80 rounded-xl px-4 py-3.5 text-[13px] text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white dark:bg-[#111111] border border-slate-100 shadow-sm dark:shadow-none dark:border-slate-800/60 p-6 md:p-8 rounded-[1.25rem]">
            <h3 className="text-[15px] font-bold text-slate-900 dark:text-white mb-6">Pricing</h3>
            
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-[13px] font-medium text-slate-700 dark:text-slate-300">Price</label>
                <input 
                  type="text" 
                  placeholder="Pricing" 
                  className="w-full bg-[#fafafa] dark:bg-[#1a1a1a] border border-slate-200 dark:border-slate-800/80 rounded-xl px-4 py-3.5 text-[13px] text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[13px] font-medium text-slate-700 dark:text-slate-300">Discount</label>
                  <input 
                    type="text" 
                    placeholder="Discount" 
                    className="w-full bg-[#fafafa] dark:bg-[#1a1a1a] border border-slate-200 dark:border-slate-800/80 rounded-xl px-4 py-3.5 text-[13px] text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div className="space-y-2 relative">
                  <label className="text-[13px] font-medium text-slate-700 dark:text-slate-300">Discount Category</label>
                  <select className="w-full bg-[#fafafa] dark:bg-[#1a1a1a] border border-slate-200 dark:border-slate-800/80 rounded-xl px-4 py-3.5 text-[13px] text-slate-500 dark:text-slate-400 focus:outline-none focus:border-indigo-500 transition-colors appearance-none cursor-pointer">
                    <option>Discount Category</option>
                    <option>Percentage</option>
                    <option>Fixed Amount</option>
                  </select>
                  <div className="absolute right-4 top-[38px] pointer-events-none text-slate-400">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar Column */}
        <div className="space-y-6">
          {/* Previews Product Image */}
          <div className="bg-white dark:bg-[#111111] border border-slate-100 shadow-sm dark:shadow-none dark:border-slate-800/60 p-6 rounded-[1.25rem]">
            <h3 className="text-[14px] font-bold text-slate-900 dark:text-white mb-1">Previews Product</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-4">Drag And Your Image Here</p>
            
            <div className="border border-dashed border-slate-300 dark:border-slate-700/80 bg-[#f8fafc] dark:bg-[#161616] rounded-[1rem] flex flex-col items-center justify-center p-16 text-center cursor-pointer hover:bg-slate-100 dark:hover:bg-[#1a1a1a] transition-colors group">
              <ImageIcon className="w-[30px] h-[30px] stroke-[1.5] text-slate-400 dark:text-slate-300 mb-3 group-hover:text-indigo-500 transition-colors" />
              <p className="text-[12px] font-medium text-slate-600 dark:text-slate-300">Drag and drop here</p>
            </div>
          </div>

          {/* Thumbnail Product Image */}
          <div className="bg-white dark:bg-[#111111] border border-slate-100 shadow-sm dark:shadow-none dark:border-slate-800/60 p-6 rounded-[1.25rem]">
            <h3 className="text-[14px] font-bold text-slate-900 dark:text-white mb-1">Thumbnail Product</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-4">Drag And Your Image Here</p>
            
            <div className="border border-dashed border-slate-300 dark:border-slate-700/80 bg-[#f8fafc] dark:bg-[#161616] rounded-[1rem] flex flex-col items-center justify-center p-16 text-center cursor-pointer hover:bg-slate-100 dark:hover:bg-[#1a1a1a] transition-colors group">
              <ImageIcon className="w-[30px] h-[30px] stroke-[1.5] text-slate-400 dark:text-slate-300 mb-3 group-hover:text-indigo-500 transition-colors" />
              <p className="text-[12px] font-medium text-slate-600 dark:text-slate-300">Drag and drop here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

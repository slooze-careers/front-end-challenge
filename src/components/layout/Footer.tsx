"use client";

import { Mail } from "lucide-react";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="mt-auto shrink-0 bg-white dark:bg-[#0f0f0f] border-t border-slate-200 dark:border-slate-800/60 px-8 py-16 transition-colors duration-200 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-8 justify-between relative z-10 w-full">
        {/* Left Section */}
        <div className="max-w-[320px]">
          <div className="flex items-center gap-3 mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 12l10 10 10-10L12 2zm0 4l6 6-6 6-6-6 6-6z" fill="#f97316"/>
            </svg>
            <span className="text-[22px] font-bold text-slate-900 dark:text-white">Opion</span>
          </div>
          <p className="text-[14px] leading-relaxed font-medium text-slate-800 dark:text-slate-300 mb-6">
            Ease of shopping is our main focus. With powerful search features and customizable filters, you can easily find the products you are looking for.
          </p>
          <div className="flex items-center gap-3 mb-8">
            <button className="w-9 h-9 rounded-full bg-slate-500 hover:bg-slate-600 dark:bg-slate-500 dark:hover:bg-slate-600 flex items-center justify-center text-white transition-colors">
              <FacebookIcon className="w-5 h-5" />
            </button>
            <button className="w-9 h-9 rounded-full bg-slate-500 hover:bg-slate-600 dark:bg-slate-500 dark:hover:bg-slate-600 flex items-center justify-center text-white transition-colors">
              <InstagramIcon className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-full bg-slate-500 hover:bg-slate-600 dark:bg-slate-500 dark:hover:bg-slate-600 flex items-center justify-center text-white transition-colors">
              <LinkedinIcon className="w-[15px] h-[15px]" />
            </button>
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-slate-900 dark:text-white mb-4">Subscribe to Newlestter</h4>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="email"
                placeholder="Enter Your Email Here"
                className="w-full pl-11 pr-4 py-3 bg-[#f8fafc] dark:bg-[#111111] border border-transparent focus:border-indigo-500 rounded-xl text-[13px] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Right Section Links */}
        <div className="flex flex-wrap gap-12 lg:gap-24">
          <div className="flex flex-col gap-4 text-[14px]">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Get Started</h4>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Service</a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Contact Us</a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Affiliate Program</a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">About Us</a>
          </div>
          <div className="flex flex-col gap-4 text-[14px]">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Get Started</h4>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Dashboard</a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Platform</a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Workout Library</a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">App Design</a>
          </div>
          <div className="flex flex-col gap-4 text-[14px]">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Get Started</h4>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">About Us</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-[13px] text-slate-500 dark:text-slate-500">
        <p>2024 MaxFit</p>
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Twitter</a>
          <span>—</span>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Instagram</a>
          <span>—</span>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

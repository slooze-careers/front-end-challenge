"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // To avoid hydration mismatch due to missing Images on server
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Mock Authentication Logic
    setTimeout(() => {
      if (!email || !password) {
        setError("Please enter both email and password.");
        setIsLoading(false);
        return;
      }

      if (password !== "password123") {
        setError("Invalid credentials. Hint: use 'password123'");
        setIsLoading(false);
        return;
      }

      let role: "MANAGER" | "STORE_KEEPER" | null = null;
      if (email.includes("manager")) {
        role = "MANAGER";
      } else if (email.includes("store")) {
        role = "STORE_KEEPER";
      } else {
        setError("Email must contain 'manager' or 'store' to assign a role for this demo.");
        setIsLoading(false);
        return;
      }

      login({
        id: Math.random().toString(36).substr(2, 9),
        email,
        role,
      });

      router.push("/dashboard");
    }, 1000); // Simulate network delay
  };

  return (
    <div className="min-h-screen flex text-slate-900 bg-white dark:bg-black dark:text-white transition-colors duration-200">
      {/* Left side Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 sm:p-12 lg:p-24 relative z-10 w-full lg:max-w-[55%] xl:max-w-[50%]">
        <div className="w-full max-w-[420px]">
          <div className="text-center mb-10 mt-auto pt-10 lg:pt-0 gap-2 flex flex-col">
            <h1 className="text-[2.1rem] font-bold">Welcome Back</h1>
            <p className="text-[15px] font-medium text-slate-600 dark:text-slate-300">Sign Up For Free</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-red-500 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-lg animate-in fade-in slide-in-from-top-2">
                {error}
              </div>
            )}

            <div className="space-y-1">
              <label className="block text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-1.5 px-0.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-[#f8fafc] dark:bg-[#09090b] focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-[14px] placeholder:text-slate-400 dark:placeholder:text-slate-600"
                placeholder="Email"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-1.5 px-0.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-[#f8fafc] dark:bg-[#09090b] focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-[14px] placeholder:text-slate-400 dark:placeholder:text-slate-600"
                placeholder="Password"
                required
              />
            </div>

            <div className="flex items-center gap-2.5 mt-2 mb-6 px-1">
              <input
                type="checkbox"
                id="terms"
                className="w-[18px] h-[18px] cursor-pointer rounded border-slate-300 text-indigo-500 focus:ring-indigo-500 dark:bg-slate-900 border dark:border-slate-700"
                required
                defaultChecked
              />
              <label htmlFor="terms" className="text-[12px] cursor-pointer font-medium text-slate-700 dark:text-slate-300">
                I agree to all Term, Privacy Policy and fees
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-4 bg-[#6c48ff] hover:bg-[#5a38eb] active:scale-[0.99] text-white text-[15px] rounded-xl font-medium shadow-sm transition-all flex justify-center items-center h-[52px]"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Get Started"
                )}
              </button>
            </div>
          </form>

          <div className="my-7 flex items-center gap-4 before:h-[1px] before:flex-1 before:bg-slate-200 dark:before:bg-slate-800/60 after:h-[1px] after:flex-1 after:bg-slate-200 dark:after:bg-slate-800/60">
            <span className="text-[11px] text-slate-900 dark:text-slate-300 font-semibold tracking-[0.2em] relative top-[1px]">OR</span>
          </div>

          <div className="space-y-3">
            <button type="button" className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-slate-200 dark:border-slate-800/80 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors bg-transparent h-[50px]">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-[13px] font-medium text-slate-800 dark:text-slate-200">Sign in with Google</span>
            </button>
            <button type="button" className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-slate-200 dark:border-slate-800/80 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors bg-transparent h-[50px]">
              <svg className="w-[18px] h-[18px] text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-[13px] font-medium text-slate-800 dark:text-slate-200">Sign in with Google</span>
            </button>
          </div>

          <div className="mt-8 text-center pb-8 sm:pb-0">
            <p className="text-[13px] text-slate-800 dark:text-slate-300">
              Already have an account? <button type="button" onClick={() => setEmail('manager@slooze.xyz')} className="text-[#6c48ff] dark:text-[#886cff] font-semibold hover:underline">Login</button>
            </p>
          </div>
        </div>
      </div>

      {/* Right side Image block */}
      <div className="hidden lg:block lg:flex-1 relative bg-black">
        {mounted && (
          <>
            <div className="absolute inset-0 block dark:hidden">
              <Image
                src="/login_white.png"
                alt="Login Illustration Light"
                fill
                sizes="(max-width: 1023px) 0vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 hidden dark:block">
              <Image
                src="/login_dark.png"
                alt="Login Illustration Dark"
                fill
                sizes="(max-width: 1023px) 0vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

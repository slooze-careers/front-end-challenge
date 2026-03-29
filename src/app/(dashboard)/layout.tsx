import { AuthGuard } from "@/components/auth/AuthGuard";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-[#050505] transition-colors duration-200">
        <div className="flex flex-1 w-full">
          {/* Sticky Sidebar */}
          <div className="sticky top-0 h-screen shrink-0 z-20">
            <Sidebar />
          </div>
          
          {/* Main Content Area */}
          <div className="flex flex-col flex-1 w-full min-w-0">
            <div className="sticky top-0 z-30 w-full">
              <Navbar />
            </div>
            <main className="flex-1 w-full flex flex-col">
              <div className="flex-1 p-4 md:p-6 lg:p-8 max-w-[1600px] w-full mx-auto">
                {children}
              </div>
            </main>
          </div>
        </div>
        
        {/* Full-width Footer */}
        <Footer />
      </div>
    </AuthGuard>
  );
}

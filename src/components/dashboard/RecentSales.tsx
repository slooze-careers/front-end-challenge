import { MoreHorizontal } from "lucide-react";

export function RecentSales() {
  const sales = Array(5).fill({
    name: "Indra Maulana",
    email: "indra.maulana@gmail.com",
    amount: "+$1500.00",
    avatar: "I"
  });

  return (
    <div className="bg-white dark:bg-[#111111] border border-slate-100 shadow-sm dark:shadow-none dark:border-slate-800/60 p-6 rounded-[1.25rem] w-full h-[380px] flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">Recent Sales</h2>
        <button className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
      <p className="text-[13px] text-slate-500 dark:text-slate-400 mb-6 font-medium">You made 26.5 sales this month.</p>
      
      <div className="flex-1 overflow-y-auto pr-2 space-y-5 scrollbar-thin">
        {sales.map((sale, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-[38px] h-[38px] rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-700 dark:text-slate-300">
                {sale.avatar}
              </div>
              <div>
                <p className="text-[14px] font-bold text-slate-900 dark:text-white">{sale.name}</p>
                <p className="text-[12px] font-medium text-slate-500 dark:text-slate-400">{sale.email}</p>
              </div>
            </div>
            <span className="text-[14px] font-bold text-slate-900 dark:text-white">{sale.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

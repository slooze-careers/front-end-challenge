import { ArrowUpRight, MoreHorizontal } from "lucide-react";

const cardData = [
  { title: "Total Earning", value: "$ 112,893.00", trend: "12.3%" },
  { title: "Views", value: "+112,893", trend: "12.3%" },
  { title: "Total Sales", value: "+112,893", trend: "12.3%" },
  { title: "Subscriptions", value: "+112,893", trend: "12.3%" },
];

export function TopCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
      {cardData.map((item, i) => (
        <div key={i} className="bg-white dark:bg-[#111111] border border-slate-100 shadow-sm dark:shadow-none dark:border-slate-800/60 p-5 rounded-[1.25rem] flex flex-col">
          <div className="flex items-center justify-between text-[13px] font-medium text-slate-500 dark:text-slate-400 mb-3">
            <span>{item.title}</span>
            <button className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
          <div className="text-[26px] font-bold text-slate-900 dark:text-white tracking-tight mb-2">
            {item.value}
          </div>
          <div className="flex items-center gap-2 text-[11px] font-medium">
            <span className="text-slate-400 dark:text-slate-500">trend life</span>
            <div className="flex items-center text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-1.5 py-[2px] rounded">
              <ArrowUpRight className="w-[10px] h-[10px] mr-[2px]" />
              {item.trend}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

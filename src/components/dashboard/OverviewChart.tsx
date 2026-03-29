"use client";

import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from "recharts";

const data = [
  { name: "Jan", value: 1500 },
  { name: "Feb", value: 4800 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 3000 },
  { name: "May", value: 4000 },
  { name: "Jun", value: 4800 },
  { name: "Jul", value: 2500 },
  { name: "Aug", value: 3200 },
  { name: "Sep", value: 1800 },
  { name: "Oct", value: 3100 },
  { name: "Nov", value: 3100 },
  { name: "Dec", value: 1000 },
];

export function OverviewChart() {
  return (
    <div className="bg-white dark:bg-[#111111] border border-slate-100 dark:border-slate-800/60 shadow-sm dark:shadow-none p-6 rounded-[1.25rem] w-full h-[380px] flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">Overview</h2>
      </div>
      
      <div className="flex-1 w-full min-h-[250px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 11, fill: '#64748b' }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 11, fill: '#64748b' }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }} 
              contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="var(--color-overview)" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}


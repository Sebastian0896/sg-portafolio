"use client";

import { LayoutDashboard, BarChart3, Wallet, Settings, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { key: "overview", icon: LayoutDashboard, label: "Overview" },
  { key: "analytics", icon: BarChart3, label: "Analytics" },
  { key: "transacciones", icon: Wallet, label: "Transacciones" },
  { key: "configuracion", icon: Settings, label: "Configuración" },
];

export default function Sidebar({ active, onNavigate }) {
  return (
    <aside className="sticky top-8 hidden h-[calc(100vh-2rem)] w-60 shrink-0 flex-col border-r border-white/10 bg-neutral-950 p-4 lg:flex">
      <div className="flex items-center gap-2 px-2 py-3 text-white">
        <Zap className="h-5 w-5 text-cyan-400" />
        <span className="font-semibold">Metrik</span>
      </div>

      <nav className="mt-6 flex flex-col gap-1">
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => onNavigate(item.key)}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors",
              active === item.key
                ? "bg-cyan-500/10 text-cyan-300"
                : "text-neutral-400 hover:bg-white/5 hover:text-white"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto rounded-xl bg-white/[0.03] p-4 text-xs text-neutral-500 ring-1 ring-white/10">
        Demo — datos simulados, sin backend real.
      </div>
    </aside>
  );
}

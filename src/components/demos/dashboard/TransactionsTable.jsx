"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { transactions } from "@/lib/dashboardData";

const statusStyles = {
  Pagado: "bg-[#0ca30c]/10 text-[#0ca30c]",
  Pendiente: "bg-[#c98500]/10 text-[#c98500]",
  Fallido: "bg-[#e66767]/10 text-[#e66767]",
};

const statusFilters = ["Todos", "Pagado", "Pendiente", "Fallido"];

export default function TransactionsTable({ search = "" }) {
  const [statusFilter, setStatusFilter] = useState("Todos");

  const filtered = transactions.filter((t) => {
    const matchesSearch = t.client.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "Todos" || t.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 p-6">
        <h2 className="text-sm font-medium text-neutral-400">Transacciones recientes</h2>
        <div className="flex flex-wrap gap-1.5">
          {statusFilters.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                statusFilter === s
                  ? "bg-cyan-500 text-neutral-950"
                  : "bg-white/5 text-neutral-400 hover:text-white"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-neutral-500">
              <th className="px-6 py-3 font-medium">ID</th>
              <th className="px-6 py-3 font-medium">Cliente</th>
              <th className="px-6 py-3 font-medium">Monto</th>
              <th className="px-6 py-3 font-medium">Estado</th>
              <th className="px-6 py-3 font-medium">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-neutral-500">
                  No se encontraron transacciones.
                </td>
              </tr>
            ) : (
              filtered.map((t) => (
                <tr key={t.id} className="border-t border-white/5 hover:bg-white/[0.02]">
                  <td className="px-6 py-3 text-neutral-400">{t.id}</td>
                  <td className="px-6 py-3 font-medium text-white">{t.client}</td>
                  <td className="px-6 py-3 tabular-nums text-white">${t.amount.toLocaleString()}</td>
                  <td className="px-6 py-3">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[t.status]}`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-neutral-400">{t.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

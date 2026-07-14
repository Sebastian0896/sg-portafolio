"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Bell } from "lucide-react";

const notifications = [
  { id: 1, text: "Fintra SRL pagó su factura de $3,100.", time: "hace 2h" },
  { id: 2, text: "Lunra Tech tiene un pago pendiente desde ayer.", time: "hace 1d" },
  { id: 3, text: "Tu ingreso mensual superó la meta de $30k.", time: "hace 3d" },
];

export default function Topbar({ title, subtitle, search, onSearchChange, showSearch }) {
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-4 lg:px-10">
      <div>
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="text-sm text-neutral-500">{subtitle}</p>
      </div>

      <div className="flex items-center gap-4">
        {showSearch && (
          <div className="hidden items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 ring-1 ring-white/10 sm:flex">
            <Search className="h-4 w-4 text-neutral-400" />
            <input
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar cliente..."
              className="w-36 bg-transparent text-sm text-white placeholder:text-neutral-500 focus:outline-none"
            />
          </div>
        )}

        <div className="relative">
          <button
            onClick={() => setNotifOpen((v) => !v)}
            className="relative text-neutral-400 hover:text-white"
            aria-label="Notificaciones"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-cyan-400" />
          </button>

          {notifOpen && (
            <div className="absolute right-0 top-8 z-50 w-72 rounded-xl bg-neutral-900 p-2 shadow-lg ring-1 ring-white/10">
              <p className="px-2 py-1.5 text-xs font-medium text-neutral-500">Notificaciones</p>
              {notifications.map((n) => (
                <div key={n.id} className="rounded-lg px-2 py-2 text-sm hover:bg-white/5">
                  <p className="text-neutral-200">{n.text}</p>
                  <p className="mt-0.5 text-xs text-neutral-500">{n.time}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-white/10">
          <Image
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&q=80"
            alt="Avatar del usuario"
            fill
            sizes="32px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

function Switch({ checked, onChange }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative h-6 w-11 shrink-0 rounded-full transition-colors",
        checked ? "bg-cyan-500" : "bg-white/10"
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform",
          checked ? "translate-x-5" : "translate-x-0.5"
        )}
      />
    </button>
  );
}

const initialSettings = [
  { key: "emailNotifs", label: "Notificaciones por email", desc: "Recibe un resumen diario de tu actividad.", checked: true },
  { key: "twoFactor", label: "Autenticación de dos factores", desc: "Añade una capa extra de seguridad a tu cuenta.", checked: false },
  { key: "compactMode", label: "Modo compacto", desc: "Reduce el espaciado en tablas y tarjetas.", checked: false },
  { key: "weeklyDigest", label: "Resumen semanal", desc: "Recibe un correo cada lunes con tus métricas clave.", checked: true },
];

export default function Configuracion() {
  const [settings, setSettings] = useState(initialSettings);

  const toggle = (key, value) => {
    setSettings((prev) => prev.map((s) => (s.key === key ? { ...s, checked: value } : s)));
  };

  return (
    <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10">
      <div className="border-b border-white/10 p-6">
        <h2 className="text-sm font-medium text-neutral-400">Preferencias</h2>
      </div>
      <div className="divide-y divide-white/5">
        {settings.map((s) => (
          <div key={s.key} className="flex items-center justify-between gap-6 px-6 py-4">
            <div>
              <p className="text-sm font-medium text-white">{s.label}</p>
              <p className="text-xs text-neutral-500">{s.desc}</p>
            </div>
            <Switch checked={s.checked} onChange={(v) => toggle(s.key, v)} />
          </div>
        ))}
      </div>
    </div>
  );
}

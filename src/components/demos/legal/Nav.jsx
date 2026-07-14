"use client";

import { useState } from "react";
import { Menu, X, Scale } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { name: "Inicio", href: "#inicio" },
  { name: "Áreas de práctica", href: "#areas" },
  { name: "Equipo", href: "#equipo" },
  { name: "Casos", href: "#casos" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-8 z-40 bg-white/95 backdrop-blur shadow-sm shadow-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2 text-lg font-semibold text-slate-900">
          <Scale className="h-5 w-5 text-amber-700" />
          Reyes &amp; Asociados
        </a>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-amber-700"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className={cn(buttonVariants(), "hidden bg-slate-900 hover:bg-slate-800 md:inline-flex")}
        >
          Consulta gratuita
        </a>

        <button
          className="text-slate-900 md:hidden"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 bg-white px-6 pb-6 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-amber-700"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

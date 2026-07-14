"use client";

import { useState } from "react";
import { Menu, X, Stethoscope } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { name: "Inicio", href: "#inicio" },
  { name: "Especialidades", href: "#especialidades" },
  { name: "Especialistas", href: "#especialistas" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "Citas", href: "#citas" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-8 z-40 bg-white/90 backdrop-blur shadow-sm shadow-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2 text-lg font-semibold text-slate-900">
          <Stethoscope className="h-5 w-5 text-sky-600" />
          Clínica Vitalis
        </a>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-sky-600"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#citas"
          className={cn(buttonVariants({ variant: "default" }), "hidden bg-sky-600 hover:bg-sky-700 md:inline-flex")}
        >
          Agendar cita
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
              className="text-sm font-medium text-slate-600 hover:text-sky-600"
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

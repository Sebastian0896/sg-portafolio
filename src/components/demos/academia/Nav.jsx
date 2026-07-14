"use client";

import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { name: "Inicio", href: "#inicio" },
  { name: "Cursos", href: "#cursos" },
  { name: "Testimonios", href: "#testimonios" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-8 z-40 bg-white/90 backdrop-blur shadow-sm shadow-violet-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2 text-lg font-semibold text-slate-900">
          <GraduationCap className="h-5 w-5 text-violet-600" />
          Aprende+
        </a>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-violet-600"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#cursos"
          className={cn(buttonVariants(), "hidden bg-violet-600 hover:bg-violet-700 md:inline-flex")}
        >
          Explorar cursos
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
              className="text-sm font-medium text-slate-600 hover:text-violet-600"
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

"use client";

import { useState } from "react";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { name: "Inicio", href: "#inicio" },
  { name: "Menú", href: "#menu" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Galería", href: "#galeria" },
  { name: "Reservas", href: "#reservas" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-8 z-40 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2 text-lg font-semibold text-white">
          <UtensilsCrossed className="h-5 w-5 text-orange-500" />
          Sabor & Fuego
        </a>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-orange-500"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#reservas"
          className={cn(buttonVariants({ variant: "default" }), "hidden bg-orange-600 hover:bg-orange-700 md:inline-flex")}
        >
          Reservar mesa
        </a>

        <button
          className="text-white md:hidden"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 bg-black/95 px-6 pb-6 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-orange-500"
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

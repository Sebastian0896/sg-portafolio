"use client";

import { useState } from "react";
import { Menu, X, Layers } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { name: "Producto", href: "#producto" },
  { name: "Precios", href: "#precios" },
  { name: "Testimonios", href: "#testimonios" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-8 z-40 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2 text-lg font-semibold text-white">
          <Layers className="h-5 w-5 text-indigo-400" />
          Nimbus
        </a>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#precios"
          className={cn(buttonVariants(), "hidden bg-indigo-600 hover:bg-indigo-500 md:inline-flex")}
        >
          Empezar gratis
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
        <nav className="flex flex-col gap-4 bg-neutral-950 px-6 pb-6 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-300 hover:text-white"
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

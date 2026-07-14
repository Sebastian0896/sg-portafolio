"use client";

import { useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { name: "Inicio", href: "#inicio" },
  { name: "Clases", href: "#clases" },
  { name: "Membresías", href: "#membresias" },
  { name: "Calculadora", href: "#calculadora" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-8 z-40 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2 text-lg font-semibold text-white">
          <Dumbbell className="h-5 w-5 text-lime-400" />
          Pulso Gym
        </a>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-300 transition-colors hover:text-lime-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#membresias"
          className={cn(buttonVariants(), "hidden bg-lime-500 text-neutral-950 hover:bg-lime-400 md:inline-flex")}
        >
          Únete ahora
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
              className="text-sm font-medium text-neutral-300 hover:text-lime-400"
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

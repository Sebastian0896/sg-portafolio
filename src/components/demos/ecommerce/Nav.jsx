"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { name: "Inicio", href: "#inicio" },
  { name: "Catálogo", href: "#catalogo" },
  { name: "Beneficios", href: "#beneficios" },
];

export default function Nav({ cart, updateQty, removeItem, total, count }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-8 z-40 bg-white/90 backdrop-blur shadow-sm shadow-neutral-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="text-lg font-semibold tracking-tight text-neutral-900">
          Urbana Store
        </a>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-fuchsia-600"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "outline" }),
                "relative border-neutral-300 text-neutral-700"
              )}
            >
              <ShoppingBag className="h-4 w-4" />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-fuchsia-600 text-xs font-semibold text-white">
                  {count}
                </span>
              )}
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Tu carrito</SheetTitle>
              </SheetHeader>

              <div className="flex-1 space-y-4 overflow-y-auto px-4">
                {cart.length === 0 ? (
                  <p className="text-sm text-neutral-500">Tu carrito está vacío.</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                        <Image src={item.image} alt={item.name} fill sizes="64px" className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-neutral-900">{item.name}</p>
                        <p className="text-sm text-neutral-500">${item.price}</p>
                        <div className="mt-1 flex items-center gap-2">
                          <button
                            className="rounded border border-neutral-300 p-1 hover:bg-neutral-100"
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            aria-label="Restar"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-4 text-center text-sm">{item.qty}</span>
                          <button
                            className="rounded border border-neutral-300 p-1 hover:bg-neutral-100"
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            aria-label="Sumar"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                      <button
                        className="text-neutral-400 hover:text-red-600"
                        onClick={() => removeItem(item.id)}
                        aria-label="Eliminar"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              <SheetFooter>
                <div className="flex w-full items-center justify-between border-t border-neutral-200 pt-4 text-sm font-semibold text-neutral-900">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
                <button
                  className={cn(buttonVariants({ size: "lg" }), "w-full bg-fuchsia-600 hover:bg-fuchsia-700")}
                  disabled={cart.length === 0}
                >
                  Finalizar compra
                </button>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <button
            className="text-neutral-900 md:hidden"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 bg-white px-6 pb-6 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-600 hover:text-fuchsia-600"
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

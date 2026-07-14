"use client";

import Image from "next/image";
import { Plus, Check } from "lucide-react";
import { useState } from "react";
import { products } from "@/lib/ecommerceProducts";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Catalogo({ onAdd }) {
  const [added, setAdded] = useState(null);

  const handleAdd = (product) => {
    onAdd(product);
    setAdded(product.id);
    setTimeout(() => setAdded(null), 1200);
  };

  return (
    <section id="catalogo" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-fuchsia-600">Catálogo</span>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">Lo más nuevo de la temporada</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group overflow-hidden rounded-2xl bg-neutral-50 ring-1 ring-neutral-200">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-xs uppercase tracking-wide text-neutral-400">{product.category}</p>
                <h3 className="mt-1 font-semibold text-neutral-900">{product.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-semibold text-neutral-900">${product.price}</span>
                  <button
                    onClick={() => handleAdd(product)}
                    className={cn(
                      buttonVariants({ size: "sm", variant: added === product.id ? "secondary" : "default" }),
                      added === product.id ? "" : "bg-fuchsia-600 hover:bg-fuchsia-700"
                    )}
                  >
                    {added === product.id ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    {added === product.id ? "Agregado" : "Agregar"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

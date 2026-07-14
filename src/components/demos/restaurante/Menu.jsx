"use client";

import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const categories = [
  {
    value: "entradas",
    label: "Entradas",
    items: [
      { name: "Tártar de atún", desc: "Aguacate, sésamo tostado y aire de lima", price: "$12" },
      { name: "Croquetas de rabo", desc: "Alioli ahumado y cebollín", price: "$9" },
      { name: "Carpaccio de res", desc: "Rúcula, parmesano y aceite de trufa", price: "$14" },
    ],
  },
  {
    value: "fuertes",
    label: "Platos fuertes",
    items: [
      { name: "Costilla braseada 12h", desc: "Puré de papa ahumado y jus de res", price: "$26" },
      { name: "Pesca del día a la brasa", desc: "Vegetales de temporada y salsa criolla", price: "$24" },
      { name: "Risotto de hongos", desc: "Parmesano añejo y aceite de trufa negra", price: "$18" },
    ],
  },
  {
    value: "postres",
    label: "Postres",
    items: [
      { name: "Tres leches quemado", desc: "Caramelo salado y helado de vainilla", price: "$8" },
      { name: "Volcán de chocolate", desc: "Centro líquido y frutos rojos", price: "$9" },
    ],
  },
  {
    value: "bebidas",
    label: "Bebidas",
    items: [
      { name: "Coctel de la casa", desc: "Ron añejo, maracuyá y jengibre", price: "$10" },
      { name: "Vino tinto de la casa (copa)", desc: "Selección del sommelier", price: "$8" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Nuestra carta</span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Un menú que cambia con las estaciones</h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="relative hidden h-[420px] overflow-hidden rounded-2xl md:block">
            <Image
              src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80"
              alt="Plato preparado por el chef"
              fill
              sizes="(min-width: 768px) 40vw, 0px"
              className="object-cover"
            />
          </div>

          <Tabs defaultValue="entradas">
            <TabsList className="mb-6 w-full justify-start bg-neutral-900">
              {categories.map((c) => (
                <TabsTrigger key={c.value} value={c.value}>
                  {c.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((c) => (
              <TabsContent key={c.value} value={c.value} className="space-y-6">
                {c.items.map((item) => (
                  <div key={item.name} className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <h3 className="font-semibold text-white">{item.name}</h3>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                    <span className="shrink-0 font-semibold text-orange-500">{item.price}</span>
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

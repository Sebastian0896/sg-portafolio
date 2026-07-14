"use client";

import { useState, useMemo } from "react";
import { Calculator } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function getCategoria(bmi) {
  if (bmi < 18.5) return { label: "Bajo peso", color: "text-sky-400" };
  if (bmi < 25) return { label: "Peso saludable", color: "text-lime-400" };
  if (bmi < 30) return { label: "Sobrepeso", color: "text-amber-400" };
  return { label: "Obesidad", color: "text-red-400" };
}

export default function Calculadora() {
  const [peso, setPeso] = useState("70");
  const [altura, setAltura] = useState("170");

  const bmi = useMemo(() => {
    const p = parseFloat(peso);
    const a = parseFloat(altura) / 100;
    if (!p || !a) return null;
    return p / (a * a);
  }, [peso, altura]);

  const categoria = bmi ? getCategoria(bmi) : null;

  return (
    <section id="calculadora" className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-400">Calculadora</span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Calcula tu IMC</h2>
          <p className="mt-3 text-neutral-400">Una referencia rápida, no reemplaza la evaluación de un entrenador.</p>
        </div>

        <div className="rounded-2xl bg-white/[0.03] p-8 ring-1 ring-white/10">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="peso" className="text-neutral-300">Peso (kg)</Label>
              <Input
                id="peso"
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                className="border-white/10 bg-white/5 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="altura" className="text-neutral-300">Altura (cm)</Label>
              <Input
                id="altura"
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                className="border-white/10 bg-white/5 text-white"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 rounded-xl bg-black/30 py-6">
            <Calculator className="h-6 w-6 text-lime-400" />
            <p className="text-3xl font-bold text-white">{bmi ? bmi.toFixed(1) : "—"}</p>
            {categoria && <p className={`text-sm font-medium ${categoria.color}`}>{categoria.label}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    monthly: 0,
    annual: 0,
    desc: "Para probar Nimbus con tu equipo.",
    features: ["Hasta 5 usuarios", "3 proyectos activos", "Soporte por email"],
  },
  {
    name: "Pro",
    monthly: 19,
    annual: 15,
    desc: "Para equipos que ya dependen de Nimbus.",
    features: ["Usuarios ilimitados", "Proyectos ilimitados", "Automatizaciones", "Soporte prioritario"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthly: 49,
    annual: 39,
    desc: "Para organizaciones con necesidades avanzadas.",
    features: ["Todo lo de Pro", "SSO y permisos avanzados", "Gestor de cuenta dedicado"],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="precios" className="bg-neutral-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">Precios</span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Un plan para cada etapa</h2>

          <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-full bg-white/5 p-1 ring-1 ring-white/10">
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                !annual ? "bg-indigo-600 text-white" : "text-neutral-400"
              )}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                annual ? "bg-indigo-600 text-white" : "text-neutral-400"
              )}
            >
              Anual <span className="text-xs opacity-80">(-20%)</span>
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-2xl p-8 ring-1",
                plan.highlighted
                  ? "bg-indigo-600 ring-indigo-500"
                  : "bg-white/[0.03] ring-white/10"
              )}
            >
              <h3 className={cn("text-lg font-semibold", plan.highlighted ? "text-white" : "text-white")}>
                {plan.name}
              </h3>
              <p className={cn("mt-1 text-sm", plan.highlighted ? "text-indigo-100" : "text-neutral-400")}>
                {plan.desc}
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">
                  ${annual ? plan.annual : plan.monthly}
                </span>
                <span className={cn("text-sm", plan.highlighted ? "text-indigo-100" : "text-neutral-400")}>
                  /mes
                </span>
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={cn(
                      "flex items-center gap-2 text-sm",
                      plan.highlighted ? "text-indigo-50" : "text-neutral-300"
                    )}
                  >
                    <Check className="h-4 w-4 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-8 w-full",
                  plan.highlighted
                    ? "bg-white text-indigo-700 hover:bg-indigo-50"
                    : "bg-white/10 text-white hover:bg-white/20"
                )}
              >
                Empezar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

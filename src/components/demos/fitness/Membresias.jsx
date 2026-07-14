import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const planes = [
  {
    name: "Básico",
    price: 25,
    features: ["Acceso a sala de pesas", "Horario diurno", "1 clase grupal/semana"],
  },
  {
    name: "Pro",
    price: 40,
    features: ["Acceso ilimitado", "Todas las clases grupales", "Casillero incluido"],
    highlighted: true,
  },
  {
    name: "Elite",
    price: 60,
    features: ["Todo lo de Pro", "2 sesiones con entrenador/mes", "Plan nutricional"],
  },
];

export default function Membresias() {
  return (
    <section id="membresias" className="bg-neutral-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-400">Membresías</span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Elige tu plan</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {planes.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-2xl p-8 ring-1",
                plan.highlighted ? "bg-lime-500 ring-lime-400" : "bg-white/[0.03] ring-white/10"
              )}
            >
              <h3 className={cn("text-lg font-semibold", plan.highlighted ? "text-neutral-950" : "text-white")}>
                {plan.name}
              </h3>
              <p className="mt-6 flex items-baseline gap-1">
                <span className={cn("text-4xl font-bold", plan.highlighted ? "text-neutral-950" : "text-white")}>
                  ${plan.price}
                </span>
                <span className={cn("text-sm", plan.highlighted ? "text-neutral-800" : "text-neutral-400")}>/mes</span>
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={cn(
                      "flex items-center gap-2 text-sm",
                      plan.highlighted ? "text-neutral-900" : "text-neutral-300"
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
                    ? "bg-neutral-950 text-white hover:bg-neutral-800"
                    : "bg-white/10 text-white hover:bg-white/20"
                )}
              >
                Elegir {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-neutral-950 pt-40 pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-600/30 via-neutral-950 to-neutral-950" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-300 ring-1 ring-indigo-500/30">
          <Sparkles className="h-3.5 w-3.5" />
          Ahora con automatizaciones con IA
        </span>
        <h1 className="mt-6 text-4xl font-bold text-white sm:text-6xl">
          Organiza el trabajo de tu equipo en un solo lugar
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400">
          Nimbus centraliza tareas, métricas y comunicación para que tu equipo se enfoque en construir, no en coordinar.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#precios" className={cn(buttonVariants({ size: "lg" }), "bg-indigo-600 hover:bg-indigo-500")}>
            Empezar gratis
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#producto"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-white/20 text-white hover:bg-white/10")}
          >
            Ver producto
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-5xl px-6">
        <div className="relative h-[340px] overflow-hidden rounded-2xl ring-1 ring-white/10 sm:h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"
            alt="Panel de control de Nimbus mostrando métricas y tareas del equipo"
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

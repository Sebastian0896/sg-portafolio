import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Award } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-slate-900 pt-40 pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1 text-sm font-medium text-amber-400 ring-1 ring-amber-500/30">
            <Award className="h-4 w-4" />
            Más de 20 años de experiencia legal
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Representación legal seria, resultados concretos
          </h1>
          <p className="mt-4 max-w-lg text-lg text-slate-300">
            Asesoría corporativa, litigios y derecho inmobiliario con un equipo que defiende tus intereses en cada etapa.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#contacto" className={cn(buttonVariants({ size: "lg" }), "bg-amber-600 hover:bg-amber-500 text-slate-950")}>
              Consulta gratuita
            </a>
            <a
              href="#areas"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-white/20 bg-transparent text-white hover:bg-white/10")}
            >
              Ver áreas de práctica
            </a>
          </div>
        </div>

        <div className="relative h-80 overflow-hidden rounded-3xl sm:h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80"
            alt="Abogados de Reyes & Asociados en sala de reuniones"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

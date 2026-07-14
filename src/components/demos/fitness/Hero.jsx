import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Flame } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex h-screen items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80"
        alt="Persona entrenando en Pulso Gym"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/30" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-lime-500/10 px-4 py-1 text-sm font-medium text-lime-400 ring-1 ring-lime-500/30">
          <Flame className="h-3.5 w-3.5" />
          Primera semana gratis
        </span>
        <h1 className="mt-4 max-w-lg text-4xl font-bold text-white sm:text-5xl">
          Tu mejor versión empieza aquí
        </h1>
        <p className="mt-4 max-w-md text-lg text-neutral-300">
          Clases grupales, entrenadores certificados y equipo de última generación para que no pongas excusas.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a href="#membresias" className={cn(buttonVariants({ size: "lg" }), "bg-lime-500 text-neutral-950 hover:bg-lime-400")}>
            Únete ahora
          </a>
          <a
            href="#clases"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-white/20 text-white hover:bg-white/10")}
          >
            Ver clases
          </a>
        </div>
      </div>
    </section>
  );
}

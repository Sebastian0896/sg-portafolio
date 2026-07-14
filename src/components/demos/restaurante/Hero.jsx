import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex h-screen items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80"
        alt="Interior del restaurante Sabor & Fuego"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <span className="mb-4 inline-block rounded-full bg-orange-600/20 px-4 py-1 text-sm font-medium text-orange-400">
          Cocina de fuego abierto desde 2012
        </span>
        <h1 className="text-4xl font-bold text-white sm:text-6xl">
          Sabor & Fuego
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          Ingredientes locales, brasas encendidas y una carta que cambia con cada estación. Reserva tu mesa y vive la experiencia.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="#reservas" className={cn(buttonVariants({ size: "lg" }), "bg-orange-600 hover:bg-orange-700")}>
            Reservar mesa
          </a>
          <a
            href="#menu"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-white/40 bg-transparent text-white hover:bg-white/10")}
          >
            Ver menú
          </a>
        </div>
      </div>
    </section>
  );
}

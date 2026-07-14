import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex h-screen items-center overflow-hidden bg-neutral-950">
      <Image
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80"
        alt="Modelo con ropa de la colección Urbana Store"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <span className="inline-flex items-center rounded-full bg-fuchsia-600/20 px-4 py-1 text-sm font-medium text-fuchsia-300 ring-1 ring-fuchsia-500/40">
          Nueva colección
        </span>
        <h1 className="mt-4 max-w-lg text-4xl font-bold text-white sm:text-5xl">
          Moda urbana para tu día a día
        </h1>
        <p className="mt-4 max-w-md text-lg text-neutral-300">
          Prendas y accesorios pensados para moverte con estilo, sin sacrificar comodidad.
        </p>
        <a
          href="#catalogo"
          className={cn(buttonVariants({ size: "lg" }), "mt-8 bg-fuchsia-600 hover:bg-fuchsia-700")}
        >
          Ver catálogo
        </a>
      </div>
    </section>
  );
}

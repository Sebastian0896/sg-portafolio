import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-violet-50 pt-40 pb-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1 text-sm font-medium text-violet-700">
          <GraduationCap className="h-4 w-4" />
          Más de 10,000 estudiantes activos
        </span>
        <h1 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
          Aprende nuevas habilidades a tu ritmo
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
          Cursos prácticos en diseño, programación y negocios, dictados por instructores con experiencia real.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#cursos" className={cn(buttonVariants({ size: "lg" }), "bg-violet-600 hover:bg-violet-700")}>
            Explorar cursos
          </a>
        </div>
      </div>
    </section>
  );
}

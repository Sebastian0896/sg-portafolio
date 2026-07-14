import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { CalendarCheck, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-sky-50 pt-40 pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-sm font-medium text-sky-700">
            <ShieldCheck className="h-4 w-4" />
            Más de 15 años cuidando a nuestros pacientes
          </span>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Tu salud, en manos de especialistas
          </h1>
          <p className="mt-4 max-w-lg text-lg text-slate-600">
            Atención médica y dental integral, con tecnología moderna y un equipo que te acompaña en cada etapa de tu tratamiento.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#citas" className={cn(buttonVariants({ size: "lg" }), "bg-sky-600 hover:bg-sky-700")}>
              <CalendarCheck className="h-4 w-4" />
              Agendar cita
            </a>
            <a
              href="#especialidades"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-slate-300 text-slate-700 hover:bg-slate-100")}
            >
              Ver especialidades
            </a>
          </div>
        </div>

        <div className="relative h-80 overflow-hidden rounded-3xl sm:h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1587351021355-a479a299d2f9?auto=format&fit=crop&w=1600&q=80"
            alt="Doctora atendiendo a un paciente en la Clínica Vitalis"
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

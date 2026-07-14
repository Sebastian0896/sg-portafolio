import Image from "next/image";
import { Quote } from "lucide-react";

const testimonios = [
  {
    name: "Valeria Nuñez",
    role: "COO en Fintra",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
    text: "Nimbus reemplazó tres herramientas distintas. Ahora todo el equipo trabaja desde un solo lugar.",
  },
  {
    name: "Diego Marte",
    role: "Head of Product en Lunra",
    photo: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=200&q=80",
    text: "La visibilidad que tenemos sobre cada proyecto cambió por completo cómo planificamos los sprints.",
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">Testimonios</span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Equipos que ya trabajan con Nimbus</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {testimonios.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
              <Quote className="h-6 w-6 text-indigo-400" />
              <p className="mt-3 text-neutral-300">{t.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={t.photo} alt={t.name} fill sizes="40px" className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-neutral-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

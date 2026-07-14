import Image from "next/image";
import { Quote } from "lucide-react";

const testimonios = [
  {
    name: "Rafael Núñez",
    role: "Estudiante de JavaScript Moderno",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
    text: "Pasé de no saber programar a construir mi primera app en dos meses. Las clases son muy claras.",
  },
  {
    name: "Sofía Almonte",
    role: "Estudiante de Diseño UI/UX",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
    text: "El curso me dio la confianza para hacer mi cambio de carrera. Hoy trabajo como diseñadora junior.",
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="bg-violet-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-600">Testimonios</span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Historias de nuestros estudiantes</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {testimonios.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <Quote className="h-6 w-6 text-violet-500" />
              <p className="mt-3 text-slate-700">{t.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={t.photo} alt={t.name} fill sizes="40px" className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

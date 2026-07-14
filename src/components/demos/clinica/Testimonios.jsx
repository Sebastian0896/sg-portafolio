import { Quote, Star } from "lucide-react";

const testimonios = [
  {
    name: "Rosa M.",
    text: "El equipo de la Clínica Vitalis me hizo sentir en confianza desde la primera cita. Excelente seguimiento.",
  },
  {
    name: "Julio F.",
    text: "Pedí una cita de emergencia y me atendieron el mismo día. La atención es rápida y muy profesional.",
  },
  {
    name: "Carolina D.",
    text: "Llevo a mis hijos con la Dra. Jiménez hace años. Siempre atenta y explica todo con paciencia.",
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">Testimonios</span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Lo que dicen nuestros pacientes</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonios.map((t) => (
            <div key={t.name} className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <Quote className="h-6 w-6 text-sky-400" />
              <p className="mt-3 text-slate-700">{t.text}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-medium text-slate-900">{t.name}</span>
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

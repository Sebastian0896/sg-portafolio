import { Quote, Star } from "lucide-react";

const resenas = [
  { name: "Familia Torres", text: "La vista desde la suite era espectacular. El servicio de playa hizo que no quisiéramos irnos." },
  { name: "Marcos V.", text: "Reservé para mi luna de miel y superó todas las expectativas. Volveremos sin duda." },
  { name: "Elena R.", text: "El personal es muy atento y las habitaciones están impecables. 100% recomendado." },
];

export default function Resenas() {
  return (
    <section id="resenas" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-600">Reseñas</span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Lo que dicen nuestros huéspedes</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {resenas.map((r) => (
            <div key={r.name} className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <Quote className="h-6 w-6 text-amber-500" />
              <p className="mt-3 text-slate-700">{r.text}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-medium text-slate-900">{r.name}</span>
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

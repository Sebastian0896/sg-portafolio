import Image from "next/image";

const equipo = [
  {
    name: "Lcda. Carmen Reyes",
    role: "Socia Fundadora — Corporativo",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Lcdo. Manuel Ortiz",
    role: "Socio — Litigios",
    photo: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Lcda. Patricia Gómez",
    role: "Asociada — Inmobiliario",
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Equipo() {
  return (
    <section id="equipo" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-700">Equipo</span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Abogados que conocen tu caso</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {equipo.map((a) => (
            <div key={a.name} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <div className="relative h-64 w-full">
                <Image
                  src={a.photo}
                  alt={a.name}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900">{a.name}</h3>
                <p className="text-sm text-amber-700">{a.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

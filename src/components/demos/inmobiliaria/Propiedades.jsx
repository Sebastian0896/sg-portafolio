import Image from "next/image";
import { Bed, Bath, Ruler, MapPin } from "lucide-react";
import { properties } from "@/lib/properties";

export default function Propiedades({ query, tipo }) {
  const filtered = properties.filter((p) => {
    const matchesQuery =
      query.trim() === "" ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.location.toLowerCase().includes(query.toLowerCase());
    const matchesTipo = tipo === "Todos" || p.type === tipo;
    return matchesQuery && matchesTipo;
  });

  return (
    <section id="propiedades" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Propiedades</span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            {filtered.length} {filtered.length === 1 ? "propiedad encontrada" : "propiedades encontradas"}
          </h2>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-slate-500">No encontramos propiedades con esos filtros.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <div key={p.id} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <div className="relative h-52 w-full">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
                    {p.type}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                    <MapPin className="h-3.5 w-3.5" />
                    {p.location}
                  </p>
                  <p className="mt-3 text-lg font-bold text-emerald-700">${p.price.toLocaleString()}</p>
                  <div className="mt-3 flex items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Bed className="h-4 w-4" /> {p.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="h-4 w-4" /> {p.baths}
                    </span>
                    <span className="flex items-center gap-1">
                      <Ruler className="h-4 w-4" /> {p.area}m²
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

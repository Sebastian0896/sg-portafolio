import { ShieldCheck, Headset, Search } from "lucide-react";

const razones = [
  { icon: Search, title: "Búsqueda a tu medida", desc: "Filtramos propiedades según tu presupuesto y necesidades." },
  { icon: ShieldCheck, title: "Procesos transparentes", desc: "Documentación clara y acompañamiento legal en cada paso." },
  { icon: Headset, title: "Agentes dedicados", desc: "Un asesor te acompaña desde la visita hasta el cierre." },
];

export default function PorQueElegirnos() {
  return (
    <section id="nosotros" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Nosotros</span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Por qué elegir Casa Nova</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {razones.map((r) => (
            <div key={r.title} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <r.icon className="h-5 w-5 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-900">{r.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

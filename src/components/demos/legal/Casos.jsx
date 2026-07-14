import { Quote } from "lucide-react";

const casos = [
  {
    title: "Fusión de empresas del sector logístico",
    text: "Asesoramos el proceso de fusión completo, desde la due diligence hasta el cierre, protegiendo los intereses de ambas partes.",
  },
  {
    title: "Litigio comercial resuelto favorablemente",
    text: "Representamos a una pyme en una disputa contractual de alto valor, logrando un acuerdo favorable sin llegar a juicio.",
  },
  {
    title: "Titulación de complejo residencial",
    text: "Gestionamos la titulación y registro de más de 80 unidades habitacionales para un desarrollador inmobiliario.",
  },
];

export default function Casos() {
  return (
    <section id="casos" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-700">Casos de éxito</span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Resultados que respaldan nuestro trabajo</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {casos.map((c) => (
            <div key={c.title} className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <Quote className="h-6 w-6 text-amber-700" />
              <h3 className="mt-3 font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

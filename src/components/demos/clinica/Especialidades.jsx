import { HeartPulse, Baby, Brain, Eye, Bone, Smile } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const especialidades = [
  { icon: HeartPulse, title: "Cardiología", desc: "Evaluación y seguimiento integral de la salud cardiovascular." },
  { icon: Smile, title: "Odontología", desc: "Limpieza, ortodoncia y estética dental para toda la familia." },
  { icon: Baby, title: "Pediatría", desc: "Control de crecimiento y desarrollo desde el nacimiento." },
  { icon: Brain, title: "Neurología", desc: "Diagnóstico y tratamiento de trastornos del sistema nervioso." },
  { icon: Eye, title: "Oftalmología", desc: "Exámenes visuales y tratamiento de enfermedades oculares." },
  { icon: Bone, title: "Traumatología", desc: "Atención de lesiones óseas, musculares y articulares." },
];

export default function Especialidades() {
  return (
    <section id="especialidades" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">Especialidades</span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Un equipo médico completo</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {especialidades.map((e) => (
            <Card key={e.title} className="border-slate-200 ring-0 shadow-sm">
              <CardHeader>
                <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100">
                  <e.icon className="h-5 w-5 text-sky-600" />
                </div>
                <CardTitle className="text-slate-900">{e.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{e.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

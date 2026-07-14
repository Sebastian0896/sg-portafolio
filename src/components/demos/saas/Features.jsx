import { Zap, BarChart3, Shield, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  { icon: Zap, title: "Automatizaciones", desc: "Flujos que se disparan solos según reglas que tú defines." },
  { icon: BarChart3, title: "Métricas en vivo", desc: "Dashboards con el progreso real de cada proyecto." },
  { icon: Users, title: "Colaboración", desc: "Comentarios, menciones y notificaciones en un solo hilo." },
  { icon: Shield, title: "Seguridad", desc: "Permisos por rol y respaldo automático de tu información." },
];

export default function Features() {
  return (
    <section id="producto" className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">Producto</span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Todo lo que tu equipo necesita</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.title} className="border-white/10 bg-white/[0.03] shadow-none">
              <CardHeader>
                <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10">
                  <f.icon className="h-5 w-5 text-indigo-400" />
                </div>
                <CardTitle className="text-white">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-400">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

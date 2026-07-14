import { Briefcase, Gavel, Home, Users, FileText, Landmark } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const areas = [
  { icon: Briefcase, title: "Derecho Corporativo", desc: "Constitución de empresas, contratos y fusiones." },
  { icon: Gavel, title: "Litigios", desc: "Representación en procesos civiles y comerciales." },
  { icon: Home, title: "Derecho Inmobiliario", desc: "Compraventa, arrendamientos y titulación de propiedades." },
  { icon: Users, title: "Derecho Laboral", desc: "Asesoría a empresas y empleados en relaciones laborales." },
  { icon: FileText, title: "Propiedad Intelectual", desc: "Registro de marcas, patentes y derechos de autor." },
  { icon: Landmark, title: "Derecho Administrativo", desc: "Trámites y litigios frente a entidades del Estado." },
];

export default function Areas() {
  return (
    <section id="areas" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-700">Áreas de práctica</span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Asesoría legal integral</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <Card key={a.title} className="border-slate-200 shadow-sm">
              <CardHeader>
                <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">
                  <a.icon className="h-5 w-5 text-amber-700" />
                </div>
                <CardTitle className="text-slate-900">{a.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{a.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

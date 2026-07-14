import { Monitor, Server, Network, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const niveles = [
  {
    icon: Monitor,
    badge: "Lo que ves aquí",
    title: "Sitio Web",
    desc: "Diseño y experiencia de usuario, sin conexión a datos reales.",
    features: [
      "Diseño responsive y moderno",
      "Contenido y textos personalizados",
      "Formularios de contacto",
      "Optimizado para SEO básico",
    ],
    fit: "Landing pages, portafolios, sitios informativos",
  },
  {
    icon: Server,
    badge: "Un paso más",
    title: "Web App",
    desc: "Todo lo anterior, más lógica de negocio y datos reales detrás.",
    features: [
      "Backend propio (Node.js, Next.js API routes)",
      "Base de datos (usuarios, productos, reservas)",
      "Autenticación y roles de usuario",
      "Panel de administración",
    ],
    fit: "E-commerce, sistemas de reservas, plataformas de gestión",
    highlighted: true,
  },
  {
    icon: Network,
    badge: "Escala completa",
    title: "Plataforma / Sistema",
    desc: "Múltiples servicios conectados entre sí, listos para crecer.",
    features: [
      "Integraciones con APIs externas (pagos, mensajería, mapas, IA)",
      "Múltiples roles y permisos",
      "Arquitectura pensada para escalar",
      "Paneles y reportes a medida",
    ],
    fit: "SaaS, marketplaces, sistemas internos complejos",
  },
];

export default function AlcanceProyecto() {
  return (
    <div className="mx-auto mb-16 max-w-6xl">
      <div className="mx-auto mb-10 max-w-2xl rounded-2xl bg-neutral-900 p-6 text-center ring-1 ring-white/10">
        <p className="text-sm text-gray-300">
          Cada demo de abajo muestra <span className="text-emerald-500 font-semibold">diseño y experiencia de usuario</span> —
          no están conectados a una base de datos ni a un backend real. El alcance de tu proyecto se define contigo:
          puede quedarse en un sitio informativo o crecer hasta una aplicación completa con su propio backend,
          base de datos e integraciones a APIs.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {niveles.map((n) => (
          <Card
            key={n.title}
            className={`h-full border-0 bg-neutral-900 ring-1 ${
              n.highlighted ? "ring-emerald-500/50" : "ring-white/10"
            }`}
          >
            <CardHeader>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10">
                  <n.icon className="h-5 w-5 text-emerald-500" />
                </div>
                <Badge variant="secondary">{n.badge}</Badge>
              </div>
              <CardTitle className="text-white">{n.title}</CardTitle>
              <p className="text-sm text-gray-400">{n.desc}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {n.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-white/10 pt-4 text-xs text-gray-500">
                <span className="text-gray-400">Ideal para: </span>
                {n.fit}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

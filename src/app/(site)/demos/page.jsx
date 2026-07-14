import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { demos } from "@/lib/demos";
import AlcanceProyecto from "@/components/AlcanceProyecto";

export const metadata = {
  title: "Demos | Sebastián González Rodríguez",
  description: "Ejemplos de sitios web modernos para distintos mercados: restaurantes, salud, e-commerce, inmobiliarias y más.",
};

export default function DemosPage() {
  return (
    <section className="bg-black">
      <h3 className="text-center">Demos</h3>
      <p className="mx-auto mb-8 max-w-2xl text-center text-gray-400">
        Ejemplos de sitios web modernos que puedo desarrollar para tu negocio. Cada demo está pensado para un mercado distinto.
      </p>

      <AlcanceProyecto />

      <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-emerald-500">
        Explora los 10 demos
      </p>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {demos.map((demo) => (
          <Link key={demo.slug} href={`/demos/${demo.slug}`}>
            <Card className="h-full border-0 ring-1 ring-white/10 bg-neutral-900 transition-transform hover:-translate-y-1 hover:ring-emerald-500/50">
              <div className="relative h-40 w-full">
                <Image
                  src={demo.image}
                  alt={demo.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${demo.accent} opacity-30`} />
              </div>
              <CardHeader>
                <CardTitle className="text-white">{demo.title}</CardTitle>
                <CardDescription className="text-emerald-500">{demo.market}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-sm text-gray-400">{demo.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {demo.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, TrendingUp, ShieldCheck, Clock } from "lucide-react";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import { demos } from "@/lib/demos";

export const metadata = {
  title: "Sitios web para negocios en Panamá | Sebastián González R.",
  description:
    "Diseño páginas web modernas para negocios en Panamá — restaurantes, clínicas, gimnasios, inmobiliarias y cualquier tipo de negocio. Escríbeme por WhatsApp y hablemos de tu proyecto.",
};

const razones = [
  {
    icon: TrendingUp,
    title: "Existe en Google",
    desc: "Si tu negocio no está en internet, para la mayoría de la gente que busca, no existe.",
  },
  {
    icon: ShieldCheck,
    title: "Genera confianza",
    desc: "Un sitio profesional te distingue de la competencia que no tiene web o tiene una anticuada.",
  },
  {
    icon: Clock,
    title: "Vende 24/7",
    desc: "Atiende consultas y muestra tu negocio incluso cuando estás cerrado.",
  },
];

const featuredSlugs = ["restaurante", "clinica", "fitness", "inmobiliaria"];
const featuredDemos = featuredSlugs
  .map((slug) => demos.find((d) => d.slug === slug))
  .filter(Boolean);

export default function PanamaLanding() {
  return (
    <main className="text-white">
      {/* Hero */}
      <section className="flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
        <span className="text-lg font-bold text-emerald-500">SGR</span>
        <span className="mt-6 inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-400 ring-1 ring-emerald-500/30">
          Para negocios en Panamá
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold sm:text-5xl">
          ¿Tu negocio en Panamá todavía no tiene página web?
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-400">
          Diseño sitios modernos para restaurantes, clínicas, gimnasios, inmobiliarias y otros negocios. Estos son
          algunos ejemplos de lo que hago.
        </p>
        <WhatsAppButton size="lg" className="mt-8" />
      </section>

      {/* Razones */}
      <section className="bg-neutral-950 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Por qué tu negocio necesita una web</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {razones.map((r) => (
              <div key={r.title} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
                  <r.icon className="h-5 w-5 text-emerald-500" />
                </div>
                <h3 className="font-semibold">{r.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demos destacados */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Algunos ejemplos</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-400">
            Diseño y experiencia de usuario para distintos tipos de negocio.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDemos.map((demo) => (
              <a
                key={demo.slug}
                href={`/demos/${demo.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-emerald-500/50"
              >
                <div className="relative h-32 w-full">
                  <Image
                    src={demo.image}
                    alt={demo.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${demo.accent} opacity-30`} />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-white">{demo.title}</p>
                  <p className="text-sm text-emerald-500">{demo.market}</p>
                </div>
              </a>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            También hay ejemplos de e-commerce, SaaS, estudios legales, hoteles, academias y dashboards en la{" "}
            <Link href="/demos" target="_blank" className="text-emerald-500 underline hover:text-emerald-400">
              galería completa
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Reassurance + CTA final */}
      <section className="bg-neutral-950 px-6 py-20">
        <div className="mx-auto max-w-xl rounded-2xl bg-black p-10 text-center ring-1 ring-white/10">
          <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-500" />
          <h2 className="mt-4 text-2xl font-bold">¿No ves tu tipo de negocio?</h2>
          <p className="mt-2 text-gray-400">
            Estos son solo ejemplos, no un catálogo cerrado. Si tu negocio necesita algo distinto, también lo puedo
            desarrollar.
          </p>
          <WhatsAppButton size="lg" className="mt-8" />
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-xs text-gray-600">
        Sebastián González R. — Desarrollador Web Frontend · portafoliosgr.com
      </footer>
    </main>
  );
}

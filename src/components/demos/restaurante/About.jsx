import Image from "next/image";
import { Flame, Leaf, Award } from "lucide-react";

const highlights = [
  { icon: Flame, title: "Brasa y leña", desc: "Todo pasa por fuego abierto para un sabor auténtico." },
  { icon: Leaf, title: "Ingredientes locales", desc: "Trabajamos con productores de la región cada semana." },
  { icon: Award, title: "12 años de trayectoria", desc: "Reconocidos por la guía gastronómica local desde 2018." },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-black py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="relative h-[420px] overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
            alt="Chef preparando un plato en la cocina"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Nuestra historia</span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Cocinamos con fuego, servimos con calma</h2>
          <p className="mt-4 text-gray-400">
            Sabor & Fuego nació de la idea de volver a lo esencial: fuego, buenos ingredientes y tiempo. Cada plato de nuestra carta se cocina a la brasa, respetando técnicas tradicionales y el ritmo de las estaciones.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title}>
                <h.icon className="h-6 w-6 text-orange-500" />
                <h3 className="mt-3 font-semibold text-white">{h.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

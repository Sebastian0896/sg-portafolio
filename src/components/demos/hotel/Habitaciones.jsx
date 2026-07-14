import Image from "next/image";
import { Wifi, Waves, UtensilsCrossed, Users2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const habitaciones = [
  {
    name: "Habitación Deluxe",
    price: 120,
    guests: 2,
    amenities: [Wifi, UtensilsCrossed],
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Suite Vista al Mar",
    price: 210,
    guests: 3,
    amenities: [Wifi, Waves, UtensilsCrossed],
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Villa Privada",
    price: 380,
    guests: 5,
    amenities: [Wifi, Waves, UtensilsCrossed],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Habitaciones() {
  return (
    <section id="habitaciones" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-600">Habitaciones</span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Elige tu estadía ideal</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {habitaciones.map((h) => (
            <div key={h.name} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <div className="relative h-56 w-full">
                <Image
                  src={h.image}
                  alt={h.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-slate-900">{h.name}</h3>
                  <span className="flex items-center gap-1 text-sm text-slate-500">
                    <Users2 className="h-4 w-4" /> {h.guests}
                  </span>
                </div>
                <div className="mt-2 flex gap-2 text-slate-400">
                  {h.amenities.map((Icon, i) => (
                    <Icon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-bold text-amber-700">
                    ${h.price} <span className="text-sm font-normal text-slate-500">/noche</span>
                  </p>
                  <a href="#" className={cn(buttonVariants({ size: "sm" }), "bg-amber-600 hover:bg-amber-700")}>
                    Reservar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

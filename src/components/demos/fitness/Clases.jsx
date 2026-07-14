import Image from "next/image";

const clases = [
  {
    name: "CrossFit",
    time: "Lun - Vie · 6:00 AM / 6:00 PM",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Yoga",
    time: "Mar - Jue · 7:00 AM",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Spinning",
    time: "Lun - Sáb · 5:30 PM",
    image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Boxeo",
    time: "Mié - Vie · 7:00 PM",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Clases() {
  return (
    <section id="clases" className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-lime-400">Clases</span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Encuentra tu ritmo</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clases.map((c) => (
            <div key={c.name} className="group relative h-64 overflow-hidden rounded-2xl">
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-semibold text-white">{c.name}</h3>
                <p className="text-xs text-neutral-300">{c.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const photos = [
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80",
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Galería</span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Un vistazo a la experiencia</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {photos.map((src, i) => (
            <div key={src} className={`relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 row-span-2 h-72 sm:h-full" : "h-36"}`}>
              <Image
                src={src}
                alt="Plato o ambiente del restaurante Sabor & Fuego"
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const photos = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80",
];

export default function Galeria() {
  return (
    <section id="galeria" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-600">Galería</span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Un vistazo a Costa Serena</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {photos.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 row-span-2 h-72 sm:h-full" : "h-36"}`}
            >
              <Image
                src={src}
                alt="Vista del hotel Costa Serena"
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

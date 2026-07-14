import Image from "next/image";

const doctores = [
  {
    name: "Dra. Mariana Cruz",
    specialty: "Cardióloga",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dr. Andrés Peña",
    specialty: "Odontólogo",
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dra. Laura Jiménez",
    specialty: "Pediatra",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dr. Carlos Ramírez",
    specialty: "Traumatólogo",
    photo: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Especialistas() {
  return (
    <section id="especialistas" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">Nuestro equipo</span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Especialistas a tu cuidado</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctores.map((d) => (
            <div key={d.name} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <div className="relative h-56 w-full">
                <Image
                  src={d.photo}
                  alt={d.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900">{d.name}</h3>
                <p className="text-sm text-sky-600">{d.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

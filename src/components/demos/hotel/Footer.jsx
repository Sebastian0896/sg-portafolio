import { Palmtree, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-slate-600 sm:flex-row">
        <div className="flex items-center gap-2 text-slate-900">
          <Palmtree className="h-5 w-5 text-amber-600" />
          <span className="font-semibold">Costa Serena</span>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm sm:flex-row sm:gap-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            Playa Dorada, Punta Cana
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="h-4 w-4" />
            +1 809 555 6789
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="h-4 w-4" />
            reservas@costaserena.com
          </span>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-slate-400">
        Demo generado con fines ilustrativos — no es un hotel real.
      </p>
    </footer>
  );
}

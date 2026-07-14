import { Scale, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-slate-400 sm:flex-row">
        <div className="flex items-center gap-2 text-white">
          <Scale className="h-5 w-5 text-amber-500" />
          <span className="font-semibold">Reyes &amp; Asociados</span>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm sm:flex-row sm:gap-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            Av. Winston Churchill 200, Santo Domingo
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="h-4 w-4" />
            +1 809 555 3344
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="h-4 w-4" />
            contacto@reyesasociados.com
          </span>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-slate-600">
        Demo generado con fines ilustrativos — no es un despacho real.
      </p>
    </footer>
  );
}

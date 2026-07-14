import { UtensilsCrossed, MapPin } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2 text-white">
          <UtensilsCrossed className="h-5 w-5 text-orange-500" />
          <span className="font-semibold">Sabor & Fuego</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <MapPin className="h-4 w-4" />
          Av. Principal 123, Santo Domingo
        </div>

        <div className="flex gap-4 text-gray-400">
          <FaInstagram className="h-5 w-5 hover:text-orange-500" />
          <FaFacebook className="h-5 w-5 hover:text-orange-500" />
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-gray-600">
        Demo generado con fines ilustrativos — no es un negocio real.
      </p>
    </footer>
  );
}

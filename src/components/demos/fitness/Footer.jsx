import { Dumbbell } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-neutral-400 sm:flex-row">
        <div className="flex items-center gap-2 text-white">
          <Dumbbell className="h-5 w-5 text-lime-400" />
          <span className="font-semibold">Pulso Gym</span>
        </div>

        <div className="flex items-center gap-4 text-lg">
          <a href="#" aria-label="Instagram" className="hover:text-lime-400">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-lime-400">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="TikTok" className="hover:text-lime-400">
            <FaTiktok />
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-neutral-600">
        Demo generado con fines ilustrativos — no es un gimnasio real.
      </p>
    </footer>
  );
}

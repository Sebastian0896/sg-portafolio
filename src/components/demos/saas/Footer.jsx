import { Layers } from "lucide-react";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-neutral-400 sm:flex-row">
        <div className="flex items-center gap-2 text-white">
          <Layers className="h-5 w-5 text-indigo-400" />
          <span className="font-semibold">Nimbus</span>
        </div>

        <div className="flex items-center gap-4 text-lg">
          <a href="#" aria-label="Twitter" className="hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-white">
            <FaGithub />
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-neutral-600">
        Demo generado con fines ilustrativos — no es un producto real.
      </p>
    </footer>
  );
}

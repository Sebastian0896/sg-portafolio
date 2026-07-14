import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-neutral-600 sm:flex-row">
        <span className="font-semibold text-neutral-900">Urbana Store</span>

        <div className="flex items-center gap-4 text-lg text-neutral-500">
          <a href="#" aria-label="Instagram" className="hover:text-fuchsia-600">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-fuchsia-600">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="TikTok" className="hover:text-fuchsia-600">
            <FaTiktok />
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-neutral-400">
        Demo generado con fines ilustrativos — no es una tienda real.
      </p>
    </footer>
  );
}

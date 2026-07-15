import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "18292845396";
const DEFAULT_MESSAGE = "Hola Sebastián, vi tu anuncio y me interesa tener una página web para mi negocio.";

export default function WhatsAppButton({ message = DEFAULT_MESSAGE, size = "default", className = "" }) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const sizeClasses = size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] font-semibold text-black transition hover:bg-[#1ebe5a] ${sizeClasses} ${className}`}
    >
      <FaWhatsapp className="h-5 w-5" />
      Escríbeme por WhatsApp
    </a>
  );
}

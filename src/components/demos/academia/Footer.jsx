import { GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-slate-600 sm:flex-row">
        <div className="flex items-center gap-2 text-slate-900">
          <GraduationCap className="h-5 w-5 text-violet-600" />
          <span className="font-semibold">Aprende+</span>
        </div>
        <span className="text-sm">contacto@aprendemas.com</span>
      </div>
      <p className="mt-6 text-center text-xs text-slate-400">
        Demo generado con fines ilustrativos — no es una academia real.
      </p>
    </footer>
  );
}

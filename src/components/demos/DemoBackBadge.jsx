import Link from "next/link";

export default function DemoBackBadge() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex h-8 items-center justify-center gap-2 bg-black text-xs text-white/70">
      <span className="hidden sm:inline">Demo — no es un sitio real</span>
      <Link href="/demos" className="font-medium text-white hover:text-emerald-400 transition-colors">
        ← Volver al portafolio
      </Link>
    </div>
  );
}

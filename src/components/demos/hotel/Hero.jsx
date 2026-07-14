import Image from "next/image";
import { CalendarDays, Users2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[90vh] items-center overflow-hidden bg-slate-900">
      <Image
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80"
        alt="Piscina y terraza del hotel Costa Serena frente al mar"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

      <div className="relative mx-auto w-full max-w-4xl px-6 text-center">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">Tu escape frente al mar</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          Habitaciones con vista al mar, piscina infinita y un servicio pensado para que no pienses en nada más.
        </p>

        <div className="mx-auto mt-8 grid max-w-2xl gap-3 rounded-2xl bg-white p-4 shadow-xl sm:grid-cols-4 sm:items-end">
          <div className="space-y-1 text-left">
            <Label className="flex items-center gap-1 text-xs text-slate-500">
              <CalendarDays className="h-3.5 w-3.5" /> Check-in
            </Label>
            <Input type="date" className="border-0 shadow-none focus-visible:ring-0" />
          </div>
          <div className="space-y-1 text-left">
            <Label className="flex items-center gap-1 text-xs text-slate-500">
              <CalendarDays className="h-3.5 w-3.5" /> Check-out
            </Label>
            <Input type="date" className="border-0 shadow-none focus-visible:ring-0" />
          </div>
          <div className="space-y-1 text-left">
            <Label className="flex items-center gap-1 text-xs text-slate-500">
              <Users2 className="h-3.5 w-3.5" /> Huéspedes
            </Label>
            <Input type="number" min="1" defaultValue="2" className="border-0 shadow-none focus-visible:ring-0" />
          </div>
          <a href="#habitaciones" className={cn(buttonVariants(), "w-full bg-amber-600 hover:bg-amber-700")}>
            Buscar
          </a>
        </div>
      </div>
    </section>
  );
}

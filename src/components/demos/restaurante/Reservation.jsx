"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  const [guests, setGuests] = useState("2");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="reservas" className="bg-black py-24">
      <div className="mx-auto max-w-xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Reservas</span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Reserva tu mesa</h2>
          <p className="mt-3 text-gray-400">Demo sin envío real — solo para mostrar la experiencia de reserva.</p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900 p-10 text-center">
            <CheckCircle2 className="h-10 w-10 text-orange-500" />
            <h3 className="text-xl font-semibold text-white">¡Reserva recibida!</h3>
            <p className="text-gray-400">Te contactaremos para confirmar tu mesa para {guests} personas.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-white/10 bg-neutral-900 p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-white">Nombre</Label>
                <Input id="nombre" required placeholder="Tu nombre" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefono" className="text-white">Teléfono</Label>
                <Input id="telefono" required placeholder="+1 809 000 0000" />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fecha" className="text-white">Fecha</Label>
                <Input id="fecha" type="date" required />
              </div>
              <div className="space-y-2">
                <Label className="text-white">Personas</Label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <SelectItem key={n} value={String(n)}>
                        {n} {n === 1 ? "persona" : "personas"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <button type="submit" className={cn(buttonVariants({ size: "lg" }), "w-full bg-orange-600 hover:bg-orange-700")}>
              Confirmar reserva
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

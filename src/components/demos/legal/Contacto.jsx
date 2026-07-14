"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const areas = ["Derecho Corporativo", "Litigios", "Derecho Inmobiliario", "Derecho Laboral", "Otro"];

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false);
  const [area, setArea] = useState(areas[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="bg-slate-900 py-24">
      <div className="mx-auto max-w-xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-500">Contacto</span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Solicita tu consulta gratuita</h2>
          <p className="mt-3 text-slate-400">Demo sin envío real — solo para mostrar la experiencia de contacto.</p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-10 text-center">
            <CheckCircle2 className="h-10 w-10 text-amber-700" />
            <h3 className="text-xl font-semibold text-slate-900">¡Solicitud enviada!</h3>
            <p className="text-slate-600">Un abogado especializado en {area.toLowerCase()} te contactará pronto.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl bg-white p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input id="nombre" required placeholder="Tu nombre" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono</Label>
                <Input id="telefono" required placeholder="+1 809 000 0000" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Área de interés</Label>
              <Select value={area} onValueChange={setArea}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {areas.map((a) => (
                    <SelectItem key={a} value={a}>
                      {a}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <button type="submit" className={cn(buttonVariants({ size: "lg" }), "w-full bg-amber-600 hover:bg-amber-500 text-slate-950")}>
              Enviar solicitud
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const especialidades = ["Cardiología", "Odontología", "Pediatría", "Neurología", "Oftalmología", "Traumatología"];

export default function Citas() {
  const [submitted, setSubmitted] = useState(false);
  const [especialidad, setEspecialidad] = useState(especialidades[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="citas" className="bg-sky-50 py-24">
      <div className="mx-auto max-w-xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">Citas</span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Agenda tu cita</h2>
          <p className="mt-3 text-slate-600">Demo sin envío real — solo para mostrar la experiencia de agendado.</p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-slate-200">
            <CheckCircle2 className="h-10 w-10 text-sky-600" />
            <h3 className="text-xl font-semibold text-slate-900">¡Cita agendada!</h3>
            <p className="text-slate-600">Te confirmaremos tu cita de {especialidad.toLowerCase()} por teléfono.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
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

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fecha">Fecha</Label>
                <Input id="fecha" type="date" required />
              </div>
              <div className="space-y-2">
                <Label>Especialidad</Label>
                <Select value={especialidad} onValueChange={setEspecialidad}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {especialidades.map((esp) => (
                      <SelectItem key={esp} value={esp}>
                        {esp}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <button type="submit" className={cn(buttonVariants({ size: "lg" }), "w-full bg-sky-600 hover:bg-sky-700")}>
              Confirmar cita
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

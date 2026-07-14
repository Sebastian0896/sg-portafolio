"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="bg-white py-24">
      <div className="mx-auto max-w-xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Contacto</span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Habla con un agente</h2>
          <p className="mt-3 text-slate-600">Demo sin envío real — solo para mostrar la experiencia de contacto.</p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-3 rounded-2xl bg-slate-50 p-10 text-center ring-1 ring-slate-200">
            <CheckCircle2 className="h-10 w-10 text-emerald-600" />
            <h3 className="text-xl font-semibold text-slate-900">¡Mensaje enviado!</h3>
            <p className="text-slate-600">Un agente se pondrá en contacto contigo a la brevedad.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-200">
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
              <Label htmlFor="mensaje">¿Qué propiedad te interesa?</Label>
              <Input id="mensaje" placeholder="Ej. Villa Los Jardines" />
            </div>
            <button type="submit" className={cn(buttonVariants({ size: "lg" }), "w-full bg-emerald-600 hover:bg-emerald-700")}>
              Enviar mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

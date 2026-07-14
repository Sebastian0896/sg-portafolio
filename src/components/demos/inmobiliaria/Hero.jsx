import Image from "next/image";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero({ query, setQuery, tipo, setTipo }) {
  return (
    <section id="inicio" className="relative flex min-h-[85vh] items-center overflow-hidden bg-slate-900">
      <Image
        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80"
        alt="Fachada de una propiedad residencial moderna"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />

      <div className="relative mx-auto w-full max-w-4xl px-6 text-center">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">Encuentra el hogar de tus sueños</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
          Casas, apartamentos y penthouses seleccionados por nuestros agentes inmobiliarios.
        </p>

        <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-xl sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-2 px-2">
            <Search className="h-4 w-4 text-slate-400" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ubicación o nombre de la propiedad"
              className="border-0 shadow-none focus-visible:ring-0"
            />
          </div>
          <Select value={tipo} onValueChange={setTipo}>
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Todos">Todos los tipos</SelectItem>
              <SelectItem value="Casa">Casa</SelectItem>
              <SelectItem value="Apartamento">Apartamento</SelectItem>
              <SelectItem value="Penthouse">Penthouse</SelectItem>
            </SelectContent>
          </Select>
          <a href="#propiedades" className={cn(buttonVariants(), "bg-emerald-600 hover:bg-emerald-700")}>
            Buscar
          </a>
        </div>
      </div>
    </section>
  );
}

import InmobiliariaApp from "@/components/demos/inmobiliaria/InmobiliariaApp";

export const metadata = {
  title: "Casa Nova — Demo inmobiliaria",
  description: "Demo de sitio inmobiliario: búsqueda de propiedades con filtros, fichas detalladas y contacto con agentes.",
  robots: { index: false, follow: false },
};

export default function InmobiliariaDemo() {
  return <InmobiliariaApp />;
}

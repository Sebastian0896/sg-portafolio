import Nav from "@/components/demos/legal/Nav";
import Hero from "@/components/demos/legal/Hero";
import Areas from "@/components/demos/legal/Areas";
import Equipo from "@/components/demos/legal/Equipo";
import Casos from "@/components/demos/legal/Casos";
import Contacto from "@/components/demos/legal/Contacto";
import Footer from "@/components/demos/legal/Footer";

export const metadata = {
  title: "Reyes & Asociados — Demo estudio legal",
  description: "Demo de sitio para despachos legales: áreas de práctica, equipo, casos de éxito y formulario de consulta.",
  robots: { index: false, follow: false },
};

export default function LegalDemo() {
  return (
    <>
      <Nav />
      <Hero />
      <Areas />
      <Equipo />
      <Casos />
      <Contacto />
      <Footer />
    </>
  );
}

import Nav from "@/components/demos/academia/Nav";
import Hero from "@/components/demos/academia/Hero";
import Cursos from "@/components/demos/academia/Cursos";
import Testimonios from "@/components/demos/academia/Testimonios";
import Footer from "@/components/demos/academia/Footer";

export const metadata = {
  title: "Aprende+ — Demo academia y cursos online",
  description: "Demo de plataforma educativa: catálogo de cursos filtrable por categoría y testimonios de estudiantes.",
  robots: { index: false, follow: false },
};

export default function AcademiaDemo() {
  return (
    <>
      <Nav />
      <Hero />
      <Cursos />
      <Testimonios />
      <Footer />
    </>
  );
}

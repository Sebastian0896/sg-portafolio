import Nav from "@/components/demos/hotel/Nav";
import Hero from "@/components/demos/hotel/Hero";
import Habitaciones from "@/components/demos/hotel/Habitaciones";
import Galeria from "@/components/demos/hotel/Galeria";
import Resenas from "@/components/demos/hotel/Resenas";
import Footer from "@/components/demos/hotel/Footer";

export const metadata = {
  title: "Costa Serena — Demo hotel y turismo",
  description: "Demo de sitio para hoteles: buscador de disponibilidad, habitaciones, galería y reseñas de huéspedes.",
  robots: { index: false, follow: false },
};

export default function HotelDemo() {
  return (
    <>
      <Nav />
      <Hero />
      <Habitaciones />
      <Galeria />
      <Resenas />
      <Footer />
    </>
  );
}

import Nav from "@/components/demos/restaurante/Nav";
import Hero from "@/components/demos/restaurante/Hero";
import Menu from "@/components/demos/restaurante/Menu";
import About from "@/components/demos/restaurante/About";
import Gallery from "@/components/demos/restaurante/Gallery";
import Reservation from "@/components/demos/restaurante/Reservation";
import Footer from "@/components/demos/restaurante/Footer";

export const metadata = {
  title: "Sabor & Fuego — Demo restaurante",
  description: "Demo de sitio web moderno para restaurantes: menú digital, reservas y galería.",
  robots: { index: false, follow: false },
};

export default function RestauranteDemo() {
  return (
    <>
      <Nav />
      <Hero />
      <Menu />
      <About />
      <Gallery />
      <Reservation />
      <Footer />
    </>
  );
}

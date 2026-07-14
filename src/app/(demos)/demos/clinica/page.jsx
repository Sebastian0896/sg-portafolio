import Nav from "@/components/demos/clinica/Nav";
import Hero from "@/components/demos/clinica/Hero";
import Especialidades from "@/components/demos/clinica/Especialidades";
import Especialistas from "@/components/demos/clinica/Especialistas";
import Testimonios from "@/components/demos/clinica/Testimonios";
import Citas from "@/components/demos/clinica/Citas";
import Footer from "@/components/demos/clinica/Footer";

export const metadata = {
  title: "Clínica Vitalis — Demo clínica de salud",
  description: "Demo de sitio web moderno para clínicas: especialidades, especialistas, testimonios y agenda de citas.",
  robots: { index: false, follow: false },
};

export default function ClinicaDemo() {
  return (
    <>
      <Nav />
      <Hero />
      <Especialidades />
      <Especialistas />
      <Testimonios />
      <Citas />
      <Footer />
    </>
  );
}

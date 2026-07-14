import Nav from "@/components/demos/fitness/Nav";
import Hero from "@/components/demos/fitness/Hero";
import Clases from "@/components/demos/fitness/Clases";
import Membresias from "@/components/demos/fitness/Membresias";
import Calculadora from "@/components/demos/fitness/Calculadora";
import Footer from "@/components/demos/fitness/Footer";

export const metadata = {
  title: "Pulso Gym — Demo gimnasio y fitness",
  description: "Demo de sitio para gimnasios: clases grupales, membresías y calculadora de IMC interactiva.",
  robots: { index: false, follow: false },
};

export default function FitnessDemo() {
  return (
    <>
      <Nav />
      <Hero />
      <Clases />
      <Membresias />
      <Calculadora />
      <Footer />
    </>
  );
}

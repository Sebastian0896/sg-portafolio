import Nav from "@/components/demos/saas/Nav";
import Hero from "@/components/demos/saas/Hero";
import Features from "@/components/demos/saas/Features";
import Pricing from "@/components/demos/saas/Pricing";
import Testimonios from "@/components/demos/saas/Testimonios";
import Footer from "@/components/demos/saas/Footer";

export const metadata = {
  title: "Nimbus — Demo SaaS / producto digital",
  description: "Demo de landing SaaS: features, pricing con toggle mensual/anual y testimonios de clientes.",
  robots: { index: false, follow: false },
};

export default function SaasDemo() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Pricing />
      <Testimonios />
      <Footer />
    </>
  );
}

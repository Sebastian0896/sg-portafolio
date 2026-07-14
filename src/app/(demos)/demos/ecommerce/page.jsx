import EcommerceApp from "@/components/demos/ecommerce/EcommerceApp";

export const metadata = {
  title: "Urbana Store — Demo tienda de moda",
  description: "Demo de e-commerce moderno: catálogo, carrito de compras y checkout simulado.",
  robots: { index: false, follow: false },
};

export default function EcommerceDemo() {
  return <EcommerceApp />;
}

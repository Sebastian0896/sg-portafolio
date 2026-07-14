import { Truck, RotateCcw, CreditCard, Headset } from "lucide-react";

const beneficios = [
  { icon: Truck, title: "Envío gratis", desc: "En compras mayores a $50 en toda la ciudad." },
  { icon: RotateCcw, title: "Devoluciones fáciles", desc: "30 días para cambios o devoluciones." },
  { icon: CreditCard, title: "Pago seguro", desc: "Aceptamos tarjetas y pagos contra entrega." },
  { icon: Headset, title: "Soporte real", desc: "Atención personalizada antes y después de tu compra." },
];

export default function Beneficios() {
  return (
    <section id="beneficios" className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.map((b) => (
            <div key={b.title} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-100">
                <b.icon className="h-5 w-5 text-fuchsia-600" />
              </div>
              <h3 className="font-semibold text-neutral-900">{b.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

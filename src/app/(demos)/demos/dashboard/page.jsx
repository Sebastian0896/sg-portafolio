import DashboardApp from "@/components/demos/dashboard/DashboardApp";

export const metadata = {
  title: "Metrik — Demo dashboard fintech / analytics",
  description: "Demo de panel de control con métricas en tiempo real simuladas, gráfica interactiva y transacciones.",
  robots: { index: false, follow: false },
};

export default function DashboardDemo() {
  return <DashboardApp />;
}

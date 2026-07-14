"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import StatCards from "./StatCards";
import RevenueChart from "./RevenueChart";
import TransactionsTable from "./TransactionsTable";
import Configuracion from "./Configuracion";

const viewMeta = {
  overview: { title: "Overview", subtitle: "Resumen de los últimos 12 meses" },
  analytics: { title: "Analytics", subtitle: "Ingresos por período" },
  transacciones: { title: "Transacciones", subtitle: "Todas tus transacciones recientes" },
  configuracion: { title: "Configuración", subtitle: "Preferencias de la cuenta (demo)" },
};

export default function DashboardApp() {
  const [view, setView] = useState("overview");
  const [search, setSearch] = useState("");

  return (
    <div className="flex min-h-screen bg-neutral-950 pt-8">
      <Sidebar active={view} onNavigate={setView} />
      <div className="min-w-0 flex-1">
        <Topbar
          title={viewMeta[view].title}
          subtitle={viewMeta[view].subtitle}
          search={search}
          onSearchChange={setSearch}
          showSearch={view === "overview" || view === "transacciones"}
        />

        {view === "overview" && (
          <>
            <StatCards />
            <div className="space-y-6 px-6 pb-10 lg:px-10">
              <RevenueChart />
              <TransactionsTable search={search} />
            </div>
          </>
        )}

        {view === "analytics" && (
          <>
            <StatCards />
            <div className="space-y-6 px-6 pb-10 lg:px-10">
              <RevenueChart />
            </div>
          </>
        )}

        {view === "transacciones" && (
          <div className="space-y-6 px-6 py-6 pb-10 lg:px-10">
            <TransactionsTable search={search} />
          </div>
        )}

        {view === "configuracion" && (
          <div className="space-y-6 px-6 py-6 pb-10 lg:px-10">
            <Configuracion />
          </div>
        )}
      </div>
    </div>
  );
}

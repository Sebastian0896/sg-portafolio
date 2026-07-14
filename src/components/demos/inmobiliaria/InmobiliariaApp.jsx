"use client";

import { useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Propiedades from "./Propiedades";
import PorQueElegirnos from "./PorQueElegirnos";
import Contacto from "./Contacto";
import Footer from "./Footer";

export default function InmobiliariaApp() {
  const [query, setQuery] = useState("");
  const [tipo, setTipo] = useState("Todos");

  return (
    <>
      <Nav />
      <Hero query={query} setQuery={setQuery} tipo={tipo} setTipo={setTipo} />
      <Propiedades query={query} tipo={tipo} />
      <PorQueElegirnos />
      <Contacto />
      <Footer />
    </>
  );
}

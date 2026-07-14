"use client";

import { useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Catalogo from "./Catalogo";
import Beneficios from "./Beneficios";
import Footer from "./Footer";

export default function EcommerceApp() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    if (qty < 1) {
      setCart((prev) => prev.filter((item) => item.id !== id));
      return;
    }
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, qty } : item)));
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <>
      <Nav cart={cart} updateQty={updateQty} removeItem={removeItem} total={total} count={count} />
      <Hero />
      <Catalogo onAdd={addToCart} />
      <Beneficios />
      <Footer />
    </>
  );
}

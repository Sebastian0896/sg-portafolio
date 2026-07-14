export const demos = [
  {
    slug: "restaurante",
    title: "Sabor & Fuego",
    market: "Restaurantes y gastronomía",
    description:
      "Menú digital con fotos, reservas online e integración de delivery para restaurantes y cafeterías.",
    accent: "from-orange-600 to-red-600",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
    tags: ["Reservas", "Menú digital", "Delivery"],
  },
  {
    slug: "clinica",
    title: "Clínica Vitalis",
    market: "Salud y clínicas privadas",
    description:
      "Landing con agenda de citas, especialistas y testimonios para consultorios médicos y dentales.",
    accent: "from-sky-600 to-cyan-600",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    tags: ["Agenda de citas", "Especialistas", "Testimonios"],
  },
  {
    slug: "ecommerce",
    title: "Urbana Store",
    market: "Retail y e-commerce",
    description:
      "Catálogo con filtros, carrito y checkout para tiendas de moda y retail pequeño o mediano.",
    accent: "from-fuchsia-600 to-pink-600",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    tags: ["Catálogo", "Carrito", "Checkout"],
  },
  {
    slug: "inmobiliaria",
    title: "Casa Nova",
    market: "Bienes raíces",
    description:
      "Listado de propiedades con filtros de precio/ubicación y ficha detallada para agentes inmobiliarios.",
    accent: "from-emerald-600 to-teal-600",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    tags: ["Propiedades", "Filtros", "Ficha detallada"],
  },
  {
    slug: "saas",
    title: "Nimbus",
    market: "SaaS y startups tech",
    description:
      "Landing de producto digital con pricing tiers y features, pensada para software B2B.",
    accent: "from-indigo-600 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Pricing", "Features", "B2B"],
  },
  {
    slug: "legal",
    title: "Reyes & Asociados",
    market: "Estudios legales y consultoría",
    description:
      "Diseño corporativo serio con áreas de práctica, equipo y formulario de contacto.",
    accent: "from-slate-700 to-zinc-800",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    tags: ["Áreas de práctica", "Equipo", "Contacto"],
  },
  {
    slug: "fitness",
    title: "Pulso Gym",
    market: "Gimnasios y fitness",
    description:
      "Landing con clases, planes de membresía y calculadora de rutina para gimnasios y entrenadores.",
    accent: "from-lime-600 to-green-600",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    tags: ["Clases", "Membresías", "Calculadora"],
  },
  {
    slug: "hotel",
    title: "Costa Serena",
    market: "Hoteles y turismo",
    description:
      "Buscador de disponibilidad, galería y reseñas para hoteles boutique y turismo.",
    accent: "from-amber-600 to-orange-500",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    tags: ["Disponibilidad", "Galería", "Reseñas"],
  },
  {
    slug: "academia",
    title: "Aprende+",
    market: "Educación y cursos online",
    description:
      "Catálogo de cursos con progreso y testimonios de alumnos para academias y coaching.",
    accent: "from-violet-600 to-purple-600",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    tags: ["Catálogo de cursos", "Progreso", "Testimonios"],
  },
  {
    slug: "dashboard",
    title: "Metrik",
    market: "Fintech y analytics",
    description:
      "Panel con gráficas y métricas en tiempo real (simuladas) en modo oscuro, para fintech y SaaS de datos.",
    accent: "from-cyan-600 to-blue-700",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Gráficas", "Métricas", "Dark mode"],
  },
];

export function getDemoBySlug(slug) {
  return demos.find((demo) => demo.slug === slug);
}

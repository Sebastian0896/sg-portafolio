"use client";

import Image from "next/image";
import { Star, PlayCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courses } from "@/lib/courses";

const categories = [
  { value: "todos", label: "Todos" },
  { value: "Diseño", label: "Diseño" },
  { value: "Programación", label: "Programación" },
  { value: "Negocios", label: "Negocios" },
];

function CourseGrid({ items }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => (
        <div key={c.id} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="relative h-44 w-full">
            <Image
              src={c.image}
              alt={c.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
              {c.category}
            </span>
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-slate-900">{c.title}</h3>
            <p className="mt-1 text-sm text-slate-500">Por {c.instructor}</p>

            <div className="mt-3 flex items-center gap-3 text-sm text-slate-500">
              <span className="flex items-center gap-1 text-amber-500">
                <Star className="h-4 w-4 fill-current" /> {c.rating}
              </span>
              <span className="flex items-center gap-1">
                <PlayCircle className="h-4 w-4" /> {c.lessons} lecciones
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold text-violet-700">${c.price}</span>
              <span className="text-xs text-slate-400">{c.students.toLocaleString()} estudiantes</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Cursos() {
  return (
    <section id="cursos" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-600">Cursos</span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Elige por dónde empezar</h2>
        </div>

        <Tabs defaultValue="todos">
          <TabsList className="mb-8 flex-wrap justify-center bg-slate-100">
            {categories.map((c) => (
              <TabsTrigger key={c.value} value={c.value}>
                {c.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((c) => (
            <TabsContent key={c.value} value={c.value}>
              <CourseGrid
                items={c.value === "todos" ? courses : courses.filter((course) => course.category === c.value)}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

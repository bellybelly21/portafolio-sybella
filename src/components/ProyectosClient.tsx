"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCards";

export default function ProyectosClient({ initialProyectos }: { initialProyectos: any[] }) {
  const [filtro, setFiltro] = useState("Todos");

  const categorias = ["Todos", "Experiencia laboral", "Diseño gráfico", "UX/UI", "Frontend", "Backend", "Fullstack", "SEO"];

  const proyectosFiltrados = filtro === "Todos" 
    ? initialProyectos 
    : initialProyectos.filter(p => 
        Array.isArray(p.categories) && 
        p.categories.some((cat: string) => 
          cat.trim().toLowerCase() === filtro.trim().toLowerCase()
        )
      );

  return (
    <>
      {/* Menú de filtros */}
      <div className="flex flex-wrap gap-4 mb-16">
        {categorias.map(cat => (
          <button
            key={cat}
            onClick={() => setFiltro(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              filtro === cat ? "bg-black text-white" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectosFiltrados.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </>
  );
}
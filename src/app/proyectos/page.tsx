import ProyectosClient from "@/components/ProyectosClient"
import { Metadata } from "next";
import { proyectosData } from "@/data/proyectos";
 
export const metadata: Metadata = {
    title: "Proyectos | Sybella Sandoval",
    description: "Explora mis proyectos recientes en desarrollo frontend y diseño de interfaces.",
};
 
export default function ProyectosPage() {
  return (
    <main className="bg-white w-full min-h-screen pt-35 md:pt-35 lg:pt-36 xl:pt-40 px-6 md:px-10 lg:px-31 xl:px-37 2xl:px-50 pb-30">
      <h1 className="text-black font-bold text-[clamp(3rem,9vw,16rem)] leading-[1.26] mb-12">
        Proyectos
      </h1>
      <ProyectosClient initialProyectos={proyectosData} />
    </main>
  );
}
import ProyectosClient from "@/components/ProyectosClient"
import { Metadata } from "next";
 
export const metadata: Metadata = {
    title: "Proyectos | Sybella Sandoval",
    description: "Explora mis proyectos recientes en desarrollo frontend y diseño de interfaces.",
};
 
export default function ProyectosPage() {
  const rawProyectos = [
    { 
      id: 1, 
      title: "Redefinición del ecosistema digital InGe!", 
      categories: ["Experiencia laboral", "Frontend"], 
      date: "Mar 2025 - Jul 2026", 
      tags: ["Experiencia laboral", "Frontend"], 
      logo: "/logo-empresa.png", 
      image: "/proyectos/1.jpg", 
      link: "/proyectos/redefinicion-ecosistema-inge" 
    },
    { 
      id: 2, 
      title: "Rediseño de mi portafolio profesional v3.0", 
      categories: ["Fullstack", "UX/UI", "SEO"],
      date: "Jul - Ago 2026", 
      tags: ["UX/UI", "Fullstack"], 
      logo: "/logo-empresa.png", 
      image: "/proyectos/2.jpg", 
      link: "/proyectos/rediseno-portafolio-sybella" 
    },
    {
      id: 3,
      title: "Recopilación de gráficas para redes sociales",
      categories: ["Diseño gráfico"],
      date: "Dic 2023 - Jul 2025",
      tags: ["Diseño gráfico"],
      logo: "/logo-empresa.png",
      image: "/proyectos/3.jpg",
      link: "/proyectos/graficas-rrss-arkenco"
    },

    {
      id: 4,
    title: "Rediseño web de Clínica Puerta del Sol",
    categories: ["UX/UI"],
    date: "Dic 2023 - Jul 2024",
    tags: ["UX/UI"],
    logo: "/logo-empresa.png",
    image: "/proyectos/4.jpg",
    link: "/proyectos/rediseno-web-puerta-del-sol"
  },
  {
    id: 5,
    title:"Recopilación webs y landing pages",
    categories: ["UX/UI"],
    date: "Ene 2024 - Jul 2025",
    tags: ["UX/UI"],
    logo: "/logo-empresa.png",
    image: "/proyectos/5.jpg",
    link: "/proyectos/recopilacion-webs-arkenco"
  },
  {
    id: 6,
    title: "Rediseño Landing Macrodent",
    categories: ["Diseño gráfico", "SEO"],
    date: "Sep 2024",
    tags: ["Diseño gráfico", "SEO"],
    logo: "/logo-empresa.png",
    image: "/proyectos/6.jpg",
    link: "/proyectos/rediseno-landing-macrodent"
  },
  {
    id: 7,
    title: "Rediseño Landing RDOX",
    categories: ["Diseño gráfico", "SEO"],
    date: "Ene 2025",
    tags: ["Diseño gráfico", "SEO"],
    logo: "/logo-empresa.png",
    image: "/proyectos/7.jpg",
    link: "/proyectos/rediseno-landing-rdox"
  }

  ];

  const proyectos = rawProyectos.map(p => {
    let categories = [...p.categories];
    if (categories.includes("Fullstack")) {
      if (!categories.includes("Frontend")) categories.push("Frontend");
      if (!categories.includes("Backend")) categories.push("Backend");
    }
    return { ...p, categories };
  });
 
  return (
    <main className="bg-white w-full min-h-screen pt-35 md:pt-35 lg:pt-36 xl:pt-40 px-6 md:px-10 lg:px-31 xl:px-37 2xl:px-50 pb-30">
      <h1 className="text-black font-bold text-[clamp(3rem,9vw,16rem)] leading-[1.26] mb-12">
        Proyectos
      </h1>
      <ProyectosClient initialProyectos={proyectos} />
    </main>
  );
}
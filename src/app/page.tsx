import { Metadata } from "next";
import MotionSection from "@/components/MotionSection"; 
import ProjectsCarousel from "@/components/ProjectsCarousel";
import { proyectosData } from "@/data/proyectos";
import AccordionItem from "@/components/AccordionItems";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/data/posts";
import { SplinePointer, Brush, CodeXml, Target } from "lucide-react";

const proyectosDestacados = proyectosData.slice(0, 5);

const pillars = [
  { Icon: SplinePointer, title: "UX/UI\nDesigner" },
  { Icon: Brush, title: "Graphic\nDesigner" },
  { Icon: CodeXml, title: "Frontend Dev\nto Fullstack" },
  { Icon: Target, title: "Performance\nEnthusiast" },
];

export const metadata: Metadata = {
  title: "Portafolio de Sybella Sandoval", 
  description: "Portafolio profesional de Sybella Sandoval Soto. Especialista en desarrollo frontend con React y TypeScript, diseño gráfico y diseño UX/UI.",
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      
      {/* Section herobanner  */}
      <section className="bg-hero-gradient w-full flex flex-col justify-around pt-35 md:pt-35 lg:pt-36 xl:pt-35 px-6 md:px-10 lg:px-31 xl:px-37 2xl:px-50 pb-30">
        
        {/* Título Principal */}
        <h1 className="flex gap-2 flex-col text-center md:text-start">
          <span className="font-regular text-gray text-[clamp(2rem,5vw,6rem)] leading-[1.56]">
            Mi nombre es
          </span>
          <span className="relative inline-block w-full pb-4 md:pb-14">
            <span className="text-black font-bold text-[clamp(3rem,9vw,16rem)] leading-[1.26] relative z-10 block text-center md:text-left">
              Sybella Sandoval
            </span>
          </span>
        </h1>

        {/* Hero Details */}
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between xl:mt-0 md:mt-10 mt-6 gap-12 lg:gap-30 xl:gap-20 w-full">
          <p className="font-regular text-gray text-[clamp(1rem,2vw,1.35rem)] text-center xl:text-left w-full xl:max-w-xl">
            Más allá de los píxeles y el código, mi identidad vive en los detalles: el vaivén del mar, un libro y la ruta en moto. Construyo experiencias digitales con la convicción de que, para conectar con la siguiente gran idea, primero hay que saber desconectar.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center xl:justify-between gap-8 w-full xl:w-auto">
            
            {/* Grupo Izquierdo */}
            <div className="flex flex-col gap-4">
              {pillars.slice(0, 2).map(({ Icon, title }) => (
                <div key={title} className="flex flex-row gap-4 items-center group cursor-default">
                  <Icon size={48} strokeWidth={1} className="text-black shrink-0 transition-transform duration-300 ease-out group-hover:scale-110" aria-hidden="true" />
                  <p className="text-[20px] leading-tight text-black transition-colors duration-300 group-hover:text-gray-700 whitespace-pre-line">
                    {title}
                  </p>
                </div>
              ))}
            </div>

            {/* Línea separadora */}
            <div className="hidden md:flex items-center justify-center py-2 md:py-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="144"
                viewBox="0 0 9 144"
                fill="none"
                className="shrink-0"
              >
                <path d="M4.5 1.00006C-0.166667 6.91673 -0.166667 12.8334 4.5 18.7501C9.16667 24.6667 9.16667 30.5834 4.5 36.5001C-0.166667 42.4167 -0.166667 48.3334 4.5 54.2501C9.16667 60.1667 9.16667 66.0834 4.5 72.0001C-0.166667 77.9167 -0.166667 83.8334 4.5 89.7501C9.16667 95.6667 9.16667 101.583 4.5 107.5C-0.166667 113.417 -0.166667 119.333 4.5 125.25C9.16667 131.167 9.16667 137.083 4.5 143" stroke="#C2C2C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Grupo Derecho */}
            <div className="flex flex-col gap-4">
              {pillars.slice(2, 4).map(({ Icon, title }) => (
                <div key={title} className="flex flex-row gap-4 items-center group cursor-default">
                  <Icon size={48} strokeWidth={1} className="text-black shrink-0 transition-transform duration-300 ease-out group-hover:scale-110" aria-hidden="true" />
                  <p className="text-[20px] leading-tight text-black transition-colors duration-300 group-hover:text-gray-700 whitespace-pre-line">
                    {title}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </section>

      {/* Section mis proyectos */}
      <section className="w-full flex flex-col justify-center bg-white pt-20 xl:pt-40 pb-20 px-6 md:px-10 lg:px-31 xl:px-37 2xl:px-50">
        <MotionSection className="w-full">
          <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <h2 className="mb-6 text-black font-bold text-[clamp(2rem,5vw,3.5rem)] leading-[1.26]">Mis proyectos recientes</h2>
              <p className="max-w-140 font-regular text-gray text-[clamp(1rem,2vw,1.35rem)]">
                Detrás de cada interfaz hay una historia de resolución de problemas. Conoce mi proceso de trabajo aquí.
              </p>
            </div>
            <Link 
              href="/proyectos" 
              className="mt-6 xl:mt-0 cursor-pointer py-2.5 px-4 bg-black text-white rounded-xs hover:bg-neutral-800 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white shadow-[0_2px_4.3px_0_rgba(107,107,107,0.15)] inline-block text-center"
            >
              Explorar más proyectos
            </Link>
          </div>

          <ProjectsCarousel proyectos={proyectosDestacados} />
        </MotionSection>
      </section>

      {/* Section mi perfil */}
      <section className="w-full flex flex-col justify-center px-6 md:px-10 lg:px-28 xl:px-35 2xl:px-50 pt-20 xl:pt-40 pb-20">
        <MotionSection className="w-full">
          <div className="mb-12 text-center flex-col flex justify-center items-center">
            <h2 className="text-black font-bold text-[clamp(2rem,5vw,3.5rem)] leading-[1.26] mb-4">
              Mi perfil unicornio
            </h2>
            <p className="text-gray max-w-2xl font-regular text-[clamp(1rem,2vw,1.35rem)]">
              Definirme es limitarme. En un mundo que exige especialización,<br/> yo elijo habitar los espacios intermedios.
            </p>
          </div>
          <AccordionItem /> 
        </MotionSection>
      </section>

      {/* Section blog */}
      <section className="w-full flex flex-col justify-center bg-white pt-20 xl:pt-40 pb-20 px-6 md:px-10 lg:px-31 xl:px-37 2xl:px-50">
        <MotionSection className="w-full">
          
          <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <h2 className="mb-6 text-black font-bold text-[clamp(2rem,5vw,3.5rem)] leading-[1.26]">Blog y notas</h2>
              <p className="max-w-160 font-regular text-gray text-[clamp(1rem,2vw,1.35rem)]">
                Aquí documento mis aprendizajes, auditorías y reflexiones.
              </p>
            </div>
            <Link 
              href="/blog" 
              className="mt-6 xl:mt-0 cursor-pointer py-2.5 px-4 bg-black text-white rounded-xs hover:bg-neutral-800 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white shadow-[0_2px_4.3px_0_rgba(107,107,107,0.15)] inline-block text-center"
            >
              Ir al Blog
            </Link>
          </div>

          <div className="w-full flex flex-col gap-6">
            {getAllPosts().slice(0, 3).map((post) => {
              const formattedDate = post.date
                ? new Date(post.date).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })
                : "";

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col md:flex-row gap-8 items-start bg-background p-4 md:p-8 rounded-sm transition-all duration-300 hover:bg-neutral-50"
                >
                  {post.thumbnail && (
                    <div className="relative w-full md:w-50 h-48 md:h-50 rounded-sm overflow-hidden bg-neutral-100 shrink-0">
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 200px"
                        loading="lazy"
                        className="object-contain group-hover:scale-102 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <div className="flex flex-col grow justify-between">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-black group-hover:text-gray transition-colors mb-3 leading-snug">
                        {post.title}
                      </h2>
                      <span className="text-xs font-semibold uppercase text-gray mb-2 block">
                        ARTÍCULO - {formattedDate}
                      </span>
                      <p className="text-gray text-base leading-relaxed line-clamp-2">
                        {post.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-black">
                      <span>Leer artículo</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </MotionSection>
      </section>

    </div>
  );
}
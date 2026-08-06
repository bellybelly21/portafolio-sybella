import {Metadata} from "next";
import TextEffect from "@/components/TextEffect";
import HeroDetails from "@/components/HeroDetails";
import MotionSection from "@/components/MotionSection"; 
import ProjectsCarousel from "@/components/ProjectsCarousel";
import AccordionItem from "@/components/AccordionItems";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Sybella Sandoval Soto", 
  description: "Portafolio profesional de Sybella Sandoval Soto. Especialista en desarrollo frontend con React y TypeScript, diseño gráfico y diseño UX/UI.",
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      
      {/* Section herobanner */}
      <section className="bg-hero-gradient w-full flex flex-col justify-around pt-35 md:pt-35 lg:pt-36 xl:pt-35 px-6 md:px-10 lg:px-31 xl:px-37 2xl:px-50 pb-30">
        <TextEffect />
        <HeroDetails />
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
            <button className="mt-6 xl:mt-0 cursor-pointer py-2.5 px-4 bg-black text-white rounded-xs hover:bg-neutral-800  transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white shadow-[0_2px_4.3px_0_rgba(107,107,107,0.15)]">
              Explorar más proyectos
            </button>
          </div>

          <ProjectsCarousel>
            <div className="min-w-full sm:min-w-109 h-100 bg-neutral-900 rounded-xl shrink-0 border p-6 flex flex-col justify-between shadow-lg snap-start">
              {/* Contenido de la card 1 */}
            </div>

            <div className="min-w-full sm:min-w-109 h-100 bg-neutral-900 rounded-xl shrink-0 border p-6 flex flex-col justify-between shadow-lg snap-start">
              {/* Contenido de la card 2 */}
            </div>

            <div className="min-w-full sm:min-w-109 h-100 bg-neutral-900 rounded-xl shrink-0 border p-6 flex flex-col justify-between shadow-lg snap-start">
              {/* Contenido de la card 3 */}
            </div>

            <div className="min-w-full sm:min-w-109 h-100 bg-neutral-900 rounded-xl shrink-0 border p-6 flex flex-col justify-between shadow-lg snap-start">
              {/* Contenido de la card 4 */}
            </div>
          </ProjectsCarousel>
        </MotionSection>

      </section>

      {/* Section mi perfil */}
      <section className="w-full flex flex-col justify-center px-6 md:px-10 lg:px-28 xl:px-35 2xl:px-50 pt-20 xl:pt-40 pb-20">
        <MotionSection className="w-full">
          
          <div className="mb-12 text-center flex-col flex justify-center items-center">
            <h2 className="text-black font-bold text-[clamp(2rem,5vw,3.5rem)] leading-[1.26] mb-4">
            Mi perfil unicornio
            </h2>
            <p className="text-gray max-w-2xl  font-regular text-[clamp(1rem,2vw,1.35rem)]">
            Definirme es limitarme. En un mundo que exige especialización,<br/> yo elijo habitar los espacios intermedios.
            </p>
          </div>
          <AccordionItem /> 

        </MotionSection>
      </section>

      {/* Section blog */}
<section className="w-full flex flex-col justify-center bg-white pt-20 xl:pt-40 pb-20 px-6 md:px-10 lg:px-31 xl:px-37 2xl:px-50">
  <MotionSection className="w-full">
    
    {/* Cabecera de la sección */}
    <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
      <div>
        <h2 className="mb-6 text-black font-bold text-[clamp(2rem,5vw,3.5rem)] leading-[1.26]">Blog y notas</h2>
        <p className="max-w-160 font-regular text-gray text-[clamp(1rem,2vw,1.35rem)]">
          Aquí documento mis aprendizajes, auditorías y reflexiones.
        </p>
      </div>
      <Link 
        href="/blog" 
        className="mt-6 xl:mt-0 cursor-pointer py-2.5 px-4 bg-black text-white rounded-xs hover:bg-neutral-800  transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white shadow-[0_2px_4.3px_0_rgba(107,107,107,0.15)] inline-block text-center"
      >
        Ir al Blog
      </Link>
    </div>

    {/* Listado de los últimos posts (máximo 3) */}
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
            {/* Imagen miniatura del post (si existe) */}
            {post.thumbnail && (
  <div className="w-full md:w-72 h-48 rounded-sm overflow-hidden bg-neutral-100 shrink-0">
    <img
      src={post.thumbnail}
      alt={post.title}
      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
    />
  </div>
)}

            {/* Información del Post */}
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
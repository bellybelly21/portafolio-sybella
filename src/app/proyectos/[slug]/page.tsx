import { notFound } from "next/navigation";
import Link from "next/link";
import { proyectosDetalle, Section } from "@/data/ProjectsDetails";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProyectoDetallePage({ params }: PageProps) {
  const { slug } = await params;
  const proyecto = proyectosDetalle[slug];

  if (!proyecto) return notFound();

  return (
    <main className="w-full min-h-screen pt-35 md:pt-36 xl:pt-40 px-6 md:px-10 lg:px-31 xl:px-37 2xl:px-50 pb-30">
      
      {/* SECCIÓN PRINCIPAL (HERO) - Proporción ~2/3 para el texto y 1/3 para la imagen en desktop */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-12 items-center mb-20 md:mb-32">
        
        {/* Columna de Texto e Información (Ocupa 2 columnas de 3 en desktop) */}
        <div className="flex flex-col xl:col-span-2">
          {/* Breadcrumb funcional */}
          <nav className="text-sm text-gray mb-4 flex items-center gap-2">
            <Link href="/proyectos" className="hover:text-black transition-colors">Proyectos</Link>
            <span>/</span>
            <span className="text-black truncate">{proyecto.title}</span>
          </nav>

          {/* Título principal */}
          <h1 className="text-black font-bold text-[clamp(2.5rem,4vw,4.5rem)] leading-[1.2] mb-6">
            {proyecto.title}
          </h1>
          
          {/* Categorías y fecha */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {proyecto.categories.map((cat) => (
              <span key={cat} className="px-3 py-1 bg-black text-white rounded-2xl text-xs font-medium">
                {cat}
              </span>
            ))}
            <span className="text-gray text-sm"> <span className="pl-2 pr-3">|</span>{proyecto.date}</span>
          </div>

          {/* Descripción general */}
          <p className="text-gray text-[16px] md:text-[18px] leading-relaxed mb-4">
            {proyecto.descripcion}
          </p>

          {/* Misión y Rol en estructura plana y limpia */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <h4 className="font-semibold text-black text-sm">Mi misión:</h4>
              <p className="text-gray text-[16px]">{proyecto.mission}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <h4 className="font-semibold text-black text-sm">Mi rol:</h4>
              <p className="text-gray text-[16px]">{proyecto.role}</p>
            </div>
          </div>
        </div>

        {/* Columna de la Imagen Principal */}
        <div>
          <img 
            src={proyecto.mainImage} 
            alt={proyecto.title} 
            className="w-full h-full object-cover rounded-sm" 
          />
        </div>
      </section>

      <div className="space-y-20 md:space-y-32">
        {proyecto.sections.map((section: Section, index: number) => {
          switch (section.type) {
            
            case "row-paragraphs-with-image":
              return (
                <div key={index} className="flex flex-col gap-6">
                  <h3 className="text-black font-bold text-2xl md:text-3xl">{section.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray text-[16px] md:text-[18px]">
                    <p>{section.p1}</p>
                    <p>{section.p2}</p>
                  </div>
                  {section.boldText && (
                    <p className="font-bold text-black text-[16px] md:text-[18px]">{section.boldText}</p>
                  )}
                  {section.image && (
                    <img src={section.image} alt={section.title} className="w-full rounded-xl mt-4 object-cover aspect-video" />
                  )}
                </div>
              );

            case "col-paragraphs-with-grid":
              return (
                <div key={index} className="flex flex-col gap-6">
                  <h3 className="text-black font-bold text-2xl md:text-3xl">{section.title}</h3>
                  <div className="flex flex-col gap-4 w-full text-gray text-[16px] md:text-[18px]">
                    <p>{section.p1}</p>
                    <p>{section.p2}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    {section.images?.map((img: string, i: number) => (
                      <img key={i} src={img} alt="" className="w-full rounded-xl object-cover" />
                    ))}
                  </div>
                </div>
              );

            case "col-paragraphs-with-list":
              return (
                <div key={index} className="flex flex-col gap-6">
                  <h3 className="text-black font-bold text-2xl md:text-3xl">{section.title}</h3>
                  <p className="text-gray text-[16px] md:text-[18px]">{section.p1}</p>
                  <ul className="list-disc pl-5 space-y-3 text-gray text-[16px] md:text-[18px]">
                    {section.items?.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              );

              case "col-paragraphs-simple":
              return (
                <div key={index} className="flex flex-col gap-6 w-full">
                  <h3 className="text-black font-bold text-2xl md:text-3xl">{section.title}</h3>
                  <p className="text-gray text-[16px] md:text-[18px]">{section.p1}</p>
                  <p className="text-gray text-[16px] md:text-[18px]">{section.p2}</p>
                  {section.boldText && (
                    <p className="font-bold text-black text-[16px] md:text-[18px]">{section.boldText}</p>
                  )}
                  </div>
                  );

                case "col-paragraphs-triple":
              return (
                <div key={index} className="flex flex-col gap-6">
                  <h3 className="text-black font-bold text-2xl md:text-3xl">{section.title}</h3>
                  <div className="flex flex-col gap-4 w-full text-gray text-[16px] md:text-[18px]">
                    <p>{section.p1}</p>
                    <p>{section.p2}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    {section.images?.map((img: string, i: number) => (
                      <img key={i} src={img} alt="" className="w-full rounded-sm object-cover max-h-125 object-top" />
                    ))}
                  </div>
                </div>
                                 
);

            default:
              return null;
          }
        })}
      </div>
    </main>
  );
}
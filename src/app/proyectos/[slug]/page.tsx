import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
      
      {/* SECCIÓN PRINCIPAL */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-12 items-center mb-20 md:mb-32">
        
        {/* Columna de Texto e Información */}
        <div className="flex flex-col xl:col-span-2">
          <nav className="text-sm text-gray mb-4 flex items-center gap-2">
            <Link href="/proyectos" className="hover:text-black transition-colors">Proyectos</Link>
            <span>/</span>
            <span className="text-black truncate">{proyecto.title}</span>
          </nav>

          <h1 className="text-black font-bold text-[clamp(2.5rem,4vw,4.5rem)] leading-[1.2] mb-6">
            {proyecto.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {proyecto.categories.map((cat) => (
              <span key={cat} className="px-3 py-1 bg-black text-white rounded-2xl text-xs font-medium">
                {cat}
              </span>
            ))}
            <span className="text-gray text-sm"> <span className="pl-2 pr-3">|</span>{proyecto.date}</span>
          </div>

          <p className="text-gray text-[16px] md:text-[18px] leading-relaxed mb-4">
            {proyecto.descripcion}
          </p>

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
        <div className="relative w-full h-100 xl:h-125">
          <Image 
            src={proyecto.mainImage} 
            alt={proyecto.title} 
            fill
            sizes="(max-width: 1280px) 100vw, 33vw"
            priority
            className="object-cover rounded-sm" 
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
                    <div className="relative w-full h-87.5 md:h-180 mt-4">
                      <Image 
                        src={section.image} 
                        alt={section.title} 
                        fill
                        sizes="100vw"
                        loading="lazy"
                        className="rounded-sm object-cover object-top" 
                      />
                    </div>
                  )}
                </div>
              );

            case "col-paragraphs-with-image":
              return (
                <div key={index} className="flex flex-col gap-6">
                  <h3 className="text-black font-bold text-2xl md:text-3xl">{section.title}</h3>
                  
                  <div className={`grid grid-cols-1 ${section.image ? "xl:grid-cols-2 xl:items-center" : ""} gap-8`}>
                    <div className="flex flex-col gap-6 text-gray text-[16px] md:text-[18px]">
                      <div className="grid grid-cols-1 gap-6">
                        <p>{section.p1}</p>
                        <p>{section.p2}</p>
                      </div>
                      {section.boldText && (
                        <p className="font-bold text-black text-[16px] md:text-[18px]">{section.boldText}</p>
                      )}
                    </div>

                    {section.image && (
                      <div className="relative w-full h-87.5 xl:max-h-95">
                        <Image 
                          src={section.image} 
                          alt={section.title} 
                          fill
                          sizes="(max-width: 1280px) 100vw, 50vw"
                          loading="lazy"
                          className="rounded-sm object-top xl:object-top object-cover" 
                        />
                      </div>
                    )}
                  </div>
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
                      <div key={i} className="relative w-full h-75 md:h-100">
                        <Image 
                          src={img} 
                          alt="" 
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          loading="lazy"
                          className="rounded-sm object-cover object-top" 
                        />
                      </div>
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
                      <div key={i} className="relative w-full h-100 max-h-125">
                        <Image 
                          src={img} 
                          alt="" 
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          loading="lazy"
                          className="rounded-sm object-cover object-top" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );

            case "graphic-gallery":
              return (
                <div key={index} className="flex flex-col gap-8 w-full">
                  <div className={`grid grid-cols-1 ${section.sectionImage ? "xl:grid-cols-2 xl:items-center" : ""} gap-8`}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-black font-bold text-2xl md:text-3xl">{section.title}</h3>
                      {section.p1 && <p className="text-gray text-[16px] md:text-[18px]">{section.p1}</p>}
                      {section.p2 && <p className="text-gray text-[16px] md:text-[18px]">{section.p2}</p>}
                      {section.boldText && <p className="text-black font-bold text-[16px] md:text-[18px]">{section.boldText}</p>}
                    </div>

                    {section.sectionImage && (
                      <div className="relative w-full h-87.5 max-h-95">
                        <Image 
                          src={section.sectionImage} 
                          alt={section.title} 
                          fill
                          sizes="(max-width: 1280px) 100vw, 50vw"
                          loading="lazy"
                          className="rounded-sm object-cover border border-gray-200" 
                        />
                      </div>
                    )}
                  </div>

                  {section.images && section.images.length > 0 && (
  <div className="flex flex-col gap-4 mt-4">
    <h3 className="text-black font-bold text-xl md:text-2xl">Posts</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {section.images.map((img: string, i: number) => (
        <div key={i} className="relative w-full aspect-4/5 overflow-hidden rounded-sm bg-gray-100 border border-gray-200">
          <Image 
            src={img} 
            alt={`${section.title} - ${i}`} 
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
            loading="lazy"
            className="object-cover hover:scale-102 transition-transform duration-300" 
          />
        </div>
      ))}
    </div>
  </div>
)}

                  {section.videos && section.videos.length > 0 && (
                    <div className="flex flex-col gap-4 mt-4">
                      <h3 className="text-black font-bold text-xl md:text-2xl">Reels y videos</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {section.videos.map((vid: { src: string; poster?: string }, i: number) => (
                          <div key={i} className="relative rounded-sm overflow-hidden bg-black aspect-9/16 shadow-sm">
                            <video 
                              src={vid.src} 
                              poster={vid.poster}
                              loop 
                              controls
                              muted 
                              playsInline 
                              preload="none"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
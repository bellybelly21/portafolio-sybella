"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Brush, SplinePointer, MonitorSmartphone, CodeXml, Target, LucideIcon } from "lucide-react";

interface ProfileItem {
  id: number;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  stackText: string;
  whatIDoText: string;
  truthText: string;
  projectTitle?: string;
  projectDescription?: string;
  projectImage?: string;
}

const profileItemsData: ProfileItem[] = [
  {
    id: 1,
    icon: Brush,
    title: "Diseño Gráfico",
    subtitle: "Producción de piezas gráficas versátiles para entornos digitales e impresos",
    stackText: "Adobe Suite (Photoshop, Illustrator, Lightroom, InDesign, Premiere), CapCut, Figma, Canva.",
    whatIDoText: "Producción versátil de piezas digitales e impresas. Desde redes sociales, fotomontajes y videos/reels, hasta material corporativo como lanyards, cards de acceso, pendones, libros y autoadhesivos.",
    truthText: "Uso Figma para vectores y para hacer gráficas que podría hacer en Photoshop; es una herramienta que adoro por su versatilidad. Canva es mi mejor aliado para tender puentes con equipos de marketing cuando el flujo nativo de Adobe se complica. Los logos no son mi especialidad ni lo que más disfruto, pero puedo resolverlos cuando la ocasión lo exige.",
    projectTitle: "Recopilación de gráficas para redes sociales",
    projectDescription: "Una serie de gráficas hechas mientras trabajé en Arkenco, una agencia de marketing digital.",
    projectImage: "/images/proyecto-arkenco-rrss.jpg",
  },
  {
    id: 2,
    icon: SplinePointer,
    title: "Diseño UX/UI",
    subtitle: "Construcción de experiencias digitales intuitivas centradas en el usuario",
    stackText: "Figma (mi hogar), Adobe XD, Framer, Hotjar, Miro, Maze.",
    whatIDoText: "Diseño de sitios web, landing pages y apps móviles. Y algo de espionaje a empresas de la competencia (más llamado benchmarking).",
    truthText: "Me obsesiona el pixel-perfect, las grillas y el uso correcto de auto-layout. Todo sitio que diseño lo veo como un producto: debe ser usable, amable y accesible (siempre chequeo contrastes). Aunque el UX puro no es mi fuerte, me guío por estándares web probados que aseguran que el diseño no solo se vea bien, sino que funcione como debe.",
    projectTitle: "Rediseño web de Clínica Puerta del Sol",
    projectDescription: "Modernización del sitio web completo más flujo de agendar horas.",
    projectImage: "/images/proyecto-uxui.jpg",
  },
  {
    id: 3,
    icon: MonitorSmartphone,
    title: "Desarrollo Frontend",
    subtitle: "Implementación de interfaces interactivas, accesibles y pixel-perfect",
    stackText: "HTML/CSS, JavaScript, TypeScript, React, Next.js, Vue.js.",
    whatIDoText: "Maquetación e implementación funcional. Pasar un diseño de Figma a la realidad es lo que más disfruto.",
    truthText: "Soy la pesadilla del desarrollador que 'destruye' diseños. Como diseñadora, respeto el trabajo visual y me aseguro de que el resultado final sea fiel al original. Si trabajo con otros diseñadores, aplico ese mismo respeto al código. Domino React y el ecosistema moderno; si el proyecto lo pide, puedo aprender lo que sea sin problema.",
    projectTitle: "Redefinición del ecosistema digital de InGe!",
    projectDescription: "Este proyecto es grande pero tiene su base en Frontend.",
    projectImage: "/images/proyecto-frontend.jpg",
  },
  {
    id: 4,
    icon: CodeXml,
    title: "Desarrollo Backend",
    subtitle: "Construcción de la lógica robusta del servidor y APIs escalables",
    stackText: "Stack MERN, Express, Node.js, Python, SQL (MySQL, PostgreSQL), NoSQL (MongoDB).",
    whatIDoText: "Diseño y desarrollo de arquitecturas backend escalables, modelado eficiente de bases de datos y orquestación de servicios mediante APIs seguras.",
    truthText: "Estoy siendo honesta: es el área donde me siento menos fuerte y estoy trabajando para cambiarlo. Actualmente estoy aprendiendo el stack MERN y Java desde cero para fortalecer mi lógica de servidor y dejar de ver esta parte como una debilidad.",
    projectTitle: "Rediseño de mi portafolio profesional v3.0",
    projectDescription: "Es exactamente lo que estás viendo ahora.",
    projectImage: "/images/proyecto-frontend.jpg",
  },
  {
    id: 5,
    icon: Target,
    title: "SEO & Performance",
    subtitle: "Optimización técnica integral para mejorar la visibilidad orgánica y el rendimiento",
    stackText: "Google Search Console, Lighthouse, SEMrush, Ahrefs, HubSpot, GA4, GTM.",
    whatIDoText: "Optimización técnica completa y auditorías de rendimiento.",
    truthText: "Me fascina. Quiero conocerlo todo: desde las etiquetas, schemas y RDFa, hasta la estrategia de contenido detrás de las palabras clave. Monitorear la carga de un sitio y entender la data para que sea más veloz y encuentre su lugar en el mundo digital es algo que me apasiona profundamente.",
    projectTitle: "Rediseño de mi portafolio profesional v3.0",
    projectDescription: "Es exactamente lo que estás viendo ahora.",
    projectImage: "/images/proyecto-frontend.jpg",
  },
];

interface AccordionItemProps {
  item: ProfileItem;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}

function AccordionItem({ item, isOpen, onToggle, isLast }: AccordionItemProps) {
  const Icon = item.icon;

  return (
    <div className={`w-full px-4 md:px-8 rounded-sm bg-white ${!isLast ? "border-b border-neutral-200" : ""}`}>
      {/* Cabecera */}
      <button
        onClick={onToggle}
        className="w-full py-6 flex flex-col md:flex-row md:items-center md:justify-between cursor-pointer group text-left transition-colors"
      >
        {/* Izquierda: Icono + Título */}
        <div className="flex items-center justify-between md:justify-start gap-4 w-full md:w-auto">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-neutral-100 text-black group-hover:bg-black group-hover:text-white transition-colors">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-black">{item.title}</h3>
          </div>
          {/* Chevron Mobile */}
          <div className="md:hidden text-black">
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          </div>
        </div>

        {/* Derecha: Subtítulo + Chevron Desktop */}
        <div className="mt-3 md:mt-0 flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
          <p className="text-gray text-sm md:text-base max-w-md">{item.subtitle}</p>
          <div className="hidden md:block text-black">
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          </div>
        </div>
      </button>

      {/* Contenido Desplegable */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-10 pt-3 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Columna 1: Textos */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                <div>
                  <h4 className="font-semibold text-black text-lg mb-2">Stack</h4>
                  <p className="text-gray text-base leading-relaxed">{item.stackText}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black text-lg mb-2">Lo que hago</h4>
                  <p className="text-gray text-base leading-relaxed">{item.whatIDoText}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black text-lg mb-2">Un poco de verdad</h4>
                  <p className="text-gray text-base leading-relaxed">{item.truthText}</p>
                </div>
              </div>

              {/* Columna 2: Proyecto Destacado */}
              <div className="lg:col-span-5 bg-black rounded-sm p-6 text-white border border-neutral-800 flex flex-col h-full">
                <h4 className="font-semibold text-white text-lg mb-5">Proyecto Destacado</h4>
                <div className="mb-5 overflow-hidden rounded-xl aspect-video bg-black w-full">
                  {item.projectImage ? (
                    <img
                      src={item.projectImage}
                      alt={item.projectTitle}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray text-sm">
                      Imagen en producción
                    </div>
                  )}
                </div>
                <div className="flex flex-col grow justify-end">
                  <h5 className="font-bold text-white text-xl mb-1.5">{item.projectTitle}</h5>
                  <p className="text-white text-sm leading-relaxed">{item.projectDescription}</p>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function UnicornProfileColumn() {
  // Estado para controlar cuál ID está abierto (null si todos están cerrados)
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    // Si ya está abierto, lo cerramos (null); si no, abrimos ese ID y cerramos el resto
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full flex flex-col">
      {profileItemsData.map((profileItem, index) => (
        <AccordionItem
          key={profileItem.id}
          item={profileItem}
          isOpen={openId === profileItem.id}
          onToggle={() => handleToggle(profileItem.id)}
          isLast={index === profileItemsData.length - 1}
        />
      ))}
    </div>
  );
}
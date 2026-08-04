"use client";

import { motion } from "framer-motion";
import { SplinePointer, Brush, CodeXml, Target } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const} },
};

const pillars = [
  { Icon: SplinePointer, title: "UX/UI\nDesigner" },
  { Icon: Brush, title: "Graphic\nDesigner" },
  { Icon: CodeXml, title: "Frontend Dev\nto Fullstack" },
  { Icon: Target, title: "Performance\nEnthusiast" },
];

export default function HeroDetails() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col xl:flex-row items-start xl:items-center justify-between xl:mt-0 md:mt-10 mt-6 gap-12 lg:gap-30 xl:gap-20 w-full"
    >
      <p className="font-regular text-gray text-[clamp(1rem,2vw,1.35rem)] text-center xl:text-left w-full xl:max-w-xl">
        Más allá de los píxeles y el código, mi identidad vive en los detalles: el vaivén del mar, un libro y la ruta en moto. Construyo experiencias digitales con la convicción de que, para conectar con la siguiente gran idea, primero hay que saber desconectar.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center xl:justify-between gap-8 w-full xl:w-auto">
        
        {/* Grupo Izquierdo */}
        <div className="flex flex-col gap-4">
          {pillars.slice(0, 2).map(({ Icon, title }) => (
            <motion.div key={title} variants={itemVariants} className="flex flex-row gap-4 items-center group cursor-default">
              <Icon size={48} strokeWidth={1} className="text-black shrink-0 transition-transform duration-300 ease-out group-hover:scale-110" aria-hidden="true" />
              <p className="text-[20px] leading-tight text-black transition-colors duration-300 group-hover:text-gray-700 whitespace-pre-line">
                {title}
              </p>
            </motion.div>
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
            <motion.div key={title} variants={itemVariants} className="flex flex-row gap-4 items-center group cursor-default">
              <Icon size={48} strokeWidth={1} className="text-black shrink-0 transition-transform duration-300 ease-out group-hover:scale-110" aria-hidden="true" />
              <p className="text-[20px] leading-tight text-black transition-colors duration-300 group-hover:text-gray-700 whitespace-pre-line">
                {title}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
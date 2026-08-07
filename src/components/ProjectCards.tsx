import Link from "next/link";
import { Project } from "@/data/proyectos";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <Link 
      href={project.link} 
      className={`group relative block w-full aspect-4/5 rounded-2xl overflow-hidden shadow-lg ${className}`}
    >
      {/* Imagen de fondo con efectos */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      
      {/* Degradado */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(102, 102, 102, 0.00) 0%, #000 100%)"
        }}
      />

      {/* Contenido */}
      <div className="absolute bottom-0 left-0 p-8 flex flex-col justify-end h-full z-10 w-full">
        {project.logo && (
          <img src={project.logo} alt="Logo empresa" className="max-h-23 w-auto mb-6 object-contain self-start" />
        )}
        <h3 className="text-white font-bold text-[clamp(1.25rem,2vw,1.5rem)] leading-tight mb-2">
          {project.title}
        </h3>
        <p className="text-neutral-300 text-sm mb-4">{project.date}</p>
        
        <div className="flex gap-2">
          {project.tags.slice(0, 2).map((t: string) => (
            <span key={t} className="px-3 py-1 bg-black rounded-2xl text-[14px] text-white">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
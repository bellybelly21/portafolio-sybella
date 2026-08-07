"use client";

import { useRef, useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCards";

interface ProjectsCarouselProps {
  proyectos: any[];
}

export default function ProjectsCarousel({ proyectos }: ProjectsCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const handleResize = () => checkScrollPosition();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [proyectos]);

  const scrollCarousel = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 460;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full flex items-center">
      <button 
        onClick={() => scrollCarousel("left")}
        aria-label="Anterior proyecto"
        className={`absolute -left-5 sm:-left-8 z-10 p-3 bg-white hover:bg-black hover:text-white text-black rounded-full transition-all duration-300 cursor-pointer shadow-lg border border-neutral-200 flex items-center justify-center ${
          showLeftArrow ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-95"
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
      </button>

      {/* Contenedor de cards */}
      <div 
        ref={scrollContainerRef}
        onScroll={checkScrollPosition}
        className="w-full mx-auto overflow-x-auto pb-6 pt-2 flex gap-6 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {proyectos.map((p) => (
          <ProjectCard 
            key={p.id} 
            project={p} 
            className="shrink-0 w-[320px] sm:w-95 snap-start" 
          />
        ))}
      </div>

      <button 
        onClick={() => scrollCarousel("right")}
        aria-label="Siguiente proyecto"
        className={`absolute -right-5 sm:-right-8 z-10 p-3 bg-white hover:bg-black hover:text-white text-black rounded-full transition-all duration-300 cursor-pointer shadow-lg border border-neutral-200 flex items-center justify-center ${
          showRightArrow ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-95"
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
      </button>
    </div>
  );
}
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from '@/assets/logo-sybella-sandoval.svg';
import { ArrowDownToLine, ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Sobre mí", href: "/sobre-mi" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Blog", href: "/blog" }
];

const customShadow = "shadow-[0_2px_4.3px_0_rgba(107,107,107,0.15)]";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Cerrar con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Enfocar primer link al abrir
  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector('a');
      firstLink?.focus();
    }
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    buttonRef.current?.focus();
  }, []);

  return (
    <header className="fixed top-8 left-0 right-0 z-50 w-full px-5 md:px-8 xl:px-30 2xl:px-48 lg:px-26">
      <nav
        aria-label="Navegación principal"
        className="relative flex items-center justify-between bg-white/80 backdrop-blur-lg rounded-2xl py-4 px-5 lg:py-6 lg:px-8"
      >
        {/* Logo con micro-interacción de cortina al pasar el mouse */}
<Link 
  href="/" 
  className="z-10 shrink-0 group inline-flex items-center gap-3"
  aria-label="Ir a la página de inicio"
  onClick={closeMenu}
>
  <Image 
    src={logo} 
    alt="Logo Sybella Sandoval" 
    draggable="false"
    width={82} 
    height={34} 
    priority
    sizes="82px"
    className="w-auto h-auto transition-transform duration-300 group-hover:scale-102"
  />

  {/* Contenedor del texto */}
  <div className="max-w-0 overflow-hidden opacity-0 whitespace-nowrap transition-all duration-500 ease-in-out group-hover:max-w-62.5 group-hover:opacity-100">
    <span className="text-sm md:text-base font-medium tracking-tight text-neutral-900">
      Sybella Sandoval Soto
    </span>
  </div>
</Link>

        <div className="flex items-center xl:gap-10">
          {/* Links Desktop con hover fluido */}
          <ul className="hidden xl:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name} className="relative py-1">
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-[18px] transition-colors duration-200 ${
                      isActive ? "text-black font-medium" : "text-neutral-600 hover:text-black"
                    }`}
                  >
                    {link.name}
                  </Link>
                  
                  {/* Indicador activo o animación de hover con Framer Motion */}
                  {isActive ? (
                    <motion.span 
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full" 
                      aria-hidden="true" 
                    />
                  ) : (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 hover:w-full" />
                  )}
                </li>
              );
            })}
          </ul>
          
          {/* Acciones */}
          <div className="flex items-center gap-4 z-10">
            {/* Botones Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                className={`flex items-center justify-center cursor-pointer py-2.5 px-4 bg-white border border-neutral-200 rounded-xs hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-300 active:scale-95 focus:outline-2 focus:outline-offset-2 focus:outline-black ${customShadow}`}
                aria-label="Descargar CV (PDF)" onClick={() => window.open('/CV_Sybella_Sandoval.pdf', '_blank')}
              >
                <span className="text-[18px] font-normal">Descargar CV</span>
                <ArrowDownToLine size={18} strokeWidth={2} className="text-black ml-2 transition-transform duration-300 hover:translate-y-0.5" aria-hidden="true" />
              </button>

              <button 
                className={`flex items-center justify-center cursor-pointer py-2.5 px-4 bg-black text-white rounded-xs hover:bg-neutral-800 transition-all duration-300 active:scale-95 focus:outline-2 focus:outline-offset-2 focus:outline-white ${customShadow}`}
                aria-label="Contactar con Sybella" 
                onClick={() => window.location.href = '/contacto'}
              >
                <span className="text-[18px] font-normal">Hablemos</span>
                <ArrowUpRight size={18} strokeWidth={2} className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </button>
            </div>

            {/* Botón Menú Móvil */}
            <button 
              ref={buttonRef}
              className="xl:hidden p-2 text-black cursor-pointer bg-neutral-100/80 rounded-xl hover:bg-neutral-200 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-black"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X size={24} strokeWidth={2} aria-hidden="true" />
              ) : (
                <Menu size={24} strokeWidth={2} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú Móvil Animado con AnimatePresence */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-label="Menú de navegación móvil"
            aria-modal="true"
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[110%] left-5 right-5 md:left-10 md:right-10 bg-white/95 backdrop-blur-xl border border-neutral-200/60 rounded-2xl p-6 xl:hidden flex flex-col gap-6 shadow-xl"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`block text-base p-3.5 rounded-xl transition-colors ${
                        isActive 
                          ? "bg-neutral-100 text-black font-bold" 
                          : "text-neutral-700 hover:bg-neutral-50 hover:text-black"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            
            {/* Botones móviles */}
            <div className="flex flex-col gap-3 pt-4 border-t border-neutral-100 md:hidden">
              <button 
                className={`flex items-center justify-center w-full py-3.5 bg-white border border-neutral-200 rounded-xl active:scale-98 transition-transform focus:outline-2 focus:outline-offset-2 focus:outline-black ${customShadow}`}
                aria-label="Descargar CV (PDF)" onClick={() => window.open('/CV_Sybella_Sandoval.pdf', '_blank')}
              >
                <span className="text-sm font-medium">Descargar CV</span>
                <ArrowDownToLine size={18} className="text-black ml-2" aria-hidden="true" />
              </button>
              <button 
                className={`flex items-center justify-center w-full py-3.5 bg-black text-white rounded-xl active:scale-98 transition-transform focus:outline-2 focus:outline-offset-2 focus:outline-white ${customShadow}`}
                aria-label="Contactar con Sybella" 
                onClick={() => window.location.href = '/contacto'}
              >
                <span className="text-sm font-medium">Hablemos</span>
                <ArrowUpRight size={18} className="ml-2" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
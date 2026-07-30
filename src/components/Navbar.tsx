"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from '@/assets/logo-sybella-sandoval.svg';
import { ArrowDownToLine, ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Blog", href: "/blog" },
  { name: "Sobre mí", href: "/sobre-mi" },
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
    <header className="fixed top-8 left-0 right-0 z-50 w-full px-5 md:px-10 xl:px-30 2xl:px-63.75">
      <nav
        aria-label="Navegación principal"
        className="relative flex items-center justify-between bg-white/70 backdrop-blur-[13.2px] rounded-2xl py-4 px-5 lg:py-6 lg:px-8"
      >
        {/* Logo */}
        <Link 
          href="/" 
          className="z-10 shrink-0"
          aria-label="Ir a la página de inicio"
          onClick={closeMenu}
        >
          <Image 
            src={logo} 
            alt="Logo Sybella Sandoval" 
            width={82} 
            height={34} 
            priority
            sizes="82px"
            className="w-auto h-auto"
          />
        </Link>

        <div className="flex items-center xl:gap-10">
          {/* Links Desktop */}
          <ul className="hidden xl:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name} className="relative">
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-[18px] transition-colors duration-200 focus:outline-2 focus:outline-offset-2 focus:outline-black ${
                      isActive ? "text-black font-medium" : "text-gray-700 hover:text-black"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {isActive && (
                    <span 
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full" 
                      aria-hidden="true" 
                    />
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
                className={`flex items-center justify-center py-2.5 px-4 bg-white border border-gray-200 rounded-xs hover:bg-gray-50 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-black ${customShadow}`}
                aria-label="Descargar CV (PDF)"
              >
                <span className="text-[18px] font-normal">Descargar CV</span>
                <ArrowDownToLine size={18} strokeWidth={2} className="text-black ml-2" aria-hidden="true" />
              </button>

              <button 
                className={`flex items-center justify-center py-2.5 px-4 bg-black text-white rounded-xs hover:bg-gray-900 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white ${customShadow}`}
                aria-label="Contactar con Sybella"
              >
                <span className="text-[18px] font-normal">Hablemos</span>
                <ArrowUpRight size={18} strokeWidth={2} className="ml-2" aria-hidden="true" />
              </button>
            </div>

            {/* Botón Menú Móvil */}
            <button 
              ref={buttonRef}
              className="xl:hidden p-2 text-black cursor-pointer bg-white/70 rounded-lg hover:bg-white transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-black"
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

      {/* Menú Móvil */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-label="Menú de navegación móvil"
          aria-modal="true"
          className="absolute top-[110%] left-5 right-5 md:left-10 md:right-10 bg-white/95 backdrop-blur-md rounded-2xl p-6 xl:hidden flex flex-col gap-6"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`block text-base p-3 rounded-xl transition-colors ${
                      isActive 
                        ? "bg-gray-100 text-black font-bold" 
                        : "text-gray-700 hover:bg-gray-50 hover:text-black"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          
          {/* Botones móviles */}
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-200 md:hidden">
            <button 
              className={`flex items-center justify-center w-full py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-2 focus:outline-offset-2 focus:outline-black ${customShadow}`}
              aria-label="Descargar CV (PDF)"
            >
              <span className="text-sm font-medium">Descargar CV</span>
              <ArrowDownToLine size={18} className="text-black ml-2" aria-hidden="true" />
            </button>
            <button 
              className={`flex items-center justify-center w-full py-3.5 bg-black text-white rounded-xl focus:outline-2 focus:outline-offset-2 focus:outline-white ${customShadow}`}
              aria-label="Contactar con Sybella"
            >
              <span className="text-sm font-medium">Hablemos</span>
              <ArrowUpRight size={18} className="ml-2" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
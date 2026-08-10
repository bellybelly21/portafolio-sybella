"use client";

import { ArrowUpRight } from "lucide-react";

// SVGs para redes sociales
const LinkedinSvg = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GithubSvg = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const BehanceSvg = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white px-6 md:px-8 xl:px-37 2xl:px-50 pt-20 pb-0">
      {/* Sección principal: Hablemos */}
      <div className="flex flex-col lg:flex-row justify-between lg:gap-16">
        <div className="lg:w-2/3">
          <a href="/contacto" aria-label="Ir a la página de contacto" className="flex items-center group text-center justify-center">
          <span className="text-[clamp(32px,9vw,161px)] font-bold leading-[1.26]">
  Hablemos
</span>
            <ArrowUpRight strokeWidth="1" size={80} className="ml-4 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
          </a>

          {/* Línea divisoria */}
          <div className="w-full h-px bg-whitegray mt-8 md:mt-16 mb-8 md:mb-16"></div>

          {/* Navegación y Redes */}
          <div className="flex flex-col gap-8 lg:flex-row lg:justify-between mb-16 md:mb-20">
          <nav className="flex flex-wrap gap-x-8 gap-y-4 text-lg justify-center xl:justify-start">
  {[
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Sobre mí', href: '/sobre-mi' },
    { label: 'Blog', href: '/blog' },
    { label: 'Descargar CV', href: '/CV_Sybella_Sandoval.pdf' } 
  ].map((link) => (
    <a 
      key={link.label} 
      href={link.href} 
      aria-label={`Ir a ${link.label}`}
      className="hover:text-neutral-200 transition-colors"
    >
      {link.label}
    </a>
  ))}
</nav>

            <div className="flex gap-4 justify-center">
              {[
                { Icon: LinkedinSvg, href: "https://linkedin.com/in/sybellasandoval", aria:"Ir al perfil de Linkedin" },
                { Icon: GithubSvg, href: "https://github.com/bellybelly21", aria:"Ir al perfil de Github" },
                { Icon: BehanceSvg, href: "https://behance.net/sybellasandoval", aria:"Ir al perfil de Behance" }
              ].map(({ Icon, href, aria }, i) => (
                <a key={i} href={href} target="_blank" aria-label={aria} rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-neutral-800 transition-colors">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Textos finales */}
          <div className="flex flex-col md:flex-row text-center md:justify-between pb-10 text-whitegray gap-4">
            <p className="text-[16px]">Sybella Sandoval - Portafolio</p>
            <p className="text-[16px]">© {currentYear}. Todos los derechos reservados.</p>
          </div>
        </div>

        {/* Imagen en columna derecha (Desktop) */}
        <div className="hidden lg:flex lg:w-1/3 justify-end pt-8">
          <img 
            src="/images/torre-footer-portafolio.webp" 
            alt="Torre de figuras decorativas" 
            className="w-43.75 h-full object-cover rounded-lg  pointer-events-none" 
          />
        </div>
        
        {/* Imagen en mobile/tablet */}
        <div className="lg:hidden pb-0 flex justify-center">
           <img src="/images/torre-footer-portafolio.webp" alt="Sybella" className="w-43.75 h-auto rounded-lg pointer-events-none" />
        </div>
      </div>
    </footer>
  );
}
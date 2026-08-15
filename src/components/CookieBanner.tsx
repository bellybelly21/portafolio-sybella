"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Retrasar la verificación para proteger el LCP y no competir por recursos
    const timer = setTimeout(() => {
      const cookieConsent = localStorage.getItem("cookie-consent");
      if (!cookieConsent) {
        setShowBanner(true);
      }
    }, 3000); // Aparece suavemente a los 3 segundos

    return () => clearTimeout(timer);
  }, []);

  const handleConsent = (action: "accept" | "reject") => {
    localStorage.setItem("cookie-consent", action);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 sm:left-6 sm:right-auto sm:bottom-6 z-50 max-w-sm md:w-full mx-auto animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="bg-white border border-neutral-200 shadow-xl rounded-sm p-4 flex flex-col gap-3">
        
        {/* Cabecera sutil con icono y texto */}
        <div className="flex items-start gap-3">
          <div className="p-2 bg-neutral-100 rounded-sm text-black shrink-0">
            <Cookie className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-semibold text-black mb-1">
              Privacidad y cookies
            </p>
            <p className="text-[11px] text-gray leading-relaxed">
              Este sitio usa cookies para garantizar la mejor experiencia de navegación y análisis de rendimiento.
            </p>
          </div>
        </div>

        {/* Botones de acción funcionales */}
        <div className="flex items-center justify-end gap-2 pt-1 border-t border-neutral-100">
          <button
            onClick={() => handleConsent("reject")}
            className="cursor-pointer px-3 py-1.5 text-[11px] font-medium text-neutral-600 hover:text-black transition-colors rounded-sm"
          >
            Rechazar
          </button>
          <button
            onClick={() => handleConsent("accept")}
            className="cursor-pointer px-3 py-1.5 text-[11px] font-medium bg-black text-white hover:bg-neutral-800 transition-colors rounded-sm"
          >
            Aceptar
          </button>
        </div>

      </div>
    </div>
  );
}
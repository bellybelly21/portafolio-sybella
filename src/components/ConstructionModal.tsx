"use client";

import { useState, useEffect } from "react";

export default function ConstructionModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Verificamos si el usuario ya vio el aviso en este navegador
    const hasSeenModal = localStorage.getItem("construction_modal_seen");
    if (!hasSeenModal) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Guardamos en el navegador para que no vuelva a aparecer
    localStorage.setItem("construction_modal_seen", "true");
  };

  if (!isOpen) return null;

  // Fecha actual formateada
  const currentDate = new Date().toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 md:p-8 shadow-2xl border border-neutral-100 text-center relative">
        
        {/* Icono decorativo o badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold mb-4">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          Sitio en desarrollo
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
          ¡Hola y bienvenido! 👋
        </h3>

        <p className="text-neutral-600 text-sm md:text-[15px] leading-relaxed mb-6">
          Este portafolio aún se encuentra en construcción y puliendo detalles finales. Gracias por pasarte por aquí.
        </p>

        {/* Fecha actual */}
        <div className="text-xs text-neutral-400 mb-6 font-medium">
          Actualizado al {currentDate}
        </div>

        {/* Botón de cierre */}
        <button
          onClick={handleClose}
          className="w-full py-3 px-4 bg-black text-white rounded-xl font-medium text-sm hover:bg-neutral-800 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
        >
          Entendido, explorar sitio
        </button>
      </div>
    </div>
  );
}
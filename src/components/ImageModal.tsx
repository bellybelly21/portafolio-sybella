"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageModalProps {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
  containerClassName?: string;
}

export default function ImageModal({
  src,
  alt,
  fill,
  sizes,
  className,
  containerClassName,
}: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const isDraggingRef = useRef(false);
  const modalRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Manejo del evento wheel con { passive: false } para evitar errores y controlar el zoom
  useEffect(() => {
    const element = modalRef.current;
    if (!element || !isOpen) return;

    const handleWheelNative = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY * -0.005;
      setScale((prev) => Math.min(Math.max(prev + delta, 1), 5));
    };

    element.addEventListener("wheel", handleWheelNative, { passive: false });
    return () => {
      element.removeEventListener("wheel", handleWheelNative);
    };
  }, [isOpen]);

  const handleOpen = () => {
    setScale(1);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setScale(1);
  };

  return (
    <>
      {/* Contenedor de la imagen */}
      <div
        onClick={handleOpen}
        className={`cursor-pointer ${containerClassName || ""}`}
      >
        <Image
          src={src}
          alt={alt}
          fill={fill}
          sizes={sizes}
          loading="lazy"
          className={className}
        />
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (!isDraggingRef.current) {
                handleClose();
              }
            }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center overflow-hidden select-none"
          >
            {/* Botón de cierre */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-5 right-5 z-50 w-11 h-11 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center text-xl font-light backdrop-blur-md transition-colors cursor-pointer"
              title="Cerrar"
            >
              ✕
            </button>


            <motion.div
              drag
              dragConstraints={{
                left: -180 * scale,
                right: 180 * scale,
                top: -180 * scale,
                bottom: 180 * scale,
              }}
              dragElastic={0.1}
              onDragStart={() => {
                isDraggingRef.current = true;
              }}
              onDragEnd={() => {
                setTimeout(() => {
                  isDraggingRef.current = false;
                }, 50);
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="relative w-full h-full flex items-center justify-center"
                style={{ scale }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <img
                  src={src}
                  alt={alt}
                  className="max-w-full max-h-[85vh] object-contain rounded-sm pointer-events-none shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
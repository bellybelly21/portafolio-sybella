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

  const touchStartDistRef = useRef<number | null>(null);
  const baseScaleRef = useRef<number>(1);

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

  // Manejo del evento wheel para PC
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


  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {

      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchStartDistRef.current = dist;
      baseScaleRef.current = scale;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchStartDistRef.current !== null) {

      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = dist / touchStartDistRef.current;
      const newScale = Math.min(Math.max(baseScaleRef.current * factor, 1), 5);
      setScale(newScale);
    }
  };

  const handleTouchEnd = () => {
    touchStartDistRef.current = null;
  };

  const lastTapRef = useRef<number>(0);
  const handleDoubleTap = () => {
    const now = Date.now();
    if (now - lastTapRef.current < 300) {
      setScale((prev) => (prev > 1 ? 1 : 2.5));
    }
    lastTapRef.current = now;
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
              drag={scale > 1} 
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
              className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing p-4 touch-none"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClickCapture={handleDoubleTap}
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
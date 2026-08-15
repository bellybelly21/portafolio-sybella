"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroName() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * -30;
        const rawY = (e.clientY / window.innerHeight - 0.5) * 20;
        const y = Math.max(0, rawY);
        setMousePosition({ x, y });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.h1 
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-2 flex-col text-center md:text-start"
    >
      <span className="font-regular text-gray text-[clamp(2rem,5vw,6rem)] leading-[1.56]">
        Mi nombre es
      </span>
      
      <span className="relative inline-block w-full pb-4 md:pb-14">
        <span className="text-black font-bold text-[clamp(3rem,9vw,16rem)] leading-[1.26] relative z-10 block text-center md:text-left">
          Sybella Sandoval
        </span>

        <span 
          className="text-effect font-bold text-[clamp(3rem,9vw,16rem)] leading-[1.26] absolute left-0 right-0 z-0 text-center md:text-left will-change-transform"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        >
          Sybella Sandoval
        </span>
      </span>
    </motion.h1>
  );
}
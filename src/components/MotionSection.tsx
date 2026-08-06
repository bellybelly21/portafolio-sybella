"use client";
import React from "react";
import { motion } from "framer-motion";

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function MotionSection({ children, className = "" }: MotionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: "-50px" }} 
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
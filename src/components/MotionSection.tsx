"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react"

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
}

export default function MotionSection({ children, className = "" }: MotionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
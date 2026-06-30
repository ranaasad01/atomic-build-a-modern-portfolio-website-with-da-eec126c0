"use client";

import { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useSpring(0, { stiffness: 200, damping: 20, mass: 0.5 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20, mass: 0.5 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    // Tilt: max ±10 degrees
    rotateX.set(((y - cy) / cy) * -10);
    rotateY.set(((x - cx) / cx) * 10);

    // Glow position as percentage
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    setGlowPos({ x: 50, y: 50 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Radial glow that follows cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(280px circle at ${glowPos.x}% ${glowPos.y}%, rgba(168,85,247,0.18) 0%, rgba(99,102,241,0.10) 40%, transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

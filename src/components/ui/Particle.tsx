import React from "react";
import { motion } from "motion/react";

export function Particle({
  x,
  y,
  size,
  delay,
}: {
  x: number;
  y: number;
  size: number;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-[radial-gradient(circle,rgba(0,201,177,0.6),transparent)] pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{ y: [0, -40, 0], opacity: [0.4, 1, 0.4] }}
      transition={{
        duration: 3 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

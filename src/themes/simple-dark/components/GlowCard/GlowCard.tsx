import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { cn } from "@/shared/utils/cn";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({
  children,
  className,
  glowColor = "rgba(245, 158, 11, 0.15)",
}: GlowCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const background = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, ${glowColor}, transparent 80%)`;

  return (
    <div
      className={cn(
        "group relative rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[rgba(26,26,36,0.6)] backdrop-blur-[8px] p-6 overflow-hidden transition-all",
        "hover:border-[var(--color-border-hover)]",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Amber glow spotlight overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[var(--radius-lg)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

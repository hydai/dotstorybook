import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { cn } from "@/shared/utils/cn";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(99, 102, 241, 0.15)",
}: SpotlightCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const background = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`;

  return (
    <div
      className={cn(
        "group relative rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-1)] p-6 overflow-hidden transition-colors hover:border-[var(--color-border-hover)]",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[var(--radius-lg)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

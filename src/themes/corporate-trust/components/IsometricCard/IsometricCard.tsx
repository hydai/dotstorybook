import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions, shadows } from "../../tokens";

interface IsometricCardProps {
  children: React.ReactNode;
  className?: string;
}

export function IsometricCard({ children, className }: IsometricCardProps) {
  return (
    <div style={{ perspective: "2000px" }}>
      <motion.div
        className={cn(
          "relative bg-white rounded-xl border border-slate-100 p-6",
          className
        )}
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(5deg) rotateY(-12deg)",
          boxShadow: shadows.card,
        }}
        whileHover={{
          rotateX: 2,
          rotateY: -6,
          y: -4,
        }}
        transition={transitions.smooth}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = shadows.hoverCard;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = shadows.card;
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

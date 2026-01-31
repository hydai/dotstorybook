import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";

interface AmbientBackgroundProps {
  className?: string;
  showNoise?: boolean;
  showGrid?: boolean;
  children?: React.ReactNode;
}

export function AmbientBackground({
  className,
  showNoise = true,
  showGrid = true,
  children,
}: AmbientBackgroundProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen overflow-hidden bg-[var(--color-surface-0)]",
        className
      )}
    >
      {/* Gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--color-gradient-start)] opacity-[0.07] blur-[120px]"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[var(--color-gradient-mid)] opacity-[0.05] blur-[120px]"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-[var(--color-gradient-end)] opacity-[0.04] blur-[120px]"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Noise overlay */}
      {showNoise && <div className="noise-overlay" />}

      {/* Grid overlay */}
      {showGrid && <div className="grid-overlay" />}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

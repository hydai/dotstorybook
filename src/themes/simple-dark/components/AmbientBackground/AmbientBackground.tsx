import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";

interface AmbientBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  grid?: boolean;
}

export function AmbientBackground({
  children,
  className,
  grid = false,
}: AmbientBackgroundProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-[var(--color-surface-0)]",
        className
      )}
    >
      {/* Radial gradient ambience at top */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(245, 158, 11, 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Ambient orb 1 */}
      <motion.div
        className="pointer-events-none absolute top-[15%] left-[10%] w-[300px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(245, 158, 11, 0.03) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Ambient orb 2 */}
      <motion.div
        className="pointer-events-none absolute top-[40%] right-[5%] w-[250px] h-[250px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(245, 158, 11, 0.04) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Ambient orb 3 */}
      <motion.div
        className="pointer-events-none absolute bottom-[20%] left-[30%] w-[200px] h-[200px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(245, 158, 11, 0.02) 0%, transparent 70%)",
          filter: "blur(150px)",
        }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid overlay */}
      {grid && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      )}

      {/* Noise overlay */}
      <div className="sd-noise-overlay" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

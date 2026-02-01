import React from "react";
import { cn } from "@/shared/utils/cn";

interface NeonGlowProps {
  children: React.ReactNode;
  color?: "magenta" | "cyan" | "orange" | "sunset";
  animated?: boolean;
  className?: string;
}

const colorConfig: Record<
  NonNullable<NeonGlowProps["color"]>,
  { border: string; glow: string; animation: string }
> = {
  magenta: {
    border: "border-[var(--color-accent)]",
    glow: "0 0 10px rgba(255, 0, 255, 0.4), 0 0 20px rgba(255, 0, 255, 0.2)",
    animation: "neon-pulse-magenta-vapor",
  },
  cyan: {
    border: "border-[var(--color-secondary)]",
    glow: "0 0 10px rgba(0, 255, 255, 0.4), 0 0 20px rgba(0, 255, 255, 0.2)",
    animation: "neon-pulse-cyan-vapor",
  },
  orange: {
    border: "border-[var(--color-tertiary)]",
    glow: "0 0 10px rgba(255, 153, 0, 0.4), 0 0 20px rgba(255, 153, 0, 0.2)",
    animation: "neon-pulse-orange-vapor",
  },
  sunset: {
    border: "border-transparent",
    glow: "0 0 10px rgba(255, 153, 0, 0.3), 0 0 10px rgba(255, 0, 255, 0.3), 0 0 10px rgba(0, 255, 255, 0.3)",
    animation: "neon-pulse-magenta-vapor",
  },
};

export function NeonGlow({
  children,
  color = "magenta",
  animated = true,
  className,
}: NeonGlowProps) {
  const config = colorConfig[color];

  return (
    <div
      className={cn("relative", className)}
      style={{
        boxShadow: config.glow,
        animation: animated
          ? `${config.animation} 2s ease-in-out infinite`
          : undefined,
      }}
    >
      <div
        className={cn("border-2 bg-[var(--color-surface-1)]", config.border)}
        style={
          color === "sunset"
            ? {
                borderImage:
                  "linear-gradient(135deg, #FF9900, #FF00FF, #00FFFF, #FF9900) 1",
              }
            : undefined
        }
      >
        {children}
      </div>
    </div>
  );
}

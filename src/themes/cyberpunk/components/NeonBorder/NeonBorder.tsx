import React from "react";
import { cn } from "@/shared/utils/cn";

interface NeonBorderProps {
  children: React.ReactNode;
  color?: "green" | "magenta" | "cyan" | "rainbow";
  animated?: boolean;
  className?: string;
}

const colorConfig: Record<
  NonNullable<NeonBorderProps["color"]>,
  { border: string; glow: string; animation: string }
> = {
  green: {
    border: "border-[var(--color-accent)]",
    glow: "0 0 10px rgba(0, 255, 136, 0.4), 0 0 20px rgba(0, 255, 136, 0.2)",
    animation: "neon-pulse",
  },
  magenta: {
    border: "border-[var(--color-secondary)]",
    glow: "0 0 10px rgba(255, 0, 255, 0.4), 0 0 20px rgba(255, 0, 255, 0.2)",
    animation: "neon-pulse-magenta",
  },
  cyan: {
    border: "border-[var(--color-tertiary)]",
    glow: "0 0 10px rgba(0, 212, 255, 0.4), 0 0 20px rgba(0, 212, 255, 0.2)",
    animation: "neon-pulse-cyan",
  },
  rainbow: {
    border: "border-transparent",
    glow: "0 0 10px rgba(0, 255, 136, 0.3), 0 0 10px rgba(255, 0, 255, 0.3), 0 0 10px rgba(0, 212, 255, 0.3)",
    animation: "neon-pulse",
  },
};

export function NeonBorder({
  children,
  color = "green",
  animated = true,
  className,
}: NeonBorderProps) {
  const config = colorConfig[color];

  return (
    <div
      className={cn("relative", className)}
      style={{
        boxShadow: config.glow,
        animation: animated ? `${config.animation} 2s ease-in-out infinite` : undefined,
      }}
    >
      <div
        className={cn(
          "border-2 bg-[var(--color-surface-1)] cyber-chamfer-md",
          config.border
        )}
        style={
          color === "rainbow"
            ? {
                borderImage:
                  "linear-gradient(135deg, #00ff88, #ff00ff, #00d4ff, #00ff88) 1",
              }
            : undefined
        }
      >
        {children}
      </div>
    </div>
  );
}

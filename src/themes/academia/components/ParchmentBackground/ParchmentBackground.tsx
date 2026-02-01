import React from "react";
import { cn } from "@/shared/utils/cn";

interface ParchmentBackgroundProps {
  className?: string;
  showPaper?: boolean;
  showVignette?: boolean;
  intensity?: "subtle" | "medium" | "dramatic";
  children?: React.ReactNode;
}

const intensityOpacity: Record<
  NonNullable<ParchmentBackgroundProps["intensity"]>,
  number
> = {
  subtle: 0.4,
  medium: 0.6,
  dramatic: 0.8,
};

export function ParchmentBackground({
  className,
  showPaper = true,
  showVignette = true,
  intensity = "subtle",
  children,
}: ParchmentBackgroundProps) {
  const vignetteOpacity = intensityOpacity[intensity];

  return (
    <div
      className={cn(
        "relative min-h-screen overflow-hidden bg-[var(--color-surface-0)]",
        className
      )}
    >
      {showPaper && <div className="academia-paper-overlay" />}

      {showVignette && (
        <div
          className="pointer-events-none fixed inset-0 z-30"
          style={{
            background: `radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, ${vignetteOpacity}) 100%)`,
            animation: "vignette-breathe 8s ease-in-out infinite",
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}

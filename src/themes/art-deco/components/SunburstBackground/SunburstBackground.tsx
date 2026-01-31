import React from "react";
import { cn } from "@/shared/utils/cn";

interface SunburstBackgroundProps {
  className?: string;
  showCrosshatch?: boolean;
  showSunburst?: boolean;
  intensity?: "subtle" | "medium" | "dramatic";
  children?: React.ReactNode;
}

const intensityOpacity: Record<
  NonNullable<SunburstBackgroundProps["intensity"]>,
  number
> = {
  subtle: 0.05,
  medium: 0.1,
  dramatic: 0.2,
};

export function SunburstBackground({
  className,
  showCrosshatch = true,
  showSunburst = true,
  intensity = "subtle",
  children,
}: SunburstBackgroundProps) {
  const opacity = intensityOpacity[intensity];

  return (
    <div
      className={cn(
        "relative min-h-screen overflow-hidden bg-[var(--color-surface-0)]",
        className
      )}
    >
      {/* Sunburst overlay */}
      {showSunburst && (
        <div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, transparent, rgba(212, 175, 55, ${opacity}), transparent, rgba(212, 175, 55, ${opacity}), transparent, rgba(212, 175, 55, ${opacity}), transparent, rgba(212, 175, 55, ${opacity}))`,
            animation: "sunburst-rotate 60s linear infinite",
          }}
        />
      )}

      {/* Crosshatch overlay */}
      {showCrosshatch && <div className="crosshatch-overlay" />}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

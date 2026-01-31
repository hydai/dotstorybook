import React from "react";
import { cn } from "@/shared/utils/cn";

interface CRTBackgroundProps {
  className?: string;
  showScanlines?: boolean;
  showFlicker?: boolean;
  showVignette?: boolean;
  children?: React.ReactNode;
}

export function CRTBackground({
  className,
  showScanlines = true,
  showFlicker = true,
  showVignette = true,
  children,
}: CRTBackgroundProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen overflow-hidden bg-[var(--color-surface-0)]",
        className
      )}
      style={showFlicker ? { animation: "flicker 4s infinite" } : undefined}
    >
      {/* Scanlines overlay */}
      {showScanlines && <div className="scanline-overlay" />}

      {/* Vignette */}
      {showVignette && (
        <div
          className="pointer-events-none fixed inset-0 z-40"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.6) 100%)",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

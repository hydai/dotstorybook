import React from "react";
import { cn } from "@/shared/utils/cn";
import { ScanlineOverlay } from "../ScanlineOverlay";

interface CircuitBackgroundProps {
  className?: string;
  density?: "normal" | "dense";
  showScanlines?: boolean;
  children?: React.ReactNode;
}

export function CircuitBackground({
  className,
  density = "normal",
  showScanlines = false,
  children,
}: CircuitBackgroundProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen overflow-hidden bg-[var(--color-surface-0)]",
        className
      )}
    >
      <div
        className={
          density === "dense"
            ? "circuit-grid-overlay-dense"
            : "circuit-grid-overlay"
        }
      />

      {showScanlines && <ScanlineOverlay />}

      <div className="relative z-10">{children}</div>
    </div>
  );
}

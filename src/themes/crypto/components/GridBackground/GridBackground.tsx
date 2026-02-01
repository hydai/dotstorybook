import React from "react";
import { cn } from "@/shared/utils/cn";

interface GridBackgroundProps {
  children: React.ReactNode;
  className?: string;
  density?: "normal" | "dense";
  showGlow?: boolean;
}

export function GridBackground({
  children,
  className,
  density = "normal",
  showGlow = false,
}: GridBackgroundProps) {
  const gridClass =
    density === "dense"
      ? "crypto-grid-overlay-dense"
      : "crypto-grid-overlay";

  return (
    <div className={cn("relative min-h-screen bg-[var(--color-surface-0)]", className)}>
      <div className={gridClass} />
      {showGlow && (
        <div
          className="pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(247, 147, 26, 0.4) 0%, transparent 70%)",
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

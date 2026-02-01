import React from "react";
import { cn } from "@/shared/utils/cn";

interface PerspectiveGridProps {
  className?: string;
  color?: "mixed" | "cyan" | "magenta";
  animated?: boolean;
  children?: React.ReactNode;
}

const colorClasses: Record<
  NonNullable<PerspectiveGridProps["color"]>,
  string
> = {
  mixed: "vapor-perspective-grid",
  cyan: "vapor-perspective-grid-cyan",
  magenta: "vapor-perspective-grid-magenta",
};

export function PerspectiveGrid({
  className,
  color = "mixed",
  animated = true,
  children,
}: PerspectiveGridProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[var(--color-surface-0)]",
        className
      )}
    >
      <div
        className={cn(
          colorClasses[color],
          !animated && "vapor-perspective-grid-static"
        )}
      />
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

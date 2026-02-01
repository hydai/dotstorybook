import React from "react";
import { cn } from "@/shared/utils/cn";

interface DotGridProps {
  children?: React.ReactNode;
  variant?: "default" | "dense" | "colorful";
  className?: string;
}

const variantClasses: Record<NonNullable<DotGridProps["variant"]>, string> = {
  default: "pg-dot-grid-overlay",
  dense: "pg-dot-grid-overlay-dense",
  colorful: "pg-dot-grid-overlay-colorful",
};

export function DotGrid({
  children,
  variant = "default",
  className,
}: DotGridProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "absolute inset-0 opacity-30",
          variantClasses[variant],
        )}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

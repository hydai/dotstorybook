import React from "react";
import { cn } from "@/shared/utils/cn";

interface DiamondFrameProps {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  glow?: boolean;
  borderWidth?: 1 | 2 | 3;
  className?: string;
}

const sizeStyles: Record<NonNullable<DiamondFrameProps["size"]>, string> = {
  sm: "w-12 h-12",
  md: "w-20 h-20",
  lg: "w-30 h-30",
};

const innerSizeStyles: Record<NonNullable<DiamondFrameProps["size"]>, string> =
  {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-30 h-30",
  };

export function DiamondFrame({
  children,
  size = "md",
  glow = false,
  borderWidth = 2,
  className,
}: DiamondFrameProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rotate-45 border-[var(--color-accent)]",
        sizeStyles[size],
        borderWidth === 1 && "border",
        borderWidth === 2 && "border-2",
        borderWidth === 3 && "border-[3px]",
        className
      )}
      style={
        glow
          ? {
              boxShadow:
                "0 0 10px rgba(212, 175, 55, 0.4), 0 0 20px rgba(212, 175, 55, 0.2)",
            }
          : undefined
      }
    >
      <div
        className={cn(
          "-rotate-45 flex items-center justify-center text-[var(--color-accent)]",
          innerSizeStyles[size]
        )}
      >
        {children}
      </div>
    </div>
  );
}

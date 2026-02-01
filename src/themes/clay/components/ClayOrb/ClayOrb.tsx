import React from "react";
import { cn } from "@/shared/utils/cn";
import { shadows } from "../../tokens";

interface ClayOrbProps {
  color?: "violet" | "pink" | "sky" | "emerald" | "amber";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
  breathe?: boolean;
}

const colorGradients: Record<NonNullable<ClayOrbProps["color"]>, string> = {
  violet: "bg-gradient-to-br from-[#C4B5FD] to-[#7C3AED]",
  pink: "bg-gradient-to-br from-[#F9A8D4] to-[#DB2777]",
  sky: "bg-gradient-to-br from-[#7DD3FC] to-[#0EA5E9]",
  emerald: "bg-gradient-to-br from-[#6EE7B7] to-[#10B981]",
  amber: "bg-gradient-to-br from-[#FDE68A] to-[#F59E0B]",
};

const sizeStyles: Record<NonNullable<ClayOrbProps["size"]>, string> = {
  sm: "w-16 h-16 text-lg",
  md: "w-24 h-24 text-2xl",
  lg: "w-32 h-32 text-3xl",
};

export function ClayOrb({
  color = "violet",
  size = "md",
  children,
  className,
  breathe = true,
}: ClayOrbProps) {
  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center text-white font-bold font-[var(--font-heading)]",
        colorGradients[color],
        sizeStyles[size],
        className
      )}
      style={{
        boxShadow: shadows.clayButton,
        animation: breathe
          ? "clay-breathe 6s ease-in-out infinite"
          : undefined,
      }}
    >
      {children}
    </div>
  );
}

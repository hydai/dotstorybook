import React from "react";
import { cn } from "@/shared/utils/cn";
import { shadows, borderColors } from "../../tokens";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "new" | "hot" | "success" | "warning";
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-[#C0C0C0] text-black",
  new: "bg-[#FF0000] text-white",
  hot: "bg-[#FFFF00] text-black",
  success: "bg-[#008000] text-white",
  warning: "bg-[#FF8800] text-black",
};

const animatedVariants = new Set(["new", "hot"]);

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const isAnimated = animatedVariants.has(variant);

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider",
        "font-[var(--font-body)]",
        "border-2 border-solid",
        variantStyles[variant],
        className
      )}
      style={{
        boxShadow: shadows.outset,
        borderColor: borderColors.outset,
        borderRadius: 0,
        animation: isAnimated
          ? "retro-pulse-glow 1.5s ease-in-out infinite"
          : undefined,
      }}
    >
      {children}
    </span>
  );
}

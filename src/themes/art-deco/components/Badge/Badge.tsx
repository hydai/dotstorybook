import React from "react";
import { cn } from "@/shared/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "midnight" | "outline";
  className?: string;
  glow?: boolean;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  gold: "bg-[var(--color-accent)] text-[var(--color-text-inverse)]",
  midnight:
    "bg-[var(--color-secondary)] text-[var(--color-text-primary)]",
  outline:
    "bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)]",
};

export function Badge({
  children,
  variant = "gold",
  className,
  glow = false,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors",
        variantStyles[variant],
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
      {children}
    </span>
  );
}

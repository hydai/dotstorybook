import React from "react";
import { cn } from "@/shared/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "accent" | "outline";
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-[var(--color-accent)] text-[var(--color-text-inverse)]",
  secondary: "bg-[var(--color-secondary)] text-[var(--color-text-inverse)]",
  accent: "bg-[var(--color-surface-3)] text-[var(--color-text-primary)]",
  outline:
    "bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)]",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center px-3.5 py-1 text-xs font-semibold rounded-full transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

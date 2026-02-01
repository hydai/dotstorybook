import React from "react";
import { cn } from "@/shared/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "dark" | "outline" | "muted";
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  gold: "bg-[var(--color-accent)] text-[var(--color-text-inverse)]",
  dark: "bg-[var(--color-secondary)] text-[var(--color-text-inverse)]",
  outline:
    "bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)]",
  muted: "bg-[var(--color-surface-3)] text-[var(--color-text-secondary)]",
};

export function Badge({
  children,
  variant = "gold",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center px-3 py-1",
        "text-[10px] font-medium uppercase tracking-[0.15em] font-[var(--font-mono)]",
        "transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

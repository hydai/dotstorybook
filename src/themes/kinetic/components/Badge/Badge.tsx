import React from "react";
import { cn } from "@/shared/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "muted" | "outline";
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  accent:
    "bg-[var(--color-accent)] text-[var(--color-text-inverse)] border-2 border-[var(--color-accent)]",
  muted:
    "bg-[var(--color-surface-3)] text-[var(--color-text-secondary)] border-2 border-[var(--color-surface-3)]",
  outline:
    "bg-transparent text-[var(--color-text-primary)] border-2 border-[var(--color-border)]",
};

export function Badge({
  children,
  variant = "accent",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-widest transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

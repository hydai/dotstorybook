import React from "react";
import { cn } from "@/shared/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "muted" | "outline";
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  accent:
    "bg-[var(--color-accent)] text-[var(--color-text-inverse)]",
  muted:
    "bg-[var(--color-surface-2)] text-[var(--color-text-secondary)]",
  outline:
    "bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)]",
};

export function Badge({
  children,
  variant = "accent",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

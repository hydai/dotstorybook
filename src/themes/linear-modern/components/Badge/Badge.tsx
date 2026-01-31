import React from "react";
import { cn } from "@/shared/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default:
    "bg-[var(--color-surface-2)] text-[var(--color-text-secondary)] border-[var(--color-border)]",
  accent:
    "bg-[var(--color-accent-muted)] text-[var(--color-accent-hover)] border-[var(--color-border-accent)]",
  outline:
    "bg-transparent text-[var(--color-text-secondary)] border-[var(--color-border-hover)]",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-[var(--radius-full)] border px-2.5 py-0.5 text-xs font-medium transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
